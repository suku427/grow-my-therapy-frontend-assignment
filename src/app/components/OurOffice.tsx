export function OurOffice() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-[var(--color-warm-beige)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h2 
              className="text-5xl md:text-6xl text-[var(--color-deep-sage)] leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              A Safe Space for You
            </h2>
            <div 
              className="space-y-4 text-[var(--color-text-secondary)] text-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p>
                Our therapy office is designed to be a sanctuary from the outside world—a 
                place where you can feel completely at ease to explore your thoughts and feelings.
              </p>
              <p>
                Natural light, calming colors, and comfortable seating create an environment 
                that promotes relaxation and openness. Every detail has been thoughtfully 
                chosen to support your healing journey.
              </p>
              <p>
                Located in the heart of downtown, our office is easily accessible and 
                offers a peaceful retreat where transformation begins.
              </p>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1754294437684-7898b3701ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjBjYWxtfGVufDF8fHx8MTc3MDQzOTk0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Therapy office interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
              <img
                src="https://images.unsplash.com/photo-1568217716588-97944ab3e893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG9mZmljZSUyMHNwYWNlJTIwcGxhbnRzfGVufDF8fHx8MTc3MDQzOTk0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Office with plants"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}