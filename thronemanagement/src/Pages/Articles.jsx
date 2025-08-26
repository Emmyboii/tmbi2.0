import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const POSTS_PER_PAGE = 11;

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get('http://localhost:1337/api/tmbiss?populate=*')
      .then(res => setPosts(res.data.data || []))
      .catch(err => {
        console.error(err);
        setPosts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading posts...</p>;
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
        src={`http://localhost:1337${post.image?.url}`}
        alt={post.title}
      />
      <div className="flex flex-col p-[13px] gap-4 m-2">
        <p className="uppercase text-[#C0943E] text-sm font-normal">{post.header}</p>
        <p className="text-lg font-semibold leading-tight">{post.title}</p>
        <p className="font-light">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          })}
        </p>
      </div>
    </Link>
  );

  // Render featured style post
  const renderFeatured = (post) => (
    <div key={post.id} className="flex items-center justify-center gap-5 relative cursor-pointer my-10">
      <img
        className="w-[700px] rounded-[20px]"
        src={`http://localhost:1337${post.image?.url}`}
        alt={post.title}
      />
      <div className="flex flex-col items-start gap-7 bg-[#F5F5F5] rounded-[20px] p-8 ml-[-90px]">
        <p className="text-[38px] font-semibold leading-tight">{post.title}</p>
        <p className="text-[#000000CC] text-2xl font-normal">{post?.note}</p>
        <Link onClick={() => window.scrollTo(0, 0)} to={`/articles/${post.url}`}>
          <button className="py-[16px] px-8 bg-[#C0943E] text-[#ffffff] rounded-full">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="xl:px-32 sh:px-16 px-7 py-20 flex flex-col gap-8">
      {currentPosts.map((post, index) => {
        if (index === 0 || index === 7) {
          // 1st and 8th posts featured
          return renderFeatured(post);
        } else {
          // 2–7 and 9–11 are grid
          return (
            <div key={post.id} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {renderCard(post)}
            </div>
          );
        }
      })}

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2">
        {/* Previous button */}
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded ${page === 1 ? "bg-gray-30 cursor-not-allowed" : "bg-[#C0943E text-white"
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
                : "bg-gray-20 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next button */}
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded ${page === totalPages ? "bg-gray-30 cursor-not-allowed" : "bg-[#C0943E text-white"
            }`}
        >
          Next
        </button>
      </div>

      <div className='flex mt-7 items-center ronded-[20px]'>
        <div className='bg-[#F5F5F5] h-[410px] flex flex-col items-center justify-center gap-6 w-full rounded-s-[20px]'>
          <p className='text-4xl'>Follow TMBI</p>
          <p className='text-[#0C0033] text-lg'>Follow us on social media for updates, insights, and opportunities.</p>
          <div className='flex items-center md:justify-center text-[40px] gap-4'>
            <a href="https://ng.linkedin.com/company/tmbis-ng-trs" rel='noreferrer' target='_blank' className='underline'>
              <FaLinkedin />
            </a>
            <a href="http://surl.li/mumpei" rel='noreferrer' target='_blank' className='underline'>
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/thronemanagementand_business/" rel='noreferrer' target='_blank' className='underline'>
              <FaInstagram />
            </a>
            <a href="https://web.facebook.com/thronemanagement" rel='noreferrer' target='_blank' className='underline'>
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className='bg-[#002B5B] text-white h-[410px] flex flex-col items-center justify-center gap-6  w-full rounded-e-[20px]'>
          <div className='max-w-[460px] flex flex-col items-center justify-center gap-6 '>
            <p className='text-4xl'>Subscribe to our newsletter</p>
            <p className='text-lg text-center'>Enter your email address to subscribe to our articles and receive notifications of new posts by email.</p>
            <input
              type="email"
              name="email"
              id=""
              className='bg-white rounded p-5 w-full'
              placeholder='Enter Email Address'
            />
            <button className='py-[16px] px-16 border-2 border-[#FFFFFF80] bg-white text-[#002B5B] rounded-full'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
