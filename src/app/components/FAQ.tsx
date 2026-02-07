import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How do I know if therapy is right for me?',
    answer: 'Therapy can benefit anyone going through challenging times, experiencing emotional distress, or simply seeking personal growth. If you\'re feeling overwhelmed, anxious, depressed, or struggling with relationships, therapy provides a supportive environment to work through these issues.'
  },
  {
    question: 'What can I expect in the first session?',
    answer: 'The first session is an opportunity for us to get to know each other. We\'ll discuss what brings you to therapy, your goals, and your history. This is also a chance for you to ask questions and ensure you feel comfortable working together.'
  },
  {
    question: 'How long does therapy typically last?',
    answer: 'The length of therapy varies for each individual. Some people find relief in a few months, while others benefit from longer-term support. We\'ll work together to determine what\'s best for your specific needs and goals.'
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, I accept most major insurance plans. I also offer a sliding scale for those who qualify. Please contact my office to verify your specific insurance coverage and discuss payment options.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 lg:px-8 bg-[var(--color-off-white)]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-5xl md:text-6xl text-[var(--color-deep-sage)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Frequently Asked Questions
          </h2>
          <p 
            className="text-lg text-[var(--color-text-secondary)]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Everything you need to know about getting started
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-[var(--color-warm-beige)] rounded-2xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[var(--color-cream)] transition-colors"
              >
                <span 
                  className="text-xl text-[var(--color-deep-sage)]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-[var(--color-sage-green)]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[var(--color-sage-green)]" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p 
                    className="text-[var(--color-text-secondary)] leading-relaxed"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}