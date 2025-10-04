"use client"

import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: 9,
    description: 'Perfect for getting started',
    features: [
      'AI Health Analysis',
      'Basic Progress Tracking',
      'Email Support',
      '5 Custom Goals'
    ],
    popular: false
  },
  {
    name: 'Pro',
    price: 19,
    description: 'Most popular for serious users',
    features: [
      'Everything in Basic',
      'Advanced Analytics',
      'Priority Support',
      'Unlimited Goals',
      'Data Export'
    ],
    popular: true
  },
  {
    name: 'Premium',
    price: 29,
    description: 'For power users',
    features: [
      'Everything in Pro',
      'Personal Health Coach',
      '24/7 Phone Support',
      'API Access',
      'White-label Option'
    ],
    popular: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0A0B0D] py-24 px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,3.5vw,2.5rem)] font-extrabold text-white mb-4 tracking-tight">
            Choose Your Plan
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            Flexible pricing for everyone
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-10 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-[#3B82F6]/[0.05] border-2 border-[#3B82F6] shadow-[0_0_40px_rgba(59,130,246,0.3)]'
                  : 'bg-white/[0.03] border border-white/10 hover:border-[#3B82F6]/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-[#3B82F6] text-white text-xs font-bold px-4 py-1 rounded-full w-fit mb-4">
                  POPULAR
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-white">
                  ${plan.price}
                </span>
                <span className="text-base text-[#9CA3AF]">/month</span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#9CA3AF] mb-8">
                {plan.description}
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={20} className="text-[#3B82F6] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#E5E7EB]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
                    : 'bg-transparent border border-[#374151] text-white hover:bg-white/5'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}