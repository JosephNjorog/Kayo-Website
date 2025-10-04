"use client"

import { AlertTriangle, CheckCircle, X } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const problems = [
  "Opacity in project validation",
  "Double counting and fraud",
  "Unverifiable claims",
  "Lack of supply chain traceability"
]

const solutions = [
  "Transparent digital verification",
  "Immutable audit trails",
  "Data-backed validation",
  "End-to-end traceability"
]

export default function WhyKayo() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation()

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-[clamp(32px,4vw,42px)] font-bold text-[#1a1a1a] mb-4">
            Why Kayo Exists
          </h2>
          <p className="text-[18px] text-[#6b7280]">
            Carbon markets are broken. We're building the infrastructure to fix them.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Current Problems */}
          <div 
            className={`bg-white border border-[#fecaca] rounded-xl p-10 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
              cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#ef4444]/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <AlertTriangle className="w-5 h-5 text-[#ef4444]" />
              </div>
              <h3 className="text-[24px] font-bold text-[#1a1a1a]">Current Problems</h3>
            </div>
            
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: cardsVisible ? `${index * 100}ms` : '0ms' }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#ef4444] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[16px] text-[#4a5568]">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kayo Solutions */}
          <div 
            className={`bg-white border border-[#a7f3d0] rounded-xl p-10 transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
              cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <CheckCircle className="w-5 h-5 text-[#10b981]" />
              </div>
              <h3 className="text-[24px] font-bold text-[#1a1a1a]">Kayo Solutions</h3>
            </div>
            
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                  }`}
                  style={{ transitionDelay: cardsVisible ? `${(index + 2) * 100}ms` : '0ms' }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 text-white" fill="white" />
                  </div>
                  <span className="text-[16px] text-[#4a5568]">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div 
          ref={textRef}
          className={`text-center max-w-[900px] mx-auto transition-all duration-700 ${
            textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[18px] leading-[1.7] text-[#6b7280]">
            We're not just another carbon marketplace. Kayo is building the fundamental digital infrastructure 
            that makes carbon credits verifiable, traceable, and trustworthy. Our tech-first approach combines 
            IoT sensors, satellite monitoring, blockchain verification, and AI analytics to create an ecosystem 
            where every stakeholder can operate with complete confidence.
          </p>
        </div>
      </div>
    </section>
  )
}