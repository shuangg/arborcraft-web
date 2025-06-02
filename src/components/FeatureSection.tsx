import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  features?: string[];
  buttonText?: string;
  buttonLink?: string;
  imagePosition?: 'left' | 'right';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  imageUrl,
  features = [],
  buttonText,
  buttonLink = '/contact',
  imagePosition = 'right',
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`flex flex-col ${imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <AnimatedSection className="w-full lg:w-1/2" delay={200}>
            <div className="overflow-hidden">
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-auto object-cover image-hover"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="w-full lg:w-1/2" delay={400}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">{title}</h2>
            <p className="text-gray-700 mb-8 text-lg">{description}</p>
            
            {features.length > 0 && (
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-[#8A6D4B] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {buttonText && (
              <Link 
                to={buttonLink} 
                className="inline-flex items-center bg-[#3A3A3A] text-white px-6 py-3 font-medium transition-all duration-300 hover:bg-black"
              >
                {buttonText}
                <ArrowRight size={18} className="ml-2" />
              </Link>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;