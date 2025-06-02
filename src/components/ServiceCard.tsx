import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageUrl?: string;
  link?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  link = '/services',
}) => {
  return (
    <div className="group h-full">
      {imageUrl ? (
        // Image card variant
        <div className="h-full flex flex-col overflow-hidden">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-6 bg-white flex flex-col flex-grow border border-t-0 border-gray-200">
            <h3 className="text-xl font-medium mb-3">{title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{description}</p>
            <Link
              to={link}
              className="inline-flex items-center text-[#3A3A3A] font-medium group-hover:text-[#8A6D4B] transition-colors"
            >
              Learn more
              <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      ) : (
        // Icon card variant
        <div className="h-full p-6 border border-gray-200 flex flex-col bg-white transition-all duration-300 hover:shadow-md">
          {icon && <div className="mb-4 text-[#8A6D4B]">{icon}</div>}
          <h3 className="text-xl font-medium mb-3">{title}</h3>
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
          <Link
            to={link}
            className="inline-flex items-center text-[#3A3A3A] font-medium group-hover:text-[#8A6D4B] transition-colors"
          >
            Learn more
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;