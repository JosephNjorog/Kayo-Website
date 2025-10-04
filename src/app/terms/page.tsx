import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Navigation */}
      <nav className="border-b border-[#E5E7EB]">
        <div className="max-w-[1100px] mx-auto px-6 py-4">
          <Link href="/" className="text-[20px] font-bold text-[#000000]">
            Kayo
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24">
        <h1 className="text-[clamp(36px,4vw,48px)] font-bold text-[#1a1a1a] mb-4">
          Terms and Conditions
        </h1>
        <p className="text-[#6b7280] mb-12 text-[16px]">
          <strong>Effective Date:</strong> January 1, 2025<br />
          <strong>Last Updated:</strong> January 1, 2025
        </p>

        <div className="space-y-8 text-[#374151] leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              Welcome to Kayo. These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Kayo ("Company," "we," "us," or "our") governing your access to and use of our digital infrastructure platform for carbon credit verification, supply chain traceability, and related services (collectively, the "Services").
            </p>
            <p className="mb-4">
              By accessing, registering for, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and any additional terms applicable to specific Services. If you do not agree to these Terms, you must not access or use the Services.
            </p>
            <p>
              These Terms apply to all users, including project developers, corporates, auditors, verifiers, agricultural aggregators, and any other parties accessing our platform.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">2. Modifications to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify, amend, or update these Terms at any time at our sole discretion. Changes will be effective immediately upon posting the revised Terms on our website, with the "Last Updated" date reflecting the date of revision.
            </p>
            <p className="mb-4">
              We will make reasonable efforts to notify you of material changes through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email notifications to your registered email address</li>
              <li>Prominent notices on our website or dashboard</li>
              <li>In-platform notifications</li>
            </ul>
            <p className="mt-4">
              Your continued use of the Services after any modifications constitutes acceptance of the updated Terms. If you do not agree to the revised Terms, you must discontinue use of the Services immediately.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">3. Eligibility and Account Registration</h2>
            
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">3.1 Eligibility Requirements</h3>
            <p className="mb-4">To use our Services, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years of age</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Not be prohibited from using the Services under applicable laws</li>
              <li>Comply with all local, state, national, and international laws and regulations</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">3.2 Business Use</h3>
            <p className="mb-4">
              Our Services are intended for business and professional use. If you are registering on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">3.3 Account Security</h3>
            <p className="mb-4">When you create an account, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete registration information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security and confidentiality of your account credentials</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
            <p className="mt-4">
              We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, abusive, or illegal activities.
            </p>
          </section>

          {/* Services Description */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">4. Description of Services</h2>
            <p className="mb-4">
              Kayo provides a comprehensive digital infrastructure platform for carbon credit verification and supply chain transparency, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kayo Dashboard:</strong> Project management, verification pipeline, data analytics, and reporting tools</li>
              <li><strong>dMRV Infrastructure:</strong> Digital Measurement, Reporting, and Verification systems</li>
              <li><strong>IoT Sensor Suite:</strong> Environmental monitoring through drone-based, tree-mounted, and nano-satellite sensors</li>
              <li><strong>Supply Chain Traceability:</strong> Agricultural and carbon credit supply chain tracking</li>
              <li><strong>Transparency Tools:</strong> Audit trails, data integrity verification, and blockchain-backed validation</li>
              <li><strong>API Access:</strong> Integration capabilities for enterprise systems</li>
            </ul>
            <p className="mt-4">
              We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, with or without notice, without liability to you.
            </p>
          </section>

          {/* Prohibited Uses */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">5. Prohibited Uses and Conduct</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Services for any unlawful purpose or in violation of these Terms</li>
              <li>Access or attempt to access areas of the Services not intended for you</li>
              <li>Use automated systems (bots, scrapers) to access the Services without authorization</li>
              <li>Reverse engineer, decompile, or disassemble any aspect of the Services</li>
              <li>Introduce viruses, malware, or other harmful code</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Collect or harvest personal information from other users</li>
              <li>Transmit false, misleading, or fraudulent information</li>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Use the Services to compete with Kayo or create derivative products</li>
            </ul>
          </section>

          {/* User Data and Content */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">6. User Data and Content</h2>
            
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">6.1 Your Responsibilities</h3>
            <p className="mb-4">
              You are solely responsible for all data, information, and content you submit, upload, or transmit through the Services ("User Content"). You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You own or have the necessary rights to use and share User Content</li>
              <li>User Content is accurate, complete, and not misleading</li>
              <li>User Content does not violate any laws, regulations, or third-party rights</li>
              <li>User Content does not contain confidential information of third parties without authorization</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">6.2 Data Accuracy for Carbon Credits</h3>
            <p className="mb-4">
              For carbon credit verification purposes, you specifically warrant that all project data, environmental measurements, and related information submitted is accurate, verifiable, and complies with applicable carbon credit standards and methodologies.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">6.3 License to Kayo</h3>
            <p>
              By submitting User Content, you grant Kayo a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in connection with providing and improving the Services.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">7. Intellectual Property Rights</h2>
            
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">7.1 Kayo's Ownership</h3>
            <p className="mb-4">
              The Services, including all content, features, functionality, software, algorithms, designs, graphics, and documentation, are owned by Kayo and protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="mb-4">
              Our trademarks, service marks, and logos ("Kayo Marks") may not be used without our prior written consent. All other trademarks appearing on the Services are the property of their respective owners.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">7.2 Limited License</h3>
            <p className="mb-4">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal business purposes. This license does not include any right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Resell, redistribute, or sublicense the Services</li>
              <li>Modify, adapt, or create derivative works</li>
              <li>Use the Services for the benefit of third parties</li>
              <li>Remove or alter any proprietary notices</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">7.3 Feedback</h3>
            <p>
              If you provide feedback, suggestions, or ideas about the Services, you grant us an unrestricted, perpetual, royalty-free license to use, modify, and commercialize such feedback without any obligation to you.
            </p>
          </section>

          {/* Fees and Payment */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">8. Fees and Payment Terms</h2>
            
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">8.1 Pricing</h3>
            <p className="mb-4">
              Certain features of the Services require payment of fees. Pricing is available upon request and may be customized based on your specific needs. All fees are quoted in United States Dollars (USD) unless otherwise specified.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">8.2 Payment Obligations</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree to pay all applicable fees as described in your service agreement or invoice</li>
              <li>Fees are non-refundable except as expressly stated in writing or required by law</li>
              <li>We reserve the right to change fees upon 30 days' notice</li>
              <li>You authorize us to charge your designated payment method for all fees</li>
              <li>Failure to pay may result in suspension or termination of Services</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">8.3 Taxes</h3>
            <p>
              All fees are exclusive of applicable taxes, duties, or similar governmental assessments. You are responsible for paying all such amounts except for taxes based on Kayo's net income.
            </p>
          </section>

          {/* Privacy and Data Protection */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">9. Privacy and Data Protection</h2>
            <p className="mb-4">
              Your privacy is important to us. Our collection, use, and disclosure of personal information is governed by our <Link href="/privacy-policy" className="text-[#10B981] hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference.
            </p>
            <p className="mb-4">
              For carbon credit verification services, we maintain strict data integrity and security protocols. All environmental data and project information is handled in accordance with applicable data protection regulations and industry standards.
            </p>
            <p>
              You acknowledge that data transmitted over the Internet cannot be guaranteed to be completely secure, and we cannot ensure the security of information transmitted to us.
            </p>
          </section>

          {/* Warranties and Disclaimers */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">10. Disclaimers and Warranties</h2>
            
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">10.1 No Warranty</h3>
            <p className="mb-4 uppercase font-semibold">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">10.2 Service Availability</h3>
            <p className="mb-4">
              We do not warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Services will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from using the Services will be accurate or reliable</li>
              <li>Any errors or defects will be corrected</li>
              <li>The Services will meet your specific requirements</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">10.3 Carbon Credit Verification Disclaimer</h3>
            <p className="mb-4 bg-[#FFF7ED] border-l-4 border-[#F59E0B] p-4 rounded">
              <strong>Important:</strong> Kayo provides digital infrastructure and tools for carbon credit verification but does not guarantee the validity, accuracy, or scientific soundness of any carbon credit methodology, project, or claim. Users are solely responsible for ensuring compliance with applicable carbon credit standards, regulations, and best practices. Kayo is not liable for any carbon credit validation or verification decisions made using our Services.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">11. Limitation of Liability</h2>
            <p className="mb-4 uppercase font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL KAYO, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2 uppercase">
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Business interruption or loss of goodwill</li>
              <li>Cost of substitute services or procurement</li>
              <li>Errors in carbon credit verification or validation</li>
              <li>Third-party claims or disputes</li>
            </ul>
            <p className="mt-4 uppercase font-semibold">
              WHETHER ARISING FROM CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="mt-4 uppercase font-semibold">
              OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNTS PAID BY YOU TO KAYO IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED DOLLARS ($100 USD).
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">12. Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless Kayo, its affiliates, and their respective officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use or misuse of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of third parties</li>
              <li>Your User Content or data submitted through the Services</li>
              <li>Any fraudulent, negligent, or illegal acts by you</li>
              <li>Any carbon credit claims or representations made based on our Services</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">13. Termination</h2>
            
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">13.1 Termination by You</h3>
            <p className="mb-4">
              You may terminate your account at any time by contacting us at <a href="mailto:support@kayopulse.com" className="text-[#10B981] hover:underline">support@kayopulse.com</a>. Upon termination, you remain liable for all fees incurred prior to termination.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">13.2 Termination by Kayo</h3>
            <p className="mb-4">
              We reserve the right to suspend or terminate your access to the Services at any time, with or without cause, with or without notice, including for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of fees</li>
              <li>Conduct that harms Kayo or other users</li>
              <li>Extended periods of inactivity</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">13.3 Effect of Termination</h3>
            <p>
              Upon termination, your right to access and use the Services immediately ceases. We may delete your account and data, though we may retain certain information as required by law or for legitimate business purposes. Sections of these Terms that by their nature should survive termination shall survive.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">14. Dispute Resolution</h2>
            
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">14.1 Informal Resolution</h3>
            <p className="mb-4">
              Before filing a formal dispute, you agree to first contact us at <a href="mailto:legal@kayopulse.com" className="text-[#10B981] hover:underline">legal@kayopulse.com</a> to attempt to resolve the matter informally. We will attempt to resolve disputes in good faith for a period of 30 days.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">14.2 Binding Arbitration</h3>
            <p className="mb-4">
              If informal resolution fails, any dispute arising out of or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the commercial arbitration rules of the jurisdiction where Kayo is registered, rather than in court.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">14.3 Class Action Waiver</h3>
            <p className="mb-4 uppercase font-semibold">
              YOU AND KAYO AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE ACTION.
            </p>
          </section>

          {/* General Provisions */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">15. General Provisions</h2>
            
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">15.1 Entire Agreement</h3>
            <p className="mb-4">
              These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and Kayo regarding the Services.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">15.2 Severability</h3>
            <p className="mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, that provision shall be modified to the minimum extent necessary to make it valid and enforceable, and the remaining provisions shall remain in full force and effect.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">15.3 Waiver</h3>
            <p className="mb-4">
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative of Kayo.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">15.4 Assignment</h3>
            <p className="mb-4">
              You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms at any time without restriction.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">15.5 Force Majeure</h3>
            <p className="mb-4">
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, war, terrorism, riots, natural disasters, or governmental actions.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">15.6 Notices</h3>
            <p className="mb-4">
              Notices to you may be sent to the email address associated with your account. Notices to us should be sent to <a href="mailto:legal@kayopulse.com" className="text-[#10B981] hover:underline">legal@kayopulse.com</a>.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">16. Contact Information</h2>
            <p className="mb-4">
              For questions or concerns about these Terms, please contact us:
            </p>
            <div className="bg-[#F9FAFB] p-6 rounded-lg border border-[#E5E7EB]">
              <p className="mb-2"><strong>Kayo Legal Team</strong></p>
              <p className="mb-2">Email: <a href="mailto:legal@kayopulse.com" className="text-[#10B981] hover:underline">legal@kayopulse.com</a></p>
              <p className="mb-2">Support: <a href="mailto:support@kayopulse.com" className="text-[#10B981] hover:underline">support@kayopulse.com</a></p>
              <p>Website: <a href="https://kayopulse.com" className="text-[#10B981] hover:underline">kayopulse.com</a></p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="mt-12 pt-8 border-t border-[#E5E7EB]">
            <p className="text-[14px] text-[#6b7280] italic">
              By using Kayo's Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These Terms are effective as of the date stated above and govern your use of our Services.
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-16 pt-8 border-t border-[#E5E7EB]">
          <Link 
            href="/" 
            className="inline-flex items-center text-[#10B981] hover:text-[#059669] font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}