import type { PageServerLoad } from './$types';
import type { Form, Publication } from '$lib/types';

/**
 * Load form data & publication info
 */
export const load: PageServerLoad = async ({ params, fetch }) => {
	const formRequest = await fetch(`/api/forms/${params.key}`);
	const formData = await formRequest.json();

	const publicationRequest = await fetch(`/api/publications/${params.key}`);
	const publicationData = await publicationRequest.json();

	return {
		form: formData.form as Form,
		publication: publicationData.publication as Publication | null
	};
};
