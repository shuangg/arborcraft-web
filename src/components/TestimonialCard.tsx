import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  imageUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  imageUrl,
}) => {
  return (
    <div className="bg-white p-8 shadow-sm flex flex-col h-full">
      <div className="mb-6 text-3xl text-[#8A6D4B]">
        <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.6914 0L10.4219 10.7422C7.30469 15.4766 5.74609 19.4375 5.74609 22.625C5.74609 26.2344 7.83203 28.6719 11.4414 28.6719C14.6289 28.6719 17.168 26.1328 17.168 22.8984C17.168 19.7109 14.7305 17.3281 11.543 17.3281C11.0156 17.3281 10.332 17.4297 10.1289 17.4844C10.9375 15.4766 12.6992 12.8359 15.2383 9.72656L17.6914 0ZM37.5977 0L30.3281 10.7422C27.2109 15.4766 25.6523 19.4375 25.6523 22.625C25.6523 26.2344 27.7383 28.6719 31.3477 28.6719C34.5352 28.6719 37.0742 26.1328 37.0742 22.8984C37.0742 19.7109 34.6367 17.3281 31.4492 17.3281C30.9219 17.3281 30.2383 17.4297 30.0352 17.4844C30.8438 15.4766 32.6055 12.8359 35.1445 9.72656L37.5977 0Z" fill="currentColor"/>
        </svg>
      </div>

      <p className="text-gray-700 italic mb-6 flex-grow">{quote}</p>
      
      <div className="flex items-center mt-auto">
        {imageUrl && (
          <div className="mr-4">
            <img 
              src={imageUrl} 
              alt={author}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-medium text-gray-900">{author}</div>
          {role && <div className="text-sm text-gray-500">{role}</div>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;