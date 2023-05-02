import Link from 'next/link';
import PageTitle from '../components/PageTitle';

export const revalidate = 60; // seconds

async function getPosts() {
    const posts = await fetch('https://swanky-api.onrender.com/posts');
    return posts.json();
}

const breadcrumbs = [
    { title: 'Home', slug: '/' },
    { title: 'Blog', slug: '/blog' },
];


export default async function Blog() {
    const posts = await getPosts();

    return (
        <main className="flex min-h-screen flex-col items-center p-24 pt-0">
            <PageTitle 
                title={breadcrumbs[1].title} 
                crumbs={breadcrumbs}
                color={'text-white'}
            />
            <div className='grid grid-cols-3 gap-4'>
                {posts.map(post => (
                    <article key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            <img src={`https://picsum.photos/600/400?random-${post.id}`} alt={post.title} className='mb-4'/>
                        </Link>
                        <Link href={`/blog/${post.id}`}>
                            <h2 className='text-2xl'>{post.title}</h2>
                        </Link>

                        <p>{post.subtitle}</p>
                        
                    </article>
                ))}
            </div>
        </main>
    )
}
