import Navigation from '@/components/sections/navigation'
import Hero from '@/components/sections/hero'
import TrustIntro from '@/components/sections/trust-intro'
import CoreCapabilities from '@/components/sections/core-capabilities'
import WhyKayo from '@/components/sections/why-kayo'
import WhoBenefits from '@/components/sections/who-benefits'
import Products from '@/components/sections/products'
import CtaFinal from '@/components/sections/cta-final'
import Footer from '@/components/sections/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <TrustIntro />
      <CoreCapabilities />
      <WhyKayo />
      <WhoBenefits />
      <Products />
      <CtaFinal />
      <Footer />
    </div>
  );
}