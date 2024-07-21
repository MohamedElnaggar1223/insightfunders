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

export function getNextDueDate(createdAt: Date, paymentInterval: 'week' | 'year' | 'quarter' | 'month'): Date {
  const currentDate = new Date();
  let nextDueDate = new Date(createdAt);

  while (nextDueDate <= currentDate) {
    switch (paymentInterval) {
      case 'week':
        nextDueDate.setDate(nextDueDate.getDate() + 7);
        break;
      case 'month':
        nextDueDate.setMonth(nextDueDate.getMonth() + 1);
        break;
      case 'quarter':
        nextDueDate.setMonth(nextDueDate.getMonth() + 3);
        break;
      case 'year':
        nextDueDate.setFullYear(nextDueDate.getFullYear() + 1);
        break;
    }
  }

  return nextDueDate;
}
