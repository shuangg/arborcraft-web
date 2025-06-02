import React, { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  categories?: string[];
}

const Gallery: React.FC<GalleryProps> = ({ items, categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Generate unique categories if not provided
  const galleryCategories = categories.length > 0 
    ? categories 
    : ['all', ...Array.from(new Set(items.map(item => item.category)))];

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter(item => item.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const openModal = (item: GalleryItem) => {
    setActiveItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="w-full">
      {/* Category Filters */}
      {galleryCategories.length > 1 && (
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-[#3A3A3A] text-white'
                  : 'bg-transparent text-gray-800 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="relative overflow-hidden group cursor-pointer"
            onClick={() => openModal(item)}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
              <div className="p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-xl font-medium">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-5xl w-full mx-4 bg-white overflow-hidden max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white z-10 bg-black/50 rounded-full p-2"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3">
                <img 
                  src={activeItem.imageUrl} 
                  alt={activeItem.title} 
                  className="w-full h-auto max-h-[90vh] object-cover"
                />
              </div>
              <div className="md:w-1/3 p-6 md:p-8 flex flex-col">
                <h3 className="text-2xl font-medium mb-2">{activeItem.title}</h3>
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">{activeItem.category}</p>
                <p className="text-gray-700 mb-6">{activeItem.description || 'A beautifully crafted piece designed to enhance your living space with its exceptional form and function.'}</p>
                <button className="mt-auto btn-primary self-start">Request Similar Design</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;