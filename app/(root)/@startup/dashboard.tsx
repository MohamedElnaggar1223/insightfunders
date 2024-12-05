import Notifications from "@/components/shared/Notifications";
import StartUpsChart from "@/components/startup/StartUpsChart";
import StartUpsInvestors from "@/components/startup/StartUpsInvestors";
import { getUser } from "@/lib/actions/auth";
import { getContracts } from "@/lib/actions/startup";
import { getNotifications } from "@/lib/actions/user";
import Image from "next/image";
import DashboardUpload from "./manage/dashboardupload";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const user = await getUser();
  console.log(user);
  const startupContracts = await getContracts(user?.userStartUp?.id!);

  // await new Promise(resolve => setTimeout(resolve, 10000))

  const totalAmountInvested = startupContracts.acceptedContracts?.reduce(
    (acc, contract) =>
      acc +
      (contract.investment_amount_paid
        ? parseFloat(contract.amount_invested)
        : 0),
    0
  );

  const totalInvestors = startupContracts.acceptedContracts?.filter(
    (contract) => contract.investment_amount_paid
  ).length;

  return (
    // <section className='flex flex-1 flex-col w-full gap-6 px-6 overflow-auto pt-6'>
    //     <div className='flex flex-wrap items-center justify-center gap-4 min-h-[295px]'>
    //         <div className='flex flex-col gap-4 h-full'>
    //             <div className="flex bg-[#212121] min-h-32 items-center justify-center text-center flex-col gap-2 flex-1 rounded-[8px] w-screen max-w-[332px]">
    //                 <p className='  font-light text-xs text-white'>Total funds</p>
    //                 <p className='text-white font-[800]   text-[20px]'>${totalAmountInvested}</p>
    //             </div>
    //             <div className="flex bg-[#212121] min-h-32 items-center justify-center text-center flex-col gap-2 flex-1 rounded-[8px] w-screen max-w-[332px]">
    //                 <p className='  font-light text-xs text-white'>Currently invested in by</p>
    //                 <p className='text-white font-[800]   text-[20px]'>{totalInvestors} <span className='font-normal'>investors</span></p>
    //             </div>
    //         </div>
    //         <StartUpsChart totalAmountInvested={totalAmountInvested!} />
    //     </div>
    //     <StartUpsInvestors searchParams={searchParams} contracts={startupContracts.acceptedContracts!} />
    // </section>

    <section className="flex flex-1 flex-col dashboardcont gap-6  overflow-auto pt-6 mx-auto mt-8">
      {/* <DashboardUpload /> */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 w-full ">
        <div className="col-span-1 lg:col-span-3   flex flex-col gap-4 text-white text-center">
          <div className="w-full  flex bg-[#212121] text-white min-h-32 px-4 lg:px-10  py-3 items-center justify-center text-center flex-col gap-3 flex-1 rounded-[8px] shadow-lg ">
            {/* <div className=" flex flex-col items-start gap-2">
              <div className="p-3 bg-[#313C4A] rounded-full">
                <Image
                  src="/images/funds.svg"
                  width={20}
                  height={20}
                  alt="logo"
                  className="filter invert  "
                />
              </div>
              <div>
                <p className="text-black text-left font-[800]  text-[28px]">
                  ${totalAmountInvested}
                </p>
                <p className=" text-left font-light text-xs text-black">
                  Total funds
                </p>
              </div>
            </div> */}
            <p className=" text-center font-light text-xs font-Montserrat">
              Total funds
            </p>
            <h4 className="text-center font-bold text-[xl font-Montserrat">
              ${totalAmountInvested}
            </h4>
          </div>

          <div className="w-full flex bg-[#212121] text-white min-h-32 px-4 lg:px-10  py-3 items-center justify-center text-center flex-col gap-3 flex-1 rounded-[8px] shadow-lg">
            {/* <div className="p-3 bg-[#313C4A] rounded-full">
                <Image
                  src="/images/investment.svg"
                  width={20}
                  height={20}
                  alt="logo"
                  className="filter invert  "
                />
              </div>
              <div>
                <p className="text-black font-[800] text-left  text-[28px]">
                  ${totalInvestors}
                </p>
                <p className=" text-left font-light text-xs text-black">
                  Available balance
                </p>
              </div> */}
            <p className=" text-center font-light text-xs font-Montserrat">
              Available balance
            </p>
            <h4 className="text-center font-bold text-[xl font-Montserrat">
              ${totalInvestors}
            </h4>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-7  bg-[#212121] text-white text-center">
          <StartUpsChart totalAmountInvested={12} />
        </div>
      </div>

      {/* <div className="flex items-center justify-center gap-4 min-h-[295px] ">
        <div className="flex flex-col gap-4 h-full dashboard_dr_cards_1">
          <div className="flex bg-[#212121] min-h-32 items-center justify-center text-center flex-col gap-2 flex-1 rounded-[8px] ">
            <p className="  font-light text-xs text-white">
              Total funds
            </p>
            <p className="text-white font-[800]   text-[20px]">
              ${totalAmountInvested}
            </p>
          </div>
          <div className="flex bg-[#212121] min-h-32 items-center justify-center text-center flex-col gap-2 flex-1 rounded-[8px] ">
            <p className="  font-light text-xs text-white">
              Currently invested in by
            </p>    
            <p className="text-white font-[800]   text-[20px]">
              {totalInvestors} <span className="font-normal">investors</span>
            </p>
          </div>
        </div>
        <StartUpsChart totalAmountInvested={totalAmountInvested!} />
      </div> */}

      <div>
        <StartUpsInvestors
          searchParams={searchParams}
          contracts={startupContracts.acceptedContracts!}
        />
      </div>
    </section>
  );
}
