"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { submitApplication } from "@/lib/actions/onboarding";
import { Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function StartUpSubmitApplication() {
  const router = useRouter();

  const [checked, setChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const { error } = await submitApplication();

    if (error) setError(error);
    setIsSubmitting(false);

    router.refresh();
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 items-center justify-center">
        <Checkbox
          className="rounded-[4px] border-white checked:!text-white"
          checked={checked}
          onCheckedChange={(value) => setChecked(value ? true : false)}
          id="terms"
        />
        <label
          htmlFor="terms"
          className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to the{" "}
          <span onClick={() => setOpen(true)} className="underline">
            Mutual Non-Disclosure Agreement
          </span>
        </label>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex items-center justify-center bg-white border-none shadow-none outline-none">
          <h2>Non Disclosure Agreement</h2>
        </DialogContent>
        <DialogClose />
      </Dialog>
      <button
        onClick={handleSubmit}
        disabled={!checked}
        className="w-full bg-[#FF7A00] text-white font-bold rounded-[2px] py-5 text-sm px-4"
      >
        {isSubmitting ? (
          <Loader2 stroke="#fff" className="animate-spin mx-auto" />
        ) : (
          "Submit Application"
        )}
      </button>
      {error && (
        <div className="border-2 border-[#F86C6C] gap-4 rounded-[8px] bg-[#FEF2F2] flex items-center justify-center px-12 py-6">
          <X size={24} className="text-[#F86C6C]" />
          <p className="text-black font-semibold">{error}</p>
        </div>
      )}
    </div>
  );
}
