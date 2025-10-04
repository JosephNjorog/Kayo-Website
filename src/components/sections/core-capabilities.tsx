"use client"

import { Shield, Database, TrendingUp, Eye } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const capabilities = [
  {
    icon: Shield,
    title: "Validation & Verification",
    description: "End-to-end digital verification pipelines that ensure carbon credit projects meet the highest standards of accuracy and accountability.",
    bgGradient: "from-[#e6f9f5] to-white",
    iconBg: "#10B981"
  },
  {
    icon: Database,
    title: "dMRV Infrastructure",
    description: "Digital Monitoring, Reporting, and Verification systems that automate data collection and provide real-time project insights.",
    bgGradient: "from-[#f0e6f9] to-white",
    iconBg: "#8B5CF6"
  },
  {
    icon: TrendingUp,
    title: "Agricultural Supply Chain Traceability",
    description: "Complete transparency from farm to market with IoT sensors, satellite monitoring, and blockchain-backed data integrity.",
    bgGradient: "from-[#fff0e6] to-white",
    iconBg: "#F59E0B"
  },
  {
    icon: Eye,
    title: "Transparency & Integrity",
    description: "Immutable audit trails and public verification records that build confidence in carbon credit authenticity.",
    bgGradient: "from-[#e6f9ff] to-white",
    iconBg: "#3B82F6"
  }
]

export default function CoreCapabilities() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-[#f9fafb] py-20 md:py-32" id="capabilities">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-[clamp(32px,4vw,42px)] font-bold text-[#1a1a1a] mb-4">
            Core Capabilities
          </h2>
          <p className="text-[18px] text-[#6b7280] max-w-[700px] mx-auto">
            Comprehensive digital infrastructure for the carbon credit ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${capability.bgGradient} rounded-xl p-8 border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110 hover:rotate-6"
                style={{ backgroundColor: capability.iconBg }}
              >
                <capability.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-[20px] font-bold text-[#1a1a1a] mb-3">
                {capability.title}
              </h3>
              
              <p className="text-[16px] leading-[1.6] text-[#6b7280]">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}