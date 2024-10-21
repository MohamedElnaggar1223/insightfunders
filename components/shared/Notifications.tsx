'use client'
import { Bell } from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { UserType } from "@/lib/types/user"
import { useEffect, useMemo, useState } from "react"
import { createClient } from "@/utils/supabase/client"
import Image from "next/image"
import NotificationItem from "./NotificationItem"

type Props = {
    user: UserType
    notifications: {
        id: number;
        user_id: string | null;
        content: string | null;
        created_at: string;
        is_read: boolean | null;
        type: "Contract" | "Request" | "Payment" | null;
    }[]
}

export default function Notifications({ user, notifications }: Props)
{
    const supabase = createClient()

    const [notificationsData, setNotificationsData] = useState(notifications)

    useEffect(() => {
        const channel = supabase.channel('notifications').on('postgres_changes', { event: '*', schema: 'public', table: 'notifications', filter: `user_id=eq.${user?.user.id}` }, payload => {
            const newNotification = payload.new as {
                id: number;
                user_id: string | null;
                content: string | null;
                created_at: string;
                is_read: boolean | null;
                type: "Contract" | "Request" | "Payment" | null;
            }
            setNotificationsData(prev => {
                const foundNotification = prev.find(notification => notification.id === newNotification.id)
                if(foundNotification) return prev.map(notification => notification.id === newNotification.id ? newNotification : notification)
                return [newNotification, ...prev]
            })
        }).subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [supabase])

    const unreadNotifications = useMemo(() => notificationsData.filter(notification => !notification.is_read), [notificationsData])

    return (
        <Popover>
            <PopoverTrigger>
                <div className='flex items-center rounded-[8px] justify-center p-1.5 bg-black relative'>
                    <Bell stroke="#fff" size={24} />
                    {unreadNotifications.length > 0 ? (<div className='absolute -top-1 -right-1 h-[16px] text-xs text-white text-center flex items-center justify-center p-0.5 rounded-full w-[16px] bg-[#FF7A00]' >{unreadNotifications.length}</div>) : null}
                </div>
            </PopoverTrigger>
            <PopoverContent className='w-[520px] gap-8 bg-black text-white rounded-[12px] max-h-[400px] !py-0 overflow-auto px-4 border-none divide-y notifications' align="end">
                {notificationsData.length ? 
                notificationsData.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((notification) => (
                    <NotificationItem notification={notification} key={notification.id} />
                )) : (
                    <div className='flex gap-6 items-center justify-center w-full py-8'>
                        No Notifications Yet!
                    </div>
                )}
            </PopoverContent>
        </Popover>
    )
}