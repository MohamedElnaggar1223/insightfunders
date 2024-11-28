import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUser } from "@/lib/actions/auth";
import { Edit } from "lucide-react";
import Link from "next/link";
import BasicInfoDetails from "./basic-info-details";

export default async function BasicInfo() {
  const user = await getUser();

  return (
    <section className="flex flex-1 flex-col gap-6">
      <>
        <div className="flex items-center justify-between gap-4 border-b border-[#808080] py-4">
          <p className="font-bold font-Montserrat text-white text-xl">
            Basic Information
          </p>
          <Link
            href="/profile?edit=true"
            className="w-24 h-10 bg-[#FF7A00] gap-2 text-white text-sm font-semibold rounded-[8px] flex items-center justify-center"
          >
            <Edit size={16} />
            Edit
          </Link>
        </div>
        <BasicInfoDetails user={user!} />
      </>
      <>
        <div className="flex items-center justify-between gap-4 border-b border-[#808080] py-4">
          <p className="font-bold font-Montserrat text-white text-xl">
            Profile picture
          </p>
        </div>
        <div className="text-left">
          <h4 className="text-lg text-white font-Montserrat mb-5">
            Brand logo
          </h4>
          <Avatar className="bg-[#F1F5F9] text-black border-4 border-[#FF7A00]">
            <AvatarImage src="" alt="company" />
            <AvatarFallback className="">
              {user?.userStartUp?.company_name?.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
          <div className="flex justify-start mt-5 flex-col gap-1">
            <span className="text-[#FF7A00] text-sm font-bold">Re-upload</span>
            <span className="text-[#808080] text-[13px] ">or</span>
            <span className="text-[#FF7A00] text-sm font-bold">Delete</span>
          </div>
        </div>
      </>
    </section>
  );
}

/* 

"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getUser } from "@/lib/actions/auth";
import { Edit } from "lucide-react";
import Link from "next/link";
import BasicInfoDetails from "./basic-info-details";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";

type FormData = {
  brandLogo: File | null;
};

type Props = {
  user: any;
};

const basicInfoSchema = z.object({
  brandLogo: z.instanceof(File).optional(),
});

export default async function BasicInfo({ user }: Props) {
  const form = useForm({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      brandLogo: null,
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="flex flex-1 flex-col gap-6">
      <div className="flex items-center justify-between gap-4 border-b border-[#808080] py-4">
        <p className="font-bold font-Montserrat text-white text-xl">
          Basic Information
        </p>
        <Link
          href="/profile?edit=true"
          className="w-24 h-10 bg-[#FF7A00] gap-2 text-white text-sm font-semibold rounded-[8px] flex items-center justify-center"
        >
          <Edit size={16} />
          Edit
        </Link>
      </div>
      <BasicInfoDetails user={user!} />
      <div className="flex items-center justify-between gap-4 border-b border-[#808080] py-4">
        <p className="font-bold font-Montserrat text-white text-xl">
          Profile picture
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-8"
        >
          <div className="text-left">
            <h4 className="text-lg text-white font-Montserrat mb-5">
              Brand logo
            </h4>
            <FormField
              control={form.control}
              name="brandLogo"
              render={({ field }) => (
                <FormItem className="relative flex flex-col gap-1 w-screen max-w-[384px]">
                  <FormControl>
                    <input
                      type="file"
                      className="hidden"
                      ref={fileInputRef}
                      onChange={(e) => {
                        field.onChange(
                          e?.target?.files ? e.target.files[0] : null
                        );
                      }}
                    />
                    <label
                      htmlFor="brandLogo"
                      className="cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Avatar className="bg-[#F1F5F9] text-black border-4 border-[#FF7A00]">
                        <AvatarImage src="" alt="company" />
                        <AvatarFallback>
                          {user?.userStartUp?.company_name?.slice(0, 1)}
                        </AvatarFallback>
                      </Avatar>
                    </label>
                  </FormControl>
                  <FormMessage className="absolute text-red-600 -bottom-6" />
                </FormItem>
              )}
            />
            <div className="flex justify-start mt-5 flex-col gap-1">
              <span
                className="text-[#FF7A00] text-sm font-bold cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                Re-upload
              </span>
              <span className="text-[#808080] text-[13px]">or</span>
              <span
                className="text-[#FF7A00] text-sm font-bold cursor-pointer"
                onClick={() => form.setValue("brandLogo", null)}
              >
                Delete
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#FF7A00] text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </Form>
    </section>
  );
}


*/
