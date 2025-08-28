import { HiMiniArrowRight } from 'react-icons/hi2'
// import PUDD2 from '../Images/PUDD2.png'
// import PUDD3 from '../Images/PUDD3.png'
// import PUDD4 from '../Images/PUDD4.png'
// import article from '../NewImages/article.webp'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FeaturedArticles = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://tmbis-strapi-backend.onrender.com/api/tmbiss?populate=*')
            .then(res => setPosts(res.data.data || []))
            .catch(err => {
                console.error(err);
                setPosts([]);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <p className="text-center py-20">Loading featured articles...</p>;
    }

    if (!posts.length) {
        return (
            <div className="text-center py-20">
                <p className="text-xl font-medium text-gray-600">
                    No featured articles available yet. Check back soon!
                </p>
            </div>
        );
    }


    const featuredPost = posts[0];
    const latestPosts = posts.slice(1, 4);

    return (
        <div className='xl:px-24 xl:py-20 sh:pl-16 sh:pr-10 sp:px-7 px-4 bg-[#1B1B1B] py-8 text-white'>
            <div className='grid grid-cols-2'>
                <div className='mk:col-span-1 col-span-2'>
                    <p className='font-bold sp:text-[45px] sr:text-3xl text-2xl'>Featured Articles</p>
                    <p className='font-normal mt-8 sp:text-xl sr:text-lg text-base'>
                        Stay connected with the latest business insights, research <br className='sd:block hidden' />
                        findings, and success stories from our students, and alumni network.
                    </p>
                </div>
            </div>

            <div className='grid mk:grid-cols-2 gap-10 mt-8'>
                {/* Featured Post */}
                {featuredPost && (
                    <div className='flex flex-col gap-7'>
                        <Link to='/articles'>
                            <button onClick={() => window.scrollTo(0, 0)} className='flex items-center sr:text-lg text-base text-[#C0943E] font-medium gap-2'>
                                Browse Featured Articles
                                <HiMiniArrowRight className='mt-1' />
                            </button>
                        </Link>
                        <Link
                            to={`/articles/${featuredPost.url}`}
                            key={featuredPost.id}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <img
                                className='w-full rounded-[20px] object-cover'
                                src={`${featuredPost.image?.url}`}
                                alt={featuredPost.title}
                            />
                            <p className='sd:text-[34px] sp:text-[27px] sr:text-[20px] leading-tight text-base mt-7 font-medium'>
                                {featuredPost.title}
                            </p>
                            <div className='flex flex-col gap-2 mt-4 w-full'>
                                <p className='font-extralight text-base'>
                                    {featuredPost.author || 'Unknown Author'}
                                </p>
                                <p className='font-extralight text-base'>
                                    {featuredPost.readTime || '5 mins read'}
                                </p>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Latest Posts */}
                <div>
                    <p className='sr:text-lg text-base text-[#C0943E] font-medium pb-7'>Latest Articles</p>
                    {latestPosts.map((post) => (
                        <Link
                            to={`/articles/${post.url}`}
                            key={post.id}
                            className='sp:grid flex flex-col grid-cols-3 items-center gap-5 border-t pt-8 pb-5'
                        >
                            <img
                                className='w-full object-cover sp:min-h-[110px] rounded-[10px]'
                                src={`${post.image?.url}`}
                                alt={post.title}
                            />
                            <div className='flex flex-col gap-1 col-span-2'>
                                <p className='text-[#C0943E] font-semibold'>{post.category || 'General'}</p>
                                <p className='font-semibold sa:text-[20px] text-base'>{post.title}</p>
                                <div className='flex flex-col gap-2 w-full'>
                                    <p className='font-extralight text-base'>{post.author || 'Unknown Author'}</p>
                                    <p className='font-extralight text-base'>{post.readTime || '5 mins read'}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeaturedArticles