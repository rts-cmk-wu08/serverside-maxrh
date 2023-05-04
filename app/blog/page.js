import Link from 'next/link';
import PageTitle from '../components/PageTitle';
import Image from 'next/image'

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
        <main className="container flex min-h-screen flex-col items-center p-24 pt-0">
            <PageTitle 
                title={breadcrumbs[breadcrumbs.length - 1].title} 
                crumbs={breadcrumbs}
                color={'text-white'}
                bgcolor={'bg-slate-900'}
                opacity={'opacity-50'}
                height={'h-80'}
            />
            <div className='grid grid-cols-3 gap-4'>
                {posts.map(post => (
                    <article key={post.id} className='text-center'>
                        <Link href={`/blog/${post.id}`}>
                            <Image 
                                src={`https://picsum.photos/600/400?random-${post.id}`} 
                                alt={post.title} 
                                className='mb-4'
                                style={{ transform: "translate3d(0, 0, 0)" }}
                                width={600}
                                height={400}
                                loading={"lazy"}
                            />
                        </Link>
                        <Link href={`/blog/${post.id}`}>
                            <h2 className='text-xl mb-1'>{post.title}</h2>
                        </Link>

                        <p>{post.subtitle.split('?')[0] + '.'}</p>
                        
                    </article>
                ))}
            </div>
        </main>
    )
}
