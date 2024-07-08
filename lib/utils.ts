import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const stringToUuid = (str: string) => {
  str = str.replaceAll('-', '');
  return 'xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function(c, p) {
    return str[p % str.length];
  });
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const encryptId = (id: string) =>  btoa(id);

export function extractCustomerIdFromUrl(url: string) {
    const parts = url.split("/");

    const customerId = parts[parts.length - 1];

    return customerId;
}
