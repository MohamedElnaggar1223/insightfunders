"use client";

import Image from "next/image";
import { Edit2, Trash2 } from "lucide-react";

export default function PaymentSetup({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  return (
    <div className="w-full mx-auto space-y-6 my-8 max-w-[800px] lg:max-w-[850px] xl:max-w-[923px] 2xl:max-w-[1200px] 3xl:max-w-[1700px] 4xl:max-w-[1800px]">
      <div className="flex gap-[21px]">
        {/* Payment Method Section */}
        <div className="w-[65%] bg-[#212121] rounded-lg py-[44px] px-[32px]">
          <div className="mb-[24px] text-left">
            <h2 className="text-white text-[20px] font-bold mb-[8px] font-Montserrat">
              Payment method
            </h2>
            <p className="text-[#ffffff] text-[16px]">
              Setup your bank account
            </p>
          </div>

          {/* Bank Account Cards */}
          <div className="space-y-[24px]">
            {/* Savings Account */}
            <div className="bg-[#ffffff] rounded-[8px] p-[20px]">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-[70px] h-[70px] rounded-lg flex items-center justify-center">
                    <Image
                      src="/paymentsetup/c2.svg"
                      alt="Bank"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex items-center gap-[16px]">
                      <p className="text-[#32475CDE] font-semibold text-[16px]">
                        John Doe
                      </p>
                      <span className="bg-[#666CFF1F] text-[13px] text-[#696CFF] py-[3px] px-[10px] rounderd-[4px]">
                        SAVINGS
                      </span>
                    </div>
                    <p className="text-[#32475C99] text-[14px] text-left">
                      AC # 234567 4325
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[16px]">
                  <button
                    type="button"
                    className="flex text-[14px] font-medium rounded-[8px] items-center gap-2 sm:gap-[10px] !border !border-[#696CFF] text-[#696CFF] px-[20px] sm:px-[10px] py-[7px]"
                  >
                    EDIT
                  </button>
                  <button className="text-gray-400 px-3 py-1 rounded">
                    <div className="w-[16px] h-[18px] rounded-lg flex items-center justify-center">
                      <Image
                        src="/images/delete-icon.svg"
                        alt="Bank"
                        width={100}
                        height={100}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Current Account */}
            <div className="bg-[#ffffff] rounded-[8px] p-[20px]">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-[70px] h-[70px] rounded-lg flex items-center justify-center">
                    <Image
                      src="/paymentsetup/c1.svg"
                      alt="Bank"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex items-center gap-[16px]">
                      <p className="text-[#32475CDE] font-semibold text-[16px]">
                        John Doe
                      </p>
                      <span className="bg-[#666CFF1F] text-[13px] text-[#696CFF] py-[3px] px-[10px] rounderd-[4px]">
                        SAVINGS
                      </span>
                    </div>
                    <p className="text-[#32475C99] text-[14px] text-left">
                      AC # 234567 4325
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[16px]">
                  <button
                    type="button"
                    className="flex text-[14px] font-medium rounded-[8px] items-center gap-2 sm:gap-[10px] !border !border-[#696CFF] text-[#696CFF] px-[20px] sm:px-[10px] py-[7px]"
                  >
                    EDIT
                  </button>
                  <button className="text-gray-400 px-3 py-1 rounded">
                    <div className="w-[16px] h-[18px] rounded-lg flex items-center justify-center">
                      <Image
                        src="/images/delete-icon.svg"
                        alt="Bank"
                        width={100}
                        height={100}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            {/* Add Another Bank Account Button */}
            <button
              type="button"
              className="flex rounded-[8px] items-center font-semibold text-[14px] bg-[#FF7A00] text-white px-[18px] py-[10px]"
            >
              Add another bank account
            </button>
          </div>
        </div>

        {/* Other Payment Section */}
        <div className="w-[35%] bg-[#212121] rounded-lg py-[44px] px-[32px]">
          <div className="mb-[24px] text-left">
            <h2 className="text-white text-[20px] font-bold mb-[8px] font-Montserrat">
              Other payment
            </h2>
            <p className="text-[#ffffff] text-[16px]">
              Setup other payment methods
            </p>
          </div>

          {/* Payment Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-[#FFC439] text-black font-semibold py-3 px-4 rounded-[40px] flex items-center justify-center">
              <Image
                src="/images/PayPal.svg"
                alt="PayPal"
                width={80}
                height={20}
              />
            </button>
            <button className="w-full h-[45px] bg-white text-black font-semibold py-3 px-4 rounded-[40px] flex items-center justify-center">
              <Image
                src="/images/stripe.svg"
                alt="Stripe"
                width={80}
                height={100}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
