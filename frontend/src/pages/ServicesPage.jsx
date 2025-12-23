import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServiceCard } from '../components/ServiceCard';
import {
  Cloud,
  Shield,
  Brain,
  Code,
  Gauge,
  Settings,
  Palette,
  CheckCircle2,
  Layers,
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Palette size={28} className="text-primary" />,
      title: 'Digital Transformation & Experience Design',
      description:
        'Reimagining legacy systems, streamlining operations, and creating intuitive, user-centric solutions that elevate engagement and deliver real business value.',
      link: '/services/digital-transformation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    },
    {
      icon: <Brain size={28} className="text-primary" />,
      title: 'AI, Data & Automation Services',
      description:
        'Empowering organizations with AI-driven automation, advanced data analytics, and machine learning models that transform operations and drive intelligent decision-making.',
      link: '/services/ai-data-automation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    },
    {
      icon: <Code size={28} className="text-primary" />,
      title: 'Application Development & Modernization',
      description:
        'Building scalable applications, revamping legacy systems, and providing continuous support to ensure peak performance and seamless user experiences.',
      link: '/services/application-development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    },
    {
      icon: <Layers size={28} className="text-primary" />,
      title: 'Adobe Experience Solutions',
      description:
        'End-to-end capabilities across Adobe Experience Cloud, including AEM implementation, digital asset management, and experience optimization.',
      link: '/services/adobe-experience',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    },
    {
      icon: <Cloud size={28} className="text-primary" />,
      title: 'Cloud Enablement & DevOps Services',
      description:
        'Modernize and scale with secure, flexible, and cost-effective cloud solutions. Streamline deployment with DevOps practices for faster delivery.',
      link: '/services/cloud-enablement',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    },
    {
      icon: <CheckCircle2 size={28} className="text-primary" />,
      title: 'Quality Engineering',
      description:
        'Ensuring software excellence through robust quality engineering that enhances performance, accelerates delivery, and eliminates defects before production.',
      link: '/services/quality-engineering',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    },
    {
      icon: <Settings size={28} className="text-primary" />,
      title: 'IT Governance & Compliance',
      description:
        'Comprehensive governance services that align technology with business goals, enforce compliance, and enhance accountability across your IT landscape.',
      link: '/services/it-governance',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
    },
    {
      icon: <Gauge size={28} className="text-primary" />,
      title: 'Managed IT Operations & Support',
      description:
        'Reliable managed IT services that keep your systems secure, scalable, and running smoothly—so you can focus on growth, not glitches.',
      link: '/services/managed-it',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6',
    },
    {
      icon: <Shield size={28} className="text-primary" />,
      title: 'Cybersecurity Services',
      description:
        'Protect your digital assets with end-to-end cybersecurity solutions that detect threats early, safeguard data, and ensure business continuity.',
      link: '/services/cybersecurity',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-light to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Comprehensive technology solutions designed to transform your business and drive
              sustainable growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose <span className="gradient-text">Techno-Comp</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="text-4xl font-bold text-primary mb-3">29+</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Years Experience</h3>
                <p className="text-muted-foreground text-sm">
                  Three decades of proven excellence in IT services
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="text-4xl font-bold text-primary mb-3">394</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Global Experts</h3>
                <p className="text-muted-foreground text-sm">
                  World-class consultants across multiple time zones
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="text-4xl font-bold text-primary mb-3">98%</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Client Satisfaction</h3>
                <p className="text-muted-foreground text-sm">
                  Trusted by industry leaders worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
