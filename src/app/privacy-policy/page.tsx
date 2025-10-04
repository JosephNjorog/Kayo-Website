import Link from 'next/link';

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="text-[#6b7280] mb-12 text-[16px]">
          <strong>Effective Date:</strong> January 1, 2025<br />
          <strong>Last Updated:</strong> January 1, 2025
        </p>

        <div className="space-y-8 text-[#374151] leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">1. Introduction</h2>
            <p className="mb-4">
              Kayo ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital infrastructure platform for carbon credit verification and supply chain transparency services (collectively, the "Services").
            </p>
            <p>
              By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use the Services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">2. Information We Collect</h2>
            
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">2.1 Information You Provide Directly</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Registration:</strong> Name, email address, company name, job title, phone number, and business address.</li>
              <li><strong>Carbon Credit Project Data:</strong> Project details, verification documents, carbon credit metrics, supply chain information, and related documentation.</li>
              <li><strong>Communications:</strong> Information you provide when contacting us, including support requests, feedback, and consultation inquiries.</li>
              <li><strong>Payment Information:</strong> Billing details processed securely through third-party payment processors (we do not store complete credit card information).</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Usage Data:</strong> IP address, browser type, device information, operating system, pages visited, time spent on pages, and clickstream data.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies. See our Cookie Policy for details.</li>
              <li><strong>Log Data:</strong> Server logs, error reports, and performance data.</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">2.3 IoT and Sensor Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Environmental Measurements:</strong> Temperature, humidity, soil conditions, and other environmental metrics collected through our IoT sensor suite.</li>
              <li><strong>Geolocation Data:</strong> GPS coordinates and location information from deployed sensors for carbon credit verification purposes.</li>
              <li><strong>Monitoring Data:</strong> Continuous tracking data for agricultural supply chains and project validation.</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our carbon credit verification platform and dashboard services.</li>
              <li><strong>Project Verification:</strong> To validate and verify carbon credit projects, ensure data integrity, and maintain audit trails.</li>
              <li><strong>Supply Chain Traceability:</strong> To track and monitor agricultural supply chains and environmental data.</li>
              <li><strong>Communication:</strong> To respond to inquiries, provide customer support, and send service-related notifications.</li>
              <li><strong>Analytics and Research:</strong> To analyze usage patterns, improve our Services, and develop new features.</li>
              <li><strong>Security:</strong> To detect, prevent, and address fraud, security issues, and technical problems.</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
              <li><strong>Business Operations:</strong> To process transactions, manage accounts, and conduct business analytics.</li>
            </ul>
          </section>

          {/* Legal Basis for Processing */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">4. Legal Basis for Processing (GDPR)</h2>
            <p className="mb-4">For users in the European Economic Area (EEA), United Kingdom, and Switzerland, we process personal data based on the following legal grounds:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contractual Necessity:</strong> Processing necessary to perform our contract with you.</li>
              <li><strong>Legitimate Interests:</strong> Processing for our legitimate business interests, such as fraud prevention and service improvement.</li>
              <li><strong>Legal Obligation:</strong> Processing required to comply with legal obligations.</li>
              <li><strong>Consent:</strong> Where you have provided explicit consent for specific processing activities.</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">5. How We Share Your Information</h2>
            <p className="mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
            
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">5.1 Service Providers</h3>
            <p className="mb-3">We share information with trusted third-party service providers who perform services on our behalf, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cloud hosting and data storage providers</li>
              <li>Analytics and data processing services</li>
              <li>Customer support and communication platforms</li>
              <li>Payment processors</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">5.2 Business Partners</h3>
            <p className="mb-3">With your consent, we may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Carbon credit auditors and verifiers</li>
              <li>Project developers and aggregators</li>
              <li>Supply chain partners</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">5.3 Legal Requirements</h3>
            <p>We may disclose information if required by law, court order, or legal process, or to protect the rights, property, or safety of Kayo, our users, or others.</p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">5.4 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">6. Data Security</h2>
            <p className="mb-4">
              We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection practices</li>
              <li>Secure data centers with physical and digital safeguards</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">7. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Retention periods depend on:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The nature of the information and how it is used</li>
              <li>Legal, regulatory, or contractual obligations</li>
              <li>The need to maintain audit trails and verification records</li>
              <li>Dispute resolution and legal defense purposes</li>
            </ul>
            <p className="mt-4">
              Carbon credit verification data may be retained for extended periods to ensure compliance with environmental regulations and audit requirements.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">8. Your Rights and Choices</h2>
            <p className="mb-4">Depending on your location, you may have the following rights:</p>
            
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">8.1 General Rights</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations).</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications.</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a structured format.</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">8.2 GDPR Rights (EEA, UK, Switzerland)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests.</li>
              <li><strong>Right to Restrict:</strong> Request restriction of processing in certain circumstances.</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent.</li>
              <li><strong>Right to Lodge a Complaint:</strong> File a complaint with your local data protection authority.</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">8.3 California Privacy Rights (CCPA/CPRA)</h3>
            <p className="mb-3">California residents have additional rights including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or shared</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>

            <p className="mt-6">
              To exercise these rights, please contact us at <a href="mailto:privacy@kayopulse.com" className="text-[#10B981] hover:underline">privacy@kayopulse.com</a>. We will respond to your request within the timeframes required by applicable law.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">9. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your jurisdiction.
            </p>
            <p>
              When we transfer personal data internationally, we implement appropriate safeguards, including Standard Contractual Clauses approved by the European Commission, to ensure your information remains protected in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">10. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience, analyze usage, and provide personalized content. For detailed information about our use of cookies, please review our <Link href="/cookies" className="text-[#10B981] hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">11. Children's Privacy</h2>
            <p>
              Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete such information promptly.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">12. Third-Party Links and Services</h2>
            <p>
              Our Services may contain links to third-party websites, applications, or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">13. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Posting the updated Privacy Policy on our website</li>
              <li>Updating the "Last Updated" date at the top of this policy</li>
              <li>Sending an email notification to registered users</li>
              <li>Displaying a prominent notice on our Services</li>
            </ul>
            <p className="mt-4">
              Your continued use of the Services after such modifications constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">14. Contact Us</h2>
            <p className="mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-[#F9FAFB] p-6 rounded-lg border border-[#E5E7EB]">
              <p className="mb-2"><strong>Kayo Privacy Team</strong></p>
              <p className="mb-2">Email: <a href="mailto:privacy@kayopulse.com" className="text-[#10B981] hover:underline">privacy@kayopulse.com</a></p>
              <p className="mb-2">Support: <a href="mailto:support@kayopulse.com" className="text-[#10B981] hover:underline">support@kayopulse.com</a></p>
              <p>Website: <a href="https://kayopulse.com" className="text-[#10B981] hover:underline">kayopulse.com</a></p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="mt-12 pt-8 border-t border-[#E5E7EB]">
            <p className="text-[14px] text-[#6b7280] italic">
              By using Kayo's Services, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy. This policy is effective as of the date stated above and governs our collection, use, and disclosure of your personal information.
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