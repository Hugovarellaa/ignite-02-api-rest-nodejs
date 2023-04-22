import { execSync } from 'node:child_process';
import request from 'supertest';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { app } from '../src/app';

// Test E2E

describe('Transaction Routes', () => {
	beforeAll(async () => {
		await app.ready();
	});

	afterAll(async () => {
		await app.close();
	});

	beforeEach(() => {
		execSync('npm run knex -- migrate:latest');
	});

	afterEach(() => {
		execSync('npm run knex -- migrate:rollback --all');
	});

	it('should be able to create a new transaction', async () => {
		const createTransaction = await request(app.server).post('/transactions').send({
			title: 'Transaction Test',
			amount: 4000,
			type: 'credit',
		});

		expect(createTransaction.statusCode).toBe(201);
	});

	it('should be able to list all transactions', async () => {
		const createTransaction = await request(app.server).post('/transactions').send({
			title: 'Transaction Test',
			amount: 4000,
			type: 'credit',
		});

		const cookies = createTransaction.get('Set-Cookie');

		const ListAllTransactions = await request(app.server).get('/transactions').set('Cookie', cookies);

		expect(ListAllTransactions.statusCode).toBe(200);
		expect(ListAllTransactions.body.transactions).toEqual([
			expect.objectContaining({
				title: 'Transaction Test',
				amount: 4000,
			}),
		]);
	});
});
