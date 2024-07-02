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
            from: values.email,
            to: ['maelnaggar1223@gmail.com', 'yizou@insightfunders.com'],
            subject: 'Contact Us',
            text: `First name: ${values.firstname}\nLast name: ${values.lastname}\nEmail: ${values.email}\nMobile: ${values.mobile}\nCountry code: ${values.countryCode}\nMessage: ${values.message}`
        })
    }
    catch(e) {
        console.error(e)
    }
} 