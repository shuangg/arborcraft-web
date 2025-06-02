import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageUrl: string;
  overlay?: boolean;
  height?: string;
  contentPosition?: 'left' | 'center' | 'right';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink = '/contact',
  imageUrl,
  overlay = true,
  height = 'h-screen',
  contentPosition = 'center',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const positionClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  return (
    <section 
      className={`relative flex items-center justify-center ${height}`}
      style={{ 
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      )}
      
      <div className={`container relative z-10 px-4 md:px-8 mx-auto flex flex-col ${positionClasses[contentPosition]}`}>
        <div 
          className={`max-w-3xl transition-all duration-1000 delay-300 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-white mb-8 max-w-xl">
              {subtitle}
            </p>
          )}
          
          {buttonText && (
            <Link 
              to={buttonLink} 
              className="inline-flex items-center bg-white text-black px-8 py-4 font-medium transition-all duration-300 hover:bg-[#8A6D4B] hover:text-white"
            >
              {buttonText}
              <ArrowRight size={18} className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;