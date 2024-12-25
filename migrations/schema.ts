import {
  pgTable,
  foreignKey,
  pgEnum,
  bigint,
  date,
  numeric,
  boolean,
  timestamp,
  text,
  index,
  uuid,
  unique,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { relations } from "drizzle-orm/relations";
import { usersInAuth } from "@/db/auth";

export const aal_level = pgEnum("aal_level", ["aal1", "aal2", "aal3"]);
export const code_challenge_method = pgEnum("code_challenge_method", [
  "s256",
  "plain",
]);
export const factor_status = pgEnum("factor_status", [
  "unverified",
  "verified",
]);
export const factor_type = pgEnum("factor_type", ["totp", "webauthn", "phone"]);
export const one_time_token_type = pgEnum("one_time_token_type", [
  "confirmation_token",
  "reauthentication_token",
  "recovery_token",
  "email_change_token_new",
  "email_change_token_current",
  "phone_change_token",
]);
export const key_status = pgEnum("key_status", [
  "default",
  "valid",
  "invalid",
  "expired",
]);
export const key_type = pgEnum("key_type", [
  "aead-ietf",
  "aead-det",
  "hmacsha512",
  "hmacsha256",
  "auth",
  "shorthash",
  "generichash",
  "kdf",
  "secretbox",
  "secretstream",
  "stream_xchacha20",
]);
export const business_structure = pgEnum("business_structure", [
  "Sole Proprietorship",
  "Partnership",
  "Corporation",
  "S Corporation",
  "Limited Liability Company",
]);
export const company_stage = pgEnum("company_stage", [
  "Pre-seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C",
  "Series D",
  "Series E",
  "Series F",
  "Public",
]);
export const faqs_tabs = pgEnum("faqs_tabs", [
  "General Questions",
  "For Startups",
  "For Investors",
]);
export const future_investment_amounts = pgEnum("future_investment_amounts", [
  "Less than $250K",
  "$250K - $1M",
  "S1M - $5M",
  "$5M+",
  "Not sure",
]);
export const geographies_served = pgEnum("geographies_served", [
  "United States",
  "Canada",
  "Mexico",
  "United Kingdom",
  "Other",
]);
export const industry_and_sector = pgEnum("industry_and_sector", [
  "Technology",
  "Healthcare",
  "Financial Services",
  "Consumer Goods",
  "Industrial Goods",
  "Energy",
  "Real Estate",
  "Retail",
  "Media and Entertainment",
  "Transportation",
  "Telecommunications",
  "Agriculture",
  "Education",
  "Hospitality and Leisure",
  "Utilities",
  "Other",
]);
export const institution_types = pgEnum("institution_types", [
  "Corporation",
  "Family Office",
  "Fund",
  "Registered Investment Advisor (RIA)",
  "Other",
]);
export const investor_type = pgEnum("investor_type", [
  "Individual",
  "Institution",
]);
export const max_facility_size = pgEnum("max_facility_size", [
  "N/A",
  "<$1M",
  "$1-10M",
  "$10-50M",
  "$50-250M",
  "$250M+",
]);
export const minimum_revenue_requirement = pgEnum(
  "minimum_revenue_requirement",
  ["N/A", "<$1M", "$1-10M", "$10-50M", "$50-100M", "$100M+"]
);
export const notification_type = pgEnum("notification_type", [
  "Contract",
  "Request",
  "Payment",
]);
export const payment_interval = pgEnum("payment_interval", [
  "week",
  "month",
  "quarter",
  "year",
]);
export const payment_status = pgEnum("payment_status", [
  "Paid",
  "Due",
  "Pending",
]);
export const products_offered = pgEnum("products_offered", [
  "Venture Debt",
  "Asset-Based Lending",
  "Warehouse Lending",
  "Invoice and Contract Factoring",
  "Revenue-Based Financing",
  "Equipment Leasing",
  "M&A",
  "Recapitalizations and Refinancing",
  "Buyouts",
  "Bridge Loans",
  "Other",
]);
export const user_role = pgEnum("user_role", [
  "startup",
  "investor",
  "partner",
]);
export const action = pgEnum("action", [
  "INSERT",
  "UPDATE",
  "DELETE",
  "TRUNCATE",
  "ERROR",
]);
export const equality_op = pgEnum("equality_op", [
  "eq",
  "neq",
  "lt",
  "lte",
  "gt",
  "gte",
  "in",
]);

export const financial_rounds = pgTable("financial_rounds", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  investor: text("investor").array().notNull(),
  round: company_stage("round"),
  date: date("date"),
  amount: numeric("amount"),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  startup_id: bigint("startup_id", { mode: "number" }).references(
    () => startups.id,
    { onDelete: "cascade", onUpdate: "cascade" }
  ),
});

