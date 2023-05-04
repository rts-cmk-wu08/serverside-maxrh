import Image from 'next/image'
import Link from 'next/link';

async function getStarted() {
    const posts = await fetch('https://swanky-api.onrender.com/started');
    return posts.json();
}

export default async function Started() {
    const started = await getStarted();

    return (
        <div className="grid grid-cols-2 gap-16 items-center">
            <div className="flex flex-col">
                <Image 
                    src={`https://picsum.photos/1000/1000?random-${started.id}`} 
                    alt={started.name} 
                    className='mb-4'
                    style={{ transform: "translate3d(0, 0, 0)" }}
                    width={1000}
                    height={1000}
                    loading={"lazy"}
                />
            </div>

            <div className="flex flex-col">
                <h1>How Was Swanky Started?</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <br />
                <ul className='flex flex-col'>
                    {started.bullets.map(bullet => (
                        <li key={bullet.id} className=''>
                            <h2 className='text-xl mb-1'>{bullet.name}</h2>
                            <p>{bullet.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
    
}