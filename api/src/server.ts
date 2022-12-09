import Express from 'express';
import { nanoid } from 'nanoid';
import Forms from './forms.js';
import db from './database.js';

// Setup Express
const app = Express();
app.use(Express.json());

// Routers
app.use('/forms', Forms);

// Submit form
app.post('/submit', async (req, res) => {
	try {
		const data = req.body;

		db.submissions.insert({ 
			data,
			date: new Date().toString(),
			key: nanoid(),
		});

		res.send({ success: true });
	} catch (error) {
		console.error(error);
		res.status(500).send({ success: false, error });
	}
});

// Submit form
app.get('/fetch', async (req, res) => {
	try {
		const slug = req.query.slug;
		if (!slug) return res.status(400).send({ success: false, error: 'Slug not specified' });
		
		const form = await db.publications.fetch({ slug });
		if (!form.count) return res.status(400).send({ success: false, error: 'Form not found' });
		
		res.send({ success: true, form: form.items[0] });

	} catch (error) {
		console.error(error);
		res.status(500).send({ success: false, error });
	}
});

/**
 * On publish
 */
app.post('/publish', async (req, res) => {
	try {
		const data = req.body;
		if (!data?.slug) return res.status(400).send({ success: false, error: 'Slug not specified' });

		// Remove old items with the same slug
		const sameSlug = await db.publications.fetch({ slug: data.slug });

		if (sameSlug.items) {
	
			for (let index = 0; index < sameSlug.items.length; index++) {
				console.log('yay');
				const item = sameSlug.items[index];
				console.log(item);

				await db.publications.delete(item.key as string);
			}
		}

		await db.publications.insert(data, nanoid());
		res.send({ success: true });

	} catch (error) {
		console.error(error);
		res.status(500).send({ success: false, error });
	}
});

// Start server
app.listen(8080, () => {
	console.log(`Formate API started in "${process.env.NODE_ENV || 'development'}" mode on port 8080! 🥳`);
});
