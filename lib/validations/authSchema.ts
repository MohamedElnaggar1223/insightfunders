import * as z from 'zod'

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: 'Password must be at least 6 characters long'
    }),
})

export const signUpSchema = z.object({
    firstName: z.string().min(2, {
        message: 'First name must be at least 2 characters long'
    }),
    lastName: z.string().min(2, {
        message: 'Last name must be at least 2 characters long'
    }),
    email: z.string().email({
        message: 'Please enter a valid email address'
    }),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long'
    }),
    role: z.enum(['startup', 'investor']),
})

export const personalDetailsSchema = z.object({
    address1: z.string({
        message: 'Please enter a valid address'
    }).max(50),
    city: z.string({
        message: 'Please enter a valid city'
    }).max(50),
    state: z.string().min(2).max(2),
    postalCode: z.string().min(3).max(5),
    dateOfBirth: z.string().min(10).refine((value) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(value);
    }, { message: 'Date must be in the format YYYY-MM-DD' })
    .refine((value) => {
        const eighteenYearsAgo = new Date();
        eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
        const date = new Date(value);
        return date <= eighteenYearsAgo;
    }, { message: 'You must be at least 18 years old' }),
    ssn: z.string().min(4, {
        message: 'Please enter a valid SSN'
    }).max(9, {
        message: 'Please enter a valid SSN'
    }),
})