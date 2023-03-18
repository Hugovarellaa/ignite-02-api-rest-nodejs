import request from 'supertest'
import { afterAll, beforeAll, describe, test } from 'vitest'
import { app } from '../src/app'

describe('Transactions Routes', async () => {
	beforeAll(async () => {
		await app.ready()
	})

	afterAll(async () => {
		await app.close()
	})

	test('user can create a new transactions', async () => {
		await request(app.server)
			.post('/transactions')
			.send({
				title: 'Title test',
				amount: 3333,
				type: 'credit',
			})
			.expect(201)
	})
})
