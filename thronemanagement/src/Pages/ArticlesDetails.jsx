import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Logo from '../Images/articleLogo.png'

const ArticlesDetails = () => {

    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:1337/api/tmbiss?filters[url][$eq]=${slug}&populate=*`)
            .then(res => setPost(res.data.data[0]))
            .catch(err => console.error(err));
    }, [slug]);

    if (!post) return <p>Loading...</p>;

    const { title, Content: content, image, publishedAt } = post;

    return (
        <div className='xl:px-40 sh:px-24 px-14 py-10 flex flex-col gap-8'>
            <p className='text-[38px] font-semibold leading-tight'>{title}</p>
            <img className='h-[400px] w-[700px] mx-auto' src={`http://localhost:1337${image.url}`} alt="" />
            <div className="prose max-w-none">
                {content.map((block, i) => {
                    if (block.type === 'paragraph') {
                        const hasText = block.children?.some(child => child.text?.trim());
                        if (!hasText) return null;

                        return (
                            <p key={i} className="mb-4 leading-relaxed">
                                {block.children.map((child, j) => (
                                    <span key={j} className={child.bold ? 'font-bold' : ''}>
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
                            <Tag key={i} className={`text-xl font-semibold mt-6 mb-2`}>
                                {block.children.map((child, j) => (
                                    <span key={j} className={child.bold ? 'font-bold' : ''}>
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
                            <ListTag key={i} className="list-inside list-decimal ml-6 mb-4">
                                {block.children.map((listItem, j) => (
                                    <li key={j}>
                                        {listItem.children.map((child, k) => (
                                            <span key={k} className={child.bold ? 'font-bold' : ''}>
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
        </div>
    )
}

export default ArticlesDetails