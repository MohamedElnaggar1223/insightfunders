import SearchStartupsBar from "@/components/investors/SearchStartupsBar";
import { getUser } from "@/lib/actions/auth";
import { getExploreStartups } from "@/lib/actions/investor";
import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ExplorePage({ searchParams }: Props) {
  const user = await getUser();

  if (!user?.userInvestor?.accepted) return null;

  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const industry =
    typeof searchParams.industry === "string"
      ? searchParams.industry
      : undefined;
  const stage =
    typeof searchParams.stage === "string" ? searchParams.stage : undefined;

  const exploreStartups = await getExploreStartups(user?.userInvestor?.id!, {
    search,
    industry,
    stage,
  });

  console.log({ test: JSON.stringify(exploreStartups) });

  return (
    <div className="w-full mx-auto space-y-6 my-23 max-w-[90%] py-[40px]">
      <div className="bg-[#1A1A1A] flex items-center justify-center w-full sticky top-0 pb-2">
        <SearchStartupsBar />
      </div>
      <div className="grid grid-cols-3 gap-6 w-full">
        {exploreStartups.map(({ startup }) => (
          <Link
            href={`/explore/${startup.id}`}
            key={startup.id}
            className="bg-white rounded-[8px] flex flex-col p-[20px] cursor-pointer"
          >
            <div className="flex gap-[7px] pb-[12px]">
              <div className="flex w-[40px] h-[40px] items-center justify-center rounded-full  border-r border-2 border-[#00000050]">
                <Image
                  src="/images/placehodler.jpg"
                  alt={startup?.company_name!}
                  style={{ borderRadius: "50px" }}
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col justify-center gap-[5px]">
                <p className="font-medium text-left text-[12px] font-Montserrat">
                  {startup?.company_name}
                </p>
                <p className="font-normal text-left text-[10px] text-[#00000099]">
                  {startup?.industry_sector}
                </p>
              </div>
            </div>
            <div className="flex gap-2 flex-col items-start justify-center">
              <div className="flex gap-[11px] items-center justify-center text-xs">
                <div className="w-[10px] h-[12px]">
                  <Image
                    src="/images/location.svg"
                    alt="location"
                    width={100}
                    height={100}
                  />
                </div>
                <span className="font-Montserrat text-[10px] font-light text-[#000000]">
                  {startup?.address}
                </span>
              </div>
              <div className="flex gap-[11px] items-center justify-center text-xs">
                <div className="w-[10px] h-[12px]">
                  <Image
                    src="/images/series.svg"
                    alt="series"
                    width={100}
                    height={100}
                  />
                </div>
                <span className="font-Montserrat text-[10px] font-light text-[#000000]">
                  {startup?.stage}
                </span>
              </div>
              <div className="flex gap-[11px] items-center justify-center text-xs">
                <div className="w-[10px] h-[12px]">
                  <Image
                    src="/images/scaling.svg"
                    alt="series"
                    width={100}
                    height={100}
                  />
                </div>
                <span className="font-Montserrat text-[10px] font-light text-[#000000]">
                  ${startup.recent_raise}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
