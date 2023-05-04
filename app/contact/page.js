import PageTitle from "../components/PageTitle"
import ContactForm from "../components/ContactForm"

const breadcrumbs = [
    { title: 'Home', slug: '/' },
    { title: 'Contact', slug: '/contact' },
];

// make form with formik

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

                
                <div class="grid grid-cols-2 gap-16 w-full">
                    <div>
                        <h1>Contact Info</h1>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                        <br />
                        <div class="grid grid-cols-2 gap-4 w-full">
                            <div>
                                <h5>Office</h5>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </div>

                            <div>
                                <h5>Management</h5>
                                <p>Excepteur sint occaecat cupidatat non proident.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1>Any Questions?</h1>
                        <p>Use the form below to get in touch with us.</p>
                        <br />
                        <ContactForm />
                    </div>
                </div>

        </main>
    )
}
