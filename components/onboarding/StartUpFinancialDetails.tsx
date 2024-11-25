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
import { startUpFinancialDetailsSchema } from "@/lib/validations/onBoardingSchema";
import { useEffect, useState } from "react";
import { updateFinancialDetails } from "@/lib/actions/onboarding";
import PlaidLink from "../plaid/PlaidLink";
import { UserType } from "@/lib/types/user";
import { getBankAccount } from "@/lib/actions/user";
import { X } from "lucide-react";
import { updatePage } from "@/lib/server";
import { useRouter } from "next/navigation";

type Props = {
  user: UserType;
};

export default function StartUpFinancialDetailsContainer({ user }: Props) {
  const router = useRouter();

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof startUpFinancialDetailsSchema>>({
    resolver: zodResolver(startUpFinancialDetailsSchema),
    defaultValues: {
      stage: "Pre-seed",
      recentRaise: 0,
    },
  });

  const checkBankConnected = async () => {
    const bankAccount = await getBankAccount(user?.user.id!);

    if (!bankAccount) return false;
    return true;
  };

  const onSubmit = async (
    values: z.infer<typeof startUpFinancialDetailsSchema>
  ) => {
    setIsPending(true);

    const bankConnected = await checkBankConnected();

    if (!bankConnected) {
      setError("Please connect your bank account");
      setIsPending(false);
      return;
    }

    await updateFinancialDetails(values);
    setIsPending(false);
    await updatePage("/startup-details/financial");
    await updatePage("/startup-details");
    await updatePage("/startup-details/submit");

    router.replace("/startup-details/submit");
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-[90vw] flex flex-col pb-8 ipfield"
        >
          <PlaidLink user={user} />
          <FormField
            control={form.control}
            disabled={isPending}
            name="stage"
            render={({ field }) => (
              <FormItem className="relative flex flex-col gap-1 w-screen ipfieldfw">
                <FormLabel className="text-white">Stage</FormLabel>
                <FormControl>
                  <select
                    className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                    {...field}
                  >
                    {[
                      "Pre-seed",
                      "Seed",
                      "Series A",
                      "Series B",
                      "Series C",
                      "Series D",
                      "Series E",
                      "Series F",
                      "Public",
                    ].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage className="absolute text-red-600 -bottom-6" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            disabled={isPending}
            name="recentRaise"
            render={({ field }) => (
              <FormItem className="relative flex flex-col gap-1 w-screen ipfieldfw">
                <FormLabel className="text-white">
                  Recent Raise (in USD)
                </FormLabel>
                <FormControl>
                  <div className="flex flex-1 relative">
                    <p className="text-black absolute top-[0.975rem] left-[1rem] text-xs">
                      $
                    </p>
                    <input
                      type="text"
                      className="flex flex-1 px-6 placeholder:font-light py-3.5 text-sm rounded-[8px] outline-none"
                      placeholder="e.g. 15000"
                      {...field}
                      onChange={(e) =>
                        (/^\d+$/.test(e.target.value) ||
                          e.target.value === "") &&
                        form.setValue(
                          "recentRaise",
                          e.target.value === "" ? 0 : parseFloat(e.target.value)
                        )
                      }
                    />
                  </div>
                </FormControl>
                <FormMessage className="absolute text-red-600 -bottom-6" />
              </FormItem>
            )}
          />
          <button
            disabled={isPending}
            className="w-full !mt-8 bg-[#FF7A00] text-white font-bold rounded-[8px] mx-auto py-3.5 text-sm px-4 max-w-[216px] disabled:opacity-70"
            type="submit"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>

          {error && (
            <div className="border-2 border-[#F86C6C] gap-4 rounded-[8px] bg-[#FEF2F2] flex items-center justify-center px-4 py-6">
              <X size={24} className="text-[#F86C6C]" />
              <p className="text-black font-semibold">{error}</p>
            </div>
          )}
        </form>
      </Form>
      <button
        onClick={() => {
          router.push("/startup-details");
        }}
        className="text-white text-[13px py-2 px-4 bg-transparent font-Montserrat mt-2 flex justify-center w-full"
      >
        Go back
      </button>
    </>
  );
}
