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
    investorType: z.enum(["Individual", "Institution"], {
        message: 'Please select an option'
    }),
    accreditation: z.string().min(2, {
        message: 'Accreditation must be at least 2 characters long'
    }).optional(),
    futureInvestmentAmount: z.enum(['Less than $250K', '$250K - $1M', 'S1M - $5M', '$5M+', 'Not sure', ""], {
        message: 'Please select an option'
    }).refine(value => !value ? false: true, { message: 'Please select an option' }),
    institutionType: z.enum(["Other", "Corporation", "Family Office", "Fund", "Registered Investment Advisor (RIA)", ""], {
        message: 'Please select an option'
    }),
    // legalEntityType: z.enum(["Sole Proprietor / Single Member LLC", "Corporation", "Partnership", "LLC (non-single member)", "Trust/Estate", "Other", ""], {
    //     message: 'Please select an option'
    // }),
})

export const startUpFinancialDetailsSchema = z.object({
    stage: z.enum(['Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C', 'Series D', 'Series E', 'Series F', 'Public']),
    recentRaise: z.number().min(0, {
        message: 'Please enter a valid amount'
    })
})