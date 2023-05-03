import Image from 'next/image'
import NextBreadcrumbs from "./Breadcrumbs"

export default function PageTitle({ title, crumbs, color, bgcolor, opacity, height }) {
    return (
        <div className={`relative w-screen mb-20 flex justify-center items-center ${bgcolor} ${height}`}>            
            <Image 
                src={`https://picsum.photos/1600/600`} 
                alt={title} 
                className={`absolute inset-0 object-cover object-center w-full h-full ${opacity}`}
                style={{ transform: "translate3d(0, 0, 0)" }}
                width={1600}
                height={600}
                loading={"lazy"}
            />
            <div className="z-[1]">
                <h1 className={color}>{title}</h1>
                <NextBreadcrumbs crumbs={crumbs} color={color}/>
            </div>
        </div>
    )
}