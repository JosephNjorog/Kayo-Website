"use client"

import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Kayo Pulse has completely transformed how I manage my health. The AI insights are incredibly accurate!",
    author: "Sarah Johnson",
    title: "Fitness Enthusiast"
  },
  {
    quote: "The personalized recommendations have helped me achieve goals I thought were impossible. Highly recommend!",
    author: "Michael Chen",
    title: "Marathon Runner"
  },
  {
    quote: "Amazing platform! The interface is intuitive and the support team is always there when I need help.",
    author: "Emily Davis",
    title: "Yoga Instructor"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0F1014] py-24 px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[clamp(2rem,3.5vw,2.5rem)] font-extrabold text-white mb-4 tracking-tight">
            What Our Users Say
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            Join thousands of satisfied users
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#FCD34D] text-[#FCD34D]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base text-[#E5E7EB] leading-relaxed italic mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6]" />
                <div>
                  <div className="text-base font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-[#9CA3AF]">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}