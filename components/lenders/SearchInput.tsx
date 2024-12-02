import React from "react";
import * as Label from "@radix-ui/react-label";
import { Search, SlidersHorizontal } from "lucide-react";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
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
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
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
    text-gray-900 !important
    shadow-sm
    placeholder:text-gray-500
    focus:outline-none
    border-0
    [&:not(:placeholder-shown)]:text-gray-900  /* Add this to ensure text stays dark when input has value */
    ${error ? "border-red-500" : ""}
    ${className}
  `}
            {...props}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <SlidersHorizontal className="h-4 w-4 text-gray-400" />
          </button>
        </div>
        {error && (
          <span className="text-sm text-red-500 mt-1 block">{error}</span>
        )}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
