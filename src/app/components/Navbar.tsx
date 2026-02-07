import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-off-white)] border-b border-[var(--color-warm-beige)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            <span className="text-2xl text-[var(--color-deep-sage)]">Dr. Maya Reynolds</span>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-sage-green)] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-sage-green)] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-sage-green)] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-sage-green)] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              FAQ
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button 
              className="px-6 py-3 bg-[var(--color-sage-green)] text-white rounded-full hover:bg-[var(--color-deep-sage)] transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[var(--color-text-primary)] p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--color-warm-beige)]">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left px-4 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-sage-green)] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-sage-green)] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left px-4 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-sage-green)] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left px-4 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-sage-green)] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                FAQ
              </button>
              <button 
                className="mx-4 px-6 py-3 bg-[var(--color-sage-green)] text-white rounded-full hover:bg-[var(--color-deep-sage)] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}