'use client'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { personalDetailsSchema } from "@/lib/validations/authSchema"
import { useEffect, useState } from "react"
import { updatePersonalDetails } from "@/lib/actions/onboarding"
import { format } from "date-fns"
import { Montserrat } from "next/font/google";

export default function PersonalDetails()
{
    const [isPending, setIsPending] = useState(false)
    const [ssn, setSSN] = useState<string>(''); // Explicitly define ssn type as string

    // Define the type of 'value' as string
    const formatSSN = (value: string): string => {
        // Remove all non-numeric characters
        value = value.replace(/\D/g, '');

        // Add dashes after 3rd and 5th digits
        if (value.length > 5) {
            return `${value.slice(0, 3)}-${value.slice(3, 5)}-${value.slice(5, 9)}`;
        } else if (value.length > 3) {
            return `${value.slice(0, 3)}-${value.slice(3, 5)}`;
        } else {
            return value;
        }
    };

    // Define the type of 'event' as React.ChangeEvent<HTMLInputElement>
    const handleSSNChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const formattedSSN = formatSSN(event.target.value);
        setSSN(formattedSSN);

        // Sync the formatted value back to the form field
        form.setValue('ssn', formattedSSN);
    };
    const form = useForm<z.infer<typeof personalDetailsSchema>>({
        resolver: zodResolver(personalDetailsSchema),
        defaultValues: {
            address1: '',
            city: '',
            state: '',
            postalCode: '',
            ssn: '',
            dateOfBirth: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof personalDetailsSchema>) => {
        setIsPending(true)
        await updatePersonalDetails(values)
        setIsPending(false)
    }

    const dof = form.watch('dateOfBirth')

    useEffect(() => {
        let value = dof?.replace(/\D/g, ''); // Remove non-digits
        let formattedValue = '';

        if (value?.length > 0) {
            // Format month
            formattedValue = value.substring(0, 2);
            if (value.length > 2) {
            formattedValue += '/' + value.substring(2, 4);
            }
            if (value.length > 4) {
            formattedValue += '/' + value.substring(4, 8);
            }
        }

        form.setValue('dateOfBirth', formattedValue)
    }, [dof])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 max-w-[90vw] flex flex-col gap-4 pb-8 ipfield'>
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="address1"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1  !mt-0 max-w-[450px]'>
                            <FormControl>
                                <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none ipfield' placeholder="Address" {...field} />
                            </FormControl>
                            <FormMessage className='!mt-0 text-red-600 ' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="city"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1  !mt-0 max-w-[450px]'>
                            <FormControl>
                                <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="City" {...field} />
                            </FormControl>
                            <FormMessage className='!mt-0 text-red-600 ' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="state"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1  !mt-0 max-w-[450px]'>
                            <FormControl>
                                <select defaultValue='' className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none'  {...field}>
                                    <option disabled value=''>State</option>
                                    <option value="AL">AL</option>
                                    <option value="AK">AK</option>
                                    <option value="AZ">AZ</option>
                                    <option value="AR">AR</option>
                                    <option value="CA">CA</option>
                                    <option value="CO">CO</option>
                                    <option value="CT">CT</option>
                                    <option value="DE">DE</option>
                                    <option value="FL">FL</option>
                                    <option value="GA">GA</option>
                                    <option value="HI">HI</option>
                                    <option value="ID">ID</option>
                                    <option value="IL">IL</option>
                                    <option value="IN">IN</option>
                                    <option value="IA">IA</option>
                                    <option value="KS">KS</option>
                                    <option value="KY">KY</option>
                                    <option value="LA">LA</option>
                                    <option value="ME">ME</option>
                                    <option value="MD">MD</option>
                                    <option value="MA">MA</option>
                                    <option value="MI">MI</option>
                                    <option value="MN">MN</option>
                                    <option value="MS">MS</option>
                                    <option value="MO">MO</option>
                                    <option value="MT">MT</option>
                                    <option value="NE">NE</option>
                                    <option value="NV">NV</option>
                                    <option value="NH">NH</option>
                                    <option value="NJ">NJ</option>
                                    <option value="NM">NM</option>
                                    <option value="NY">NY</option>
                                    <option value="NC">NC</option>
                                    <option value="ND">ND</option>
                                    <option value="OH">OH</option>
                                    <option value="OK">OK</option>
                                    <option value="OR">OR</option>
                                    <option value="PA">PA</option>
                                    <option value="RI">RI</option>
                                    <option value="SC">SC</option>
                                    <option value="SD">SD</option>
                                    <option value="TN">TN</option>
                                    <option value="TX">TX</option>
                                    <option value="UT">UT</option>
                                    <option value="VT">VT</option>
                                    <option value="VA">VA</option>
                                    <option value="WA">WA</option>
                                    <option value="WV">WV</option>
                                    <option value="WI">WI</option>
                                    <option value="WY">WY</option>
                                </select>
                            </FormControl>
                            <FormMessage className=' text-red-600 !mt-0' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="postalCode"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1  !mt-0 max-w-[450px]'>
                            <FormControl>
                                <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="Postal Code" {...field} />
                            </FormControl>
                            <FormMessage className=' text-red-600  !mt-0' />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="ssn"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1  !mt-0 max-w-[450px]'>
                            <FormControl>
                                <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="SSN" {...field} value={ssn}
                            onChange={handleSSNChange}
                            maxLength={11} />
                            </FormControl>
                            <FormMessage className=' text-red-600 !mt-0 ' />
                        </FormItem>
                    )}
                />  
                <FormField
                    control={form.control}
                    disabled={isPending}
                    name="dateOfBirth"
                    render={({ field }) => (
                        <FormItem className='relative flex flex-col gap-1  !mt-0 max-w-[450px]'>
                            <FormControl>
                                <input className='flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none' placeholder="DOB e.g. MM/DD/YYYY" {...field} />
                            </FormControl>
                            <FormMessage className='text-red-600 !mt-0 ' />
                        </FormItem>
                    )}
                />
                <button disabled={isPending} className='w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70' type="submit">{isPending ? 'Submitting...' : 'Submit'}</button>
            </form>
        </Form>
    )
}