'use client';

import { useParams } from 'next/navigation';

async function getPost(id) {
    const post = await fetch(`https://swanky-api.onrender.com/posts/${id}`);
    return post.json();
}

export default async function Post() {
    const id = useParams().blogId;
    const post = await getPost(id);

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <article className="text-xl max-w-3xl">
                <h1 className="mb-10">{post.title}</h1>
                <p className="text-2xl font-medium mb-10">{post.subtitle}</p>
                <p>{post.text}</p>
            </article>
        </main>
    )
}