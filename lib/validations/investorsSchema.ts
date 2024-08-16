import * as z from 'zod'

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf"]

export const contractSchema = z.object({
    investorId: z.number(),
    startupId: z.number(),
    amountInvested: z.number({
        message: "Amount invested is required"
    }).refine((value) => value > 0, {
        message: "Amount invested must be greater than 0"
    }),
    interestRate: z.number({
        message: "Interest rate is required"
    }).refine((value) => value > 0, {
        message: "Interest rate must be greater than 0"
    }).refine((value) => value < 100, {
        message: "Interest rate must be less than 100"
    }),
    maturityDate: z.date({
        message: "Maturity date is required"
    }),
    paymentInterval: z.enum(['week', 'month', 'quarter', 'year', '']).refine((value) => value !== '', {
        message: "Payment interval is required"
    }),
    termSheet: z.instanceof(File).refine((value) => value.size <= MAX_FILE_SIZE, {
        message: "Max file size is 5MB."
    }).refine((value) => ACCEPTED_FILE_TYPES.includes(value.type), {
        message: "Only .pdf formats are supported."
    })
})