export const contracts = pgTable("contracts", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  investor_id: bigint("investor_id", { mode: "number" })
    .notNull()
    .references(() => investors.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  startup_id: bigint("startup_id", { mode: "number" })
    .notNull()
    .references(() => startups.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  amount_invested: numeric("amount_invested").notNull(),
  interest_rate: numeric("interest_rate"),
  accepted: boolean("accepted").notNull(),
  total_return_paid: numeric("total_return_paid"),
  maturity_date: date("maturity_date"),
  payment_interval: payment_interval("payment_interval"),
  createdAt: timestamp("createdAt", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
  term_sheet: text("term_sheet"),
  investment_amount_paid: boolean("investment_amount_paid").default(false),
});

export const financial_details_requests = pgTable(
  "financial_details_requests",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint("id", { mode: "number" }).primaryKey().notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    startup_id: bigint("startup_id", { mode: "number" })
      .notNull()
      .references(() => startups.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    investor_id: bigint("investor_id", { mode: "number" }).references(
      () => investors.id,
      { onDelete: "cascade", onUpdate: "cascade" }
    ),
    accepted: boolean("accepted").default(false),
    createdAt: timestamp("createdAt", {
      withTimezone: true,
      mode: "string",
    }).defaultNow(),
  }
);

export const users = pgTable(
  "users",
  {
    id: uuid("id")
      .default(sql`auth.uid()`)
      .primaryKey()
      .notNull(),
    first_name: text("first_name").notNull(),
    last_name: text("last_name"),
    role: user_role("role"),
    dwolla_customer_url: text("dwolla_customer_url"),
    dwolla_customer_id: text("dwolla_customer_id"),
    plaid_id: text("plaid_id"),
  },
  (table) => {
    return {
      id_idx: index("users_id_idx").using("btree", table.id),
      users_id_fkey: foreignKey({
        columns: [table.id],
        foreignColumns: [table.id],
        name: "users_id_fkey",
      })
        .onUpdate("cascade")
        .onDelete("cascade"),
    };
  }
);

export const cap_tables = pgTable("cap_tables", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  startup_id: bigint("startup_id", { mode: "number" }).references(
    () => startups.id,
    { onDelete: "cascade", onUpdate: "cascade" }
  ),
  name: text("name"),
  document_link: text("document_link"),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});

export const startups = pgTable(
  "startups",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint("id", { mode: "number" }).primaryKey().notNull(),
    user_id: uuid("user_id")
      .default(sql`auth.uid()`)
      .notNull()
      .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
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
    recent_raise: numeric("recent_raise"),
    stage: company_stage("stage"),
  },
  (table) => {
    return {
      startups_id_key: unique("startups_id_key").on(table.id),
    };
  }
);

export const notifications = pgTable("notifications", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  user_id: uuid("user_id").references(() => users.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
  type: notification_type("type"),
  content: text("content"),
  is_read: boolean("is_read"),
});

export const bank_accounts = pgTable("bank_accounts", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  user_id: uuid("user_id")
    .default(sql`auth.uid()`)
    .notNull()
    .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  bank_id: text("bank_id"),
  account_id: text("account_id"),
  access_token: text("access_token"),
  funding_source_url: text("funding_source_url"),
  shareable_id: text("shareable_id"),
});

