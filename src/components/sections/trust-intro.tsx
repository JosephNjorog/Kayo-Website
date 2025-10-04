"use client"

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function TrustIntro() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-gradient-to-b from-white to-[#fafafa] py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div 
          ref={ref}
          className={`text-center max-w-[900px] mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-[clamp(32px,4vw,42px)] font-bold text-[#1a1a1a] mb-8">
            Building Trust in Carbon Markets
          </h2>
          
          <p className="text-[20px] leading-[1.6] text-[#4a5568] mb-6 max-w-[800px] mx-auto">
            Kayo is <strong className="text-[#3dd9d9] font-bold">not a marketplace</strong>. 
            We provide the pipelines that bring trust, traceability, and accountability to carbon credit projects.
          </p>
          
          <p className="text-[18px] leading-[1.6] text-[#6b7280] max-w-[900px] mx-auto">
            Our digital infrastructure connects project developers, auditors, corporates, and agricultural aggregators 
            through transparent, verifiable systems that ensure every carbon credit is backed by real, measurable impact.
          </p>
        </div>
      </div>
    </section>
  )
}