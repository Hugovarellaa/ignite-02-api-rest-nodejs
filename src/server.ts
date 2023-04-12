import fastify from 'fastify';
import { randomUUID } from 'node:crypto';
import { knex } from './database';
import { env } from './env';

const app = fastify();

app.post('/', async () => {
	const transactions = await knex('transactions')
		.insert({
			id: randomUUID(),
			title: 'Transactions test',
			amount: 1000,
			created_at: new Date(),
		})
		.returning('*');

	return transactions;
});

app
	.listen({
		port: env.PORT,
	})
	.then(() => console.log(`🚀🚀 listening on port ${env.PORT} 🚀🚀`));
