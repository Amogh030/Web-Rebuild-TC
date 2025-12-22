import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const StatCard = ({ icon: Icon, value, suffix, label, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div
      ref={cardRef}
      className="flex flex-col items-center p-8 rounded-2xl bg-card hover:bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
        <Icon size={32} className="text-primary" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
        {count}{suffix}
      </div>
      <p className="text-sm md:text-base text-muted-foreground text-center">{label}</p>
    </div>
  );
};

export const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '1000',
      suffix: '+',
      label: 'Projects Completed',
      delay: 0,
    },
    {
      icon: Users,
      value: '394',
      suffix: '',
      label: 'Global Consultants',
      delay: 100,
    },
    {
      icon: Clock,
      value: '29',
      suffix: '+',
      label: 'Years of Experience',
      delay: 200,
    },
    {
      icon: Award,
      value: '98',
      suffix: '%',
      label: 'Client Satisfaction',
      delay: 300,
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Driven by Outcomes,{' '}
            <span className="gradient-text">Proven by Data</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our client success in numbers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
