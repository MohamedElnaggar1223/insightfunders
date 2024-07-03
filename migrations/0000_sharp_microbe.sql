-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
DO $$ BEGIN
 CREATE TYPE "auth"."aal_level" AS ENUM('aal1', 'aal2', 'aal3');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "auth"."code_challenge_method" AS ENUM('s256', 'plain');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "auth"."factor_status" AS ENUM('unverified', 'verified');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "auth"."factor_type" AS ENUM('totp', 'webauthn');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "auth"."one_time_token_type" AS ENUM('confirmation_token', 'reauthentication_token', 'recovery_token', 'email_change_token_new', 'email_change_token_current', 'phone_change_token');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "pgsodium"."key_status" AS ENUM('default', 'valid', 'invalid', 'expired');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "pgsodium"."key_type" AS ENUM('aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."business_structure" AS ENUM('Sole Proprietorship', 'Partnership', 'Corporation', 'S Corporation', 'Limited Liability Company');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."faqs_tabs" AS ENUM('General Questions', 'For Startups', 'For Investors');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."geographies_served" AS ENUM('United States', 'Canada', 'Mexico', 'United Kingdom', 'Other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."industry_and_sector" AS ENUM('Technology', 'Healthcare', 'Financial Services', 'Consumer Goods', 'Industrial Goods', 'Energy', 'Real Estate', 'Retail', 'Media and Entertainment', 'Transportation', 'Telecommunications', 'Agriculture', 'Education', 'Hospitality and Leisure', 'Utilities', 'Other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."max_facility_size" AS ENUM('N/A', '<$1M', '$1-10M', '$10-50M', '$50-250M', '$250M+');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."minimum_revenue_requirement" AS ENUM('N/A', '<$1M', '$1-10M', '$10-50M', '$50-100M', '$100M+');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."products_offered" AS ENUM('Venture Debt', 'Asset-Based Lending', 'Warehouse Lending', 'Invoice and Contract Factoring', 'Revenue-Based Financing', 'Equipment Leasing', 'M&A', 'Recapitalizations and Refinancing', 'Buyouts', 'Bridge Loans', 'Other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."user_role" AS ENUM('startup', 'investor');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "realtime"."action" AS ENUM('INSERT', 'UPDATE', 'DELETE', 'TRUNCATE', 'ERROR');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "realtime"."equality_op" AS ENUM('eq', 'neq', 'lt', 'lte', 'gt', 'gte', 'in');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT auth.uid() NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text,
	"role" "user_role"
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "startups" (
	"id" bigint PRIMARY KEY NOT NULL,
	"user_id" uuid DEFAULT auth.uid() NOT NULL,
	"accepted" boolean DEFAULT false NOT NULL,
	"company_name" text,
	"business_structure" "business_structure",
	"EIN" text,
	"phone_number" text,
	"email" text,
	"address" text,
	"industry_sector" "industry_and_sector",
	"other_industry_and_sector" text,
	"submitted" boolean DEFAULT false NOT NULL,
	CONSTRAINT "startups_id_key" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "investors" (
	"id" bigint PRIMARY KEY NOT NULL,
	"user_id" uuid DEFAULT auth.uid() NOT NULL,
	"accepted" boolean DEFAULT false NOT NULL,
	"submitted" boolean DEFAULT false,
	"company_email" text,
	"company_name" text,
	"company_website" text,
	"minimum_revenue_requirement" "minimum_revenue_requirement",
	"max_facility_size" "max_facility_size",
	"products_offered" products_offered[],
	"geographies_served" geographies_served[],
	CONSTRAINT "investors_id_key" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "startups_owners" (
	"id" bigint PRIMARY KEY NOT NULL,
	"startup_id" bigint NOT NULL,
	"name" text,
	"share" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "faqs" (
	"id" bigint PRIMARY KEY NOT NULL,
	"question" text NOT NULL,
	"answer" text,
	"tab" "faqs_tabs"
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_id_fkey" FOREIGN KEY ("id") REFERENCES "auth"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "startups" ADD CONSTRAINT "startups_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "investors" ADD CONSTRAINT "investors_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "startups_owners" ADD CONSTRAINT "startups_owners_startup_id_fkey" FOREIGN KEY ("startup_id") REFERENCES "public"."startups"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/