import Image from 'next/image'
import Hero from './components/Hero'
import ProductsCarousel from './components/ProductsCarousel'
import HowWeStarted from './components/HowWeStarted'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <section className="section flex flex-col items-center">
                <ProductsCarousel />
            </section>
            <section className="section flex flex-col items-center">
                <HowWeStarted />
            </section>
        </main>
    )
}
