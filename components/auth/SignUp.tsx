"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signUpSchema } from "@/lib/validations/authSchema";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";
import { signUp } from "@/lib/actions/auth";
import Link from "next/link";
import "../../app/globals.css";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [lastAttempt, setLastAttempt] = useState<number>(0);
  const COOLDOWN_PERIOD = 60000; // 1 minute in milliseconds
  const router = useRouter();
  const [rolePage, setRolePage] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "startup",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    const now = Date.now();
    if (now - lastAttempt < COOLDOWN_PERIOD) {
      return;
    }

    try {
      setLastAttempt(now);
      const result = await signUp(values);

      console.log({ result });

      if (result.error) {
        return;
      }

      if (result.success) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleContinue = () => {
    const role = form.getValues("role");
    if (role) {
      setRolePage(false);
    }
  };

  useEffect(() => {
    if (!rolePage) form.setValue("firstName", "");
  }, [rolePage, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-[90vw] flex flex-col pb-8 gap-4 ipfield "
      >
        {rolePage ? (
          <>
            <p className="font-light text-white text-center">
              Select an option from below
            </p>
            <FormField
              control={form.control}
              disabled={isPending}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-3 ">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 d-flex justify-content-center m-auto selectcarddiv"
                    >
                      <FormItem
                        className={cn(
                          "m-auto  flex justify-between items-start p-4 pb-6 gap-4 max-w-[360px]  border-2 rounded-[12px] bg-white selectcard",
                          form.getValues().role === "startup"
                            ? "border-[#FF7A00]"
                            : "border-white"
                        )}
                      >
                        <FormLabel className="font-normal">
                          <div className="flex gap-4 pl-2 items-center justify-between cursor-pointer">
                            {form.getValues().role !== "startup" ? (
                              <Circle
                                size={24}
                                fill="#fff"
                                stroke="#00000080"
                              />
                            ) : (
                              <CheckCircle2
                                size={24}
                                fill="#FF7A00"
                                stroke="#fff"
                              />
                            )}

                            <div className="flex flex-col gap-1 ">
                              <p className="text-black font-semibold text-base font-Montserrat">
                                Borrower
                              </p>
                              <p className="text-black text-xs leading-5 font-Montserrat">
                                I am a borrower, looking for funding.
                              </p>
                            </div>
                          </div>
                        </FormLabel>
                        <FormControl>
                          <RadioGroupItem
                            defaultChecked={true}
                            value="startup"
                            className={cn(
                              "mt-0imp opacity-0",
                              form.getValues().role === "startup"
                                ? "bg-main-purple"
                                : "bg-white"
                            )}
                          />
                        </FormControl>
                      </FormItem>
                      <FormItem
                        className={cn(
                          "flex m-auto justify-between items-start p-4 pb-6 gap-4 border-2 rounded-[12px] bg-white selectcard",
                          form.getValues().role === "investor"
                            ? "border-[#FF7A00]"
                            : "border-white"
                        )}
                      >
                        <FormLabel className="font-normal">
                          <div className="flex gap-4 pl-2 items-center justify-between cursor-pointer">
                            {form.getValues().role !== "investor" ? (
                              <Circle
                                size={24}
                                fill="#fff"
                                stroke="#00000080"
                              />
                            ) : (
                              <CheckCircle2
                                size={24}
                                fill="#FF7A00"
                                stroke="#fff"
                              />
                            )}
                            <div className="flex flex-col gap-1">
                              <p className="text-black font-semibold text-base font-Montserrat">
                                Lender
                              </p>
                              <p className="text-black text-xs leading-5 font-Montserrat">
                                I am a lender, looking for deals.
                              </p>
                            </div>
                          </div>
                        </FormLabel>
                        <FormControl>
                          <RadioGroupItem
                            value="investor"
                            className={cn(
                              "mt-0imp opacity-0",
                              form.getValues().role === "investor"
                                ? "bg-main-purple"
                                : "bg-white"
                            )}
                          />
                        </FormControl>
                      </FormItem>
                      <FormItem
                        className={cn(
                          "flex m-auto justify-between items-start p-4 pb-6 gap-4 border-2 rounded-[12px] bg-white selectcard",
                          form.getValues().role === "partner"
                            ? "border-[#FF7A00]"
                            : "border-white"
                        )}
                      >
                        <FormLabel className="font-normal">
                          <div className="flex gap-4 pl-2 items-center justify-between cursor-pointer">
                            {form.getValues().role !== "partner" ? (
                              <Circle
                                size={24}
                                fill="#fff"
                                stroke="#00000080"
                              />
                            ) : (
                              <CheckCircle2
                                size={24}
                                fill="#FF7A00"
                                stroke="#fff"
                              />
                            )}
                            <div className="flex flex-col gap-1">
                              <p className="text-black font-semibold text-base font-Montserrat">
                                Partner
                              </p>
                              <p className="text-black text-xs leading-5 font-Montserrat">
                                I am a partner, looking for partnerships.
                              </p>
                            </div>
                          </div>
                        </FormLabel>
                        <FormControl>
                          <RadioGroupItem
                            value="partner"
                            className={cn(
                              "mt-0imp opacity-0",
                              form.getValues().role === "partner"
                                ? "bg-main-purple"
                                : "bg-white"
                            )}
                          />
                        </FormControl>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              onClick={handleContinue}
              className="w-full !mt-8 bg-[#FF7A00] text-white font-medium rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70"
            >
              Continue
            </button>
            <Link
              href="/sign-in"
              className="text-white font-normal text-sm font-Montserrat mx-auto"
            >
              Back to login
            </Link>
          </>
        ) : (
          <>
            <FormField
              control={form.control}
              disabled={isPending}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-3 hidden">
                  <FormLabel>Select an option from below</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem
                        className={cn(
                          "flex justify-between items-start p-4 pb-6 gap-4 max-w-[360px] w-screen border-2 rounded-xl",
                          form.getValues().role === "startup"
                            ? "border-main-purple"
                            : "border-[#EAECF0]"
                        )}
                      >
                        <FormLabel className="font-normal">
                          <div className="flex gap-4 items-start justify-between cursor-pointer">
                            <Image
                              src="/images/startup.svg"
                              alt="Startup"
                              width={48}
                              height={48}
                            />
                            <div className="flex flex-col gap-2">
                              <p className="text-[#344054] font-medium">
                                Startup
                              </p>
                              <p className="text-main-gray leading-5">
                                I am a startup, looking for investors.
                              </p>
                            </div>
                          </div>
                        </FormLabel>
                        <FormControl>
                          <RadioGroupItem
                            defaultChecked={true}
                            value="startup"
                            className={cn(
                              "mt-0imp",
                              form.getValues().role === "startup"
                                ? "bg-main-purple"
                                : "bg-white"
                            )}
                          />
                        </FormControl>
                      </FormItem>
                      <FormItem
                        className={cn(
                          "flex justify-between items-start p-4 pb-6 gap-4 max-w-[360px] w-screen border-2 rounded-xl",
                          form.getValues().role === "investor"
                            ? "border-main-purple"
                            : "border-[#EAECF0]"
                        )}
                      >
                        <FormLabel className="font-normal">
                          <div className="flex gap-4 items-start justify-between cursor-pointer">
                            <Image
                              src="/images/investor.svg"
                              alt="Investor"
                              width={48}
                              height={48}
                            />
                            <div className="flex flex-col gap-2">
                              <p className="text-[#344054] font-medium">
                                Investor
                              </p>
                              <p className="text-main-gray leading-5">
                                I am an investor, looking for startups.
                              </p>
                            </div>
                          </div>
                        </FormLabel>
                        <FormControl>
                          <RadioGroupItem
                            value="investor"
                            className={cn(
                              "mt-0imp",
                              form.getValues().role === "investor"
                                ? "bg-main-purple"
                                : "bg-white"
                            )}
                          />
                        </FormControl>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              disabled={isPending}
              name="firstName"
              render={({ field }) => (
                <FormItem className="relative flex flex-col gap-1  max-w-[450px] ">
                  <FormControl>
                    <input
                      className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] !mt-0 outline-none"
                      placeholder="First name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className=" text-red-600  !mt-0" />
                </FormItem>
              )}
            />
            {form.getValues().role !== "partner" && (
              <FormField
                control={form.control}
                disabled={isPending}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="relative flex flex-col gap-1 !mt-0  max-w-[450px]">
                    <FormControl>
                      <input
                        className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                        placeholder="Last name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className=" text-red-600  !mt-0" />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              disabled={isPending}
              name="email"
              render={({ field }) => (
                <FormItem className="relative flex flex-col gap-1 !mt-0  max-w-[450px]">
                  <FormControl>
                    <input
                      className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className=" text-red-600  !mt-0" />
                </FormItem>
              )}
            />
            {/* <FormField
                            control={form.control}
                            name="dateOfBirth"
                            render={({ field }) => (
                                <FormItem className="flex flex-col relative">
                                <FormLabel>Date of birth</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "flex-1 border border-[#D0D5DD] rounded-[8px] px-4 py-2 outline-none max-w-[384px] text-base",
                                                !field.value && "text-muted-foreground"
                                            )}
                                            >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 bg-white" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                        date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage className='absolute text-red-600 -bottom-6' />
                                </FormItem>
                            )}
                        /> */}
            <FormField
              control={form.control}
              disabled={isPending}
              name="password"
              render={({ field }) => (
                <FormItem className="relative flex flex-col gap-1 !mt-0  max-w-[450px]">
                  <FormControl>
                    <div className="relative">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className="flex flex-1 w-full px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                        placeholder="Password"
                        {...field}
                      />
                      {passwordVisible ? (
                        <Eye
                          className={cn(
                            "absolute top-[36%] z-50 cursor-pointer left-[92%]"
                          )}
                          onClick={(e) => {
                            e.stopPropagation();
                            setPasswordVisible((prev) => !prev);
                          }}
                          size={18}
                        />
                      ) : (
                        <EyeOff
                          className={cn(
                            "absolute top-[36%] z-50 cursor-pointer left-[92%]"
                          )}
                          onClick={(e) => {
                            e.stopPropagation();
                            setPasswordVisible((prev) => !prev);
                          }}
                          size={18}
                        />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage className=" text-red-600 !mt-0" />
                </FormItem>
              )}
            />
            {form.getValues().role === "partner" && (
              <FormField
                control={form.control}
                disabled={isPending}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="relative flex flex-col gap-1 !mt-0  max-w-[450px]">
                    <FormControl>
                      <div className="relative">
                        <input
                          type={confirmPasswordVisible ? "text" : "password"}
                          className="flex flex-1 w-full px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                          placeholder="Confirm Password"
                          {...field}
                        />
                        {confirmPasswordVisible ? (
                          <Eye
                            className={cn(
                              "absolute top-[36%] z-50 cursor-pointer left-[92%]"
                            )}
                            onClick={(e) => {
                              e.stopPropagation();
                              setConfirmPasswordVisible((prev) => !prev);
                            }}
                            size={18}
                          />
                        ) : (
                          <EyeOff
                            className={cn(
                              "absolute top-[36%] z-50 cursor-pointer left-[92%]"
                            )}
                            onClick={(e) => {
                              e.stopPropagation();
                              setConfirmPasswordVisible((prev) => !prev);
                            }}
                            size={18}
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage className=" text-red-600 !mt-0" />
                  </FormItem>
                )}
              />
            )}
            <button
              type="submit"
              disabled={isPending}
              className="w-full !mt-4 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70"
            >
              {isPending ? (
                <Loader2 stroke="#fff" className="animate-spin mx-auto" />
              ) : (
                "Sign up"
              )}
            </button>
            <p className="text-white font-normal !mt-4 text-sm font-Montserrat mx-auto">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="text-[#FF7A00] underline font-normal"
              >
                Sign in
              </Link>
            </p>
            <p
              onClick={() => !isPending && setRolePage(true)}
              className="text-white text-sm flex items-center justify-start gap-1 cursor-pointer"
            >
              <ArrowLeft size={16} />{" "}
              <span className="font-semibold">Back</span>
            </p>
          </>
        )}
      </form>
    </Form>
  );
}
