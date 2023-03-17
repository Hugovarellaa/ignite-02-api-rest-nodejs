import { Knex, knex as setupKnex } from 'knex'

export const knexConfig: Knex.Config = {
	client: 'sqlite',
	connection: {
		filename: './app.db',
	},

	useNullAsDefault: true,
}

export const knex = setupKnex(knexConfig)
