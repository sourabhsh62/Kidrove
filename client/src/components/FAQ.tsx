import { useState } from 'react'

const faqs = [
  {
    question: 'Does my child need prior coding or robotics experience?',
    answer: 'Not at all! This workshop is designed for beginners. We start with foundational concepts using Scratch and gradually introduce Python and AI concepts. Our instructors provide step-by-step guidance to ensure every child can follow along comfortably.',
  },
  {
    question: 'What equipment or software will be needed?',
    answer: 'Participants need a laptop or desktop computer with a stable internet connection. We will provide all software links and setup guides before the workshop begins. A webcam and microphone are recommended for interactive sessions.',
  },
  {
    question: 'Will my child receive a certificate after completion?',
    answer: 'Yes! Every participant who completes the workshop will receive a verified certificate from Kidrove. The certificate details the skills learned and can be a great addition to their academic portfolio.',
  },
  {
    question: 'How are the live classes conducted?',
    answer: 'Classes are conducted via Zoom with a max of 15 students per batch to ensure personal attention. Each session includes live instruction, screen sharing, Q&A, and breakout activities. Recordings are also shared for revision.',
  },
  {
    question: 'What is the refund policy?',
    answer: 'We offer a full refund up to 7 days before the workshop starts. After that, a partial refund (50%) is available up to the first day of the workshop. No refunds are processed after the workshop begins.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Got questions? We have answers. Can&apos;t find what you&apos;re looking for? Reach out to us.
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
