import { Knex } from 'knex';

declare module 'knex/types/tables' {
	interface Transactions {
		id: string;
		title: string;
		amount: number;
		created_at: Date;
		session_id?: string;
	}

	interface Tables {
		transactions: Transactions;
	}
}
