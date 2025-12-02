import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import FeaturesDeepDive from '@/components/FeaturesDeepDive'
import Testimonials from '@/components/Testimonials'
import FounderStory from '@/components/FounderStory'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import SocialProof from '@/components/SocialProof'

export default function Home() {
    return (
        <>
            <Analytics />
            <Header />
            <main>
                <Hero />
                <WhyUs />
                <SocialProof />
                <FeaturesDeepDive />
                <Testimonials />
                <FounderStory />
                <FAQ />
            </main>
            <Footer />
        </>
    )
}
