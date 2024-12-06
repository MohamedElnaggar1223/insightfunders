import Notifications from "@/components/shared/Notifications";
import { getUser } from "@/lib/actions/auth";
import { getNotifications } from "@/lib/actions/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default async function HeaderInvestor() {
  const user = await getUser();
  const notifications = await getNotifications(user?.user.id!);

  return (
    <div className="ml-auto flex sticky items-center top-0 z-30 justify-end h-fit px-12 py-6 bg-[#212121] text-white w-full gap-3 shadow-lg navbarmobilemenu">
      <div className="flex gap-3 items-center">
        <Link
          href="/profile"
          className="flex items-center justify-center gap-3"
        >
          <Avatar className="bg-[#F1F5F9] text-black border border-custom-gray">
            <AvatarImage src="" alt="company" />
            <AvatarFallback className="">
              {user?.userInvestor?.company_name?.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <p className="text-[#FEFFFE] font-light text-sm leading-[17px]">
              {user?.userInvestor?.company_name}
            </p>
            <p className="text-[#FEFFFE] font-light text-xs leading-[17px] self-start">
              {user?.userInfo?.role}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
