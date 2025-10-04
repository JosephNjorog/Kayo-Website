"use client"

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Sign Up',
      description: 'Create your account in seconds'
    },
    {
      number: '2',
      title: 'Complete Profile',
      description: 'Tell us about your health goals'
    },
    {
      number: '3',
      title: 'Start Tracking',
      description: 'Begin your wellness journey'
    }
  ]

  return (
    <section id="how-it-works" className="bg-[#0A0B0D] py-24 px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,3.5vw,2.5rem)] font-extrabold text-white mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            Get started in three simple steps
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              {/* Step Number Badge */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-2xl font-extrabold text-white shadow-[0_0_40px_rgba(59,130,246,0.4)] mb-6 relative z-10">
                {step.number}
              </div>

              {/* Connecting Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%+2rem)] h-0.5 bg-gradient-to-r from-[#3B82F6] to-transparent" />
              )}

              {/* Step Content */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-base text-[#9CA3AF] leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}