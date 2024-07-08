// import { relations } from "drizzle-orm/relations";
// import { usersInAuth, users, startups, bank_accounts, investors, startups_owners } from "./schema";

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

// export const startupsRelations = relations(startups, ({one, many}) => ({
// 	user: one(users, {
// 		fields: [startups.user_id],
// 		references: [users.id]
// 	}),
// 	startups_owners: many(startups_owners),
// }));

// export const bank_accountsRelations = relations(bank_accounts, ({one}) => ({
// 	user: one(users, {
// 		fields: [bank_accounts.user_id],
// 		references: [users.id]
// 	}),
// }));

// export const investorsRelations = relations(investors, ({one}) => ({
// 	user: one(users, {
// 		fields: [investors.user_id],
// 		references: [users.id]
// 	}),
// }));

// export const startups_ownersRelations = relations(startups_owners, ({one}) => ({
// 	startup: one(startups, {
// 		fields: [startups_owners.startup_id],
// 		references: [startups.id]
// 	}),
// }));