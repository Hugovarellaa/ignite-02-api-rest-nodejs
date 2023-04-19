import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { app } from '../src/app';

describe('Transaction Routes', () => {
	beforeAll(async () => {
		await app.ready();
	});

	afterAll(async () => {
		await app.close();
	});

	it('should be able to create a new transactions', async () => {
		const response = await request(app.server).post('/transactions').send({
			title: 'Transaction Test',
			amount: 4000,
			type: 'credit',
		});

		expect(response.statusCode).toBe(201);
	});
});
