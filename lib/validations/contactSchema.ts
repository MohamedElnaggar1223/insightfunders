import { countryDialingCodes } from '@/constants'
import z from 'zod'

export const getInTouchSchema = z.object({
    firstname: z.string().min(2, {
        message: 'Invalid job title'
    }),
    lastname: z.string().min(2, {
        message: 'Invalid job title'
    }),
    company_name: z.string().min(2, {
        message: 'Invalid company name'
    }),
    business_email: z.string().email(),
    annual_recurring: z.enum(['', '0-$120k', '$120k-$1M', '$1M-$5M', '$5M or more']).refine(data => !data ? false: true, { message: 'Please Select an option' }),
    runway: z.enum(['', '0-6 months', '6-12 months', '12+ months', 'Profitable']).refine(data => !data ? false: true, { message: 'Please Select an option' }),
    description: z.string().min(10, {
        message: 'Message must be at least 10 characters long'
    }),
})