import { Heart, Users, Brain } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Individual Therapy',
    description: 'One-on-one sessions tailored to your unique needs, focusing on personal growth, emotional healing, and developing coping strategies.'
  },
  {
    icon: Users,
    title: 'Couples Counseling',
    description: 'Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection.'
  },
  {
    icon: Brain,
    title: 'Anxiety & Depression',
    description: 'Evidence-based treatment for anxiety disorders and depression, helping you regain control and find joy in daily life.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-[var(--color-off-white)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-5xl md:text-6xl text-[var(--color-deep-sage)]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Services
          </h2>
          <p 
            className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Specialized support for your mental health journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 bg-[var(--color-warm-beige)] rounded-2xl hover:shadow-lg transition-shadow space-y-4"
            >
              <div className="w-14 h-14 bg-[var(--color-sage-green)] rounded-full flex items-center justify-center">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 
                className="text-2xl text-[var(--color-deep-sage)]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {service.title}
              </h3>
              <p 
                className="text-[var(--color-text-secondary)] leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}