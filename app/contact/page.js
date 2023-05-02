import PageTitle from "../components/PageTitle"

const breadcrumbs = [
    { title: 'Home', slug: '/' },
    { title: 'Contact', slug: '/contact' },
];

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <PageTitle 
                title={breadcrumbs[1].title} 
                crumbs={breadcrumbs}
            />
        </main>
    )
}
