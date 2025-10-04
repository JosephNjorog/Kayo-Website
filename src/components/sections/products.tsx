"use client"

import { Check, Cpu, Cloud, Satellite } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function Products() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: product1Ref, isVisible: product1Visible } = useScrollAnimation()
  const { ref: product2Ref, isVisible: product2Visible } = useScrollAnimation()

  return (
    <section className="bg-white py-20 md:py-32" id="product">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-[clamp(32px,4vw,42px)] font-bold text-[#1a1a1a] mb-4">
            Our Products
          </h2>
          <p className="text-[18px] text-[#6b7280]">
            Comprehensive solutions for carbon credit verification and environmental monitoring
          </p>
        </div>

        {/* Product 1: Kayo Dashboard */}
        <div ref={product1Ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div 
            className={`order-2 lg:order-1 transition-all duration-700 ${
              product1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3dd9d9] to-[#10B981] rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/614079c4-8113-49d7-97ac-35ee996eb5c0-kayopulse-com/assets/images/dashboard-preview-DWuu3Gfx-9.jpg?"
                alt="Kayo Dashboard"
                className="relative rounded-xl shadow-2xl border-2 border-[#3dd9d9]/30 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ transform: 'perspective(1000px) rotateY(-2deg)' }}
              />
            </div>
          </div>

          <div 
            className={`order-1 lg:order-2 transition-all duration-700 ${
              product1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-[32px] font-bold text-[#1a1a1a] mb-4">
              Kayo Dashboard
            </h3>
            <p className="text-[18px] text-[#4a5568] leading-[1.7] mb-8">
              The central command center for all carbon credit verification activities. 
              Monitor projects in real-time, access comprehensive analytics, and manage 
              your entire verification pipeline from a single, intuitive interface.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Project Verification Pipeline",
                  desc: "Track every stage from submission to final certification with automated workflows"
                },
                {
                  title: "Data Analytics & Reporting",
                  desc: "Generate compliance reports and visualize carbon impact with powerful analytics tools"
                },
                {
                  title: "Supply Chain Mapping",
                  desc: "Visualize end-to-end supply chains with interactive mapping and traceability features"
                }
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className={`transition-all duration-500 ${
                    product1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                  }`}
                  style={{ transitionDelay: product1Visible ? `${(idx + 2) * 100}ms` : '0ms' }}
                >
                  <div className="flex items-start gap-3 mb-2 group">
                    <div className="w-5 h-5 rounded-full bg-[#3dd9d9] flex items-center justify-center flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-[18px] font-bold text-[#1a1a1a] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-[16px] text-[#6b7280]">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product 2: Kayo IoT Sensor Suite */}
        <div ref={product2Ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-700 ${
              product2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#4a9eff]/10 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6">
                <Cpu className="w-5 h-5 text-[#4a9eff]" />
              </div>
              <h3 className="text-[32px] font-bold text-[#1a1a1a]">
                Kayo IoT Sensor Suite
              </h3>
            </div>
            
            <p className="text-[18px] text-[#4a5568] leading-[1.7] mb-8">
              Advanced environmental monitoring powered by cutting-edge IoT technology. 
              Deploy sensors across your projects to capture real-time data that validates 
              carbon sequestration and environmental impact.
            </p>

            <div className="mb-8">
              <h4 className="text-[20px] font-bold text-[#1a1a1a] mb-4">Deployment Options</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Cloud, title: "Drone Sensors", desc: "Aerial monitoring for large areas" },
                  { icon: Cpu, title: "Tree Sensors", desc: "Ground-level environmental data" },
                  { icon: Satellite, title: "Nano-satellites", desc: "Global coverage and validation" }
                ].map((option, idx) => (
                  <div 
                    key={idx}
                    className={`bg-[#f9fafb] p-4 rounded-lg border border-[#e5e7eb] hover:border-[#4a9eff] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                      product2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: product2Visible ? `${idx * 100}ms` : '0ms' }}
                  >
                    <option.icon className="w-6 h-6 text-[#4a9eff] mb-2 transition-transform duration-300 hover:scale-110" />
                    <h5 className="text-[16px] font-bold text-[#1a1a1a] mb-1">{option.title}</h5>
                    <p className="text-[15px] text-[#6b7280]">{option.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#eff6ff] p-6 rounded-lg border border-[#3B82F6]/20 mb-6 hover:border-[#3B82F6]/40 transition-colors duration-300">
              <h4 className="text-[18px] font-bold text-[#1a1a1a] mb-3">Key Capabilities</h4>
              <ul className="space-y-2">
                {[
                  'Real-time carbon sequestration monitoring',
                  'Soil health and biodiversity tracking',
                  'Weather and climate data integration',
                  'Automated verification triggers'
                ].map((capability, idx) => (
                  <li key={idx} className="flex items-start gap-2 group">
                    <Check className="w-4 h-4 text-[#4a9eff] flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125" strokeWidth={3} />
                    <span className="text-[15px] text-[#4a5568]">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="inline-block bg-[#4a9eff]/10 text-[#4a9eff] px-4 py-2 rounded-md text-[14px] font-semibold animate-pulse">
              🚀 Coming Soon
            </div>
          </div>

          <div 
            className={`transition-all duration-700 ${
              product2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4a9eff] to-[#3B82F6] rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/614079c4-8113-49d7-97ac-35ee996eb5c0-kayopulse-com/assets/images/iot-sensor-CW9eT3qK-10.jpg?"
                alt="Kayo IoT Sensor"
                className="relative rounded-xl shadow-2xl border-2 border-[#4a9eff]/30 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ transform: 'perspective(1000px) rotateY(2deg)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}