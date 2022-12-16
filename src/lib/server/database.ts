import { Deta } from 'deta';

// Load project key
const DETA_PROJECT_KEY = process.env.DETA_PROJECT_KEY || (await import('$env/static/private')).DETA_PROJECT_KEY;

// Initiate Deta SDK
export const deta = Deta(DETA_PROJECT_KEY);

// Database table
export default {
	forms: deta.Base('forms'),
	publications: deta.Base('publications'),
	submissions: deta.Base('submissions')
};
