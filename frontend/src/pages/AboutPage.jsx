import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Award, Users, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Target size={32} className="text-primary" />,
      title: 'Our Mission',
      description:
        'Empowering organizations through innovative technology solutions that drive efficiency, resilience, and growth. We are committed to delivering excellence through deep expertise, trusted partnerships, and a relentless focus on outcomes.',
    },
    {
      icon: <Award size={32} className="text-primary" />,
      title: 'Our Commitment',
      description:
        'We take ownership of your goals and deliver exceptional service, measurable outcomes, and lasting value. Your success is our success, and we work tirelessly to ensure both.',
    },
    {
      icon: <Users size={32} className="text-primary" />,
      title: 'Our Pride',
      description:
        'We focus on building long-term relationships based on trust, backed by skilled professionals who maintain integrity, quality, and accountability in everything we do.',
    },
    {
      icon: <TrendingUp size={32} className="text-primary" />,
      title: 'Our Belief',
      description:
        'Technology should be a catalyst for business success, not complicate it. Driven by strategy, governance, and flawless execution, we prioritize trust, transparency, and excellence.',
    },
  ];

  const keyPractices = [
    'Digital Transformation',
    'Recruiting',
    'Quality Assurance',
    'Emerging Technologies (AI/ML, Robotics, Blockchain, IoT, AR/VR)',
    'Mobile Management',
    'Program Management',
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
              About Techno-Comp Inc.
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              A leader in IT systems integration & technology services since 1996
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who <span className="gradient-text">We Are</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 1996, Techno-Comp Inc. (TCI) is a recognized leader in IT systems
                integration and technology services, delivering innovative, scalable, and
                results-driven solutions for over three decades.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We specialize in IT governance, digital transformation, cloud enablement,
                cybersecurity, application development, and AI-powered solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our delivery model leverages R&D and Application Development centers in the U.S. and
                India, enabling global delivery with local insight. Client relationships are built on
                deep industry knowledge, trust, and consistent results.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521"
                alt="Team Collaboration"
                className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 mb-20">
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground text-center">
              "We don't just support technology—
              <span className="gradient-text">we govern success.</span>"
            </blockquote>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover-lift"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Practices */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Key <span className="gradient-text">Practices</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyPractices.map((practice, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-all hover-lift"
                >
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0" />
                  <span className="text-base font-medium text-foreground">{practice}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Size Highlight */}
          <div className="bg-gradient-to-br from-primary via-primary-light to-secondary rounded-3xl p-12 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl md:text-7xl font-bold mb-4">394</div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                Consultants Worldwide
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Our continuous investment in people and infrastructure ensures we deliver
                high-quality, uninterrupted services to clients around the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Partner with us to transform your technology landscape and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground">
                  Explore Services
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
