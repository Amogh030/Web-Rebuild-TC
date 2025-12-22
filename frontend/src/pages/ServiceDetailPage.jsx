import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();

  const serviceDetails = {
    'digital-transformation': {
      title: 'Digital Transformation & Experience Design',
      tagline: 'Reimagine. Redesign. Reinvent.',
      description:
        'Techno-Comp drives digital transformation by reimagining legacy systems, streamlining operations, and embedding innovation across the enterprise. Through thoughtful experience design, we create intuitive, user-centric solutions that elevate engagement and deliver real business value.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      keyOfferings: [
        {
          title: 'Legacy Modernization',
          description:
            'Transforming outdated systems to modern architectures for better user experience, compliance, performance, security, and scalability.',
        },
        {
          title: 'UX/UI Design & Accessibility',
          description:
            'Improving user interaction, navigation, and visual appeal while ensuring WCAG and ADA compliance.',
        },
        {
          title: 'Digital Customer Journey Mapping',
          description:
            'Tracking user interactions to identify pain points and optimize the overall experience.',
        },
        {
          title: 'Mobile App Development',
          description:
            'Building native and cross-platform apps for iOS and Android that deliver seamless experiences.',
        },
      ],
    },
    'ai-data-automation': {
      title: 'AI, Data & Automation Services',
      tagline: 'Intelligence at Scale. Automation with Purpose.',
      description:
        'We empower organizations with AI, Data, and Automation services that drive intelligent decision-making and operational efficiency. From predictive analytics to automated workflows, we deliver scalable solutions that transform how businesses operate and compete.',
      image: 'https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg',
      keyOfferings: [
        {
          title: 'AI-Powered Process Automation',
          description:
            'Streamlining operations with AI-driven automation to reduce manual effort, cut costs, and boost productivity.',
        },
        {
          title: 'Advanced Data Analytics & Insights',
          description:
            'Turning raw data into actionable intelligence for smarter, faster decisions.',
        },
        {
          title: 'Machine Learning Model Development',
          description:
            'Building and deploying custom ML models that solve complex business challenges.',
        },
        {
          title: 'Data Integration & Pipeline Engineering',
          description:
            'Designing scalable data pipelines for unified, real-time data accessibility.',
        },
      ],
    },
    'application-development': {
      title: 'Application Development & Modernization',
      tagline: 'Build. Modernize. Maintain.',
      description:
        'Delivering end-to-end application development, modernization, and maintenance services that keep your technology agile and future-ready. We build scalable apps, revamp legacy systems, and provide continuous support to ensure peak performance and seamless user experiences.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      keyOfferings: [
        {
          title: 'Full-Stack Custom Development',
          description:
            'Creating fully customized applications with focus on front-end UX and robust back-end management.',
        },
        {
          title: 'Low-Code/No-Code Development',
          description:
            'Simplifying app development for rapid creation of web and mobile applications.',
        },
        {
          title: 'Legacy System Modernization',
          description:
            'Upgrading old IT systems and integrating them with modern technologies.',
        },
        {
          title: 'Production Support',
          description:
            'Ensuring smooth operation of live systems through monitoring, error resolution, and incident management.',
        },
      ],
    },
    'cloud-enablement': {
      title: 'Cloud Enablement & DevOps Services',
      tagline: 'Scale with Confidence. Deploy with Speed.',
      description:
        'Empowering businesses to modernize and scale with secure, flexible, and cost-effective cloud solutions tailored to their needs. Our DevOps practices streamline deployment and accelerate time-to-market.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
      keyOfferings: [
        {
          title: 'Cloud Migration & Strategy',
          description:
            'Seamlessly migrating applications and data to cloud platforms like AWS, Azure, and Google Cloud.',
        },
        {
          title: 'DevOps Implementation',
          description:
            'Automating CI/CD pipelines for faster, more reliable software delivery.',
        },
        {
          title: 'Cloud Architecture Design',
          description:
            'Designing scalable, resilient cloud architectures optimized for performance and cost.',
        },
        {
          title: 'Container Orchestration',
          description:
            'Implementing Kubernetes and Docker for efficient application deployment and management.',
        },
      ],
    },
    'cybersecurity': {
      title: 'Cybersecurity Services',
      tagline: 'Protect. Detect. Respond.',
      description:
        'Protect your digital assets with end-to-end cybersecurity solutions that detect threats early, safeguard data, and ensure business continuity. Our comprehensive approach covers prevention, detection, and response.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      keyOfferings: [
        {
          title: 'Threat Assessment & Vulnerability Testing',
          description:
            'Identifying security gaps and vulnerabilities before they can be exploited.',
        },
        {
          title: 'Security Operations Center (SOC)',
          description:
            '24/7 monitoring and incident response to protect against cyber threats.',
        },
        {
          title: 'Compliance & Risk Management',
          description:
            'Ensuring adherence to industry standards like GDPR, HIPAA, and SOX.',
        },
        {
          title: 'Identity & Access Management',
          description:
            'Implementing secure authentication and authorization systems.',
        },
      ],
    },
    'quality-engineering': {
      title: 'Quality Engineering',
      tagline: 'Test. Optimize. Deliver.',
      description:
        'Ensuring software excellence through robust quality engineering that enhances performance, accelerates delivery, and eliminates defects before they reach production.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
      keyOfferings: [
        {
          title: 'Test Automation',
          description:
            'Building comprehensive automated testing frameworks for faster, more reliable releases.',
        },
        {
          title: 'Performance Testing',
          description:
            'Ensuring applications can handle expected load and scale under pressure.',
        },
        {
          title: 'Security Testing',
          description:
            'Identifying and addressing security vulnerabilities before deployment.',
        },
        {
          title: 'Accessibility Testing',
          description:
            'Ensuring compliance with WCAG standards for inclusive user experiences.',
        },
      ],
    },
    'it-governance': {
      title: 'IT Governance & Compliance',
      tagline: 'Govern. Comply. Excel.',
      description:
        'Providing comprehensive IT governance services that align technology initiatives with business goals, enforce compliance, and enhance accountability. We bring structure, visibility, and control to your IT landscape.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
      keyOfferings: [
        {
          title: 'Software Development Process Governance',
          description:
            'Setting standards for coding, testing, and deployment with clear roles and workflows.',
        },
        {
          title: 'Technical Architecture Governance',
          description:
            'Ensuring scalable, secure systems aligned with strategic goals.',
        },
        {
          title: 'Compliance Audits',
          description:
            'Ensuring adherence to regulations in healthcare, finance, and other regulated industries.',
        },
        {
          title: 'IT Software Governance',
          description:
            'Managing vendors and systems to ensure quality, compliance, and accountability.',
        },
      ],
    },
    'managed-it': {
      title: 'Managed IT Operations & Support',
      tagline: 'Monitor. Maintain. Optimize.',
      description:
        'Reliable managed IT services that keep your systems secure, scalable, and running smoothly—so you can focus on growth, not glitches.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
      keyOfferings: [
        {
          title: '24/7 System Monitoring',
          description:
            'Continuous monitoring to detect and resolve issues before they impact operations.',
        },
        {
          title: 'Infrastructure Management',
          description:
            'Managing servers, networks, and cloud infrastructure for optimal performance.',
        },
        {
          title: 'Help Desk Support',
          description:
            'Providing responsive technical support to end-users across your organization.',
        },
        {
          title: 'Backup & Disaster Recovery',
          description:
            'Ensuring business continuity with robust backup and recovery solutions.',
        },
      ],
    },
    'adobe-experience': {
      title: 'Adobe Experience Solutions',
      tagline: 'Experience. Personalize. Convert.',
      description:
        'End-to-end capabilities across the Adobe Experience Cloud ecosystem, including AEM Sites, Assets, Forms, Adobe Analytics, Target, and Campaign. We help you deliver exceptional digital experiences at scale.',
      image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
      keyOfferings: [
        {
          title: 'AEM Implementation & Customization',
          description:
            'Designing, developing, and customizing enterprise-grade Adobe Experience Manager platforms.',
        },
        {
          title: 'Digital Asset Management',
          description:
            'Managing, organizing, and delivering personalized content at scale.',
        },
        {
          title: 'Experience Optimization',
          description:
            'Leveraging Adobe Target and AI tools for personalized user journeys.',
        },
        {
          title: 'Cloud Migration',
          description:
            'Migrating from on-prem AEM to cloud-native architecture with automation and governance.',
        },
      ],
    },
  };

  const service = serviceDetails[serviceId] || serviceDetails['digital-transformation'];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary via-primary-light to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-custom relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium">{service.tagline}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Overview
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Key Offerings */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Key <span className="gradient-text">Offerings</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.keyOfferings.map((offering, index) => (
                <div
                  key={index}
                  className="flex flex-col p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover-lift"
                >
                  <div className="flex items-start mb-4">
                    <CheckCircle2 size={24} className="text-primary mr-3 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-semibold text-foreground">{offering.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{offering.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Let's discuss how this service can transform your business and drive measurable results.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-2xl text-base px-10 py-6 h-auto"
              >
                Contact Us Today
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

export default ServiceDetailPage;
