'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { partnerSignUpSchema } from '@/lib/validations/authSchema';
import { useState } from 'react';
import { Eye, EyeOff, Loader2, ArrowLeft } from 'lucide-react';
import { partnerSignUp } from '@/lib/actions/auth';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function SignUp() {
  const [isPending, setIsPending] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof partnerSignUpSchema>>({
    resolver: zodResolver(partnerSignUpSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      status: 'active',
    },
  });

  const onSubmit = async (values: z.infer<typeof partnerSignUpSchema>) => {
    setIsPending(true);
    try {
      await partnerSignUp(values);
    } catch (error) {
      console.error('Error during sign-up:', error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-[90vw] flex flex-col pb-8 gap-4 ipfield"
      >
        <FormField
          control={form.control}
          disabled={isPending}
          name="firstName"
          render={({ field }) => (
            <FormItem className="relative flex flex-col gap-1 max-w-[450px]">
              <FormControl>
                <input
                  className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] !mt-0 outline-none"
                  placeholder="First name"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute text-red-600 -bottom-6" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={isPending}
          name="lastName"
          render={({ field }) => (
            <FormItem className="relative flex flex-col gap-1 !mt-0 max-w-[450px]">
              <FormControl>
                <input
                  className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                  placeholder="Last name"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute text-red-600 -bottom-6" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={isPending}
          name="email"
          render={({ field }) => (
            <FormItem className="relative flex flex-col gap-1 !mt-0 max-w-[450px]">
              <FormControl>
                <input
                  className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute text-red-600 -bottom-6" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={isPending}
          name="password"
          render={({ field }) => (
            <FormItem className="relative flex flex-col gap-1 !mt-0 max-w-[450px]">
              <FormControl>
                <div className="relative">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    className="flex flex-1 w-full px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                    placeholder="Password"
                    {...field}
                  />
                  {passwordVisible ? (
                    <Eye
                      className={cn('absolute top-[36%] z-50 cursor-pointer left-[92%]')}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPasswordVisible((prev) => !prev);
                      }}
                      size={18}
                    />
                  ) : (
                    <EyeOff
                      className={cn('absolute top-[36%] z-50 cursor-pointer left-[92%]')}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPasswordVisible((prev) => !prev);
                      }}
                      size={18}
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage className="absolute text-red-600 -bottom-6" />
            </FormItem>
          )}
        />
        <button
          disabled={isPending}
          className="w-full !mt-4 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70"
          type="submit"
        >
          {isPending ? <Loader2 stroke="#fff" className="animate-spin mx-auto" /> : 'Sign up'}
        </button>
        <p className="text-white font-normal !mt-4 text-sm font-Montserrat mx-auto">
          Already have an account?{' '}
          <Link href="/partner/sign-in" className="text-[#FF7A00] underline font-normal">
            Sign in
          </Link>
        </p>
        <p
          onClick={() => !isPending}
          className="text-white text-sm flex items-center justify-start gap-1 cursor-pointer"
        >
          <ArrowLeft size={16} /> <span className="font-semibold">Back</span>
        </p>
      </form>
    </Form>
  );
}
