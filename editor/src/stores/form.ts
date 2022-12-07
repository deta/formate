import type { Form } from '../types';
import { writable, get, derived } from 'svelte/store';
import { nanoid } from 'nanoid';
import produce from 'immer';
import { GET, POST, DELETE, PUT } from '../utils';

// Current form key
export const formKey = writable<string>();

// Current opened form
export const form = writable<Form>();

// Current selected question
export const selectedQuestion = writable<string>();

// Current selected question index
export const selectedQuestionIndex = derived([selectedQuestion, form], ([questionKey, form]) => {
    return form.questions.findIndex((question) => question.key === questionKey);
});

// Send updates to the server
form.subscribe((value) => {
    if (value?.key) PUT(`/api/forms/${value.key}`, value);
});

/**
 * Add new question
 */
export function addQuestion() {
    const questionKey = nanoid();

    form.update(produce((draft) => {
        draft.questions.push({
            key: questionKey,
            question: `New question #${draft.questions.length}`,
            description: `You can put question description here.`,
            fields: []
        });

        selectedQuestion.set(questionKey);
    }));
}

/**
 * Remove question
 */
 export function deleteQuestion(key: string) {
    form.update(produce((draft) => {
        draft.questions = draft.questions.filter((question) => question.key !== key);
        if (get(selectedQuestion) === key) selectedQuestion.set(draft.questions.at(-1).key);
    }));   
}

/**
 * Add new field
 * @param type Field type
 */
export function addField(type: string) {
    form.update(produce((draft) => {
        const questionIndex = get(selectedQuestionIndex);
        draft.questions[questionIndex].fields.push({ type });
    }));  
}
