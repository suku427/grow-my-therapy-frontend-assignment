import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 px-6 lg:px-8 bg-[var(--color-deep-slate)] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Bio */}
          <div className="space-y-4">
            <h3 
              className="text-2xl"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Dr. Maya Reynolds
            </h3>
            <p 
              className="text-[var(--color-light-blue)] text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Compassionate therapy for healing, growth, and emotional well-being. 
              Your journey to a healthier mind starts here.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h4 
              className="text-lg"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-[var(--color-light-blue)] hover:text-white transition-colors text-left text-sm"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[var(--color-light-blue)] hover:text-white transition-colors text-left text-sm"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-[var(--color-light-blue)] hover:text-white transition-colors text-left text-sm"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-[var(--color-light-blue)] hover:text-white transition-colors text-left text-sm"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                FAQ
              </button>
            </nav>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="space-y-4">
            <h4 
              className="text-lg"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Contact Info
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--color-light-blue)]" />
                <span 
                  className="text-sm text-[var(--color-light-blue)]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  (555) 123-4567
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--color-light-blue)]" />
                <span 
                  className="text-sm text-[var(--color-light-blue)]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  hello@drmayareynolds.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--color-light-blue)]" />
                <span 
                  className="text-sm text-[var(--color-light-blue)]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  123 Wellness Avenue<br />
                  Los Angeles, CA 90012
                </span>
              </div>
            </div>
          </div>

          {/* Column 4 - Social */}
          <div className="space-y-4">
            <h4 
              className="text-lg"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Connect With Us
            </h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[var(--color-slate-blue)] flex items-center justify-center hover:bg-[var(--color-light-blue)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[var(--color-slate-blue)] flex items-center justify-center hover:bg-[var(--color-light-blue)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-[var(--color-slate-blue)] flex items-center justify-center hover:bg-[var(--color-light-blue)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-slate-blue)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              className="text-sm text-[var(--color-light-blue)]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              © 2026 Dr. Maya Reynolds. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-sm text-[var(--color-light-blue)] hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-[var(--color-light-blue)] hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}