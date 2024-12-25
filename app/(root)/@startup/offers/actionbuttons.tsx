"use client";
import { acceptRequest, rejectRequest } from "@/lib/actions/startup";
import { UserType } from "@/lib/types/user";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  user: UserType;
  requestId: number;
};

export default function ActionButtons({ user, requestId }: Props) {
  const [loading, setLoading] = useState(false);

  console.log({ user, requestId });

  const handleAccept = async () => {
    setLoading(true);
    await acceptRequest(user?.userStartUp?.id!, requestId);
    setLoading(false);
  };

  const handleReject = async () => {
    setLoading(true);
    await rejectRequest(user?.userStartUp?.id!, requestId);
    setLoading(false);
  };

  return (
    <div className={cn("flex gap-4", loading && "opacity-50")}>
      <button
        onMouseDown={handleReject}
        disabled={loading}
        className="bg-black rounded-[8px] w-24 h-10 text-white font-semibold text-sm"
      >
        Decline
      </button>
      <button
        onMouseDown={handleAccept}
        disabled={loading}
        className="bg-[#FF7A00] rounded-[8px] w-24 h-10 text-white font-semibold text-sm"
      >
        Accept
      </button>
    </div>
  );
}
