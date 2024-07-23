'use server'

import { revalidatePath } from "next/cache"

export const updatePage = (url: string) => {
    revalidatePath(url)
}