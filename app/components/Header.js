import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/swanky.svg'

export default function Header() {
    return (
        <header className="p-8 bg-white">
            <div className="container flex justify-between items-center">
                <nav className="flex font-heading uppercase text-sm font-bold tracking-wider">
                    <Link href="/" className="mr-8">
                        Home
                    </Link>
                    <Link href="/blog" className="mr-8">
                        Blog
                    </Link>
                    <Link href="/contact">
                        Contact
                    </Link>
                </nav>

                <Link href="/" className="text-4xl font-bold">
                    <Image
                        priority
                        src={logo}
                        alt="Swanky"
                    />
                </Link>

                <nav className="flex font-heading uppercase text-sm font-bold tracking-wider">
                    <Link href="/" className="mr-8">
                        Login
                    </Link>
                    <Link href="/" className="mr-8">
                        Search
                    </Link>
                    <Link href="/">
                        (0)
                    </Link>
                    <Link href="/">
                        (0)
                    </Link>
                </nav>
            </div>
        </header>
    )
}