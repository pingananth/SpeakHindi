import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'

export default function Home() {
    return (
        <>
            <Analytics />
            <Header />
            <main>
                <Hero />
                <WhyUs />
                <Testimonials />
            </main>
            <Footer />
        </>
    )
}
