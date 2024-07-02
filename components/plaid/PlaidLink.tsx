import { Database } from "@/types/supabase";
import { User } from "@supabase/supabase-js";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

type Props = {
    user: {
        user: User,
        userInfo: PostgrestSingleResponse<{
            first_name: string;
            id: string;
            last_name: string | null;
            role: "startup" | "investor" | null;
        }>
        userStartUp: PostgrestSingleResponse<{
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
        }>
        userStartUpOwners: PostgrestSingleResponse<{
            id: number;
            name: string | null;
            share: number | null;
            startup_id: number;
        }[]>
        userInvestor?: PostgrestSingleResponse<{
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
        }>
    } | null
}

export default function PlaidLink({ user }: Props) {
    return (
        <button className='w-full bg-main-purple text-white font-semibold rounded-[8px] py-2 px-4 max-w-[320px]'>
            Connect Bank
        </button>
    )
}