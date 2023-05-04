import ProductsCarousel from './components/ProductsCarousel'
import HowWeStarted from './components/HowWeStarted'
import Hero from './components/Hero'

export const revalidate = 0; // seconds

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Hero />
            <section className="section flex flex-col items-center">
                <ProductsCarousel />
            </section>
            <section className="section flex flex-col items-center">
                <HowWeStarted />
            </section>
        </main>
    )
}
