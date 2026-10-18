import { HiMiniArrowRight } from 'react-icons/hi2'
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../Images/articleLogo.png'
import { ENDPOINTS } from '../config/api';
import Container from './Container';

const FeaturedArticles = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    const retry = useCallback(() => {
        setError(null);
        setLoading(true);
        setReloadKey((key) => key + 1);
    }, []);

    useEffect(() => {
        let isMounted = true;

        axios.get(ENDPOINTS.articles())
            .then(res => {
                if (!isMounted) return;
                setPosts(res.data?.data || []);
            })
            .catch(err => {
                if (!isMounted) return;
                setError({
                    code: err?.response?.status || 'NETWORK',
                    message:
                        err?.response?.data?.error?.message ||
                        err?.message ||
                        'Unable to reach the articles service.',
                });
                setPosts([]);
            })
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => { isMounted = false; };
    }, [reloadKey]);

    const featuredPost = posts[0];
    const latestPosts = posts.slice(1, 4);

    return (
        <div className='xl:px-24 xl:py-20 sh:pl-16 sh:pr-10 sp:px-7 px-4 bg-[#1B1B1B] py-8 text-white'>
            <Container>
            <div className='grid grid-cols-2'>
                <div className='mk:col-span-1 col-span-2'>
                    <p className='font-bold sp:text-[45px] sr:text-3xl text-2xl'>Featured Articles</p>
                    <p className='font-normal mt-8 sp:text-xl sr:text-lg text-base'>
                        Stay connected with the latest business insights, research <br className='sd:block hidden' />
                        findings, and success stories from our students, and alumni network.
                    </p>
                </div>
            </div>

            {loading ? (
                <div className='grid mk:grid-cols-2 gap-10 mt-8' aria-busy='true' aria-label='Loading featured articles'>
                    <div className='flex flex-col gap-7 animate-pulse'>
                        <div className='h-5 w-56 rounded bg-white/10' />
                        <div className='w-full h-[280px] rounded-[20px] bg-white/10' />
                        <div className='h-6 w-3/4 rounded bg-white/10' />
                        <div className='h-4 w-40 rounded bg-white/10' />
                    </div>
                    <div className='flex flex-col gap-5 animate-pulse'>
                        <div className='h-5 w-40 rounded bg-white/10 mb-2' />
                        {[0, 1, 2].map((i) => (
                            <div key={i} className='grid grid-cols-3 items-center gap-5 border-t border-white/10 pt-8 pb-5'>
                                <div className='w-full h-[110px] rounded-[10px] bg-white/10' />
                                <div className='flex flex-col gap-3 col-span-2'>
                                    <div className='h-4 w-24 rounded bg-white/10' />
                                    <div className='h-5 w-full rounded bg-white/10' />
                                    <div className='h-4 w-32 rounded bg-white/10' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : error ? (
                <div className='flex flex-col items-center justify-center text-center gap-4 mt-8 py-16 px-6 border border-white/15 rounded-[20px] bg-white/5'>
                    <p className='text-[#C0943E] sr:text-xl text-lg font-semibold'>Couldn&apos;t load featured articles</p>
                    <p className='text-white/70 sr:text-base text-sm'>
                        Error code: <span className='font-semibold'>{error.code}</span>
                    </p>
                    <p className='text-white/50 sr:text-sm text-xs max-w-md'>{error.message}</p>
                    <button
                        type='button'
                        onClick={retry}
                        className='mt-2 sr:text-lg text-base text-[#C0943E] font-medium border border-[#C0943E] rounded-full px-6 py-2 hover:bg-[#C0943E] hover:text-[#1B1B1B] transition-colors'
                    >
                        Try again
                    </button>
                </div>
            ) : !posts.length ? (
                <div className='text-center py-20'>
                    <p className='text-xl font-medium text-gray-300'>
                        No featured articles available yet. Check back soon!
                    </p>
                </div>
            ) : (
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
                                    src={featuredPost.image?.url || Logo}
                                    onError={(e) => { e.currentTarget.src = Logo; }}
                                    alt={featuredPost.title || 'Featured article'}
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
                        {latestPosts.length ? latestPosts.map((post) => (
                            <Link
                                to={`/articles/${post.url}`}
                                key={post.id}
                                className='sp:grid flex flex-col grid-cols-3 items-center gap-5 border-t pt-8 pb-5'
                            >
                                <img
                                    className='w-full object-cover sp:min-h-[110px] rounded-[10px]'
                                    src={post.image?.url || Logo}
                                    onError={(e) => { e.currentTarget.src = Logo; }}
                                    alt={post.title || 'Article'}
                                />
                                <div className='flex flex-col gap-1 col-span-2'>
                                    <p className='text-[#C0943E] font-semibold'>{post.header || 'General'}</p>
                                    <p className='font-semibold sa:text-[20px] text-base'>{post.title}</p>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <p className='font-extralight text-base'>{post.author || 'Unknown Author'}</p>
                                        <p className='font-extralight text-base'>{post.readTime || '5 mins read'}</p>
                                    </div>
                                </div>
                            </Link>
                        )) : (
                            <p className='border-t pt-8 pb-5 text-gray-300'>More articles coming soon.</p>
                        )}
                    </div>
                </div>
            )}
            </Container>
        </div>
    );
}

export default FeaturedArticles
