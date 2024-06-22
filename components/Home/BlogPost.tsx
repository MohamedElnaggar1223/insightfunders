import Image from "next/image"

type Blog = {
    title: string
    image: string
    category: string
    excerpt: string
    author: {
        name: string
        image: string
    }
    date: string
}

type Props = {
    blog: Blog
}

export default function BlogPost({ blog }: Props)
{
    return (
        <div className='flex flex-col gap-2 cursor-pointer hover:scale-105 duration-300'>
            <div className='rounded-xl overflow-hidden'>
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={1920}
                    height={240}
                />
            </div>
            <p className='text-xs lg:text-sm text-main-purple font-semibold mt-2'>{blog.category}</p>
            <div className='flex justify-between items-center'>
                <p className='text-lg lg:text-2xl font-semibold'>{blog.title}</p>
                <Image
                    src='/images/blogArrow.svg'
                    alt='Arrow'
                    width={24}
                    height={24} 
                />
            </div>
            <p className='text-main-gray max-w-[90%] text-sm lg:text-base'>{blog.excerpt}</p>
            <div className='flex items-center justify-start mt-4 gap-3'>
                <Image
                    src={blog.author.image}
                    alt={blog.author.name}
                    width={40}
                    height={40}
                    className='rounded-full' 
                />
                <div className='flex flex-col items-start justify-center gap-0.5'>
                    <p className='text-sm font-semibold'>{blog.author.name}</p>
                    <p className='text-sm text-main-gray'>{blog.date}</p>
                </div>
            </div>
        </div>
    )
}