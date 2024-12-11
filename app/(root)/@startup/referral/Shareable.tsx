import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Shareable = () => {
  const socialIcons = [
    {
      iconPath: "/socials/linkedin.svg",
    },
    {
      iconPath: "/socials/chat.svg",
    },
    {
      iconPath: "/socials/whatsapp.svg",
    },
    {
      iconPath: "/socials/instagram.svg",
    },
    {
      iconPath: "/socials/mail.svg",
    },
    {
      iconPath: "/socials/x-orange.svg",
    },
  ];
  return (
    <div className="bg-[#212121] border-none rounded-[8px] text-white">
      <div className="py-[40px] px-[32px]">
        <p className="font-bold text-left font-Montserrat text-base sm:text-lg md:text-xl lg:text-[20px]  pb-2 sm:pb-[8px]">
          Share with your firends to help them get funded!
        </p>
        <p className="font-normal text-sm sm:text-base lg:text-[16px] font-Montserrat text-left pb-4 sm:pb-5 lg:pb-[24px]">
          Earn 20% on our faciliation fee when you refer a qualified borrower or
          lender to our credit marketplace.
        </p>
        <div className="flex gap-[16px] pb-[24px]">
          <input
            value={"http://insidefunders.com/r=1234"}
            className="w-[70%] py-3 sm:py-[16px] px-4 sm:px-[20px] h-auto text-xs sm:text-sm !bg-transparent !border !border-[#EAEAEA] !rounded-[8px]"
          />
          <button
            type="button"
            className="flex  rounded-[8px] items-center gap-2 sm:gap-[10px] bg-[#FF7A00] text-white px-4 sm:px-[28.5px] py-3 sm:py-[15.5px]"
          >
            <img
              src="/images/copy.svg"
              alt="Copy icon"
              className="w-4 sm:w-5"
            />
            <span className="text-sm sm:text-[15px] font-semibold">Copy</span>
          </button>
        </div>
        <div className="flex gap-[12px]">
          {socialIcons.map((_el) => (
            <div className="flex items-center bg-[#FF7A0014] p-[13px] rounded-[12px]">
              <img src={_el.iconPath} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shareable;
