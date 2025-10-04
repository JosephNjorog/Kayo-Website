"use client"

import { Activity, Target, TrendingUp, Bell, Shield, Headphones } from 'lucide-react'

const features = [
  {
    icon: Activity,
    title: 'AI Health Analysis',
    description: 'Advanced AI algorithms analyze your health data to provide personalized insights and recommendations tailored to your unique needs.'
  },
  {
    icon: Target,
    title: 'Personalized Recommendations',
    description: 'Get custom health and wellness suggestions based on your goals, lifestyle, and progress tracking data.'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor your health journey with detailed analytics, charts, and reports that show your improvement over time.'
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Never miss important health tasks with intelligent notifications that adapt to your schedule and habits.'
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Your health information is protected with enterprise-grade encryption and security protocols.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Access our dedicated support team anytime you need help or have questions about your health journey.'
  }
]

export default function Features() {
  return (
    <section id="features" className="bg-[#0F1014] py-24 px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,3.5vw,2.5rem)] font-extrabold text-white mb-4 tracking-tight">
            Powerful Features
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-[600px] mx-auto">
            Everything you need to take control of your health
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:-translate-y-1 hover:border-[#3B82F6]/50 transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-base text-[#9CA3AF] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}