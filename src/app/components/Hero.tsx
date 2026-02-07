import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 lg:px-8 bg-[var(--color-soft-white)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl text-[var(--color-deep-slate)] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Heal, Grow, Thrive
            </h1>
            <p 
              className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-lg"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Compassionate, evidence-based therapy to help you navigate life's challenges 
              and discover your path to emotional well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="px-8 py-4 bg-[var(--color-slate-blue)] text-white rounded-full hover:bg-[var(--color-deep-slate)] transition-colors flex items-center justify-center gap-2 group"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                className="px-8 py-4 border-2 border-[var(--color-slate-blue)] text-[var(--color-slate-blue)] rounded-full hover:bg-[var(--color-slate-blue)] hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1733685318562-c726472bc1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0aGVyYXBpc3QlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MDQxMTkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dr. Maya Reynolds"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--color-warm-linen)] rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}