export const pitch_decks = pgTable("pitch_decks", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  startup_id: bigint("startup_id", { mode: "number" }).references(
    () => startups.id,
    { onDelete: "cascade", onUpdate: "cascade" }
  ),
  name: text("name"),
  document_link: text("document_link"),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});

export const tax_returns = pgTable("tax_returns", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  startup_id: bigint("startup_id", { mode: "number" }).references(
    () => startups.id,
    { onDelete: "cascade", onUpdate: "cascade" }
  ),
  name: text("name"),
  document_link: text("document_link"),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});

export const investors = pgTable(
  "investors",
  {
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    id: bigint("id", { mode: "number" }).primaryKey().notNull(),
    user_id: uuid("user_id")
      .default(sql`auth.uid()`)
      .notNull()
      .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
    accepted: boolean("accepted").default(false).notNull(),
    submitted: boolean("submitted").default(false),
    company_email: text("company_email"),
    company_name: text("company_name"),
    company_website: text("company_website"),
    minimum_revenue_requirement: minimum_revenue_requirement(
      "minimum_revenue_requirement"
    ),
    max_facility_size: max_facility_size("max_facility_size"),
    products_offered: products_offered("products_offered").array(),
    geographies_served: geographies_served("geographies_served").array(),
    investor_type: investor_type("investor_type"),
    future_investment_amount: future_investment_amounts(
      "future_investment_amount"
    ),
    institution_type: institution_types("institution_type"),
    accreditation: text("accreditation"),
  },
  (table) => {
    return {
      investors_id_key: unique("investors_id_key").on(table.id),
    };
  }
);

export const partners = pgTable(
  "partners",
  {
    id: bigint("id", { mode: "number" }).primaryKey().notNull(),
    user_id: uuid("user_id")
      .default(sql`auth.uid()`)
      .notNull()
      .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
    partner_name: text("partner_name"),
  },
  (table) => {
    return {
      partners_id_key: unique("partners_id_key").on(table.id),
    };
  }
);

export const financial_statements = pgTable("financial_statements", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  startup_id: bigint("startup_id", { mode: "number" }).references(
    () => startups.id,
    { onDelete: "cascade", onUpdate: "cascade" }
  ),
  name: text("name"),
  document_link: text("document_link"),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});

export const legal_documents = pgTable("legal_documents", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  startup_id: bigint("startup_id", { mode: "number" }).references(
    () => startups.id,
    { onDelete: "cascade", onUpdate: "cascade" }
  ),
  name: text("name"),
  document_link: text("document_link"),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
});

export const startups_owners = pgTable("startups_owners", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  startup_id: bigint("startup_id", { mode: "number" })
    .notNull()
    .references(() => startups.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  name: text("name"),
  share: numeric("share"),
});

export const payments = pgTable("payments", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  due_date: timestamp("due_date", { withTimezone: true, mode: "string" }),
  status: payment_status("status"),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  contract_id: bigint("contract_id", { mode: "number" }).references(
    () => contracts.id,
    { onDelete: "cascade", onUpdate: "cascade" }
  ),
  amount: numeric("amount"),
});

export const transactions = pgTable("transactions", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  sender_id: uuid("sender_id").references(() => users.id, {
    onDelete: "restrict",
    onUpdate: "restrict",
  }),
  receiver_id: uuid("receiver_id").references(() => users.id, {
    onDelete: "restrict",
    onUpdate: "restrict",
  }),
  amount: numeric("amount"),
});

export const faqs = pgTable("faqs", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  question: text("question").notNull(),
  answer: text("answer"),
  tab: faqs_tabs("tab"),
});

export const financial_roundsRelations = relations(
  financial_rounds,
  ({ one }) => ({
    startup: one(startups, {
      fields: [financial_rounds.startup_id],
      references: [startups.id],
    }),
  })
);

