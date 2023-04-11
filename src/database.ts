import { Knex, knex as setupKnex } from 'knex';

export const knexConfig: Knex.Config = {
	client: 'sqlite',
	connection: {
		filename: './database/app.db',
	},
	migrations: {
		extension: 'ts',
		directory: './database/migrations',
	},
	useNullAsDefault: true,
};

export const knex: Knex = setupKnex(knexConfig);
