import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  GraduationCap,
  Users,
  TrendingUp,
  Heart,
  Globe,
  Award,
  ArrowRight,
} from 'lucide-react';

const CareersPage = () => {
  const benefits = [
    {
      icon: <TrendingUp size={32} className="text-primary" />,
      title: 'Career Growth',
      description:
        'Continuous learning opportunities and clear career progression paths to help you reach your potential.',
    },
    {
      icon: <Users size={32} className="text-primary" />,
      title: 'Collaborative Culture',
      description:
        'Work with talented professionals in a supportive environment that values teamwork and innovation.',
    },
    {
      icon: <Globe size={32} className="text-primary" />,
      title: 'Global Projects',
      description:
        'Exposure to diverse, international projects with leading enterprises across multiple industries.',
    },
    {
      icon: <Award size={32} className="text-primary" />,
      title: 'Competitive Benefits',
      description:
        'Comprehensive compensation packages including health benefits, retirement plans, and performance bonuses.',
    },
    {
      icon: <Heart size={32} className="text-primary" />,
      title: 'Work-Life Balance',
      description:
        'Flexible work arrangements and a culture that prioritizes employee wellbeing and personal time.',
    },
    {
      icon: <GraduationCap size={32} className="text-primary" />,
      title: 'Learning & Development',
      description:
        'Access to training programs, certifications, and conferences to keep your skills cutting-edge.',
    },
  ];

  const openPositions = [
    {
      title: 'Senior Cloud Architect',
      department: 'Cloud Services',
      location: 'Remote / USA',
      type: 'Full-time',
      description:
        'Lead cloud architecture design and implementation for enterprise clients.',
    },
    {
      title: 'AI/ML Engineer',
      department: 'Data & Analytics',
      location: 'India / Remote',
      type: 'Full-time',
      description:
        'Build and deploy machine learning models to solve complex business problems.',
    },
    {
      title: 'Full Stack Developer',
      department: 'Application Development',
      location: 'USA / India',
      type: 'Full-time',
      description:
        'Develop modern web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      description:
        'Monitor, detect, and respond to security threats across client environments.',
    },
    {
      title: 'DevOps Engineer',
      department: 'Cloud & DevOps',
      location: 'USA / Remote',
      type: 'Full-time',
      description:
        'Automate deployment pipelines and manage cloud infrastructure at scale.',
    },
    {
      title: 'QA Automation Engineer',
      department: 'Quality Engineering',
      location: 'India / Remote',
      type: 'Full-time',
      description:
        'Design and implement automated testing frameworks for enterprise applications.',
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
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Build your career with a global leader in IT systems integration and technology services
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why <span className="gradient-text">Join Techno-Comp</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We invest in our people because we know that our success is built on yours
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover-lift"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="section-padding-sm bg-muted/30">
        <div className="container-custom">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">394</div>
              <p className="text-lg text-muted-foreground">Team Members Worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">25+</div>
              <p className="text-lg text-muted-foreground">Countries Represented</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">90%</div>
              <p className="text-lg text-muted-foreground">Employee Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find your next opportunity and grow with us
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover-lift"
              >
                <div className="flex-grow mb-4 md:mb-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <Briefcase size={20} className="text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{position.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-3">{position.description}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="px-3 py-1 rounded-full bg-muted">{position.department}</span>
                    <span className="px-3 py-1 rounded-full bg-muted">{position.location}</span>
                    <span className="px-3 py-1 rounded-full bg-muted">{position.type}</span>
                  </div>
                </div>
                <Link to="/contact" className="mt-4 md:mt-0 md:ml-6">
                  <Button variant="outline" className="w-full md:w-auto">
                    Apply Now
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Don't see a position that fits? We're always looking for talented people.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary-light text-primary-foreground">
                Send Us Your Resume
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Join our team of innovators and help shape the future of technology services.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-2xl text-base px-10 py-6 h-auto"
              >
                Start Your Journey
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

export default CareersPage;
