import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Palette, PenTool, Sofa, AreaChart, BadgeCheck } from 'lucide-react';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import FeatureSection from '../components/FeatureSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'ArborCraft - Luxury Furniture & Whole House Design Solutions';
  }, []);

  const services = [
    {
      title: 'Whole House Design',
      description: 'Comprehensive design solutions that transform your entire living space into a harmonious sanctuary.',
      imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services'
    },
    {
      title: 'Custom Furniture',
      description: 'Bespoke, handcrafted furniture pieces designed specifically for your space and lifestyle needs.',
      imageUrl: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services'
    },
    {
      title: 'Interior Styling',
      description: 'Expert curation of accessories, art, and furnishings to create a polished, cohesive interior.',
      imageUrl: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '/services'
    }
  ];

  const testimonials = [
    {
      quote: "ArborCraft transformed our home beyond our expectations. Their attention to detail and understanding of our lifestyle created a space that truly feels like us, only better.",
      author: "James & Emily Wilson",
      role: "Kensington Residence"
    },
    {
      quote: "The bespoke furniture pieces designed for our living room are conversation starters every time we have guests. Exceptional craftsmanship paired with innovative design.",
      author: "Sophia Chen",
      role: "Notting Hill Apartment"
    },
    {
      quote: "Working with ArborCraft was effortless. They guided us through the entire process, from concept to completion, resulting in a home that perfectly balances aesthetics and functionality.",
      author: "Robert Taylor",
      role: "Mayfair Townhouse"
    }
  ];

  return (
    <>
      <Hero 
        title="Crafting Exceptional Living Spaces"
        subtitle="Bespoke furniture and whole house design solutions tailored to your lifestyle."
        buttonText="Book a Consultation"
        imageUrl="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        contentPosition="left"
      />

      {/* Introduction Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Designing Spaces That Inspire</h2>
              <p className="text-gray-700 text-lg mb-8">
                ArborCraft specializes in creating thoughtfully designed interiors and bespoke furniture pieces that transform houses into extraordinary homes. Our holistic approach considers every detail, from architectural elements to the finishing touches.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-[#3A3A3A] font-medium hover:text-[#8A6D4B] transition-colors"
              >
                Discover our story
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Design Solutions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              From concept to completion, we offer comprehensive design services tailored to your unique lifestyle and aesthetic preferences.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center bg-[#3A3A3A] text-white px-6 py-3 font-medium transition-all duration-300 hover:bg-black"
            >
              View All Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Section */}
      <FeatureSection 
        title="Whole House Design Approach"
        description="We believe in creating spaces that tell your story through thoughtful design. Our whole house approach ensures every element works harmoniously to create a cohesive living experience."
        imageUrl="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        features={[
          "Comprehensive space planning and optimization",
          "Curated material and finish selection",
          "Bespoke furniture design and placement",
          "Lighting design to enhance ambiance",
          "Color palette development for cohesive flow"
        ]}
        buttonText="Explore Our Approach"
        buttonLink="/services"
        imagePosition="right"
      />

      {/* Process Section */}
      <section className="py-20 bg-[#F7F5F2]">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Design Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We follow a comprehensive, client-centered approach to bring your vision to life.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={100}>
              <div className="bg-white p-8 h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-[#3A3A3A] text-white font-medium text-xl mb-6">
                  1
                </div>
                <h3 className="text-xl font-medium mb-3">Consultation</h3>
                <p className="text-gray-600">
                  We begin with a thorough consultation to understand your vision, lifestyle needs, and design preferences.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-8 h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-[#3A3A3A] text-white font-medium text-xl mb-6">
                  2
                </div>
                <h3 className="text-xl font-medium mb-3">Concept Development</h3>
                <p className="text-gray-600">
                  Our designers create detailed concept boards and space plans tailored to your specific requirements.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-8 h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-[#3A3A3A] text-white font-medium text-xl mb-6">
                  3
                </div>
                <h3 className="text-xl font-medium mb-3">Design Refinement</h3>
                <p className="text-gray-600">
                  We collaborate closely with you to refine the design, ensuring every detail aligns with your vision.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-white p-8 h-full">
                <div className="w-12 h-12 flex items-center justify-center bg-[#3A3A3A] text-white font-medium text-xl mb-6">
                  4
                </div>
                <h3 className="text-xl font-medium mb-3">Implementation</h3>
                <p className="text-gray-600">
                  Our expert craftsmen and installation team bring the design to life with meticulous attention to quality.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-[#3A3A3A] text-white px-6 py-3 font-medium transition-all duration-300 hover:bg-black"
            >
              Start Your Project
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Craftsman working on furniture"
                className="w-full h-auto rounded-sm"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Why Choose ArborCraft</h2>
              <p className="text-gray-700 mb-8">
                With decades of experience and a passion for exceptional design, ArborCraft stands apart through our commitment to quality craftsmanship and client-centered approach.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="mr-4 text-[#8A6D4B]">
                    <BadgeCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Expert Craftsmanship</h3>
                    <p className="text-gray-600">Master artisans with decades of experience</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-[#8A6D4B]">
                    <PenTool size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Bespoke Design</h3>
                    <p className="text-gray-600">Completely customized to your lifestyle</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-[#8A6D4B]">
                    <Palette size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Material Excellence</h3>
                    <p className="text-gray-600">Only the finest materials sourced globally</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-[#8A6D4B]">
                    <AreaChart size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Holistic Approach</h3>
                    <p className="text-gray-600">Considering every aspect of your space</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">What Our Clients Say</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The satisfaction of our clients is our greatest achievement. Here's what they have to say about working with ArborCraft.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#3A3A3A] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Transform Your Space</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Ready to create a home that perfectly reflects your lifestyle and aesthetics? Book a consultation with our design experts today.
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

export default HomePage;