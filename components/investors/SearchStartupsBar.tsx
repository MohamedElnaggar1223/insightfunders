"use client";
import { Search, Settings2 } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

export default function SearchStartupsBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [revenue, setRevenue] = useState([0, 1000000000]);

  const [filtersOpen, setFiltersOpen] = useState(false);
  const [search, setSearch] = useState(searchParams?.get("search") || "");
  const [industry, setIndustry] = useState(searchParams?.get("industry") || "");
  const [stage, setStage] = useState(searchParams?.get("stage") || "");

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    let query = "";
    if (search) query += `search=${search}&`;
    if (industry) query += `industry=${industry}&`;
    if (stage) query += `stage=${stage}`;
    if (query) router.push(`${pathname}?${query}`);
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), revenue[1]);
    setRevenue([value, revenue[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), revenue[0]);
    setRevenue([revenue[0], value]);
  };

  return (
    <div className="h-[40px] rounded-[8px] bg-white w-full flex items-center gap-[12px] px-[20px]">
      <img
        src="/images/search-normal.svg"
        alt=""
        className="h-4 w-4 text-gray-400 pointer-events-none"
      />
      <form onSubmit={handleSubmit} className="w-full">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search startups"
          className="bg-transparent px-0 font-Montserrat text-xs w-full h-full outline-none border-none"
        />
      </form>
      <button
        type="button"
        className="ml-auto"
        onClick={() => setFiltersOpen((prev) => !prev)}
      >
        <img src="/images/settings.svg" alt="" />
        {/* <SlidersHorizontal className="h-4 w-4 text-gray-400" /> */}
      </button>
      {/* <Settings2
        size={28}
        stroke="#000"
        className="ml-auto"
        onClick={() => setFiltersOpen((prev) => !prev)}
      /> */}
      <Dialog open={filtersOpen} onOpenChange={setFiltersOpen}>
        <DialogContent className="!rounded-[8px] bg-white min-w-[568px] p-0 gap-0">
          <DialogHeader className="text-[#000000] font-normal border-b-[1px] border-[#808080] py-[13px] px-[23px] text-[16px] font-Montserrat">
            Filters
          </DialogHeader>
          <div className="flex flex-col w-full gap-[20px] pt-[20px] px-[30px]">
            <div className="flex flex-col gap-[14px]">
              <p className="text-[#1A1A1A] text-[14px] font-normal font-Montserrat">
                Industry
              </p>
              <div className="flex flex-wrap">
                <RadioGroup
                  value={industry}
                  onValueChange={setIndustry}
                  className="flex flex-wrap gap-4"
                >
                  {[
                    "Technology",
                    "Healthcare",
                    "Financial Services",
                    "Consumer Goods",
                    "Industrial Goods",
                    "Energy",
                    "Real Estate",
                    "Retail",
                    "Media and Entertainment",
                    "Transportation",
                    "Telecommunications",
                    "Agriculture",
                    "Education",
                    "Hospitality and Leisure",
                    "Utilities",
                    "Other",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 radioBlack"
                    >
                      <RadioGroupItem
                        className={cn(
                          item === industry ? "bg-black" : "bg-white"
                        )}
                        value={item}
                        id={index.toString()}
                        key={index}
                      />
                      <Label
                        className="text-[13px] text-[#1A1A1A] font-normal font-Montserrat"
                        htmlFor={index.toString()}
                      >
                        {item}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
            <div className="flex flex-col gap-[14px]">
              <p className="text-[#1A1A1A] text-[14px] font-normal font-Montserrat">
                Stage
              </p>
              <div className="flex gap-3 flex-wrap">
                <RadioGroup
                  value={stage}
                  onValueChange={setStage}
                  className="flex flex-wrap gap-4"
                >
                  {[
                    "Pre-seed",
                    "Seed",
                    "Series A",
                    "Series B",
                    "Series C",
                    "Series D",
                    "Series E",
                    "Series F",
                    "Public",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 radioBlack"
                    >
                      <RadioGroupItem
                        className={cn(item === stage ? "bg-black" : "bg-white")}
                        value={item}
                        id={index.toString()}
                        key={index}
                      />
                      <Label
                        className="text-[13px] text-[#1A1A1A] font-normal font-Montserrat"
                        htmlFor={index.toString()}
                      >
                        {item}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div>
                <p className="text-[#1A1A1A] text-[14px] font-normal font-Montserrat pb-[20px]">
                  Revenue
                </p>
                <div className="relative pt-2 w-[265px]">
                  <div className="h-[1.5px] bg-gray-200 rounded-full">
                    <div
                      className="absolute h-[1.5px] bg-[#00000080] rounded-full"
                      style={{
                        left: `${(revenue[0] / 1000000000) * 100}%`,
                        right: `${100 - (revenue[1] / 1000000000) * 100}%`,
                      }}
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000000000"
                    value={revenue[0]}
                    onChange={handleMinChange}
                    className="absolute w-full h-1 top-[7px] appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000000000"
                    value={revenue[1]}
                    onChange={handleMaxChange}
                    className="absolute w-full h-1 top-[7px] appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-[6px]">
                    <span className="text-[12px] font-light font-Montserrat">
                      Pre revenue
                    </span>
                    <span className="text-[12px] font-light font-Montserrat">
                      $1B+
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pb-[20px] mr-auto gap-4 text-center">
              {stage || industry ? (
                <button
                  onMouseDown={() => {
                    setFiltersOpen(false);
                    setIndustry("");
                    setStage("");
                    router.push(pathname);
                    router.refresh();
                  }}
                  className="bg-[#bb0f0f] text-white font-Montserrat text-center font-medium px-6 text-xs py-2"
                >
                  Clear Filters
                </button>
              ) : (
                <></>
              )}
              <button
                onMouseDown={() => {
                  setFiltersOpen(false);
                  handleSubmit();
                }}
                className="bg-[#000] px-[49px] text-white font-Montserrat text-center font-medium text-xs py-2"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
