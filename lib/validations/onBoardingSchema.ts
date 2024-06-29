import { countryDialingCodes } from '@/constants'
import * as z from 'zod'

const startUpDetailsSchemaEffect = z.object({
    companyName: z.string().min(2, {
        message: 'Company name must be at least 2 characters long'
    }),
    businessStructure: z.enum(["Sole Proprietorship", "Partnership", "Corporation", "S Corporation", "Limited Liability Company"]),
    businessOwners: z.array(z.object({
        name: z.string().min(2, {
            message: 'Owner name must be at least 2 characters long'
        }),
        share: z.number().min(25, {
            message: 'Share must be a bigger than 25%'
        }).max(100, {
            message: 'Share must be less than or equal to 100'
        }),
        saved: z.boolean().default(false)
    })),
    EIN: z.string().min(8, {
        message: 'EIN must be at least 8 characters long'
    }),
    companyEmail: z.string().email({
        message: 'Please enter a valid email address'
    }),
    phoneNumber: z.string().min(6, {
        message: 'Invalid mobile number'
    }).refine(value => {
        return /^\d+$/.test(value)
    }),
    countryCode: z.enum(Object.keys(countryDialingCodes) as [string, ...string[]], {
        message: 'Invalid code'
    }),
    address: z.string().min(6, {
        message: 'Address must be at least 6 characters long'
    }),
    industrySector: z.enum(["Technology", "Healthcare", "Financial Services", "Consumer Goods", "Industrial Goods", "Energy", "Real Estate", "Retail", "Media and Entertainment", "Transportation", "Telecommunications", "Agriculture", "Education", "Hospitality and Leisure", "Utilities", "Other"]),
    otherSector: z.string().optional(),
})
.refine(data => {
    if(data.industrySector === 'Other') {
        return !!data.otherSector
    }
    return true
}, { message: 'Please enter the sector', path: ['otherSector']})

export const startUpDetailsSchema = startUpDetailsSchemaEffect.innerType()

export const investorDetailsSchema = z.object({
    companyName: z.string().min(2, {
        message: 'Company name must be at least 2 characters long'
    }),
    companyEmail: z.string().email({
        message: 'Please enter a valid email address'
    }),
    companyWebsite: z.string().min(2, {
        message: 'Company website must be at least 2 characters long'
    }),
    minimumRevenueRequirement: z.enum(["N/A", "<$1M", "$1-10M", "$10-50M", "$50-100M", "$100M+"], {
        message: 'Please select an option'
    }),
    maxFacilitySize: z.enum(["N/A", "<$1M", "$1-10M", "$10-50M", "$50-250M", "$250M+"], {
        message: 'Please select an option'
    }),
    productsOffered: z.enum(["Venture Debt", "Asset-Based Lending", "Warehouse Lending", "Invoice and Contract Factoring", "Revenue-Based Financing", "Equipment Leasing", "M&A", "Recapitalizations and Refinancing", "Buyouts", "Bridge Loans", "Other"], {
        message: 'Please select an option'
    }).array(),
    geographiesServed: z.enum(["United States", "Canada", "Mexico", "United Kingdom", "Other"], {
        message: 'Please select an option'
    }).array(),
})