'use client'
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { useInView } from "framer-motion";
import { CircleDollarSign, MailPlus, ReceiptText } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
    notification: {
        id: number;
        user_id: string | null;
        content: string | null;
        created_at: string;
        is_read: boolean | null;
        type: "Contract" | "Request" | "Payment" | null;
    }
}

export default function NotificationItem({ notification }: Props)
{
    const supabase = createClient()

    const [notificationData, setNotificationData] = useState(notification)

    const notiRef = useRef<HTMLDivElement>(null)
    const notiInView = useInView(notiRef, { once: true })

    useEffect(() => {
        const updateNotification = async () => {
            if(notiInView && !notificationData.is_read) {
                setNotificationData(prev => ({ ...prev, is_read: true }))
                await supabase.from('notifications').update({
                    is_read: true
                }).eq('id', notificationData.id)
                
            }
        }

        updateNotification()
    }, [notiInView])

    return (
        <div ref={notiRef} className='flex gap-6 items-center justify-start w-full py-8'>
            {notification.type === 'Payment' ? (<CircleDollarSign className='min-w-fit' size={24} />) : notification.type === 'Request' ? (<MailPlus className='min-w-fit' size={24} />) : notification.type === 'Contract' ? (<ReceiptText className='min-w-fit' size={24} />) : null}
            <p className={cn('text-sm', notificationData.is_read ? 'font-light' : 'font-bold')}>{notification.content}</p>
        </div>
    )
}