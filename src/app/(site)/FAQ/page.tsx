'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What web services do you offer for lawn care businesses like mine?",
    answer: "We specialize in creating websites that cater specifically to lawn care businesses. Our services include custom website design & development, online booking systems, service packages setup, SEO for local visibility, gallery integration, customer reviews & testimonials integration, and mobile optimization.",
  },
  {
    question: "How much will building a website for my lawn care business cost?",
    answer: "The cost depends on your specific needs. We offer flexible pricing with basic packages starting around $1,500, standard packages around $3,000, and premium packages starting at $5,000. We provide customized quotes based on your requirements and budget.",
  },
  {
    question: "What's your process for creating a website for a lawn care business?",
    answer: "Our process includes discovery & consultation, planning & strategy, design, development, content integration, testing, launch, and post-launch support. We ensure a smooth and collaborative experience throughout the entire process.",
  },
  {
    question: "How long will it take to get my lawn care website up and running?",
    answer: "The timeline varies based on the complexity of your site. Basic sites typically take 2-3 weeks, standard sites 4-8 weeks, and premium sites with advanced features 10-16 weeks. We provide a more accurate timeline after our initial consultation.",
  },
  {
    question: "Do you offer website maintenance and support after my site is live?",
    answer: "Yes, we offer several maintenance and support packages. Our basic maintenance starts at $50/month, standard support at $100/month, and premium support at $200/month. We can also create custom packages to fit your specific needs.",
  },
  {
    question: "Can you help me get more local customers through my website?",
    answer: "Absolutely! We focus on local SEO strategies to help your lawn care business appear in local search results. Our services include keyword optimization, Google My Business integration, local content creation, and reviews management.",
  },
  {
    question: "Do you create custom designs or use templates for lawn care websites?",
    answer: "We offer both options. We can create a unique custom design that reflects your brand, or we can customize a high-quality template to fit your needs. Either way, we'll make sure your website stands out and represents your lawn care business perfectly.",
  },
  {
    question: "Will my website be easy for me to update and manage?",
    answer: "While our websites are custom-coded to ensure top-notch performance, security, and a unique look, we understand the importance of ease of management. Here's how we support you:\n\n- **6 Months of Free Updates:** With our premium package, you receive 6 months of complimentary updates. During this period, our team will handle any changes you need—whether it's adding new services, updating photos, or tweaking your content. Think of us as your dedicated website partner, ensuring everything runs smoothly.\n\n- **Affordable Ongoing Support:** After the initial six months, you can continue to enjoy peace of mind with our ongoing support for just $50 a month. This covers regular maintenance, content updates, and technical assistance.\n\n- **Comprehensive Training:** We provide training sessions to help you understand the basics of your website, empowering you to make minor updates on your own.\n\n- **User-Friendly Communication:** Need a change? Just reach out via email or phone, and our friendly support team will take care of it for you. No technical knowledge required on your end!",
  },
  {
    question: "How do you ensure my website stays secure and protected?",
    answer: "Security is a top priority for us. Here’s how we keep your site safe:\n\n- **SSL Certificates:** Encrypting data between your site and visitors.\n- **Regular Updates:** Keeping all software and plugins up-to-date to protect against vulnerabilities.\n- **Firewall Protection:** Blocking malicious traffic and potential threats.\n- **Malware Scanning:** Regularly scanning your site for malware and removing any threats promptly.\n- **Secure Hosting:** Partnering with reliable hosting providers that prioritize security and uptime.\n- **Data Backups:** Performing regular backups to ensure data can be restored in case of an incident.",
  },
  {
    question: "What do you need from me to get started on my lawn care website?",
    answer: "To get the ball rolling, we’ll need a few things from you:\n\n- **Business Information:** What you do, your target audience, and your goals.\n- **Design Preferences:** Any websites you love or your brand guidelines (logos, colors, fonts).\n- **Content:** Text for your pages, high-quality images of your work, and any videos you want to include.\n- **Features:** Specific functionalities you need, such as online booking, contact forms, or galleries.\n- **Technical Details:** Your domain name, hosting information (if you have one), and access to any existing website if you’re redesigning.\n- **Budget & Timeline:** Your budget range and when you’d like to launch your site.\n- **Additional Info:** Any other specific requirements or ideas you have for your website.",
  },
  {
    question: "How will my website help my lawn care business stand out from the competition?",
    answer: "We focus on highlighting what makes your lawn care business unique and ensuring your website reflects that. Here’s how we help you stand out:\n\n- **Custom Design:** A unique, eye-catching design that represents your brand and appeals to your target audience.\n- **Showcase Your Work:** Beautiful galleries and before-and-after photos that demonstrate the quality of your services.\n- **Customer Reviews:** Highlight positive testimonials to build trust and credibility with potential clients.\n- **User-Friendly Features:** Easy navigation, online booking, and responsive design to enhance the user experience.\n- **Local SEO:** Strategies to ensure your website appears in local search results, making it easier for nearby customers to find you.\n- **Engaging Content:** Compelling copy and visuals that tell your brand’s story and connect with your audience.\n- **Innovative Tools:** Features like automated email follow-ups, promotions, and service package options to attract and retain customers.",
  },
]

const FAQItemComponent: React.FC<{ item: FAQItem; index: number; isOpen: boolean; onClick: () => void }> = ({ item, index, isOpen, onClick }) => {
  const variants = {
    open: {
      opacity: 1,
      maxHeight: 500, // Adjust as needed
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      maxHeight: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  }

  return (
    <motion.section
      className="mb-4"
      initial="closed"
      animate="open"
      exit="closed"
      layout
    >
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left p-4 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-lg font-semibold">{item.question}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            className="mt-2 p-4 bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            aria-labelledby={`faq-question-${index}`}
          >
            <p className="whitespace-pre-line">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index))
  }

  return (
      <main className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Find answers to common questions about our web services for lawn care businesses.
        </motion.p>

        <section className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItemComponent
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </section>
      </main>
  )
}