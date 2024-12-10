"use client";

import { Database } from "@/types/supabase";
import { useEffect, useState } from "react";
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
import Link from "next/link";
import { cn } from "@/lib/utils";
import { startUpDetailsSchema } from "@/lib/validations/onBoardingSchema";
import { Check, Loader2, X } from "lucide-react";
import { countryDialingCodes } from "@/constants";
import {
  saveStartUpDetails,
  updatePersonalDetails,
} from "@/lib/actions/onboarding";
import { useRouter } from "next/navigation";

type Props = {
  startUpDetails: {
    accepted: boolean;
    address: string | null;
    business_structure:
      | Database["public"]["Enums"]["business_structure"]
      | null;
    company_name: string | null;
    EIN: string | null;
    email: string | null;
    id: number;
    industry_sector: Database["public"]["Enums"]["industry_and_sector"] | null;
    other_industry_and_sector: string | null;
    phone_number: string | null;
    user_id: string;
  };
  startUpOwners: {
    id: number;
    name: string | null;
    share: number | null;
  }[];
};

export default function StartUpDetails({
  startUpDetails,
  startUpOwners,
}: Props) {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof startUpDetailsSchema>>({
    resolver: zodResolver(startUpDetailsSchema),
    defaultValues: {
      companyName: startUpDetails.company_name ?? "",
      businessStructure: startUpDetails.business_structure ?? "Partnership",
      businessOwners: startUpOwners.map((owner) => ({
        name: owner.name ?? "",
        share: owner.share ?? 0,
        saved: false,
      })),
      EIN: startUpDetails.EIN ?? "",
      companyEmail: startUpDetails.email ?? "",
      phoneNumber: startUpDetails.phone_number?.split(" ")[1] ?? "",
      countryCode:
        Object.entries(countryDialingCodes).find(
          ([code, value]) =>
            value === startUpDetails.phone_number?.split(" ")[0]
        )?.[0] ?? countryDialingCodes.US,
      address: startUpDetails.address ?? "",
      industrySector: startUpDetails.industry_sector ?? "Technology",
      otherSector: startUpDetails.other_industry_and_sector ?? "",
    },
  });
  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 3) {
      return digits;
    }
    if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (...event: any[]) => void) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    if (value.length <= 10) {
      onChange(formatPhoneNumber(value));
    }
  };
  form.watch("industrySector");
  form.watch("businessOwners");

  const ein = form.watch("EIN");

  useEffect(() => {
    if (ein?.length > 2 && ein?.at(2) !== "-") {
      form.setValue("EIN", `${ein.slice(0, 2)}-${ein.slice(2)}`);
    }
  }, [ein]);

  const onSubmit = async (values: z.infer<typeof startUpDetailsSchema>) => {
    setIsPending(true);

    const { error } = await saveStartUpDetails(startUpDetails.id, values);

    if (error) setError(error);
    else setSaveSuccess(true);

    router.push("/startup-details/financial");

    setIsPending(false);
  };

  const handleSaveStartUpDetails = async () => {
    setIsPending(true);

    const { error } = await saveStartUpDetails(
      startUpDetails.id,
      form.getValues()
    );

    if (error) setError(error);
    else setSaveSuccess(true);

    setIsPending(false);
  };

  useEffect(() => {
    if (saveSuccess) setTimeout(() => setSaveSuccess(false), 5000);
  }, [saveSuccess]);

  useEffect(() => {
    if (error) setTimeout(() => setError(null), 5000);
  }, [error]);

  const handleGoBack = async () => {
    // const values = {
    //   address1: "",
    //   city: "",
    //   state: "",
    //   postalCode: "",
    //   ssn: "",
    //   dateOfBirth: "",
    // };

    // setIsPending(true);
    // await updatePersonalDetails(values);
    // setIsPending(false);
    router.push("/personal-details");
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-[90vw] flex flex-col ipfield"
        >
          <div className="flex gap-4   flex-col">
            <FormField
              control={form.control}
              disabled={isPending}
              name="companyName"
              render={({ field }) => (
                <FormItem className="relative flex flex-col gap-1 w-screen  ipfieldfw">
                  <FormControl>
                    <input
                      className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                      placeholder="Company name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="block text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              disabled={isPending}
              name="businessStructure"
              render={({ field }) => (
                <FormItem className="relative flex flex-col gap-1 w-screen ipfieldfw mt-0">
                  <FormControl>
                    <select
                      className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                      {...field}
                    >
                      <option value="Sole Proprietorship">
                        Sole Proprietorship
                      </option>
                      <option value="Partnership">Partnership</option>
                      <option value="Corporation">Corporation</option>
                      <option value="S Corporation">S Corporation</option>
                      <option value="Limited Liability Company">
                        Limited Liability Company
                      </option>
                    </select>
                  </FormControl>
                  <FormMessage className="block text-red-600" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-4   flex-col">
            <FormField
              control={form.control}
              disabled={isPending}
              name="businessOwners"
              render={({ field }) => (
                <FormItem className="relative flex flex-col gap-1 w-screen ipfieldfw">
                  <p className="text-white text-sm font-thin mb-2">
                    Provide details of any individual with an ownership stake of
                    25% or more in your business.
                  </p>
                  <FormControl>
                    <div className="flex flex-col gap-4">
                      {form.getValues("businessOwners")?.length > 0 && (
                        <div className="border border-[#D0D5DD] gap-4 rounded-[2px] flex flex-col px-6 py-6">
                          {form
                            .getValues("businessOwners")
                            ?.map((owner, index) =>
                              owner.saved ? (
                                <div
                                  key={index}
                                  className="flex gap-4 items-center justify-center"
                                >
                                  <div className="flex items-center justify-start gap-4 flex-1">
                                    <p className="text-white">{owner.name}</p>
                                    <p className="text-white/80">
                                      {owner.share}% Share
                                    </p>
                                  </div>
                                  <X
                                    size={16}
                                    className="cursor-pointer text-white"
                                    onClick={() =>
                                      form.setValue(
                                        "businessOwners",
                                        form
                                          .getValues("businessOwners")
                                          ?.filter((_, i) => i !== index)
                                      )
                                    }
                                  />
                                </div>
                              ) : (
                                <div
                                  key={index}
                                  className="flex gap-4 items-center justify-center"
                                >
                                  <div className="w-[90%] flex items-center justify-between">
                                    <input
                                      className="flex border max-w-[220px] border-[#D0D5DD] rounded-[2px] px-4 py-2 outline-none"
                                      placeholder="Owner name"
                                      value={owner.name}
                                      onChange={(e) =>
                                        form.setValue(
                                          `businessOwners.${index}.name`,
                                          e.target.value
                                        )
                                      }
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                          form.setValue(
                                            `businessOwners.${index}.saved`,
                                            true
                                          );
                                        }
                                      }}
                                    />
                                    <input
                                      className="flex border max-w-[70px] border-[#D0D5DD] rounded-[2px] px-4 py-2 outline-none"
                                      placeholder="Share"
                                      type="number"
                                      value={owner.share}
                                      onChange={(e) =>
                                        form.setValue(
                                          `businessOwners.${index}.share`,
                                          parseInt(e.target.value)
                                        )
                                      }
                                      onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                          form.setValue(
                                            `businessOwners.${index}.saved`,
                                            true
                                          );
                                        }
                                      }}
                                    />
                                  </div>
                                  <Check
                                    size={16}
                                    className="cursor-pointer text-white"
                                    onClick={() =>
                                      form.setValue(
                                        `businessOwners.${index}.saved`,
                                        true
                                      )
                                    }
                                  />
                                </div>
                              )
                            )}
                        </div>
                      )}
                      <p
                        onClick={() =>
                          form.setValue("businessOwners", [
                            ...(form.getValues("businessOwners") ?? []),
                            { name: "", share: 25, saved: false },
                          ])
                        }
                        className="text-[#FFD6B0] cursor-pointer"
                      >
                        Add owner
                      </p>
                    </div>
                  </FormControl>
                  {form.getFieldState("businessOwners").error && (
                    <p className="block text-red-600 -bottom-6">
                      Please enter valid details
                    </p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              disabled={isPending}
              name="EIN"
              render={({ field }) => (
                <FormItem className="relative flex flex-col gap-1 w-screen ipfieldfw !mt-0">
                  <FormControl>
                    <input
                      className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                      placeholder="EIN e.g. XX-XXXXXXX"
                      {...field}
                      maxLength={9}
                    />
                  </FormControl>
                  <FormMessage className="block text-red-600" />
                </FormItem>
              )}
            />
            <FormItem className="relative !mt-0 mb-6">
              <div className="flex flex-1 overflow-hidden ipfieldfw rounded-tr-[8px] rounded-br-[8px] ">
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem className="flex">
                      <FormControl>
                        <select
                          className="flex border-y border-l border-[#D0D5DD] rounded-tl-[8px] rounded-bl-[8px] px-4 py-2 outline-none"
                          {...field}
                        >
                          {Object.entries(countryDialingCodes).map(
                            ([code, country]) => (
                              <option key={code} value={code}>
                                {code} {country}
                              </option>
                            )
                          )}
                        </select>
                      </FormControl>
                      <FormMessage className="absolute text-red-600 -bottom-7" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1 flex-1">
                      <FormControl>
                        <input
                          className="flex border-y border-r border-[#D0D5DD] rounded-tr-[8px] rounded-br-[8px] flex-1 px-4 py-3 outline-none"
                          placeholder="(555) 555-5555"
                          {...field}
                          onChange={(e) => handlePhoneChange(e, field.onChange)}
                          maxLength={14}
                        />
                      </FormControl>
                      <FormMessage className="absolute text-red-600 -bottom-7" />
                    </FormItem>
                  )}
                />
              </div>
            </FormItem>
            <FormField
              control={form.control}
              disabled={isPending}
              name="companyEmail"
              render={({ field }) => (
                <FormItem className="relative flex flex-col gap-1 w-screen ipfieldfw !mt-0">
                  <FormControl>
                    <input
                      className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                      placeholder="Business email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="block text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              disabled={isPending}
              name="address"
              render={({ field }) => (
                <FormItem className="relative flex flex-col gap-1 w-screen ipfieldfw !mt-0">
                  <FormControl>
                    <input
                      className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                      placeholder="Business address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="block text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              disabled={isPending}
              name="industrySector"
              render={({ field }) => (
                <FormItem className="relative flex flex-col gap-1 w-screen ipfieldfw !mt-0  ">
                  <FormControl>
                    <select
                      className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                      {...field}
                    >
                      <option value="Technology">Technology</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Financial Services">
                        Financial Services
                      </option>
                      <option value="Consumer Goods">Consumer Goods</option>
                      <option value="Industrial Goods">Industrial Goods</option>
                      <option value="Energy">Energy</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Retail">Retail</option>
                      <option value="Media and Entertainment">
                        Media and Entertainment
                      </option>
                      <option value="Transportation">Transportation</option>
                      <option value="Telecommunications">
                        Telecommunications
                      </option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Education">Education</option>
                      <option value="Hospitality and Leisure">
                        Hospitality and Leisure
                      </option>
                      <option value="Utilities">Utilities</option>
                      <option value="Other">Other</option>
                    </select>
                  </FormControl>
                  <FormMessage className="block text-red-600" />
                </FormItem>
              )}
            />
            {form.getValues("industrySector") === "Other" && (
              <FormField
                control={form.control}
                disabled={isPending}
                name="otherSector"
                render={({ field }) => (
                  <FormItem className="relative flex flex-col gap-1 w-screen ipfieldfw">
                    <FormControl>
                      <input
                        className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                        placeholder="Other sector"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="block text-red-600" />
                  </FormItem>
                )}
              />
            )}
          </div>

          <div className="flex items-center justify-center gap-2 w-full !mt-0">
            <button
              onClick={handleSaveStartUpDetails}
              disabled={isPending}
              className="w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70"
              type="button"
            >
              {isPending ? (
                <Loader2 stroke="#fff" className="animate-spin mx-auto" />
              ) : (
                "Save"
              )}
            </button>
            {/* || (form.getValues('businessOwners')?.length ?? 0) === 0 */}
            <button
              disabled={isPending}
              className="w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70"
              type="submit"
            >
              {isPending ? (
                <Loader2 stroke="#fff" className="animate-spin mx-auto" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>

        {/* {saveSuccess && (
                 <div className='border-2 border-[#00AE6E] gap-4 rounded-[2px] bg-[#ECFDF5] flex items-center justify-center px-12 py-6'>
                     <Check size={24} className='text-[#00AE6E]' />
                     <p className='text-black font-semibold'>Startup details saved successfully</p>
                 </div>
             )} */}
        {error && (
          <div className="border-2 border-[#F86C6C] gap-4 rounded-[2px] bg-[#FEF2F2] flex items-center justify-center px-12 py-6">
            <X size={24} className="text-[#F86C6C]" />
            <p className="text-black font-semibold">{error}</p>
          </div>
        )}
      </Form>
      <button
        onClick={handleGoBack}
        className="text-white text-[13px py-2 px-4 bg-transparent font-Montserrat mt-2"
      >
        Go back
      </button>
    </>
  );
}
