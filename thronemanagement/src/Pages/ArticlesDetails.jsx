import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Logo from '../Images/articleLogo.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { ENDPOINTS } from '../config/api';

const ArticlesDetails = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setError(null);

        axios
            .get(ENDPOINTS.articles(`filters[url][$eq]=${slug}&populate=*`))
            .then((res) => {
                if (!isMounted) return;
                const fetchedPost = res.data?.data?.[0] || null;
                setPost(fetchedPost);

                if (fetchedPost) {
                    const header = fetchedPost.header;
                    const id = fetchedPost.id;

                    // Fetch related posts
                    axios
                        .get(
                            ENDPOINTS.articles(
                                `filters[header][$eq]=${header}&filters[id][$ne]=${id}&populate=*`
                            )
                        )
                        .then((res) => { if (isMounted) setRelatedPosts(res.data?.data || []); })
                        .catch((err) => {
                            if (!isMounted) return;
                            console.error(err);
                            setRelatedPosts([]);
                        });
                } else {
                    setRelatedPosts([]);
                }
            })
            .catch((err) => {
                if (!isMounted) return;
                setError({
                    code: err?.response?.status || 'NETWORK',
                    message:
                        err?.response?.data?.error?.message ||
                        err?.message ||
                        'Unable to load this article.',
                });
                setPost(null);
            })
            .finally(() => { if (isMounted) setLoading(false); });

        return () => { isMounted = false; };
    }, [slug]);

    if (loading) {
        return (
            <div className="mx-auto w-full max-w-[1440px] xl:px-40 md:px-16 sm:px-8 px-4 py-10 flex flex-col gap-8 animate-pulse" aria-busy="true" aria-label="Loading article">
                <div className="h-8 w-3/4 max-w-[1000px] mx-auto rounded bg-black/10" />
                <div className="max-w-[900px] w-full mx-auto flex flex-col gap-4">
                    <div className="w-full h-[320px] rounded-[20px] bg-black/10" />
                    <div className="h-4 w-32 rounded bg-black/10" />
                </div>
                <div className="max-w-[900px] w-full mx-auto flex flex-col gap-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-4 w-full rounded bg-black/10" />
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="mx-auto w-full max-w-[1440px] xl:px-40 md:px-16 sm:px-8 px-4 py-10">
                <div className="flex flex-col items-center justify-center text-center gap-4 py-16 px-6 border border-black/10 rounded-[20px] bg-[#F5F5F5]">
                    <p className="text-[#C0943E] text-xl font-semibold">Couldn&apos;t load this article</p>
                    <p className="text-gray-600 text-sm">
                        Error code: <span className="font-semibold">{error.code}</span>
                    </p>
                    <p className="text-gray-500 text-xs max-w-md">{error.message}</p>
                    <Link
                        to="/articles"
                        onClick={() => window.scrollTo(0, 0)}
                        className="mt-2 text-base text-[#C0943E] font-medium border border-[#C0943E] rounded-full px-6 py-2 hover:bg-[#C0943E] hover:text-white transition-colors"
                    >
                        Back to articles
                    </Link>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="text-center py-20">
                <p className="text-xl font-medium text-gray-600">Article not found.</p>
                <Link
                    to="/articles"
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-block mt-4 text-[#C0943E] font-medium"
                >
                    Back to articles
                </Link>
            </div>
        );
    }

    const { title, content, image, publishedAt } = post;

    return (
        <div className="mx-auto w-full max-w-[1440px] xl:px-40 md:px-16 sm:px-8 px-4 py-10 flex flex-col gap-8">
            {/* Title */}
            <p className="sm:text-2xl text-xl md:text-3xl lg:text-[38px] max-w-[1000px] mx-auto text-center font-medium">
                {title}
            </p>

            {/* Featured Image */}
            <div className="max-w-[900px] w-full mx-auto flex flex-col gap-4">
                <img
                    className="w-full h-auto max-h-[400px] object-cover rounded-[20px]"
                    src={image?.url || Logo}
                    onError={(e) => { e.currentTarget.src = Logo; }}
                    alt={title}
                />
                <p className="text-sm text-gray-600">
                    {publishedAt
                        ? new Date(publishedAt).toLocaleDateString("en-US", {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                        })
                        : ''}
                </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
                {(content || []).map((block, i) => {
                    if (block.type === 'paragraph') {
                        const hasText = block.children?.some((child) => child.text?.trim());
                        if (!hasText) return null;

                        return (
                            <p key={i} className="mb-4 leading-relaxed text-base md:text-lg">
                                {(block.children || []).map((child, j) => (
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
                                {(block.children || []).map((child, j) => (
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
                                {(block.children || []).map((listItem, j) => (
                                    <li key={j}>
                                        {(listItem.children || []).map((child, k) => (
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
                                                ? `${related.image.url}`
                                                : Logo
                                        }
                                        onError={(e) => { e.currentTarget.src = Logo; }}
                                        alt={related.title || 'Article'}
                                    />
                                    <div className="flex flex-col p-[13px] gap-4 m-2">
                                        <p className="uppercase text-[#C0943E] text-sm font-normal">
                                            {related.header}
                                        </p>
                                        <p className="text-base md:text-lg font-semibold leading-tight">
                                            {related.title}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {related.publishedAt
                                                ? new Date(related.publishedAt).toLocaleDateString("en-US", {
                                                    day: '2-digit',
                                                    month: 'short',
                                                    year: 'numeric',
                                                })
                                                : ''}
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
