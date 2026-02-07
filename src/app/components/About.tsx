import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1769555949533-703d68e62a02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwc3ljaG9sb2dpc3QlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzAzNTc2MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dr. Maya Reynolds"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[var(--color-soft-terracotta)] rounded-3xl -z-10"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h2 
              className="text-5xl md:text-6xl text-[var(--color-deep-sage)] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Meet Dr. Maya
            </h2>
            <div 
              className="space-y-4 text-[var(--color-text-secondary)] text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p>
                With over 15 years of experience in clinical psychology, Dr. Maya Reynolds 
                specializes in helping individuals and couples navigate life's most challenging moments.
              </p>
              <p>
                Her approach combines evidence-based therapeutic techniques with a warm, 
                compassionate presence that creates a safe space for healing and growth. 
                Dr. Reynolds believes that everyone has the capacity for change and the 
                strength to overcome obstacles.
              </p>
              <p>
                Licensed in California, she holds a Ph.D. in Clinical Psychology from UCLA 
                and has completed specialized training in Cognitive Behavioral Therapy, 
                EMDR, and Mindfulness-Based Stress Reduction.
              </p>
            </div>
            <button 
              className="text-[var(--color-sage-green)] hover:text-[var(--color-deep-sage)] flex items-center gap-2 group transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Read More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}