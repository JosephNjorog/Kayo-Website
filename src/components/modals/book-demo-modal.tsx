"use client"

import { useState, useEffect } from 'react'
import { X, Calendar, Loader2 } from 'lucide-react'

interface BookDemoModalProps {
  isOpen: boolean
  onClose: () => void
  stakeholderType?: string
}

export default function BookDemoModal({ isOpen, onClose, stakeholderType = '' }: BookDemoModalProps) {
  // Define mappings for stakeholder types to demo options and goals
  const stakeholderToDemoType = {
    'project-developers': ['Kayo Dashboard', 'Automated reporting systems'],
    'corporate-esg': ['Supply Chain Traceability', 'API Integration'],
    'auditor-tools': ['IoT Sensor Suite', 'Kayo Dashboard'],
    'agriculture': ['IoT Sensor Suite', 'Supply Chain Traceability']
  }

  const stakeholderToGoal = {
    'project-developers': 'Streamline validation processes and implement real-time monitoring dashboards.',
    'corporate-esg': 'Verify carbon offset authenticity and meet ESG reporting requirements.',
    'auditor-tools': 'Implement automated data collection and standardized verification protocols.',
    'agriculture': 'Enable farm-level monitoring and carbon credit aggregation tools.'
  }
  
  const stakeholderToTitle = {
    'project-developers': 'Schedule Project Demo',
    'corporate-esg': 'Request ESG Solution',
    'auditor-tools': 'Book Verification Tools Demo',
    'agriculture': 'Explore Aggregation Platform'
  }
  
  const stakeholderToDescription = {
    'project-developers': 'See how our platform streamlines validation and monitoring for carbon project developers.',
    'corporate-esg': 'Learn how Kayo can help your organization meet ESG reporting requirements with verifiable data.',
    'auditor-tools': 'Discover how our verification tools can reduce audit time while improving accuracy.',
    'agriculture': 'Experience our tools for agricultural monitoring and carbon credit aggregation.'
  }
  const [formData, setFormData] = useState({
    demoType: [] as string[],
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    role: '',
    goal: '',
    demoDate: '',
    stakeholderType: stakeholderType,
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  // Update form data when stakeholder type changes
  useEffect(() => {
    if (stakeholderType) {
      // Get demo types for this stakeholder (or empty array if not found)
      const demoTypesToPreselect = stakeholderToDemoType[stakeholderType as keyof typeof stakeholderToDemoType] || [];
      // Get goal text for this stakeholder (or empty string if not found)
      const goalText = stakeholderToGoal[stakeholderType as keyof typeof stakeholderToGoal] || '';
      
      setFormData(prev => ({
        ...prev,
        demoType: demoTypesToPreselect,
        goal: goalText,
        stakeholderType: stakeholderType
      }));
    }
  }, [stakeholderType, isOpen])

  const demoOptions = [
    'Kayo Dashboard',
    'IoT Sensor Suite',
    'Supply Chain Traceability',
    'API Integration'
  ]

  const handleDemoTypeToggle = (type: string) => {
    setFormData(prev => ({
      ...prev,
      demoType: prev.demoType.includes(type)
        ? prev.demoType.filter(t => t !== type)
        : [...prev.demoType, type]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email/demo', {
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
        // Reset only personal information fields
        setFormData(prev => ({
          ...prev,
          fullName: '',
          organization: '',
          email: '',
          phone: '',
          role: '',
          demoDate: '',
          consent: false
          // Keep demoType, goal, and stakeholderType as they're auto-filled
        }))
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
        <div className="relative bg-gradient-to-br from-[#10B981] to-[#059669] p-8 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-[28px] font-bold text-white">
              {stakeholderType && stakeholderToTitle[stakeholderType as keyof typeof stakeholderToTitle] 
                ? stakeholderToTitle[stakeholderType as keyof typeof stakeholderToTitle] 
                : 'Book Your Demo'}
            </h2>
          </div>
          <p className="text-white/90 text-[15px]">
            {stakeholderType && stakeholderToDescription[stakeholderType as keyof typeof stakeholderToDescription] 
              ? stakeholderToDescription[stakeholderType as keyof typeof stakeholderToDescription] 
              : 'Schedule a personalized demonstration of Kayo\'s carbon credit verification platform.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {submitStatus === 'success' && (
            <div className="bg-[#10B981]/10 border border-[#10B981] text-[#059669] px-4 py-3 rounded-lg">
              ✅ Demo request received! Check your email for confirmation details.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
              ❌ Failed to send request. Please try again or email us directly.
            </div>
          )}

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-3">
              What would you like to see? * (Select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {demoOptions.map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.demoType.includes(option)}
                    onChange={() => handleDemoTypeToggle(option)}
                    className="w-4 h-4 text-[#10B981] border-[#D1D5DB] rounded focus:ring-2 focus:ring-[#10B981]"
                  />
                  <span className="text-[14px] text-[#374151]">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              Organization *
            </label>
            <input
              type="text"
              required
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
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
              Phone Number
            </label>
            <p className="text-[13px] text-[#6B7280] mb-2">Optional</p>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              Role/Title
            </label>
            <p className="text-[13px] text-[#6B7280] mb-2">Optional</p>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              Primary Goal
            </label>
            <p className="text-[13px] text-[#6B7280] mb-2">What are you hoping to achieve with Kayo?</p>
            <textarea
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all resize-none"
              placeholder="e.g., Verify carbon credits, track supply chains, improve transparency..."
            />
          </div>

          <div>
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              Preferred Demo Date & Time
            </label>
            <p className="text-[13px] text-[#6B7280] mb-2">Optional - We'll confirm via email</p>
            <input
              type="datetime-local"
              value={formData.demoDate}
              onChange={(e) => setFormData({ ...formData, demoDate: e.target.value })}
              className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent transition-all"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="w-4 h-4 text-[#10B981] border-[#D1D5DB] rounded focus:ring-2 focus:ring-[#10B981] mt-1"
            />
            <label htmlFor="consent" className="text-[13px] text-[#6B7280] leading-relaxed">
              I agree to receive communications from Kayo regarding my demo request and related product information.
            </label>
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
                'Book Demo'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}