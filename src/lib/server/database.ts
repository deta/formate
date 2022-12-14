import { DETA_PROJECT_KEY } from '$env/static/private';
import { Deta } from 'deta';

// Initiate Deta SDK
const deta = Deta(process.env.DETA_PROJECT_KEY || DETA_PROJECT_KEY);

// Database table
export default {
	forms: deta.Base('forms'),
	publications: deta.Base('publications'),
	submissions: deta.Base('submissions')
};
