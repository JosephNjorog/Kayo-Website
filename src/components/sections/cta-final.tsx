"use client"

import { Check, ArrowRight, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function CtaFinal() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { ref, isVisible } = useScrollAnimation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setSubmitStatus('success')
      setTimeout(() => {
        setEmail('')
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] to-[#0d1117]"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#3dd9d9]/20 via-transparent to-[#4a9eff]/20"
          style={{
            animation: 'shimmer 8s ease-in-out infinite alternate',
            backgroundSize: '200% 100%'
          }}
        ></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 text-center">
        <h2 
          className={`text-[clamp(36px,5vw,48px)] font-bold text-white leading-[1.2] mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Stay Updated on Carbon Market Innovation
        </h2>
        
        <p 
          className={`text-[20px] text-[#b0b8c1] max-w-[700px] mx-auto mb-12 leading-relaxed transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Subscribe to receive the latest insights on carbon credit verification, supply chain transparency, and platform updates from Kayo.
        </p>

        {/* Newsletter Subscription Form */}
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col sm:flex-row justify-center items-center gap-0 max-w-[600px] mx-auto mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className="w-full sm:w-[350px] bg-[#2d3748] text-white border border-[#4a5568] px-5 py-3.5 text-[16px] rounded-md sm:rounded-r-none placeholder:text-[#9ca3af] focus:outline-none focus:border-[#3dd9d9] focus:ring-2 focus:ring-[#3dd9d9]/20 transition-all duration-300 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-[#3dd9d9] text-white px-8 py-3.5 text-[16px] font-semibold rounded-md sm:rounded-l-none hover:bg-[#2cc5c5] hover:scale-105 hover:shadow-lg hover:shadow-[#3dd9d9]/30 transition-all duration-300 flex items-center justify-center gap-2 mt-2 sm:mt-0 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        {/* Status Messages */}
        <div className="mb-6 min-h-[24px]">
          {submitStatus === 'success' && (
            <div className="text-[#10B981] text-[14px] font-medium animate-fade-in">
              ✅ Success! Check your email to confirm your subscription.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-400 text-[14px] font-medium animate-fade-in">
              ❌ Something went wrong. Please try again.
            </div>
          )}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
          {[
            'Industry insights & updates',
            'Exclusive platform features',
            'Unsubscribe anytime'
          ].map((badge, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-2 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: isVisible ? `${(idx + 3) * 100}ms` : '0ms' }}
            >
              <Check className="w-4 h-4 text-[#10B981]" strokeWidth={3} />
              <span className="text-[14px] text-[#9ca3af]">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}