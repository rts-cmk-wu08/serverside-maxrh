import Link from 'next/link'


export default function Header() {
    return (
        <header className="flex justify-between items-center p-8">
            <Link href="/" className="text-4xl font-bold">
                Logo
            </Link>
            <nav className="flex">
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
        </header>
    )
}