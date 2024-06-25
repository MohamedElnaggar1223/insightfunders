'use client'
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function StartUpSubmitApplication()
{
    const [checked, setChecked] = useState(false)

    return (
        <div className='flex flex-col gap-8'>
            <Checkbox checked={checked} onCheckedChange={(value) => setChecked(value ? true : false)} id="terms" />
            <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Accept terms and conditions
            </label>
        </div>
    )
}