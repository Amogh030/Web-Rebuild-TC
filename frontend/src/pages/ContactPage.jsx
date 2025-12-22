import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-primary" />,
      title: 'Email',
      info: 'info@technocompinc.com',
      link: 'mailto:info@technocompinc.com',
    },
    {
      icon: <Phone size={24} className="text-primary" />,
      title: 'Phone',
      info: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin size={24} className="text-primary" />,
      title: 'Location',
      info: 'Global Offices - USA & India',
      link: null,
    },
    {
      icon: <Clock size={24} className="text-primary" />,
      title: 'Business Hours',
      info: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: null,
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
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Ready to transform your business with innovative technology? Let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="ai-data">AI & Data Analytics</option>
                    <option value="cloud">Cloud Enablement</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="app-dev">Application Development</option>
                    <option value="quality">Quality Engineering</option>
                    <option value="governance">IT Governance</option>
                    <option value="managed-it">Managed IT Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground h-12"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Contact <span className="gradient-text">Information</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions? Reach out to us through any of these channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover-lift"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="mt-8">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                  alt="Business Partnership"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Office Locations Section */}
      <section className="section-padding-sm bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Global Presence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With offices in the USA and India, we provide 24/7 support and local expertise worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">United States</h3>
              <p className="text-muted-foreground mb-4">
                Our U.S. headquarters provides strategic oversight and client engagement across North America.
              </p>
              <p className="text-muted-foreground">
                <strong>Address:</strong> Coming Soon
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">India</h3>
              <p className="text-muted-foreground mb-4">
                Our development centers in India deliver world-class technical solutions with cost efficiency.
              </p>
              <p className="text-muted-foreground">
                <strong>Address:</strong> Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
