import { Database } from "@/types/supabase";
import { User } from "@supabase/supabase-js";

export type UserType = {
    user: User
    userInfo?: {
        role: "startup" | "investor" | null;
        first_name: string | null;
        last_name: string | null;
        plaid_id: string | null;
        dwolla_customer_id: string | null;
        dwolla_customer_url: string | null;
    }
    userStartUp?: {
        accepted: boolean
        address: string | null
        business_structure:
            | Database["public"]["Enums"]["business_structure"]
            | null
        company_name: string | null
        EIN: string | null
        email: string | null
        id: number
        industry_sector:
            | Database["public"]["Enums"]["industry_and_sector"]
            | null
        other_industry_and_sector: string | null
        phone_number: string | null
        submitted: boolean
        user_id: string
    }
    userStartUpOwners?: {
        id: number;
        name: string | null;
        share: number | null;
    }[]
    userInvestor?: {
        accepted: boolean
        company_email: string | null
        company_name: string | null
        company_website: string | null
        geographies_served:
            | Database["public"]["Enums"]["geographies_served"][]
            | null
        id: number
        max_facility_size:
            | Database["public"]["Enums"]["max_facility_size"]
            | null
        minimum_revenue_requirement:
            | Database["public"]["Enums"]["minimum_revenue_requirement"]
            | null
        products_offered:
            | Database["public"]["Enums"]["products_offered"][]
            | null
        submitted: boolean | null
        user_id: string
    }
} | null