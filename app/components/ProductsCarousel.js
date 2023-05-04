import Image from 'next/image'
import Link from 'next/link';

async function getProducts() {
    const posts = await fetch('https://swanky-api.onrender.com/products');
    return posts.json();
}

export default async function ProductsCarousel() {
    const products = await getProducts();

    return (
        <div className="products-carousel text-center">
            <h2 className='mb-10'>Our Products</h2>

            <div className='grid grid-cols-4 gap-4'>
                {products.map(product => (
                    <article key={product.id} className='text-center'>
                        <Link href={`/products/${product.id}`}>
                            <Image 
                                src={`https://picsum.photos/600/400?random-${product.id}`} 
                                alt={product.name} 
                                className='mb-4'
                                style={{ transform: "translate3d(0, 0, 0)" }}
                                width={600}
                                height={400}
                                loading={"lazy"}
                            />
                        </Link>
                        <Link href={`/products/${product.id}`}>
                            <h2 className='text-xl mb-1'>{product.name}</h2>
                        </Link>

                        <p className='text-red-500'>${product.price}.00</p>
                        
                    </article>
                ))}
            </div>
        </div>
    )
    
}