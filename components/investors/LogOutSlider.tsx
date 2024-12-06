"use client";

import { signOut } from "@/lib/actions/auth";
import { Loader2, LogOutIcon } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";

export default function LogOutSlider() {
  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);
    await signOut();
    setLoading;
  };

  return (
    <div className="w-full">
      <button
        onClick={handleLogOut}
        className="flex gap-3 cursor-pointer w-[80%] items-center justify-center mx-auto border border-[#808080] py-4 rounded-[8px]"
      >
        {/* <LogOutIcon size={16} stroke="#fff" /> */}
        <img src="/images/logout.svg" alt="" />
        <p className="font-Montserrat text-sm text-white leading-[17px] font-[600]">
          Log Out
        </p>
      </button>
      <Dialog open={loading}>
        <DialogContent className="flex items-center justify-center bg-transparent border-none shadow-none outline-none">
          <Loader2 className="animate-spin" size={42} color="#000" />
        </DialogContent>
      </Dialog>
    </div>
  );
}
