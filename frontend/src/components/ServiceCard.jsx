import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const ServiceCard = ({ service }) => {
  return (
    <div className="group flex flex-col h-full rounded-2xl bg-card border border-border hover:border-primary/30 overflow-hidden transition-all duration-300 hover-lift">
      {/* Image */}
      {service.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        {/* CTA */}
        <Link to={service.link} className="mt-auto">
          <Button
            variant="ghost"
            className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary"
          >
            Learn More
            <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
