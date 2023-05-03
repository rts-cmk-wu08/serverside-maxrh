import PageTitle from "../components/PageTitle"

const breadcrumbs = [
    { title: 'Home', slug: '/' },
    { title: 'Contact', slug: '/contact' },
];

export default function Contact() {
    return (
        <main className="container flex min-h-screen flex-col items-center p-24 pt-0">
            <PageTitle 
                title={breadcrumbs[breadcrumbs.length - 1].title} 
                crumbs={breadcrumbs}
                color={'text-white'}
                bgcolor={'bg-slate-900'}
                opacity={'opacity-50'}
                height={'h-80'}
            />
        </main>
    )
}
