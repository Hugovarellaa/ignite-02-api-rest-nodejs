import fastify from 'fastify';
import { knex } from './database';

const app = fastify();

app.get('/', async () => {
	const testando = await knex('sqlite_schema').select('*');

	return testando;
});

app
	.listen({
		port: 3333,
	})
	.then(() => console.log(`🚀🚀 listening on port 3333 🚀🚀`));
