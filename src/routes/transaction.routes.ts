import { randomUUID } from 'crypto';
import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { knex } from '../database';

export async function transactionsRoutes(app: FastifyInstance) {
	app.post('/', async (request, reply) => {
		const createTransactionBodySchema = z.object({
			title: z.string(),
			amount: z.number(),
			type: z.enum(['debit', 'credit']),
		});

		const { title, amount, type } = createTransactionBodySchema.parse(request.body);

		await knex('transactions').insert({
			id: randomUUID(),
			title,
			amount: type === 'credit' ? amount : amount * -1,
			created_at: new Date(),
		});

		return reply.status(201).send();
	});

	app.get('/', async () => {
		const transactions = await knex('transactions').select('*');

		return { transactions };
	});
}
