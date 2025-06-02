import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import Gallery from '../components/Gallery';

const PortfolioPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Portfolio | ArborCraft - Luxury Furniture & Design Solutions';
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: 'Kensington Residence',
      category: 'Whole House',
      imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A complete redesign of a Victorian townhouse in Kensington, featuring bespoke furniture pieces and a harmonious color palette that honors the home\'s architectural heritage while introducing modern comforts.'
    },
    {
      id: 2,
      title: 'Walnut Dining Collection',
      category: 'Furniture',
      imageUrl: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A custom dining set crafted from solid walnut, featuring organic curves and innovative joinery techniques that showcase the beauty of the natural wood grain.'
    },
    {
      id: 3,
      title: 'Chelsea Apartment',
      category: 'Interior',
      imageUrl: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A minimalist design approach for a contemporary apartment in Chelsea, focusing on clean lines, neutral tones, and statement furniture pieces that create a serene urban retreat.'
    },
    {
      id: 4,
      title: 'Oak Bedroom Suite',
      category: 'Furniture',
      imageUrl: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A coordinated bedroom collection featuring a platform bed, bedside tables, and wardrobe crafted from sustainably sourced English oak with brass accents.'
    },
    {
      id: 5,
      title: 'Mayfair Penthouse',
      category: 'Whole House',
      imageUrl: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A luxurious penthouse redesign featuring open-concept living spaces, custom millwork, and a curated selection of bespoke furniture and lighting fixtures.'
    },
    {
      id: 6,
      title: 'Modular Shelving System',
      category: 'Furniture',
      imageUrl: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'An innovative modular shelving system designed for versatility and adaptability, featuring interchangeable components that can be reconfigured as needs change.'
    },
    {
      id: 7,
      title: 'Notting Hill Library',
      category: 'Interior',
      imageUrl: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A custom home library featuring floor-to-ceiling bookcases, integrated lighting, and a comfortable reading nook with views of the garden.'
    },
    {
      id: 8,
      title: 'Marble Console Table',
      category: 'Furniture',
      imageUrl: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A statement console table featuring a sculptural base in blackened steel supporting a dramatically veined marble top, creating a perfect balance of strength and elegance.'
    },
    {
      id: 9,
      title: 'Hampstead Cottage',
      category: 'Whole House',
      imageUrl: 'https://images.pexels.com/photos/4450337/pexels-photo-4450337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A comprehensive renovation of a historic cottage, preserving original architectural details while introducing contemporary elements for modern living.'
    }
  ];

  const categories = ['all', 'Whole House', 'Furniture', 'Interior'];

  return (
    <>
      <Hero 
        title="Our Portfolio"
        subtitle="Explore our collection of bespoke furniture and whole house design projects."
        imageUrl="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="h-[70vh]"
      />

      {/* Portfolio Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Featured Projects</h2>
            <p className="text-gray-700 text-lg">
              Discover a selection of our craftsmanship across whole house design projects, bespoke furniture pieces, and interior transformations. Each project reflects our commitment to exceptional design and quality.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <Gallery items={portfolioItems} categories={categories} />
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Project</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              An in-depth look at one of our comprehensive whole house design solutions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Kensington Residence"
                className="w-full h-auto"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <h3 className="text-2xl font-semibold mb-2">Kensington Residence</h3>
              <p className="text-gray-500 mb-6">Complete Home Transformation</p>
              <p className="text-gray-700 mb-6">
                For this Victorian townhouse in Kensington, our client sought a design that would honor the home's architectural heritage while introducing modern comforts and functionality for their family of four.
              </p>
              <p className="text-gray-700 mb-6">
                We began with a comprehensive space plan that improved flow between living areas while preserving original details like crown moldings and parquet flooring. Custom furniture pieces were designed specifically for each space, including a statement dining table in walnut and brass that seats ten for entertaining.
              </p>
              <p className="text-gray-700 mb-8">
                The material palette features natural textures in neutral tones, accented with deep blues and burnished metals that create a sense of timeless elegance throughout the home.
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-[#3A3A3A] text-white px-6 py-3 font-medium transition-all duration-300 hover:bg-black"
              >
                Enquire About Similar Projects
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#3A3A3A] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Create Your Dream Space?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss how we can transform your home with our bespoke design solutions and exceptional craftsmanship.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-white text-[#3A3A3A] px-8 py-4 font-medium transition-all duration-300 hover:bg-[#8A6D4B] hover:text-white"
            >
              Book a Consultation
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;