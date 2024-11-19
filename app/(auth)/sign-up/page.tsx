"use client";
import SignUp from "@/components/auth/SignUp";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function SignUpPage({ searchParams }: Props) {
  const error =
    typeof searchParams.error === "string" ? searchParams.error : undefined;
  const message =
    typeof searchParams.message === "string" ? searchParams.message : undefined;

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [error]);

  return (
    <section className="w-full flex flex-col bg-[#1A1A1A] min-h-screen">
      <header className="flex justify-start text-sm lg:text-base items-center py-4 px-2 lg:px-8 text-white gap-2 lg:gap-4 font-semibold">
        <Link
          href="/"
          className="font-IntegralCF font-medium uppercase text-xs text-white"
        >
          <Image src="/images/iflogo.png" alt="logo" width={153} height={35} />
        </Link>
      </header>
      <div className="flex flex-col items-center justify-center gap-1 mt-24">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl  font-semibold text-white text-center">
            Create an account
          </h1>
        </div>
        <SignUp />
      </div>
      {message && (
        <div className="flex gap-1.5 border border-[#E9D7FE] rounded-[10px] bg-light-purple w-fit items-center justify-center px-3 py-2">
          <p className="text-xl text-main-purple font-medium">{message}</p>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent key={error} className="bg-white rounded-xl">
          <div className="flex flex-col gap-4 items-center justify-center">
            <DialogTitle className="text-xl md:text-2xl font-bold text-black text-center">
              Error
            </DialogTitle>

            <p className="text-base text-center font-normal text-red-600">
              {error}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
