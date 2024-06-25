'use server'

import { z } from "zod"
import { startUpDetailsSchema } from "../validations/onBoardingSchema";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient()

export const saveStartUpDetails = async (startup_id: number, data: z.infer<typeof startUpDetailsSchema>) => {
    const { error } = await supabase.from('startups').update({
        address: data.address ?? null,
        company_name: data.companyName ?? null,
        business_structure: data.businessStructure ?? null,
        EIN: data.EIN ?? null,
        email: data.companyEmail ?? null,
        phone_number: `${data.countryCode} ${data.phoneNumber}` ?? null,
        industry_sector: data.industrySector ?? null,
        other_industry_and_sector: data.otherSector ?? null,
    })
    .eq('id', startup_id)

    if(error) return { error: error.message}

    return { success: true }
}