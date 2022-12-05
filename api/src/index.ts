import * as dotenv from 'dotenv';
import { Deta } from 'deta';
import Express from 'express';

// Load ENV variables if running locally
if (!process.env.DETA_SPACE_APP) dotenv.config();

const deta = Deta(process.env.DETA_PROJECT_KEY);
const app = Express();

app.use(Express.json());

// Start server
app.listen(8080, () => {
	console.log(`Formate API started in "${process.env.NODE_ENV || 'development'}" mode on port 8080! 🥳`);
});
