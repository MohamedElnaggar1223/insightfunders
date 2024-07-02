import { countryDialingCodes } from '@/constants'
import z from 'zod'

export const getInTouchSchema = z.object({
    firstname: z.string().min(2, {
        message: 'Invalid job title'
    }),
    lastname: z.string().min(2, {
        message: 'Invalid job title'
    }),
    email: z.string().email(),
    mobile: z.string().min(6, {
        message: 'Invalid mobile number'
    }).refine(value => {
        return /^\d+$/.test(value)
    }),
    countryCode: z.enum(Object.keys(countryDialingCodes) as [string, ...string[]]),
    message: z.string().min(10, {
        message: 'Message must be at least 10 characters long'
    }),
})