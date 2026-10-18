import { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa6";
import Logo from '../Images/articleLogo.png';
import { ENDPOINTS } from '../config/api';
import { SOCIAL_LINKS } from '../config/site';

const POSTS_PER_PAGE = 11;

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchPosts = useCallback(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    axios.get(ENDPOINTS.articles())
      .then(res => { if (isMounted) setPosts(res.data?.data || []); })
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
      .finally(() => { if (isMounted) setLoading(false); });

    return () => { isMounted = false; };
  }, []);

  useEffect(() => fetchPosts(), [fetchPosts]);

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-[1440px] xl:px-32 md:p-16 p-5 py-10 xl:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true" aria-label="Loading posts">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-[#F5F5F5] rounded-[20px] animate-pulse">
            <div className="w-full h-[200px] rounded-t-[20px] bg-black/5" />
            <div className="flex flex-col p-[13px] gap-4 m-2">
              <div className="h-4 w-20 rounded bg-black/10" />
              <div className="h-5 w-full rounded bg-black/10" />
              <div className="h-4 w-24 rounded bg-black/10" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto w-full max-w-[1440px] xl:px-32 md:p-16 p-5 py-10 xl:py-20">
        <div className="flex flex-col items-center justify-center text-center gap-4 py-16 px-6 border border-black/10 rounded-[20px] bg-[#F5F5F5]">
          <p className="text-[#C0943E] text-xl font-semibold">Couldn&apos;t load articles</p>
          <p className="text-gray-600 text-sm">
            Error code: <span className="font-semibold">{error.code}</span>
          </p>
          <p className="text-gray-500 text-xs max-w-md">{error.message}</p>
          <button
            type="button"
            onClick={fetchPosts}
            className="mt-2 text-base text-[#C0943E] font-medium border border-[#C0943E] rounded-full px-6 py-2 hover:bg-[#C0943E] hover:text-white transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="text-center py-20">
        <p className="text-xl font-medium text-gray-600">
          No articles available yet. Check back soon!
        </p>
      </div>
    );
  }

  // Pagination logic
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Render card style post
  const renderCard = (post) => (
    <Link
      to={`/articles/${post.url}`}
      key={post.id}
      onClick={() => window.scrollTo(0, 0)}
      className="bg-[#F5F5F5] rounded-[20px] cursor-pointer"
    >
      <img
        className="w-full h-[200px] rounded-t-[20px] object-cover"
        src={post.image?.url || Logo}
        onError={(e) => { e.currentTarget.src = Logo; }}
        alt={post.title || 'Article'}
      />
      <div className="flex flex-col p-[13px] gap-4 m-2">
        <p className="uppercase text-[#C0943E] text-sm font-normal">{post.header}</p>
        <p className="text-lg font-semibold leading-tight">{post.title}</p>
        <p className="font-light">
          {post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
              })
            : ''}
        </p>
      </div>
    </Link>
  );

  // Render featured style post
  const renderFeatured = (post) => (
    <div key={post.id} className="flex flex-col lg:flex-row items-center justify-center gap-5 relative my-10">
      <img
        className="w-full lg:w-[700px] rounded-[20px] object-cover"
        src={post.image?.url || Logo}
        onError={(e) => { e.currentTarget.src = Logo; }}
        alt={post.title || 'Article'}
      />
      <div className="flex flex-col items-start gap-7 bg-[#F5F5F5] rounded-[20px] p-6 md:p-8 lg:ml-[-90px] w-full lg:w-auto">
        <p className="sm:text-2xl text-xl md:text-[38px] font-semibold leading-8">{post.title}</p>
        <p className="text-[#000000CC] sm:text-lg text-base md:text-2xl font-normal">{post?.note}</p>
        <Link onClick={() => window.scrollTo(0, 0)} to={`/articles/${post.url}`}>
          <button className="py-[12px] px-6 md:py-[16px] md:px-8 bg-[#C0943E] text-[#ffffff] rounded-full">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-[1440px] xl:px-32 md:p-16 p-5 py-10 xl:py-20 flex flex-col gap-8">
      {/* Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {currentPosts.map((post, index) => {
          if (index === 0 || index === 7) {
            // 1st and 8th posts featured, take full width
            return (
              <div key={post.id} className="col-span-1 sm:col-span-2 lg:col-span-3">
                {renderFeatured(post)}
              </div>
            );
          } else {
            return renderCard(post);
          }
        })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 flex-wrap gap-2">
        {/* Prev */}
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded ${page === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[#C0943E] text-white"
            }`}
        >
          Prev
        </button>

        {/* Page numbers */}
        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`px-4 py-2 rounded ${page === pageNum
                ? "bg-[#005BC199] text-white font-bold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next */}
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded ${page === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-[#C0943E] text-white"
            }`}
        >
          Next
        </button>
      </div>

      {/* Follow + Newsletter */}
      <div className="flex flex-col lg:flex-row mt-7 rounded-[20px] overflow-hidden">
        {/* Follow */}
        <div className="bg-[#F5F5F5] h-auto py-10 flex flex-col items-center justify-center gap-6 w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-2xl md:text-4xl">Follow TMBI</p>
          <p className="text-[#0C0033] text-base md:text-lg max-w-md">
            Follow us on social media for updates, insights, and opportunities.
          </p>
          <div className="flex items-center justify-center text-[30px] md:text-[40px] gap-4">
            <a href={SOCIAL_LINKS.linkedin} rel='noreferrer' target='_blank' className='underline'>
              <FaLinkedin />
            </a>
            <a href={SOCIAL_LINKS.whatsapp} rel='noreferrer' target='_blank' className='underline'>
              <FaWhatsapp />
            </a>
            <a href={SOCIAL_LINKS.instagram} rel='noreferrer' target='_blank' className='underline'>
              <FaInstagram />
            </a>
            <a href={SOCIAL_LINKS.facebook} rel='noreferrer' target='_blank' className='underline'>
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-[#002B5B] text-white h-auto py-10 flex flex-col items-center justify-center gap-6 w-full lg:w-1/2 px-6">
          <div className="max-w-[460px] flex flex-col items-center justify-center gap-6 w-full">
            <p className="sm:text-2xl text-xl md:text-4xl text-center">Subscribe to our newsletter</p>
            <p className="text-base md:text-lg text-center">
              Enter your email address to subscribe to our articles and receive notifications of new posts by email.
            </p>
            <input
              type="email"
              name="email"
              className='bg-white text-black rounded-lg p-4 w-full'
              placeholder='Enter Email Address'
            />
            <button className='py-[12px] px-10 md:py-[16px] md:px-16 border-2 border-[#FFFFFF80] bg-white text-[#002B5B] rounded-full'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
