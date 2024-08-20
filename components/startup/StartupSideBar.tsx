import { UserType } from "@/lib/types/user";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import LogOutSlider from "../investors/LogOutSlider";
import StartupSideBarLinks from "./StartupSideBarLinks";

type Props = {
    user: UserType
}

export default async function StartupSideBar({ user }: Props)
{
    return (
        <aside className='bg-[#212121] h-screen flex w-[342px] flex-col items-center justify-between py-12'>
            <div className="flex flex-col items-center justify-between w-full gap-12">
                <Link href='/' className='font-IntegralCF font-medium uppercase text-xs text-white'>
                    Insight Funders
                </Link>
                <div className="flex gap-2 items-center justify-center">
                    <div className='bg-gray-500 text-white font-medium w-6 h-6 rounded-full text-xs text-center flex items-center justify-center'>
                        {user?.userInfo?.first_name?.at(0)?.toUpperCase()}
                    </div>
                    <p className='font-Montserrat font-light text-white text-xs'>{user?.userInfo?.first_name} {user?.userInfo?.last_name}</p>
                </div>
                <StartupSideBarLinks />
            </div>
            <LogOutSlider />
        </aside>
    )
}