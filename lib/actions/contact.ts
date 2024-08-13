'use server'
import nodemailer from 'nodemailer'
import z from 'zod'
import { getInTouchSchema } from '../validations/contactSchema'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'maelnaggar1223@gmail.com',
        pass: 'sukw cebr vvee lvva', 
    }
})

export const sendMail = async (values: z.infer<typeof getInTouchSchema>) => {
    try {
        await transporter.sendMail({
            from: values.business_email,
            to: ['maelnaggar1223@gmail.com', 'yizou@insightfunders.com'],
            subject: 'Contact Us',
            text: `First name: ${values.firstname}\nLast name: ${values.lastname}\nCompany Name: ${values.company_name}\nEmail: ${values.business_email}\nAnnual Recurring: ${values.annual_recurring}\nRunway: ${values.runway}\nDescription: ${values.description}`
        })
    }
    catch(e) {
        console.error(e)
    }
} 