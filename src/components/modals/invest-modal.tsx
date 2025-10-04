"use client"

import { useState } from 'react'
import { X, TrendingUp, Loader2 } from 'lucide-react'

interface InvestModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function InvestModal({ isOpen, onClose }: InvestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyFund: '',
    investmentRange: '',
    investmentTimeline: '',
    focusAreas: [] as string[],
    preferredMeetingTime: '',
    additionalComments: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const focusAreaOptions = [
    'Climate Tech',
    'Carbon Markets',
    'AgTech',
    'IoT/Hardware',
    'Blockchain/Web3',
    'Data Analytics',
    'Sustainability',
    'Other'
  ]

  const handleFocusAreaToggle = (area: string) => {
    setFormData(prev => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(area)
        ? prev.focusAreas.filter(a => a !== area)
        : [...prev.focusAreas, area]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email/invest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setSubmitStatus('success')
      setTimeout(() => {
        onClose()
        // Reset form
        setFormData({
          name: '',
          email: '',
          companyFund: '',
          investmentRange: '',
          investmentTimeline: '',
          focusAreas: [],
          preferredMeetingTime: '',
          additionalComments: ''
        })
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="relative bg-gradient-to-br from-[#1F2937] to-[#0d1117] p-8 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#10B981]" />
            </div>
            <h2 className="text-[28px] font-bold text-white">Investment Opportunity</h2>
          </div>
          <p className="text-white/80 text-[15px]">
            Thank you for your interest in investing in Kayo. Please fill out this form to schedule a call with our team.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {submitStatus === 'success' && (
            <div className="bg-[#10B981]/10 border border-[#10B981] text-[#059669] px-4 py-3 rounded-lg">
              ✅ Investment inquiry received! Check your email for confirmation details.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
              ❌ Failed to send inquiry. Please try again or email us directly.
            </div>
          )}

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              Company/Fund
            </label>
            <p className="text-[13px] text-[#6B7280] mb-2">Optional</p>
            <input
              type="text"
              value={formData.companyFund}
              onChange={(e) => setFormData({ ...formData, companyFund: e.target.value })}
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              Investment Range *
            </label>
            <select
              required
              value={formData.investmentRange}
              onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all appearance-none bg-white"
            >
              <option value="">Select range</option>
              <option value="50k-100k">$50k - $100k</option>
              <option value="100k-500k">$100k - $500k</option>
              <option value="500k-1m">$500k - $1M</option>
              <option value="1m-5m">$1M - $5M</option>
              <option value="5m+">$5M+</option>
            </select>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              Investment Timeline *
            </label>
            <select
              required
              value={formData.investmentTimeline}
              onChange={(e) => setFormData({ ...formData, investmentTimeline: e.target.value })}
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all appearance-none bg-white"
            >
              <option value="">Select timeline</option>
              <option value="immediate">Immediate (0-3 months)</option>
              <option value="short">Short-term (3-6 months)</option>
              <option value="medium">Medium-term (6-12 months)</option>
              <option value="long">Long-term (12+ months)</option>
            </select>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-3">
              Investment Focus Areas * (Select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {focusAreaOptions.map((area) => (
                <label key={area} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.focusAreas.includes(area)}
                    onChange={() => handleFocusAreaToggle(area)}
                    className="w-4 h-4 text-[#10B981] border-[#D1D5DB] rounded focus:ring-2 focus:ring-[#10B981]"
                  />
                  <span className="text-[14px] text-[#374151]">{area}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              Preferred Meeting Time (EAT) *
            </label>
            <select
              required
              value={formData.preferredMeetingTime}
              onChange={(e) => setFormData({ ...formData, preferredMeetingTime: e.target.value })}
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all appearance-none bg-white"
            >
              <option value="">Select time preference</option>
              <option value="morning">Morning (8:00 AM - 12:00 PM EAT)</option>
              <option value="afternoon">Afternoon (12:00 PM - 4:00 PM EAT)</option>
              <option value="evening">Evening (4:00 PM - 8:00 PM EAT)</option>
            </select>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              Additional Questions or Comments
            </label>
            <textarea
              value={formData.additionalComments}
              onChange={(e) => setFormData({ ...formData, additionalComments: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all resize-none"
              placeholder="Tell us more about your investment thesis, questions about Kayo, or anything else you'd like to discuss..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 border border-[#D1D5DB] text-[#374151] font-medium rounded-lg hover:bg-[#F9FAFB] transition-all disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#10B981] text-white font-medium py-3 rounded-lg hover:bg-[#059669] transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Schedule Investment Call'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}