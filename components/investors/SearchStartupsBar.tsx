'use client'
import { Search, Settings2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export default function SearchStartupsBar()
{
    const router = useRouter()
    const searchParams = useSearchParams()

    const [filtersOpen, setFiltersOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [industry, setIndustry] = useState('')
    const [stage, setStage] = useState('')

    const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
        e?.preventDefault()
        let query = ''
        if(search) query += `search=${search}&`
        if(industry) query += `category=${industry}&`
        if(stage) query += `country=${stage}`
        if(query) router.push(`/?${query}`)
    }

    return (
        <div className="h-[40px] bg-white w-full flex items-center gap-4 px-2">
            <Search size={28} stroke='#000' />
            <form
                onSubmit={handleSubmit}
            >
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search for startups' className='bg-transparent text-xs w-full h-full outline-none border-none' />
            </form>
            <Settings2
                size={28} 
                stroke='#000' 
                className='ml-auto' 
                onClick={() => setFiltersOpen(prev => !prev)}
            />
            <Dialog open={filtersOpen} onOpenChange={setFiltersOpen}>
                <DialogContent className='flex flex-col gap-2 items-center justify-center bg-white min-w-[568px]'>
                    <DialogHeader className='border-b border-[#00000080] flex items-center justify-center py-2 w-full'>
                        Filters
                    </DialogHeader>
                    <div className='flex flex-col w-full gap-2'>
                        <div className="flex flex-col gap-2">
                            <p className='text-xs'>Industry</p>
                            <div className="flex flex-wrap">
                                <RadioGroup value={industry} onValueChange={setIndustry}>
                                    {['Technology', 'Healthcare', 'Financial Services', 'Consumer Goods', 'Industrial Goods', 'Energy', 'Real Estate', 'Retail', 'Media and Entertainment', 'Transportation', 'Telecommunications', 'Agriculture', 'Education', 'Hospitality and Leisure', 'Utilities', 'Other'].map((item, index) => (
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value={item} id={index.toString()} key={index} />
                                            <Label className='text-xs' htmlFor={index.toString()}>{item}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-xs'>Stage</p>
                            <div className="flex gap-3 flex-wrap">
                                <RadioGroup value={stage} onValueChange={setStage}>
                                    {['Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C', 'Series D', 'Series E', 'Series F', 'Public'].map((item, index) => (
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value={item} id={index.toString()} key={index} />
                                            <Label className='text-xs' htmlFor={index.toString()}>{item}</Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>
                        </div>
                        <button type='submit' className='bg-[#000] text-white ml-auto px-4 py-2 rounded-[4px]'>Apply</button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}