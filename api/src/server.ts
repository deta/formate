import Express from 'express';
import Api from './api.js';

// Setup Express
const app = Express();
app.use(Express.json());

// Api Router
app.use(Api);

// Start server
app.listen(8080, () => {
	console.log(`Formate API started in "${process.env.NODE_ENV || 'development'}" mode on port 8080! 🥳`);
});
