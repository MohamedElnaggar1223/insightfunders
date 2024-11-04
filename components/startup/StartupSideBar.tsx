
import { UserType } from "@/lib/types/user";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import LogOutSlider from "../investors/LogOutSlider";
import StartupSideBarLinks from "./StartupSideBarLinks";
import Image from "next/image";


type Props = {
    user: UserType
    userPreference: string; // Add userPreference alongside user
}

export default async function StartupSideBar()
{
    return (
        <aside className='bg-[#212121] h-screen flex w-[250px] flex-col items-center justify-between py-6 sidebardashboard ' >
            
            <div className="flex flex-col items-center justify-between w-full gap-12 sidebardashboard"> 
                <Link href='/' className='font-IntegralCF font-medium uppercase text-xs text-white logoDiv'>
                    <Image 
                        src='/images/logo.png'
                        width={130}
                        height={30}
                        alt='logo'
                    />
                </Link>
                <StartupSideBarLinks />
            </div>
            <LogOutSlider />
        </aside>
    )
}