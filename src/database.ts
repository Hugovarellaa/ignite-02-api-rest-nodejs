import 'dotenv/config';
import { Knex, knex as setupKnex } from 'knex';
import { env } from './env';

export const knexConfig: Knex.Config = {
	client: 'sqlite',
	connection: {
		filename: env.DATABASE_URL,
	},
	migrations: {
		extension: 'ts',
		directory: env.DATABASE_MIGRATION,
	},
	useNullAsDefault: true,
};

export const knex: Knex = setupKnex(knexConfig);
