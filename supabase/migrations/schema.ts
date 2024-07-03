import { pgTable, foreignKey, pgEnum, uuid, text, unique, bigint, boolean, numeric } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"
import { usersInAuth } from "@/db/auth";
import { relations } from "drizzle-orm/relations";

export const aal_level = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const code_challenge_method = pgEnum("code_challenge_method", ['s256', 'plain'])
export const factor_status = pgEnum("factor_status", ['unverified', 'verified'])
export const factor_type = pgEnum("factor_type", ['totp', 'webauthn'])
export const one_time_token_type = pgEnum("one_time_token_type", ['confirmation_token', 'reauthentication_token', 'recovery_token', 'email_change_token_new', 'email_change_token_current', 'phone_change_token'])
export const key_status = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const key_type = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const business_structure = pgEnum("business_structure", ['Sole Proprietorship', 'Partnership', 'Corporation', 'S Corporation', 'Limited Liability Company'])
export const faqs_tabs = pgEnum("faqs_tabs", ['General Questions', 'For Startups', 'For Investors'])
export const geographies_served = pgEnum("geographies_served", ['United States', 'Canada', 'Mexico', 'United Kingdom', 'Other'])
export const industry_and_sector = pgEnum("industry_and_sector", ['Technology', 'Healthcare', 'Financial Services', 'Consumer Goods', 'Industrial Goods', 'Energy', 'Real Estate', 'Retail', 'Media and Entertainment', 'Transportation', 'Telecommunications', 'Agriculture', 'Education', 'Hospitality and Leisure', 'Utilities', 'Other'])
export const max_facility_size = pgEnum("max_facility_size", ['N/A', '<$1M', '$1-10M', '$10-50M', '$50-250M', '$250M+'])
export const minimum_revenue_requirement = pgEnum("minimum_revenue_requirement", ['N/A', '<$1M', '$1-10M', '$10-50M', '$50-100M', '$100M+'])
export const products_offered = pgEnum("products_offered", ['Venture Debt', 'Asset-Based Lending', 'Warehouse Lending', 'Invoice and Contract Factoring', 'Revenue-Based Financing', 'Equipment Leasing', 'M&A', 'Recapitalizations and Refinancing', 'Buyouts', 'Bridge Loans', 'Other'])
export const user_role = pgEnum("user_role", ['startup', 'investor'])
export const action = pgEnum("action", ['INSERT', 'UPDATE', 'DELETE', 'TRUNCATE', 'ERROR'])
export const equality_op = pgEnum("equality_op", ['eq', 'neq', 'lt', 'lte', 'gt', 'gte', 'in'])


export const users = pgTable("users", {
	id: uuid("id").default(sql`auth.uid()`).primaryKey().notNull(),
	first_name: text("first_name").notNull(),
	last_name: text("last_name"),
	role: user_role("role"),
},
(table) => {
	return {
		users_id_fkey: foreignKey({
			columns: [table.id],
			foreignColumns: [table.id],
			name: "users_id_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	}
});

export const startups = pgTable("startups", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	user_id: uuid("user_id").default(sql`auth.uid()`).notNull().references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	accepted: boolean("accepted").default(false).notNull(),
	company_name: text("company_name"),
	business_structure: business_structure("business_structure"),
	EIN: text("EIN"),
	phone_number: text("phone_number"),
	email: text("email"),
	address: text("address"),
	industry_sector: industry_and_sector("industry_sector"),
	other_industry_and_sector: text("other_industry_and_sector"),
	submitted: boolean("submitted").default(false).notNull(),
},
(table) => {
	return {
		startups_id_key: unique("startups_id_key").on(table.id),
	}
});

export const investors = pgTable("investors", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	user_id: uuid("user_id").default(sql`auth.uid()`).notNull().references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	accepted: boolean("accepted").default(false).notNull(),
	submitted: boolean("submitted").default(false),
	company_email: text("company_email"),
	company_name: text("company_name"),
	company_website: text("company_website"),
	minimum_revenue_requirement: minimum_revenue_requirement("minimum_revenue_requirement"),
	max_facility_size: max_facility_size("max_facility_size"),
	products_offered: products_offered("products_offered").array(),
	geographies_served: geographies_served("geographies_served").array(),
},
(table) => {
	return {
		investors_id_key: unique("investors_id_key").on(table.id),
	}
});

export const startups_owners = pgTable("startups_owners", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	startup_id: bigint("startup_id", { mode: "number" }).notNull().references(() => startups.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	name: text("name"),
	share: numeric("share"),
});

export const faqs = pgTable("faqs", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	question: text("question").notNull(),
	answer: text("answer"),
	tab: faqs_tabs("tab"),
	owner: text("owner"),
});

export const usersRelations = relations(users, ({one, many}) => ({
	usersInAuth: one(usersInAuth, {
		fields: [users.id],
		references: [usersInAuth.id]
	}),
	startups: many(startups),
	investors: many(investors),
}));

export const usersInAuthRelations = relations(usersInAuth, ({many}) => ({
	users: many(users),
}));

export const startupsRelations = relations(startups, ({one, many}) => ({
	user: one(users, {
		fields: [startups.user_id],
		references: [users.id]
	}),
	startups_owners: many(startups_owners),
}));

export const investorsRelations = relations(investors, ({one}) => ({
	user: one(users, {
		fields: [investors.user_id],
		references: [users.id]
	}),
}));

export const startups_ownersRelations = relations(startups_owners, ({one}) => ({
	startup: one(startups, {
		fields: [startups_owners.startup_id],
		references: [startups.id]
	}),
}));