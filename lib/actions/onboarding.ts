'use server'

import { z } from "zod"
import { startUpDetailsSchema } from "../validations/onBoardingSchema"
import { createClient } from "@/utils/supabase/server"
import { countryDialingCodes } from "@/constants"

const supabase = createClient()

export const saveStartUpDetails = async (startup_id: number, data: z.infer<typeof startUpDetailsSchema>) => {
    const partialData = Object.keys(data).reduce((acc, key) => {
        if (data[key as keyof z.infer<typeof startUpDetailsSchema>] !== "" && data[key as keyof z.infer<typeof startUpDetailsSchema>] !== undefined && data[key as keyof z.infer<typeof startUpDetailsSchema>] !== null) {
            acc[key as keyof z.infer<typeof startUpDetailsSchema>] = data[key as keyof z.infer<typeof startUpDetailsSchema>]
        }
        return acc
    }, {} as any)

    console.log(partialData)

    let partialDataShape = Object.keys(partialData).reduce((acc, key) => {
        acc[key] = true
        return acc
    }, {} as any)

    if(!('phoneNumber' in partialDataShape) && ('countryCode' in partialDataShape)) {
        const { countryCode: _, ...newPartialDataShap } = partialDataShape;
        partialDataShape = newPartialDataShap
    }

    if(('phoneNumber' in partialDataShape) && !('countryCode' in partialDataShape)) {
        const { phoneNumber: _, ...newPartialDataShap } = partialDataShape;
        partialDataShape = newPartialDataShap
    }

    const { error: partialError } = startUpDetailsSchema.pick(partialDataShape).safeParse(partialData)

    if(partialError) return { error: partialError?.errors[0].message }

    const { error } = await supabase.from('startups').update({
        address: data.address ?? null,
        company_name: data.companyName ?? null,
        business_structure: data.businessStructure ?? null,
        EIN: data.EIN ?? null,
        email: data.companyEmail ?? null,
        //@ts-expect-error data
        phone_number: (data.countryCode && data.phoneNumber) ? `${countryDialingCodes[data.countryCode]} ${data.phoneNumber}` : null,
        industry_sector: data.industrySector ?? null,
        other_industry_and_sector: data.otherSector ?? null,
    })
    .eq('id', startup_id)
    
    
    if(data.businessOwners && (data.businessOwners?.length ?? 0) > 0) {
        try {
            const existingBusinessOwners = await supabase.from('startups_owners').select('name').eq('startup_id', startup_id)
            const existingBusinessOwnersNames = existingBusinessOwners.data?.map(doc => doc.name) ?? []

            const insertBusinessOwners = data.businessOwners.map(async (owner) => {
                if(existingBusinessOwnersNames?.includes(owner.name)) {
                    await supabase.from('startups_owners').update({
                        share: owner.share,
                    }).eq('startup_id', startup_id).eq('name', owner.name)
                }
                else {
                    await supabase.from('startups_owners').insert({
                        startup_id,
                        name: owner.name,
                        share: owner.share,
                    })
                }
            })

            await Promise.all(insertBusinessOwners)
        }
        catch (error: any) {
            return { error: error.message }
        }
    }
    
    if(error) return { error: error.message}

    return { success: true }
}

export const submitApplication = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    const { error, data } = await supabase.from('startups').select('id').eq('user_id', user?.id!).single()

    if(error) return { error: error.message }

    if(!data) return { error: 'Startup not found' }

    const { error: submitError } = await supabase.from('startups').update({
        submitted: true
    }).eq('id', data.id)

    if(submitError) return { error: submitError.message }

    return { success: true }
}