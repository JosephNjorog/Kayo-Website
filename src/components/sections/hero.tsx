"use client"

import { ArrowRight, Play } from 'lucide-react'
import { useParallax } from '@/hooks/use-scroll-animation'

export default function Hero() {
  const parallaxOffset = useParallax(0.5)

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/614079c4-8113-49d7-97ac-35ee996eb5c0-kayopulse-com/assets/images/hero-bg-BNLq6sJX-11.jpg?"
          alt="Hero Background"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(31,41,55,0.9)] to-[rgba(31,41,55,0.7)]"></div>
      </div>

      {/* Animated Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Using fixed position values instead of random to avoid hydration errors */}
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '10%', top: '15%', animation: 'float 5s ease-in-out infinite', animationDelay: '0.5s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '25%', top: '35%', animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '45%', top: '20%', animation: 'float 6s ease-in-out infinite', animationDelay: '1.5s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '60%', top: '60%', animation: 'float 5s ease-in-out infinite', animationDelay: '0s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '80%', top: '40%', animation: 'float 7s ease-in-out infinite', animationDelay: '2s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '30%', top: '70%', animation: 'float 4.5s ease-in-out infinite', animationDelay: '0.7s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '70%', top: '80%', animation: 'float 5.5s ease-in-out infinite', animationDelay: '1.2s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '20%', top: '90%', animation: 'float 4s ease-in-out infinite', animationDelay: '1.8s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '90%', top: '30%', animation: 'float 6s ease-in-out infinite', animationDelay: '0.3s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '5%', top: '50%', animation: 'float 5s ease-in-out infinite', animationDelay: '1.5s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '50%', top: '10%', animation: 'float 4.5s ease-in-out infinite', animationDelay: '0.9s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '15%', top: '65%', animation: 'float 5.5s ease-in-out infinite', animationDelay: '1.3s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '35%', top: '85%', animation: 'float 6s ease-in-out infinite', animationDelay: '2.1s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '75%', top: '25%', animation: 'float 4s ease-in-out infinite', animationDelay: '0.6s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '65%', top: '95%', animation: 'float 5s ease-in-out infinite', animationDelay: '1.7s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '95%', top: '55%', animation: 'float 5.5s ease-in-out infinite', animationDelay: '0.8s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '40%', top: '45%', animation: 'float 6.5s ease-in-out infinite', animationDelay: '1.4s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '55%', top: '75%', animation: 'float 4.5s ease-in-out infinite', animationDelay: '0.4s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '85%', top: '5%', animation: 'float 5s ease-in-out infinite', animationDelay: '1.9s' }} />
        <div className="absolute w-1 h-1 bg-white/30 rounded-full" style={{ left: '1%', top: '1%', animation: 'float 4s ease-in-out infinite', animationDelay: '1.1s' }} />
      </div>

      {/* Content with Animations */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 py-20 text-center">
        <h1 className="text-[clamp(36px,5vw,56px)] font-bold leading-[1.2] tracking-[-0.02em] mb-6 animate-fade-in-up">
          <span className="text-white">Verifiable Carbon Credits.</span>
          <br />
          <span className="text-[#3dd9d9]">Trusted</span>{' '}
          <span className="text-[#4a9eff]">Supply Chains.</span>
        </h1>

        {/* Play Icon with Glow */}
        <div className="flex justify-center mb-6 animate-scale-in delay-200">
          <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center hover:bg-white/10 hover:scale-110 hover:animate-glow transition-all cursor-pointer backdrop-blur-sm">
            <Play className="w-5 h-5 text-white fill-white ml-1" />
          </div>
        </div>

        <p className="text-[20px] font-medium text-[#b0b8c1] max-w-[600px] mx-auto mb-8 leading-relaxed animate-fade-in-up delay-300">
          Kayo builds the digital infrastructure for validating and verifying carbon credit projects.
        </p>

        <button className="inline-flex items-center gap-2 text-[16px] font-semibold text-white bg-transparent border border-white/20 px-8 py-3 rounded-md hover:bg-white/10 hover:scale-105 hover:border-white/40 transition-all duration-300 animate-fade-in-up delay-400 hover:shadow-lg hover:shadow-white/20">
          Request Demo
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  )
}