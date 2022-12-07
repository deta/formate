import { Router } from 'express';
import db from './database.js';

const api = Router();

// CREATE form
api.post('/forms', async (req, res) => {
	try {
		const data = req.body;
		const form = await db.forms.insert(data);
		res.send({ success: true, form });
	} catch (error) {
		console.error(error);
		res.status(500).send({ success: false, error });
	}
});

// READ Forms
api.get('/forms', async (req, res) => {
	try {
		const forms = await db.forms.fetch();
		res.send({ success: true, forms: forms.items });
	} catch (error) {
		console.error(error);
		res.status(500).send({ success: false, error });
	}
});

// READ Form by ID
api.get('/forms/:key', async (req, res) => {
	try {
		const key = req.params.key;
		const form = await db.forms.get(key);
		res.send({ success: true, form });
	} catch (error) {
		console.error(error);
		res.status(500).send({ success: false, error });
	}
});

// UPDATE Form by ID
api.put('/forms/:key', async (req, res) => {
	try {
		const key = req.params.key;
		const data = req.body;

		await db.forms.delete(key);
		const form = await db.forms.insert(data, key);

		res.send({ success: true, form });
	} catch (error) {
		console.error(error);
		res.status(500).send({ success: false, error });
	}
});

// DELETE form
api.delete('/forms/:key', async (req, res) => {
	try {
		const key = req.params.key;
		await db.forms.delete(key);
		
		res.send({ success: true });
	} catch (error) {
		console.error(error);
		res.status(500).send({ success: false, error });
	}
});

export default api;