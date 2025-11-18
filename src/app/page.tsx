"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Brain, Building2, CheckCircle, Clock, Cpu, Crown, DollarSign, Dashboard, FileText, Gift, HelpCircle, MessageCircle, Rocket, Search, Star, Target, TrendingUp, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="grid"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="layered"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Enterprise", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Features", id: "features" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="StaffToday.AI"
          button={{
            text: "Book Demo",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="The Only 360 AI Recruitment Agency, Specializing in AU Construction"
          description="No ATS. No integrations. StaffToday isn't automation, it's placements. Hand our AI recruiters a job description; they'll source, contact, & phone-screen candidates. Just like a human recruiter."
          tag="AI-Powered Recruitment"
          tagIcon={Zap}
          buttons={[
            { text: "Claim Your Free Search", href: "contact" },
            { text: "Login to Dashboard", href: "https://dashboard.stafftoday.ai" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456502865-of2iuym5.jpg"
          imageAlt="StaffToday.AI recruitment dashboard interface"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why Choose Us"
          description="Save 75% of your time, reduce costs by 60%, and achieve 95% accuracy in candidate matching — all while eliminating the hassle of traditional recruitment. We deliver verified talent for your construction projects."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="AI-Powered Recruitment Features"
          description="Discover how our advanced AI technology transforms construction recruitment"
          tag="Technology"
          tagIcon={Cpu}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              title: "GPT-4 Powered Role Parsing",
              description: "Upload job briefs or project needs for instant sourcing plans with 95% accuracy",
              icon: Brain
            },
            {
              title: "Multi-Platform Candidate Sourcing",
              description: "AI searches millions of profiles across LinkedIn and private networks with 250M+ profiles",
              icon: Search
            },
            {
              title: "AI-Powered Candidate Analysis",
              description: "AI analyzes work history for perfect role and candidate matching using machine learning",
              icon: Target
            },
            {
              title: "Real-Time Hiring Dashboard",
              description: "Everything you need in one place. No spreadsheets. No guesswork. Complete visibility.",
              icon: Dashboard
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your construction recruitment needs"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              badge: "Free Trial",
              badgeIcon: Gift,
              price: "Free",
              subtitle: "Try our AI recruitment service",
              features: [
                "1 Free candidate search",
                "Basic AI matching",
                "Email support",
                "48-hour response time"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$2,500/hire",
              subtitle: "Perfect for growing construction teams",
              features: [
                "Unlimited candidate searches",
                "Advanced AI screening",
                "Phone interview scheduling",
                "24/7 priority support",
                "Real-time dashboard",
                "Reference verification"
              ]
            },
            {
              id: "enterprise",
              badge: "Best Value",
              badgeIcon: Crown,
              price: "Custom",
              subtitle: "For large construction organizations",
              features: [
                "Volume hiring discounts",
                "Dedicated account manager",
                "Custom integrations",
                "Advanced analytics",
                "Bulk candidate sourcing",
                "White-label options"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Proven Results in Construction Recruitment"
          description="See the impact our AI recruitment platform delivers"
          tag="Success Metrics"
          tagIcon={TrendingUp}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "95%",
              title: "Accuracy",
              description: "Candidate matching accuracy with AI-powered analysis",
              icon: Target
            },
            {
              id: "2",
              value: "75%",
              title: "Time Saved",
              description: "Reduction in hiring time compared to traditional methods",
              icon: Clock
            },
            {
              id: "3",
              value: "250M+",
              title: "Profiles",
              description: "Candidate profiles searchable across multiple platforms",
              icon: Users
            },
            {
              id: "4",
              value: "60%",
              title: "Cost Savings",
              description: "Reduction in recruitment costs with AI automation",
              icon: DollarSign
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Trusted by Construction Leaders"
          description="Real feedback from construction professionals using StaffToday.AI"
          tag="Client Success"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Senior Project Manager",
              company: "Premier Construction",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456507914-0kpsdxqk.jpg",
              imageAlt: "Sarah Mitchell, Senior Project Manager"
            },
            {
              id: "2",
              name: "James Rodriguez",
              role: "Construction Manager",
              company: "BuildRight Ltd",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456508522-wipa1r3n.jpg",
              imageAlt: "James Rodriguez, Construction Manager"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Site Engineer",
              company: "Infrastructure Plus",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456509271-8piwqfc6.jpg",
              imageAlt: "Emma Thompson, Site Engineer"
            },
            {
              id: "4",
              name: "Mike Johnson",
              role: "Commercial Director",
              company: "Development Corp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456510187-qoeia8wl.jpg",
              imageAlt: "Mike Johnson, Commercial Director"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Construction Companies"
          description="Join hundreds of construction companies using our AI recruitment platform"
          tag="Partners"
          tagIcon={Building2}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456510984-x9tehay9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456511653-bwl8uk05.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456512621-5dp82gs5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456513610-p1l523xp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456514396-ps1y24rg.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456514891-v2iwebl0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456515661-reg8f93b.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about StaffToday.AI recruitment platform"
          tag="Support"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do you post job ads or wait for candidates to apply?",
              content: "No. We use AI to proactively search and directly engage top-matching candidates. No job boards. No waiting. No third-party recruiters."
            },
            {
              id: "2",
              title: "How fast can I expect candidates?",
              content: "Initial outreach starts within 24–48 hours. You'll receive a shortlist of verified, engaged candidates in 3–5 business days, depending on the role."
            },
            {
              id: "3",
              title: "Can I hire for future projects or stage-based timelines?",
              content: "Yes. You can upload roles with future start dates. We'll engage candidates based on your project timeline and keep them warm until you're ready."
            },
            {
              id: "4",
              title: "What makes StaffToday.AI different from traditional recruiters?",
              content: "Traditional hiring is slow, expensive, and reactive. StaffToday.AI flips the model — combining AI sourcing, real-time engagement, and verified shortlists to help you staff up with less risk and more confidence."
            },
            {
              id: "5",
              title: "How accurate is your AI candidate matching?",
              content: "Our AI achieves 95% accuracy in candidate matching by analyzing work history, skills, and role requirements using GPT-4 powered technology."
            },
            {
              id: "6",
              title: "Do you provide ongoing support after placement?",
              content: "Yes, we provide ongoing staff support and monitoring to ensure successful placements and long-term satisfaction for both employers and candidates."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Industry Insights & Updates"
          description="Stay informed about the latest trends in AI recruitment and construction hiring"
          tag="Blog"
          tagIcon={FileText}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "AI Technology",
              title: "How AI is Revolutionizing Construction Recruitment",
              excerpt: "Discover how artificial intelligence is transforming the way construction companies find and hire top talent.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456516306-nns2gmjb.jpg",
              imageAlt: "AI recruitment technology",
              authorName: "StaffToday Team",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456507914-0kpsdxqk.jpg",
              date: "Jan 15, 2025"
            },
            {
              id: "2",
              category: "Industry Trends",
              title: "2025 Construction Hiring Trends to Watch",
              excerpt: "Key hiring trends shaping the Australian construction industry and how to stay ahead of the competition.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456517116-apfdqmn0.jpg",
              imageAlt: "Construction hiring trends",
              authorName: "Industry Expert",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456508522-wipa1r3n.jpg",
              date: "Jan 10, 2025"
            },
            {
              id: "3",
              category: "Future of Work",
              title: "The Future of Recruitment: AI vs Traditional Methods",
              excerpt: "Comparing traditional recruitment methods with AI-powered solutions and their impact on hiring success.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456518012-ioc3cueq.jpg",
              imageAlt: "Future of recruitment",
              authorName: "Tech Analyst",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763456509271-8piwqfc6.jpg",
              date: "Jan 5, 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Rocket}
          title="Let AI Handle the Hiring"
          description="You build the future — we'll find the people. Start with a free search and discover how StaffToday.AI can transform your recruitment process."
          inputPlaceholder="Enter your work email"
          buttonText="Get Started"
          termsText="By clicking Get Started you're confirming that you agree with our Terms of Service and Privacy Policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="StaffToday.AI"
          columns={[
            {
              items: [
                { label: "Enterprise", href: "about" },
                { label: "Pricing", href: "pricing" },
                { label: "Features", href: "features" }
              ]
            },
            {
              items: [
                { label: "Support", href: "mailto:support@stafftoday.ai" },
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Terms of Service", href: "https://stafftoday.ai/terms" },
                { label: "Privacy Policy", href: "https://stafftoday.ai/privacy" },
                { label: "Legal", href: "https://stafftoday.ai/legal" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}