# KAYO - Verifiable Carbon Credits & Supply Chain Platform

<div align="center">
  <img src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/614079c4-8113-49d7-97ac-35ee996eb5c0-kayopulse-com/assets/images/hero-bg-BNLq6sJX-11.jpg?" alt="Kayo Platform" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"/>
  
  <p align="center">
    <strong>Bringing trust and transparency to carbon credits and agricultural supply chains</strong>
  </p>
</div>

## 📋 Overview

Kayo is a cutting-edge platform that provides end-to-end solutions for carbon credit verification and agricultural supply chain traceability. The platform leverages advanced technologies to ensure trust, transparency, and integrity in environmental monitoring and carbon credit projects.

### Core Capabilities

- **Validation & Verification**: End-to-end digital verification pipelines ensuring carbon credit projects meet the highest standards
- **dMRV Infrastructure**: Digital Monitoring, Reporting, and Verification systems that automate data collection
- **Agricultural Supply Chain Traceability**: Complete transparency from farm to market using IoT sensors and blockchain
- **Transparency & Integrity**: Immutable audit trails and public verification records

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- Bun 1.0+

### Installation

```bash
# Clone the repository
git clone https://github.com/kayo-pulse-developer/Kayo-Website.git

# Navigate to project directory
cd Kayo-Website

# Install dependencies
bun install
```

### Development

```bash
# Start development server with Turbopack
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

## 🔧 Tech Stack

Kayo Website is built with modern web technologies:

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Component Library**: [Radix UI](https://www.radix-ui.com/) components with shadcn/ui
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://github.com/colinhacks/zod)
- **Package Manager**: [Bun](https://bun.sh/)
- **Email Service**: [Nodemailer](https://nodemailer.com/)
- **3D Effects**: [Three.js](https://threejs.org/) and [@react-three/fiber](https://github.com/pmndrs/react-three-fiber)

## 📝 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations and transitions
- **Performance Optimized**: Built with Next.js and Turbopack for optimal performance
- **SEO Ready**: Structured for excellent search engine visibility
- **Interactive Elements**: Dynamic forms, animated components, and 3D effects
- **Form Handling**: Multiple contact forms with validation and email functionality
- **Modals**: Book demo and investment inquiry modals

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── api/              # API routes for email sending and more
│   └── ...               # Various page routes
├── components/           # React components
│   ├── modals/           # Modal components
│   ├── sections/         # Page section components
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
└── lib/                  # Utility functions and libraries
```

## 📱 Key Pages and Sections

- **Home Page**: Showcases key features, benefits, and product offerings
- **Products Section**: Highlights the Kayo Dashboard and other product offerings
- **Core Capabilities**: Illustrates the main capabilities of the platform
- **Why Kayo**: Explains the unique value proposition
- **Who Benefits**: Identifies target audiences and stakeholders
- **Contact Forms**: Various contact and demo request forms throughout the site

## 🔒 Environment Variables

Copy the `.env.example` file to create a `.env` file:

```bash
cp .env.example .env
```

Then update with your specific values:

```bash
# Database Configuration
DATABASE_URL=postgresql://username:password@hostname:port/database_name

# Email Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
EMAIL_FROM_NAME=Kayo Platform

# Admin notifications recipient
ADMIN_EMAIL=your-admin-email@example.com
```

See `docs/database.md` for detailed setup instructions, especially for Gmail App Password configuration.

## 📈 Roadmap

- [ ] Add user authentication system
- [ ] Integrate real-time data visualization
- [ ] Develop customer dashboard
- [ ] Implement multi-language support
- [ ] Add case studies and success stories

## 👨‍💻 Contributing

We welcome contributions to the Kayo Website project!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. Unauthorized copying, transferring, or reproduction of the contents of this project, via any medium, is strictly prohibited.

## 🌐 Links

- [Website](https://kayopulse.com)
- [LinkedIn](https://linkedin.com/company/kayopulse)

## 📞 Contact

For inquiries, please contact us at info@kayopulse.com

---

<p align="center">© 2025 Kayo. All rights reserved.</p>