"use client"

import { useState } from 'react'
import { Check } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import BookDemoModal from '@/components/modals/book-demo-modal'

const stakeholders = [
  {
    label: "FOR PROJECT DEVELOPERS",
    title: "Project Developers",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/614079c4-8113-49d7-97ac-35ee996eb5c0-kayopulse-com/assets/images/project-developers-CaeAAtSS-5.jpg?",
    features: [
      "Streamline validation processes",
      "Real-time monitoring dashboards",
      "Automated reporting systems",
      "Enhanced credibility with verified data"
    ],
    cta: "Schedule Project Demo",
    ctaType: "demo",
    ctaParam: "project-developers"
  },
  {
    label: "FOR CORPORATES",
    title: "Corporates & Supply Chains",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/614079c4-8113-49d7-97ac-35ee996eb5c0-kayopulse-com/assets/images/corporates-supply-chain-CVnBxV-Q-6.jpg?",
    features: [
      "Verify carbon offset authenticity",
      "Track supply chain sustainability",
      "Meet ESG reporting requirements",
      "Access transparent audit trails"
    ],
    cta: "Request ESG Solution",
    ctaType: "demo",
    ctaParam: "corporate-esg"
  },
  {
    label: "FOR AUDITORS",
    title: "Auditors & Verifiers",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/614079c4-8113-49d7-97ac-35ee996eb5c0-kayopulse-com/assets/images/auditors-verifiers-CfmczzJp-7.jpg?",
    features: [
      "Automated data collection",
      "Standardized verification protocols",
      "Immutable documentation",
      "Reduced audit time and costs"
    ],
    cta: "See Verification Tools",
    ctaType: "demo",
    ctaParam: "auditor-tools"
  },
  {
    label: "FOR AGRICULTURAL AGGREGATORS",
    title: "Agricultural Aggregators",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/614079c4-8113-49d7-97ac-35ee996eb5c0-kayopulse-com/assets/images/agricultural-aggregator-CjCD5HCU-8.jpg?",
    features: [
      "Farm-level monitoring capabilities",
      "Carbon credit aggregation tools",
      "Smallholder farmer inclusion",
      "Complete supply chain visibility"
    ],
    cta: "Explore Aggregation Platform",
    ctaType: "demo",
    ctaParam: "agriculture"
  }
]

export default function WhoBenefits() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false)
  const [currentStakeholder, setCurrentStakeholder] = useState('')
  
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  
  const handleOpenModal = (stakeholderParam: string) => {
    setCurrentStakeholder(stakeholderParam)
    setIsBookDemoOpen(true)
  }

  return (
    <section className="bg-[#f9fafb] py-20 md:py-32" id="use-cases">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-[clamp(32px,4vw,42px)] font-bold text-[#1a1a1a] mb-4">
            Who Benefits from Kayo
          </h2>
          <p className="text-[18px] text-[#6b7280]">
            Tailored solutions for every stakeholder in the carbon credit ecosystem
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-md border border-[#e5e7eb] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group ${
                cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: cardsVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-[45%] relative overflow-hidden">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={stakeholder.image}
                      alt={stakeholder.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#3B82F6]/5 group-hover:bg-[#3dd9d9]/10 transition-colors duration-500"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-[55%] p-8">
                  <div className="text-[12px] font-semibold text-[#3dd9d9] tracking-wider mb-3 group-hover:text-[#10B981] transition-colors duration-300">
                    {stakeholder.label}
                  </div>
                  
                  <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-4">
                    {stakeholder.title}
                  </h3>
                  
                  <ul className="space-y-2 mb-6">
                    {stakeholder.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 group/item">
                        <Check className="w-4 h-4 text-[#3dd9d9] flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125" strokeWidth={3} />
                        <span className="text-[15px] text-[#4a5568] leading-[1.8]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => handleOpenModal(stakeholder.ctaParam)}
                    className="text-[#3dd9d9] text-[14px] font-semibold border border-[#3dd9d9] px-6 py-2.5 rounded-md hover:bg-[#3dd9d9] hover:text-white hover:scale-105 transition-all duration-300"
                  >
                    {stakeholder.cta || "Book Consultation"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Book Demo Modal */}
      <BookDemoModal 
        isOpen={isBookDemoOpen} 
        onClose={() => setIsBookDemoOpen(false)}
        stakeholderType={currentStakeholder}
      />
    </section>
  )
}