"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UserType } from "@/lib/types/user";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useMemo, useState } from "react";
import NotificationItem from "./NotificationItem";

type Props = {
  user: UserType;
  notifications: {
    id: number;
    user_id: string | null;
    content: string | null;
    created_at: string;
    is_read: boolean | null;
    type: "Contract" | "Request" | "Payment" | null;
  }[];
};

export default function Notifications({ user, notifications }: Props) {
  const supabase = createClient();

  const [notificationsData, setNotificationsData] = useState(notifications);

  useEffect(() => {
    const channel = supabase
      .channel("notifications")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "notifications",
          filter: `user_id=eq.${user?.user.id}`,
        },
        (payload) => {
          const newNotification = payload.new as {
            id: number;
            user_id: string | null;
            content: string | null;
            created_at: string;
            is_read: boolean | null;
            type: "Contract" | "Request" | "Payment" | null;
          };
          setNotificationsData((prev) => {
            const foundNotification = prev.find(
              (notification) => notification.id === newNotification.id
            );
            if (foundNotification)
              return prev.map((notification) =>
                notification.id === newNotification.id
                  ? newNotification
                  : notification
              );
            return [newNotification, ...prev];
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  const unreadNotifications = useMemo(
    () => notificationsData.filter((notification) => !notification.is_read),
    [notificationsData]
  );

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center justify-center p-2.5  relative w-[38]">
          {/* <Bell stroke="#fff" size={18} /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.0002 2C10.1437 2 8.36318 2.7375 7.05043 4.05025C5.73767 5.36301 5.00017 7.14348 5.00017 9V12.528C5.00032 12.6831 4.96437 12.8362 4.89517 12.975L3.17817 16.408C3.0943 16.5757 3.0547 16.7621 3.06312 16.9494C3.07155 17.1368 3.12773 17.3188 3.22632 17.4783C3.32491 17.6379 3.46265 17.7695 3.62644 17.8608C3.79024 17.9521 3.97465 18 4.16217 18H19.8382C20.0257 18 20.2101 17.9521 20.3739 17.8608C20.5377 17.7695 20.6754 17.6379 20.774 17.4783C20.8726 17.3188 20.9288 17.1368 20.9372 16.9494C20.9457 16.7621 20.906 16.5757 20.8222 16.408L19.1062 12.975C19.0366 12.8362 19.0003 12.6832 19.0002 12.528V9C19.0002 7.14348 18.2627 5.36301 16.9499 4.05025C15.6372 2.7375 13.8567 2 12.0002 2ZM12.0002 21C11.3795 21.0003 10.774 20.8081 10.2672 20.4499C9.76034 20.0917 9.37706 19.5852 9.17017 19H14.8302C14.6233 19.5852 14.24 20.0917 13.7332 20.4499C13.2263 20.8081 12.6208 21.0003 12.0002 21Z"
              fill="white"
            />
          </svg>
          {unreadNotifications.length > 0 ? (
            <div className="absolute -top-1 -right-1 h-[16px] text-xs text-white text-center flex items-center justify-center p-0.5 rounded-full w-[16px] bg-[#FF7A00]">
              {unreadNotifications.length}
            </div>
          ) : null}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-[520px] gap-8 bg-black text-white rounded-[12px] max-h-[400px] !py-0 overflow-auto px-4 border-none divide-y notifications"
        align="end"
      >
        {notificationsData.length ? (
          notificationsData
            .sort(
              (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            )
            .map((notification) => (
              <NotificationItem
                notification={notification}
                key={notification.id}
              />
            ))
        ) : (
          <div className="flex gap-6 items-center justify-center w-full py-8">
            No Notifications Yet!
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
