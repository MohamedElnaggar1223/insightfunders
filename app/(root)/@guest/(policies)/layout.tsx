import Sidebar from "./sidebar";

export default function PoliciesLayout({ children }: { children: React.ReactNode })
{
    return (
        <section className='flex items-start justify-between gap-12 pt-24 pr-4 lg:pr-32 pb-24 bg-[#fafafa]'>
            <Sidebar />
            {children}
        </section>
    )
}