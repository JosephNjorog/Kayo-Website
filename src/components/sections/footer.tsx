"use client"

import { Linkedin, Twitter, Github, Youtube } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Link } from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
          {/* Brand Column */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-[20px] font-bold mb-4">Kayo</h3>
            <p className="text-[15px] text-[#9ca3af] leading-[1.7] max-w-[280px] mb-6">
              Building the digital infrastructure for verifiable carbon credits and trusted supply chains.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Github, href: '#' },
                { Icon: Youtube, href: '#' }
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="w-9 h-9 bg-[#1f2937] rounded-md flex items-center justify-center hover:bg-[#374151] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Column */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h4 className="text-[16px] font-bold mb-5">Product</h4>
            <ul className="space-y-2.5">
              {['Capabilities', 'Use Cases', 'Dashboard', 'API Documentation'].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="text-[15px] text-[#9ca3af] hover:text-[#3dd9d9] transition-colors duration-200 inline-block hover:translate-x-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h4 className="text-[16px] font-bold mb-5">Company</h4>
            <ul className="space-y-2.5">
              {['About', 'Careers', 'Blog', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    className="text-[15px] text-[#9ca3af] hover:text-[#3dd9d9] transition-colors duration-200 inline-block hover:translate-x-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#374151] mt-16 pt-8">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#9CA3AF] text-[14px]">
              © {new Date().getFullYear()} Kayo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-[#9CA3AF] hover:text-white transition-colors text-[14px]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#9CA3AF] hover:text-white transition-colors text-[14px]">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-[#9CA3AF] hover:text-white transition-colors text-[14px]">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}