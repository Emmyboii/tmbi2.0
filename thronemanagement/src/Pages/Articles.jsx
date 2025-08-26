import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:1337/api/tmbiss?populate=*')
      .then(res => setPosts(res.data.data || []))
      .catch(err => {
        console.error(err);
        setPosts([]); // ensure posts is never null
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

  const [firstPost, ...otherPosts] = posts;

  return (
    <div className='xl:px-32 sh:px-16 px-7 py-20 flex flex-col gap-8'>
      {firstPost && (
        <div className='flex items-center justify-center gap-5 relative cursor-pointer'>
          <img
            className='w-[700px] rounded-[20px]'
            src={`http://localhost:1337${firstPost.image?.url}`}
            alt={firstPost.title}
          />
          <div className='flex flex-col items-start gap-7 bg-[#F5F5F5] rounded-[20px] p-8 ml-[-90px]'>
            <p className='text-[38px] font-semibold leading-tight'>
              {firstPost.title}
            </p>
            <p className='text-[#000000CC] text-2xl font-normal'>{firstPost?.note}</p>
            <Link onClick={() => window.scrollTo(0, 0)} to={`/articles/${firstPost.url}`}>
              <button className='py-[16px] px-8 bg-[#C0943E] text-[#ffffff] rounded-full'>
                Read more
              </button>
            </Link>
          </div>
        </div>
      )}

      {otherPosts.length > 0 && (
        <div className='mt-24'>
          <p className='text-[#0C0033] text-[30px] font-medium'>Recent Posts</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 mt-9 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {otherPosts.map((post) => (
              <Link
                to={`/articles/${post.url}`}
                key={post.id}
                onClick={() => window.scrollTo(0, 0)}
                className='bg-[#F5F5F5] rounded-[20px] cursor-pointer'
              >
                <img
                  className='w-full h-[200px] rounded-t-[20px] object-cover'
                  src={`http://localhost:1337${post.image?.url}`}
                  alt={post.title}
                />
                <div className='flex flex-col p-[13px] gap-4 m-2'>
                  <p className='uppercase text-[#C0943E] text-sm font-normal'>{post.header}</p>
                  <p className='text-lg font-semibold leading-tight'>{post.title}</p>
                  <p className='font-light'>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Articles;
