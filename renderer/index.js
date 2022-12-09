// Import ENV variables
import 'dotenv/config';

import Express from 'express';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

// Get current dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

// Setup Express
const app = Express();

// Static serving
app.use(Express.static(join(__dirname, 'dist')));

// Send index.html
app.get('*', (req, res) => res.sendFile(join(__dirname, 'dist', 'index.html')));

// Start server
app.listen(3030, () => {
	console.log(`Formate Renderer started in "${process.env.NODE_ENV || 'development'}" mode on port 3030! 🥳`);
});
