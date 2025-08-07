import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Logo from '../Images/articleLogo.png'
// import article1 from '../Images/article1.png'
// import article2 from '../Images/article2.png'
// import article3 from '../Images/article3.png'

const Articles = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/tmbiss?populate=*')
      .then(res => setPosts(res.data.data))
      .catch(err => console.error(err));
  }, []);

  const [firstPost, ...otherPosts] = posts;

  return (
    <div className='xl:px-24 sh:px-16 sh:pr-10 px-7 py-10 flex flex-col gap-8'>
      {firstPost && (
        <Link to={`/articles/${firstPost.url}`} className='flex items-start gap-5 cursor-pointer'>
          <img
            className='w-[400px]'
            src={`http://localhost:1337${firstPost.image?.url}`}
            alt=""
          />
          <div className='flex flex-col gap-4'>
            <p className='uppercase text-[#C0943E] text-lg font-normal'>{firstPost.header}</p>
            <p className='text-[38px] font-semibold leading-tight'>
              {firstPost.title}
            </p>
            <p className='font-light'>
              {new Date(firstPost.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </Link>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {otherPosts.map((post) => (
          <Link
            to={`/articles/${post.url}`}
            key={post.id}
            className='border border-[#BFBFBF] cursor-pointer'
          >
            <img
              className='w-full h-[200px] object-cover'
              src={`http://localhost:1337${post.image?.url}`}
              alt=""
            />
            <div className='flex flex-col gap-4 m-2'>
              <p className='uppercase text-[#C0943E] text-sm font-normal'>{post.header}</p>
              <p className='text-lg font-semibold leading-tight'>
                {post.title}
              </p>
              <p className='font-light'>
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Articles