import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">TC</span>
              </div>
              <span className="ml-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                Techno-Comp Inc.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button size="default" className="bg-primary hover:bg-primary-light text-primary-foreground">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-t border-border shadow-xl">
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button size="default" className="w-full bg-primary hover:bg-primary-light text-primary-foreground">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
