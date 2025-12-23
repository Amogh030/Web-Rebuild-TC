import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { ServiceCard } from '../components/ServiceCard';
import { StatsSection } from '../components/StatsSection';
import { Link } from 'react-router-dom';
import {
  Cloud,
  Shield,
  Brain,
  Code,
  Gauge,
  Settings,
  Palette,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Palette size={28} className="text-primary" />,
      title: 'Digital Transformation & Experience Design',
      description:
        'Reimagining legacy systems and creating intuitive, user-centric solutions that elevate engagement and deliver real business value.',
      link: '/services/digital-transformation',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    },
    {
      icon: <Brain size={28} className="text-primary" />,
      title: 'AI, Data & Automation',
      description:
        'Empowering organizations with AI-driven automation, advanced analytics, and machine learning to transform operations.',
      link: '/services/ai-data-automation',
      image: 'https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg',
    },
    {
      icon: <Code size={28} className="text-primary" />,
      title: 'Application Development & Modernization',
      description:
        'Building scalable applications, revamping legacy systems, and providing continuous support for peak performance.',
      link: '/services/application-development',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
    },
    {
      icon: <Cloud size={28} className="text-primary" />,
      title: 'Cloud Enablement & DevOps',
      description:
        'Modernize and scale with secure, flexible, and cost-effective cloud solutions tailored to your business needs.',
      link: '/services/cloud-enablement',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
    },
    {
      icon: <Shield size={28} className="text-primary" />,
      title: 'Cybersecurity Services',
      description:
        'Protect your digital assets with end-to-end security solutions that detect threats early and ensure business continuity.',
      link: '/services/cybersecurity',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    },
    {
      icon: <CheckCircle2 size={28} className="text-primary" />,
      title: 'Quality Engineering',
      description:
        'Ensuring software excellence through robust testing that enhances performance and eliminates defects before production.',
      link: '/services/quality-engineering',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
    },
    {
      icon: <Settings size={28} className="text-primary" />,
      title: 'IT Governance & Compliance',
      description:
        'Aligning technology initiatives with business goals, enforcing compliance, and enhancing accountability across your IT landscape.',
      link: '/services/it-governance',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
    },
    {
      icon: <Gauge size={28} className="text-primary" />,
      title: 'Managed IT Services & Support',
      description:
        'Reliable IT management that keeps your systems secure, scalable, and running smoothly so you can focus on growth.',
      link: '/services/managed-it',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
    },
  ];

  const clients = [
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-secondary">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-dots opacity-10" />
        
        {/* Hero Image Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg"
            alt="Modern IT Infrastructure"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-light/90 to-secondary/90" />
        </div>

        {/* Content */}
        <div className="relative container-custom text-center z-10 pt-20">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Connected by Technology,
              <br />
              <span className="text-secondary-glow">Driven by Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Technology is our engine, but trust is the foundation. Together, we bridge today's
              challenges with tomorrow's opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-2xl text-base px-8 py-6 h-auto"
                >
                  Explore Our Services
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 backdrop-blur-sm text-base px-8 py-6 h-auto"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/80 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                A Leader in IT Systems Integration &{' '}
                <span className="gradient-text">Technology Services</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 1996, Techno-Comp Inc. (TCI) is a recognized leader in IT systems
                integration and technology services, delivering innovative, scalable, and
                results-driven solutions for over three decades.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We specialize in IT governance, digital transformation, cloud enablement,
                cybersecurity, application development, and AI-powered solutions—built on deep
                industry knowledge, trust, and consistent results.
              </p>
              <Link to="/about">
                <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground">
                  Learn More About Us
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521"
                alt="Professional Team"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2">
                View All Services
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="section-padding-sm bg-background">
        <div className="container-custom">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-12">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 rounded-xl bg-muted/50 hover:bg-muted transition-all hover-lift grayscale hover:grayscale-0"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Let's discuss how we can help transform your business with innovative technology
              solutions.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-2xl text-base px-10 py-6 h-auto"
              >
                Get in Touch
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
