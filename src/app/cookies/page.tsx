import Link from 'next/link';

export default function CookiePolicy() {
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
          Cookie Policy
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
              This Cookie Policy explains how Kayo ("we," "us," or "our") uses cookies and similar tracking technologies when you visit our website and use our Services. This policy should be read in conjunction with our <Link href="/privacy-policy" className="text-[#10B981] hover:underline">Privacy Policy</Link>.
            </p>
            <p>
              By continuing to use our website and Services, you consent to our use of cookies as described in this policy. You can manage your cookie preferences through your browser settings at any time.
            </p>
          </section>

          {/* What are Cookies */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">2. What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to website owners.
            </p>
            <p className="mb-4">
              Cookies can be "persistent" or "session" cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a specified period or until manually deleted</li>
            </ul>
            <p className="mt-4">
              Cookies can also be classified as "first-party" (set by us) or "third-party" (set by other domains).
            </p>
          </section>

          {/* How We Use Cookies */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">3. How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies for several purposes to enhance your experience, analyze usage patterns, and improve our Services. Our cookies serve the following functions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Operation:</strong> Enable core functionality of our platform</li>
              <li><strong>Security:</strong> Detect and prevent fraudulent activity and security threats</li>
              <li><strong>Performance:</strong> Understand how visitors interact with our website</li>
              <li><strong>Functionality:</strong> Remember your preferences and settings</li>
              <li><strong>Analytics:</strong> Analyze usage patterns to improve our Services</li>
              <li><strong>Marketing:</strong> Deliver relevant content and measure campaign effectiveness</li>
            </ul>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">4. Types of Cookies We Use</h2>
            
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">4.1 Strictly Necessary Cookies</h3>
            <p className="mb-4">
              These cookies are essential for the operation of our website and Services. They enable core functionality such as security, network management, and accessibility. Without these cookies, certain services cannot be provided.
            </p>
            <p className="mb-4"><strong>Examples:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Authentication and account access</li>
              <li>Security and fraud detection</li>
              <li>Load balancing and traffic management</li>
              <li>Session state management</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">4.2 Performance and Analytics Cookies</h3>
            <p className="mb-4">
              These cookies collect information about how you use our website, such as which pages you visit most often and if you receive error messages. This helps us improve the performance and usability of our Services.
            </p>
            <p className="mb-4"><strong>Services we use:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
              <li><strong>Hotjar:</strong> User experience insights and heat mapping</li>
              <li><strong>Sentry:</strong> Error tracking and performance monitoring</li>
            </ul>
            <p className="mt-4 text-[14px] text-[#6b7280]">
              These cookies collect data in aggregate form and do not identify individual users.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">4.3 Functionality Cookies</h3>
            <p className="mb-4">
              These cookies allow our website to remember choices you make (such as your username, language preference, or dashboard layout) and provide enhanced, personalized features.
            </p>
            <p className="mb-4"><strong>Examples:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remembering login credentials</li>
              <li>Storing language and region preferences</li>
              <li>Saving dashboard customizations</li>
              <li>Maintaining user interface settings</li>
            </ul>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">4.4 Targeting and Advertising Cookies</h3>
            <p className="mb-4">
              These cookies are used to deliver relevant advertisements and measure the effectiveness of marketing campaigns. They may be set by us or third-party advertising partners.
            </p>
            <p className="mb-4"><strong>Services we use:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>LinkedIn Insight Tag:</strong> B2B audience targeting and conversion tracking</li>
              <li><strong>Google Ads:</strong> Remarketing and conversion measurement</li>
              <li><strong>Facebook Pixel:</strong> Social media advertising and analytics</li>
            </ul>
            <p className="mt-4 text-[14px] text-[#6b7280]">
              These cookies may track your browsing activity across different websites.
            </p>
          </section>

          {/* Specific Cookies Table */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">5. Specific Cookies We Use</h2>
            <p className="mb-6">Below is a table of specific cookies used on our platform:</p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border border-[#E5E7EB] text-[14px]">
                <thead className="bg-[#F9FAFB]">
                  <tr>
                    <th className="border border-[#E5E7EB] px-4 py-3 text-left font-semibold">Cookie Name</th>
                    <th className="border border-[#E5E7EB] px-4 py-3 text-left font-semibold">Purpose</th>
                    <th className="border border-[#E5E7EB] px-4 py-3 text-left font-semibold">Type</th>
                    <th className="border border-[#E5E7EB] px-4 py-3 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-mono">auth_token</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">Authenticates user sessions</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">Necessary</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">30 days</td>
                  </tr>
                  <tr className="bg-[#F9FAFB]">
                    <td className="border border-[#E5E7EB] px-4 py-3 font-mono">_ga</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">Google Analytics user identifier</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">Analytics</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-mono">_gid</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">Google Analytics session identifier</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">Analytics</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">24 hours</td>
                  </tr>
                  <tr className="bg-[#F9FAFB]">
                    <td className="border border-[#E5E7EB] px-4 py-3 font-mono">lang_pref</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">Stores language preference</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">Functionality</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-[#E5E7EB] px-4 py-3 font-mono">dashboard_layout</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">Remembers dashboard customization</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">Functionality</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">1 year</td>
                  </tr>
                  <tr className="bg-[#F9FAFB]">
                    <td className="border border-[#E5E7EB] px-4 py-3 font-mono">cookie_consent</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">Tracks cookie consent preferences</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">Necessary</td>
                    <td className="border border-[#E5E7EB] px-4 py-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">6. Third-Party Cookies and Services</h2>
            <p className="mb-4">
              We use third-party services that may set their own cookies. These services have their own privacy policies:
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="border border-[#E5E7EB] rounded-lg p-4">
                <h4 className="font-semibold text-[16px] mb-2">Google Analytics</h4>
                <p className="text-[14px] mb-2">Web analytics and user behavior tracking</p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline text-[14px]">
                  View Privacy Policy →
                </a>
              </div>

              <div className="border border-[#E5E7EB] rounded-lg p-4">
                <h4 className="font-semibold text-[16px] mb-2">LinkedIn</h4>
                <p className="text-[14px] mb-2">B2B advertising and professional network tracking</p>
                <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline text-[14px]">
                  View Privacy Policy →
                </a>
              </div>

              <div className="border border-[#E5E7EB] rounded-lg p-4">
                <h4 className="font-semibold text-[16px] mb-2">Stripe</h4>
                <p className="text-[14px] mb-2">Payment processing and transaction security</p>
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline text-[14px]">
                  View Privacy Policy →
                </a>
              </div>
            </div>
          </section>

          {/* Managing Cookies */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">7. How to Manage Cookies</h2>
            <p className="mb-4">
              You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">7.1 Browser Settings</h3>
            <p className="mb-4">You can manage cookies through your browser settings:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Block all cookies:</strong> Prevent all cookies from being set</li>
              <li><strong>Block third-party cookies:</strong> Allow only first-party cookies</li>
              <li><strong>Clear cookies:</strong> Delete existing cookies from your device</li>
              <li><strong>Receive notifications:</strong> Get alerts when cookies are being set</li>
            </ul>

            <div className="mt-6 bg-[#F9FAFB] p-4 rounded-lg border border-[#E5E7EB]">
              <p className="font-semibold mb-3">Browser-Specific Instructions:</p>
              <ul className="space-y-2 text-[14px]">
                <li>• <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline">Google Chrome</a></li>
                <li>• <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline">Mozilla Firefox</a></li>
                <li>• <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline">Apple Safari</a></li>
                <li>• <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline">Microsoft Edge</a></li>
              </ul>
            </div>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">7.2 Opt-Out Tools</h3>
            <p className="mb-4">You can also use these opt-out tools:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
              <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline">Network Advertising Initiative Opt-Out</a></li>
              <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline">Digital Advertising Alliance Opt-Out</a></li>
            </ul>

            <div className="mt-6 bg-[#FFF7ED] p-4 rounded-lg border-l-4 border-[#F59E0B]">
              <p className="text-[14px]">
                <strong>Important:</strong> Blocking or deleting cookies may impact your experience and prevent certain features from functioning properly, including login functionality, dashboard customization, and preference settings.
              </p>
            </div>
          </section>

          {/* Other Tracking Technologies */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">8. Other Tracking Technologies</h2>
            
            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">8.1 Web Beacons and Pixels</h3>
            <p className="mb-4">
              We may use web beacons (also known as pixel tags or clear GIFs) to track user engagement with emails and website content. These are tiny graphics with unique identifiers that function similarly to cookies.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">8.2 Local Storage</h3>
            <p className="mb-4">
              We use local storage technologies (such as HTML5 local storage) to store information on your device. This allows us to persist data across browser sessions and provide enhanced functionality.
            </p>

            <h3 className="text-[20px] font-semibold text-[#1a1a1a] mb-3 mt-6">8.3 Device Fingerprinting</h3>
            <p>
              We may collect technical information about your device (such as screen resolution, browser type, and operating system) to create a unique identifier for security and fraud prevention purposes.
            </p>
          </section>

          {/* Updates to Policy */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">9. Updates to This Cookie Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the updated policy on our website with a new "Last Updated" date.
            </p>
            <p>
              We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-[28px] font-bold text-[#1a1a1a] mb-4">10. Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Cookie Policy or our use of cookies, please contact us:
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
              By continuing to use our website and Services, you acknowledge that you have read and understood this Cookie Policy and consent to our use of cookies as described herein.
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