import PageTitle from '../../components/PageTitle';

async function getPost(blogId) {
    const post = await fetch(`https://swanky-api.onrender.com/posts/${blogId}`);
    return post.json();
}

export default async function Post({params: { blogId }}) {
    const post = await getPost(blogId);

    const breadcrumbs = [
        { title: 'Home', slug: '/' },
        { title: 'Blog', slug: '/blog' },
        { title: 'Blog Detail', slug: `/blog/${blogId}` },
    ];

    return (
        <main className="flex min-h-screen flex-col items-center p-24 pt-0">
            <PageTitle 
                title={breadcrumbs[breadcrumbs.length - 1].title} 
                crumbs={breadcrumbs}
                color={'text-black'}
                bgcolor={'bg-rose-primary'}
                opacity={'opacity-0'}
                height={'h-56'}
            />
            <article className="text-xl max-w-3xl">
                <h1 className="mb-10">{post.title}</h1>
                <p className="text-2xl font-medium mb-10">{post.subtitle}</p>
                <p>{post.text}</p>
            </article>
        </main>
    )
}