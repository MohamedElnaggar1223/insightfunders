import Notifications from "@/components/shared/Notifications"
import { getUser } from "@/lib/actions/auth"
import { getNotifications } from "@/lib/actions/user"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import Link from "next/link"

export default async function HeaderStartUp()
{
    const user = await getUser()
    const notifications = await getNotifications(user?.user.id!)

    return (
        <div className='ml-auto flex items-center justify-end h-fit px-12 py-6 bg-[#212121] w-full gap-8'>
            <Notifications user={user!} notifications={notifications!} />
            <Link href='/profile' className="flex items-center justify-center gap-2">
                <Avatar className='bg-[#1A1A1A] text-white'>
                    <AvatarImage src="" alt="company" />
                    <AvatarFallback>{user?.userStartUp?.company_name?.slice(0, 1)}</AvatarFallback>
                </Avatar>
                <p className='text-white font-light text-sm'>{user?.userStartUp?.company_name}</p>
            </Link>
        </div>
    )
}