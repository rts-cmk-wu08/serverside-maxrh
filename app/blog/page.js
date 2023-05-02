import Link from 'next/link';

export const revalidate = 60; // seconds

async function getPosts() {
    const posts = await fetch('https://swanky-api.onrender.com/posts');
    return posts.json();
}

export default async function Blog() {
    const posts = await getPosts();

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-center">Blog</h1>
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