export const startupsRelations = relations(startups, ({ one, many }) => ({
  financial_rounds: many(financial_rounds),
  contracts: many(contracts),
  financial_details_requests: many(financial_details_requests),
  cap_tables: many(cap_tables),
  user: one(users, {
    fields: [startups.user_id],
    references: [users.id],
  }),
  pitch_decks: many(pitch_decks),
  tax_returns: many(tax_returns),
  financial_statements: many(financial_statements),
  legal_documents: many(legal_documents),
  startups_owners: many(startups_owners),
}));

export const contractsRelations = relations(contracts, ({ one, many }) => ({
  investor: one(investors, {
    fields: [contracts.investor_id],
    references: [investors.id],
  }),
  startup: one(startups, {
    fields: [contracts.startup_id],
    references: [startups.id],
  }),
  payments: many(payments),
}));

export const investorsRelations = relations(investors, ({ one, many }) => ({
  contracts: many(contracts),
  financial_details_requests: many(financial_details_requests),
  user: one(users, {
    fields: [investors.user_id],
    references: [users.id],
  }),
}));

export const financial_details_requestsRelations = relations(
  financial_details_requests,
  ({ one }) => ({
    investor: one(investors, {
      fields: [financial_details_requests.investor_id],
      references: [investors.id],
    }),
    startup: one(startups, {
      fields: [financial_details_requests.startup_id],
      references: [startups.id],
    }),
  })
);

export const usersRelations = relations(users, ({ one, many }) => ({
  usersInAuth: one(usersInAuth, {
    fields: [users.id],
    references: [usersInAuth.id],
  }),
  startups: many(startups),
  notifications: many(notifications),
  bank_accounts: many(bank_accounts),
  investors: many(investors),
  transactions_receiver_id: many(transactions, {
    relationName: "transactions_receiver_id_users_id",
  }),
  transactions_sender_id: many(transactions, {
    relationName: "transactions_sender_id_users_id",
  }),
}));

export const usersInAuthRelations = relations(usersInAuth, ({ many }) => ({
  users: many(users),
}));

export const cap_tablesRelations = relations(cap_tables, ({ one }) => ({
  startup: one(startups, {
    fields: [cap_tables.startup_id],
    references: [startups.id],
  }),
}));

export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(users, {
    fields: [notifications.user_id],
    references: [users.id],
  }),
}));

export const bank_accountsRelations = relations(bank_accounts, ({ one }) => ({
  user: one(users, {
    fields: [bank_accounts.user_id],
    references: [users.id],
  }),
}));

export const pitch_decksRelations = relations(pitch_decks, ({ one }) => ({
  startup: one(startups, {
    fields: [pitch_decks.startup_id],
    references: [startups.id],
  }),
}));

export const tax_returnsRelations = relations(tax_returns, ({ one }) => ({
  startup: one(startups, {
    fields: [tax_returns.startup_id],
    references: [startups.id],
  }),
}));

export const financial_statementsRelations = relations(
  financial_statements,
  ({ one }) => ({
    startup: one(startups, {
      fields: [financial_statements.startup_id],
      references: [startups.id],
    }),
  })
);

export const legal_documentsRelations = relations(
  legal_documents,
  ({ one }) => ({
    startup: one(startups, {
      fields: [legal_documents.startup_id],
      references: [startups.id],
    }),
  })
);

export const startups_ownersRelations = relations(
  startups_owners,
  ({ one }) => ({
    startup: one(startups, {
      fields: [startups_owners.startup_id],
      references: [startups.id],
    }),
  })
);

export const paymentsRelations = relations(payments, ({ one }) => ({
  contract: one(contracts, {
    fields: [payments.contract_id],
    references: [contracts.id],
  }),
}));

export const transactionsRelations = relations(transactions, ({ one }) => ({
  user_receiver_id: one(users, {
    fields: [transactions.receiver_id],
    references: [users.id],
    relationName: "transactions_receiver_id_users_id",
  }),
  user_sender_id: one(users, {
    fields: [transactions.sender_id],
    references: [users.id],
    relationName: "transactions_sender_id_users_id",
  }),
}));
