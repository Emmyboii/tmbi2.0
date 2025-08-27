import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Logo from '../Images/articleLogo.png'
import { MdKeyboardArrowRight } from "react-icons/md";

const ArticlesDetails = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:1337/api/tmbiss?filters[url][$eq]=${slug}&populate=*`)
            .then((res) => {
                const fetchedPost = res.data.data[0];
                setPost(fetchedPost);

                if (fetchedPost) {
                    const header = fetchedPost.header;
                    const id = fetchedPost.id;

                    // Fetch related posts
                    axios
                        .get(
                            `http://localhost:1337/api/tmbiss?filters[header][$eq]=${header}&filters[id][$ne]=${id}&populate=*`
                        )
                        .then((res) => setRelatedPosts(res.data.data))
                        .catch((err) => console.error(err));
                }
            })
            .catch((err) => console.error(err));
    }, [slug]);

    if (!post) return <p className="text-center py-20">Loading...</p>;

    const { title, content, image, publishedAt } = post;

    return (
        <div className="xl:px-40 md:px-16 sm:px-8 px-4 py-10 flex flex-col gap-8">
            {/* Title */}
            <p className="sm:text-2xl text-xl md:text-3xl lg:text-[38px] max-w-[1000px] mx-auto text-center font-medium leading-tight">
                {title}
            </p>

            {/* Featured Image */}
            <div className="max-w-[900px] w-full mx-auto flex flex-col gap-4">
                <img
                    className="w-full h-auto max-h-[400px] object-cover rounded-lg"
                    src={`http://localhost:1337${image.url}`}
                    alt={title}
                />
                <p className="text-sm text-gray-600">
                    {new Date(publishedAt).toLocaleDateString("en-US", {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                    })}
                </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
                {content.map((block, i) => {
                    if (block.type === 'paragraph') {
                        const hasText = block.children?.some((child) => child.text?.trim());
                        if (!hasText) return null;

                        return (
                            <p key={i} className="mb-4 leading-relaxed text-base md:text-lg">
                                {block.children.map((child, j) => (
                                    <span
                                        key={j}
                                        className={child.bold ? 'font-bold text-lg md:text-xl' : ''}
                                    >
                                        {child.text?.split('\n').map((line, k, arr) => (
                                            <span key={k}>
                                                {line}
                                                {k !== arr.length - 1 && <br />}
                                            </span>
                                        ))}
                                    </span>
                                ))}
                            </p>
                        );
                    }

                    if (block.type === 'heading') {
                        const level = block.level || 2;
                        const Tag = `h${Math.min(level, 6)}`;

                        return (
                            <Tag
                                key={i}
                                className="text-lg md:text-xl lg:text-2xl font-semibold mt-6 mb-2"
                            >
                                {block.children.map((child, j) => (
                                    <span
                                        key={j}
                                        className={child.bold ? 'font-bold text-xl' : ''}
                                    >
                                        {child.text}
                                    </span>
                                ))}
                            </Tag>
                        );
                    }

                    if (block.type === 'list') {
                        const isOrdered = block.format === 'ordered';
                        const ListTag = isOrdered ? 'ol' : 'ul';

                        return (
                            <ListTag
                                key={i}
                                className="list-inside list-decimal ml-4 md:ml-6 mb-4 space-y-2"
                            >
                                {block.children.map((listItem, j) => (
                                    <li key={j}>
                                        {listItem.children.map((child, k) => (
                                            <span
                                                key={k}
                                                className={child.bold ? 'font-bold text-lg md:text-xl' : ''}
                                            >
                                                {child.text?.split('\n').map((line, l, arr) => (
                                                    <span key={l}>
                                                        {line}
                                                        {l !== arr.length - 1 && <br />}
                                                    </span>
                                                ))}
                                            </span>
                                        ))}
                                    </li>
                                ))}
                            </ListTag>
                        );
                    }

                    return null;
                })}
            </div>

            {/* Related Posts */}
            <div>
                <p className="text-2xl md:text-3xl font-medium text-[#0C0033] mt-6">
                    Related Posts
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {relatedPosts.length > 0 ? (
                        <>
                            {relatedPosts.slice(0, 3).map((related) => (
                                <Link
                                    to={`/articles/${related.url}`}
                                    key={related.id}
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="bg-[#F5F5F5] rounded-[20px] cursor-pointer"
                                >
                                    <img
                                        className="w-full h-[200px] rounded-t-[20px] object-cover"
                                        src={
                                            related.image?.url
                                                ? `http://localhost:1337${related.image.url}`
                                                : Logo
                                        }
                                        alt={related.title}
                                    />
                                    <div className="flex flex-col p-[13px] gap-4 m-2">
                                        <p className="uppercase text-[#C0943E] text-sm font-normal">
                                            {related.header}
                                        </p>
                                        <p className="text-base md:text-lg font-semibold leading-tight">
                                            {related.title}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {new Date(related.publishedAt).toLocaleDateString("en-US", {
                                                day: '2-digit',
                                                month: 'short',
                                                year: 'numeric',
                                            })}
                                        </p>
                                    </div>
                                </Link>
                            ))}

                            {relatedPosts.length > 3 && (
                                <div className="flex justify-center mt-6 col-span-full">
                                    <Link
                                        to="/articles"
                                        className="py-3 flex items-center gap-2 px-6 bg-[#C0943E] text-white font-medium rounded-full hover:bg-[#a87d34] transition"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        See More <MdKeyboardArrowRight />
                                    </Link>
                                </div>
                            )}
                        </>
                    ) : (
                        <p className="text-gray-500 text-sm">No related posts found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArticlesDetails;
