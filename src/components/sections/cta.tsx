"use client"

export default function CTA() {
  return (
    <section className="bg-[#0F1014] py-24 px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* CTA Container */}
        <div className="relative max-w-[800px] mx-auto text-center">
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 blur-3xl -z-10" />
          
          {/* Content Box */}
          <div className="relative bg-gradient-to-br from-[#3B82F6]/10 to-[#8B5CF6]/10 border border-[#3B82F6]/30 rounded-[2rem] px-10 py-16 md:px-16 md:py-16">
            {/* Headline */}
            <h2 className="text-[clamp(2rem,3.5vw,2.5rem)] font-extrabold text-white mb-4 tracking-tight">
              Ready to Transform Your Health?
            </h2>

            {/* Subtext */}
            <p className="text-lg text-[#D1D5DB] leading-relaxed max-w-[600px] mx-auto mb-10">
              Join thousands of users who are already achieving their wellness goals with Kayo Pulse
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <button className="bg-[#3B82F6] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#2563EB] transition-all duration-200 hover:scale-105 shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
                Start Free Trial
              </button>
              <button className="bg-transparent text-white border-2 border-[#374151] px-10 py-4 rounded-xl text-lg font-semibold hover:border-[#4B5563] hover:bg-white/5 transition-all duration-200">
                Contact Sales
              </button>
            </div>

            {/* Small Print */}
            <p className="text-sm text-[#9CA3AF] mt-8">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}