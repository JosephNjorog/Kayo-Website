"use client"

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import BookDemoModal from '@/components/modals/book-demo-modal'
import InvestModal from '@/components/modals/invest-modal'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false)
  const [isInvestOpen, setIsInvestOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <div className="text-[24px] font-bold text-[#1a1a1a] transition-transform duration-300 hover:scale-105">
              Kayo
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-[15px] font-medium text-[#374151] hover:text-[#10B981] transition-all duration-200 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#capabilities" className="text-[15px] font-medium text-[#374151] hover:text-[#10B981] transition-all duration-200 relative group">
                Capabilities
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#use-cases" className="text-[15px] font-medium text-[#374151] hover:text-[#10B981] transition-all duration-200 relative group">
                Use Cases
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#product" className="text-[15px] font-medium text-[#374151] hover:text-[#10B981] transition-all duration-200 relative group">
                Product
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#10B981] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={() => setIsInvestOpen(true)}
                className="text-[16px] font-medium text-[#374151] border border-[#D1D5DB] px-6 py-3 rounded-lg hover:border-[#10B981] hover:text-[#10B981] hover:scale-105 transition-all duration-300"
              >
                Invest
              </button>
              <button 
                onClick={() => setIsBookDemoOpen(true)}
                className="text-[16px] font-medium text-white bg-[#10B981] px-6 py-3 rounded-lg hover:bg-[#059669] hover:scale-105 hover:shadow-lg hover:shadow-[#10B981]/30 transition-all duration-300"
              >
                Book Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#374151] transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#E5E7EB] animate-fade-in">
              <div className="flex flex-col gap-4">
                <a href="#about" className="text-[15px] font-medium text-[#374151] py-2 hover:text-[#10B981] transition-colors">
                  About
                </a>
                <a href="#capabilities" className="text-[15px] font-medium text-[#374151] py-2 hover:text-[#10B981] transition-colors">
                  Capabilities
                </a>
                <a href="#use-cases" className="text-[15px] font-medium text-[#374151] py-2 hover:text-[#10B981] transition-colors">
                  Use Cases
                </a>
                <a href="#product" className="text-[15px] font-medium text-[#374151] py-2 hover:text-[#10B981] transition-colors">
                  Product
                </a>
                <button 
                  onClick={() => {
                    setIsInvestOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="text-[16px] font-medium text-[#374151] border border-[#D1D5DB] px-6 py-3 rounded-lg w-full mt-2 hover:border-[#10B981] hover:text-[#10B981] transition-all"
                >
                  Invest
                </button>
                <button 
                  onClick={() => {
                    setIsBookDemoOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="text-[16px] font-medium text-white bg-[#10B981] px-6 py-3 rounded-lg w-full hover:bg-[#059669] transition-all"
                >
                  Book Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modals */}
      <BookDemoModal isOpen={isBookDemoOpen} onClose={() => setIsBookDemoOpen(false)} />
      <InvestModal isOpen={isInvestOpen} onClose={() => setIsInvestOpen(false)} />
    </>
  )
}