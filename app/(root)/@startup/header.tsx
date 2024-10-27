import Notifications from "@/components/shared/Notifications"
import { getUser } from "@/lib/actions/auth"
import { getNotifications } from "@/lib/actions/user"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import Link from "next/link"
import Image from "next/image";

export default async function HeaderStartUp()
{
    const user = await getUser()
    const notifications = await getNotifications(user?.user.id!)

    return (
        <div className='ml-auto flex items-center justify-end h-fit px-12 py-6 bg-[#fff] w-full gap-3 shadow-lg'>
             <div>
             <Image 
                        src='/images/hamburger.svg' 
                        width={30}
                        height={30}
                        alt='logo'
                        className="filter invert"
                    />
                    </div>
            <Notifications user={user!} notifications={notifications!} />
            <Link href='/profile' className="flex items-center justify-center gap-3">
                <Avatar className='bg-[#F1F5F9] text-black border border-custom-gray'>
                    <AvatarImage src="" alt="company" />
                    <AvatarFallback>{user?.userStartUp?.company_name?.slice(0, 1)}</AvatarFallback>
                </Avatar>
                <p className='text-black font-light text-sm'>{user?.userStartUp?.company_name}</p>
            </Link>
        </div>
    )
}