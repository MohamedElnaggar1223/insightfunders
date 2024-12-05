import React from "react";
import * as Label from "@radix-ui/react-label";
import { Search, SlidersHorizontal } from "lucide-react";

interface CustomSearchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const CustomSearch = React.forwardRef<
  HTMLInputElement,
  CustomSearchProps
>(
  (
    { label, error, className = "", containerClassName = "", ...props },
    ref
  ) => {
    return (
      <div className={containerClassName}>
        {label && (
          <Label.Root className="text-sm font-medium text-gray-400 mb-2 block">
            {label}
          </Label.Root>
        )}
        <div className="relative">
          <img
            src="/images/search-normal.svg"
            alt=""
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
          />
          {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" /> */}
          <input
            ref={ref}
            type="text"
            className={`
    w-full
    h-12
    pl-10
    pr-12
    text-sm
    bg-white
    rounded-xl
    placeholder:text-opacity-50
    text-gray-900 !important
    shadow-sm
    placeholder:text-black
    focus:outline-none
    placeholder:leading-[15px]
    border-0
    [&:not(:placeholder-shown)]:text-gray-900  /* Add this to ensure text stays dark when input has value */
    ${error ? "border-red-500" : ""}
    ${className}
  `}
            {...props}
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <img src="/images/settings.svg" alt="" />
            {/* <SlidersHorizontal className="h-4 w-4 text-gray-400" /> */}
          </button>
        </div>
        {error && (
          <span className="text-sm text-red-500 mt-1 block">{error}</span>
        )}
      </div>
    );
  }
);

CustomSearch.displayName = "SearchInput";
