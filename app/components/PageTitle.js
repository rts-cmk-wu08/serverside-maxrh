import NextBreadcrumbs from "./Breadcrumbs"

export default function PageTitle({ title, crumbs, color }) {
    return (
        <div className="relative w-screen h-80 mb-20 flex justify-center items-center">
        <img src="https://picsum.photos/1600/600" alt={title} className="absolute inset-0 z-[-1] object-cover object-center w-full h-full" />
            <div className="">
                <h1 className={color}>{title}</h1>
                <NextBreadcrumbs crumbs={crumbs} color={color}/>
            </div>
        </div>
    )
}