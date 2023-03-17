import { Knex, knex as setupKnex } from 'knex'

export const knex: Knex.Config = setupKnex({
	client: 'sqlite',
	connection: {
		filename: './app.db',
	},

	useNullAsDefault: true,
})
