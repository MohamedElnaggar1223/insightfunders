import BlogPost from "./BlogPost"

const blogs = [
    {
        image: '/images/blogfirst.png',
        title: 'Hurting money asserts',
        category: 'Investment',
        excerpt: "See my hard first running re-inventing skulls. Rehydrate explore space that's seat parking this.",
        author: {
            name: 'Olivia Rhye',
            image: '/images/olivia.png'
        },
        date: '20 Jan 2024'
    },
    {
        image: '/images/blogsecond.png',
        title: 'Masking seems work base',
        category: 'Startup',
        excerpt: "Unlock social production performance player-coach emails. Eat into ground we got for.",
        author: {
            name: 'Phoenix Baker',
            image: '/images/phoenix.png'
        },
        date: '19 Jan 2024'
    },
    {
        image: '/images/blogthird.png',
        title: 'Data donuts quick-win',
        category: 'Money',
        excerpt: "Exploratory ping circle make offline anomalies ballpark exploratory before. Management.",
        author: {
            name: 'Lana Steiner',
            image: '/images/lana.png'
        },
        date: '18 Jan 2024'
    },
]

export default function Blogs()
{
    return (
        <section className='p-16 lg:p-24 flex flex-col items-center justify-center gap-12'>
            <div className='flex items-start justify-between w-full max-md:flex-col-reverse'>
                <div className='flex flex-col gap-4 max-md:text-left max-md:mr-auto'>
                    <p className='text-base text-main-purple font-semibold'>Our blog</p>
                    <p className='text-3xl lg:text-4xl font-semibold'>Lastest blog posts</p>
                    <p className='text-lg lg:text-xl text-main-gray'>Tool and strategies modern teams need to help their companies grow.</p>
                </div>
                <button className='rounded-[8px] max-lg:hidden text-base px-5 py-3 text-white bg-main-purple font-semibold'>View all posts</button>
                <button className='rounded-[8px] max-md:ml-auto lg:hidden text-sm px-4 text-nowrap py-3 text-white bg-main-purple font-semibold'>View all</button>
            </div>
            <div className='flex items-center justify-center gap-8 max-md:flex-wrap'>
                {blogs.map((blog, index) => (
                    <BlogPost blog={blog} key={index} />
                ))}
            </div>
        </section>
    )
}