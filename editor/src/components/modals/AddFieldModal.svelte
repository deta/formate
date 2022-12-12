<script lang="ts">
    import { addField, form, selectedScreen } from '../../stores/form';
    import { currentPage, hideAllModals } from '../../stores/ui';
    import Calendar from '../icons/Calendar.svelte';
    import Checkbox from '../icons/Checkbox.svelte';
    import Clock from '../icons/Clock.svelte';
    import Cursor from '../icons/Cursor.svelte';
    import Link from '../icons/Link.svelte';
    import ListCheck from '../icons/ListCheck.svelte';
    import Mail from '../icons/Mail.svelte';
    import Paragraph from '../icons/Paragraph.svelte';
    import Phone from '../icons/Phone.svelte';
    import Selector from '../icons/Selector.svelte';
    import SortNumbers from '../icons/SortNumbers.svelte';
    import TrashBin from '../icons/TrashBin.svelte';
    import Modal from '../Modal.svelte';

    function selectField(type: string) {
        addField(type);
        hideAllModals();
    }

</script>

<Modal title="Add field" paddings={false}>
    <div class="fields">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="field" on:click={() => selectField('Short text')}>
            <div class="icon">
                <Cursor />
            </div>
            <div>
                <h3>Short Text</h3>
                <p>Small text input for less than 100 symbols. Perfect for names.</p>
            </div>
        </div>

        <div class="field">
            <div class="icon">
                <Paragraph />
            </div>
            <div>
                <h3>Long Text</h3>
                <p>Big text input without symbols count limit. Perfect for descriptions.</p>
            </div>
        </div>

        <div class="field">
            <div class="icon">
                <SortNumbers />
            </div>
            <div>
                <h3>Number</h3>
                <p>Input for numbers.</p>
            </div>
        </div>

        <div class="field">
            <div class="icon">
                <Checkbox />
            </div>
            <div>
                <h3>Checkbox</h3>
                <p>Input for true / false value.</p>
            </div>
        </div>

        <div class="field">
            <div class="icon">
                <Selector />
            </div>
            <div>
                <h3>Dropdown</h3>
                <p>Input for selection on of the predefined results.</p>
            </div>
        </div>

        <div class="field">
            <div class="icon">
                <ListCheck />
            </div>
            <div>
                <h3>Select</h3>
                <p>Input for selection one or multiple values.</p>
            </div>
        </div>

        <div class="field">
            <div class="icon">
                <Mail />
            </div>
            <div>
                <h3>Email</h3>
                <p>Email input</p>
            </div>
        </div>

        <div class="field">
            <div class="icon">
                <Phone />
            </div>
            <div>
                <h3>Phone Number</h3>
                <p>Input for phone numbers</p>
            </div>
        </div>

        <div class="field">
            <div class="icon">
                <Link />
            </div>
            <div>
                <h3>Link</h3>
                <p>Input for HTTP links.</p>
            </div>
        </div>

        <div class="field">
            <div class="icon">
                <Calendar />
            </div>
            <div>
                <h3>Date</h3>
                <p>Input for date picking.</p>
            </div>
        </div>

        <div class="field">
            <div class="icon">
                <Clock />
            </div>
            <div>
                <h3>Time</h3>
                <p>Input for picking time</p>
            </div>
        </div>

    </div>
</Modal>

<style>
    .fields {
        padding: 1.5rem;
        gap: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .field {
        cursor: pointer;
        gap: 0.75rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        width: 100%;
    }

    .field:hover {
        color: black;
    }

    .field:hover .icon :global(svg) {
        opacity: 1;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.5rem;
        width: 2.5rem;
        min-width: 2.5rem;
        min-height: 2.5rem;
        white-space: nowrap;
        border-radius: 50%;
        background-color: var(--neutral);
    }

    .icon :global(svg *) {
        stroke: var(--accent);
    }

    .icon :global(svg) {
        opacity: 0.5;
        transition: 0.1s ease;
    }


    h3, p {
        all: unset;
        display: block;
        font-size: 0.9rem;
    }

    h3 {
        font-weight: 500;
    }

    p {
        font-weight: 400;
        opacity: 0.5;
    }

    .field {
        opacity: 0.3;
    }

    .field:first-of-type {
        opacity: 1;
    }
</style>
