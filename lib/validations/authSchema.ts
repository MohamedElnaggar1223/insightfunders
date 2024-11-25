import * as z from 'zod'

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: 'Password must be at least 6 characters long'
    })
})

export const signUpSchema = z.object({
    firstName: z.string().optional(),
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

// export const personalDetailsSchema = z.object({
//     address1: z.string({
//         message: 'Please enter a valid address'
//     }).max(50),
//     city: z.string({
//         message: 'Please enter a valid city'
//     }).max(50),
//     state: z.string().min(2).max(2),
//     postalCode: z.string().min(3).max(5),
//     dateOfBirth: z.string().min(10).refine((value) => {
//         const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
//         return regex.test(value);
//     }, { message: 'Date must be in the format MM/DD/YYYY' })
//     .refine((value) => {
//         const eighteenYearsAgo = new Date();
//         eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
//         const date = new Date(value);
//         return date <= eighteenYearsAgo;
//     }, { message: 'You must be at least 18 years old' }),
//     ssn: z.string().min(4, {
//         message: 'Please enter a valid SSN'
//     }).max(11, {
//         message: 'Please enter a valid SSN'
//     })
// })


export const personalDetailsSchema = z.object({
  address1: z.string({
    required_error: 'Address is required',
    invalid_type_error: 'Please enter a valid address'
  })
  .min(2, 'Address must be at least 2 characters')
  .max(50, 'Address must be at most 50 characters'),
  city: z.string({
    required_error: 'City is required',
    invalid_type_error: 'Please enter a valid city'
  })
  .min(2, 'City must be at least 2 characters')
  .max(50, 'City must be at most 50 characters'),
  state: z.string({
    required_error: 'State is required',
    invalid_type_error: 'Please enter a valid state'
  }).length(2, 'State must be exactly 2 characters'),
  postalCode: z.string({
    required_error: 'Postal Code is required',
    invalid_type_error: 'Please enter a valid postal code'
  }).min(5, 'Postal Code must be exactly 5 characters').max(5, 'Postal Code must be exactly 5 characters'),
  dateOfBirth: z.string({
    required_error: 'Date of Birth is required',
    invalid_type_error: 'Please enter a valid date of birth'
  }).min(10, 'Date of Birth must be in the format MM/DD/YYYY').refine((value) => {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
    return regex.test(value);
  }, { message: 'Date must be in the format MM/DD/YYYY' }).refine((value) => {
    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    const date = new Date(value);
    return date <= eighteenYearsAgo;
  }, { message: 'You must be at least 18 years old' }),
  ssn: z.string({
    required_error: 'SSN is required',
    invalid_type_error: 'Please enter a valid SSN'
  }).min(11, 'SSN must be in the format XXX-XX-XXXX').max(11, 'SSN must be in the format XXX-XX-XXXX')
});