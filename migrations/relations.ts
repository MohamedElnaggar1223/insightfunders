// import { relations } from "drizzle-orm/relations";
// import { startups, financial_rounds, investors, contracts, financial_details_requests, usersInAuth, users, bank_accounts, startups_owners } from "./schema";

// export const financial_roundsRelations = relations(financial_rounds, ({one}) => ({
// 	startup: one(startups, {
// 		fields: [financial_rounds.startup_id],
// 		references: [startups.id]
// 	}),
// }));

// export const startupsRelations = relations(startups, ({one, many}) => ({
// 	financial_rounds: many(financial_rounds),
// 	contracts: many(contracts),
// 	financial_details_requests: many(financial_details_requests),
// 	user: one(users, {
// 		fields: [startups.user_id],
// 		references: [users.id]
// 	}),
// 	startups_owners: many(startups_owners),
// }));

// export const contractsRelations = relations(contracts, ({one}) => ({
// 	investor: one(investors, {
// 		fields: [contracts.investor_id],
// 		references: [investors.id]
// 	}),
// 	startup: one(startups, {
// 		fields: [contracts.startup_id],
// 		references: [startups.id]
// 	}),
// }));

// export const investorsRelations = relations(investors, ({one, many}) => ({
// 	contracts: many(contracts),
// 	financial_details_requests: many(financial_details_requests),
// 	user: one(users, {
// 		fields: [investors.user_id],
// 		references: [users.id]
// 	}),
// }));

// export const financial_details_requestsRelations = relations(financial_details_requests, ({one}) => ({
// 	investor: one(investors, {
// 		fields: [financial_details_requests.investor_id],
// 		references: [investors.id]
// 	}),
// 	startup: one(startups, {
// 		fields: [financial_details_requests.startup_id],
// 		references: [startups.id]
// 	}),
// }));

// export const usersRelations = relations(users, ({one, many}) => ({
// 	usersInAuth: one(usersInAuth, {
// 		fields: [users.id],
// 		references: [usersInAuth.id]
// 	}),
// 	startups: many(startups),
// 	bank_accounts: many(bank_accounts),
// 	investors: many(investors),
// }));

// export const usersInAuthRelations = relations(usersInAuth, ({many}) => ({
// 	users: many(users),
// }));

// export const bank_accountsRelations = relations(bank_accounts, ({one}) => ({
// 	user: one(users, {
// 		fields: [bank_accounts.user_id],
// 		references: [users.id]
// 	}),
// }));

// export const startups_ownersRelations = relations(startups_owners, ({one}) => ({
// 	startup: one(startups, {
// 		fields: [startups_owners.startup_id],
// 		references: [startups.id]
// 	}),
// }));