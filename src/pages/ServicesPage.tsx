import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Palette, PenTool, Sofa, AreaChart, Lightbulb } from 'lucide-react';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import FeatureSection from '../components/FeatureSection';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Services | ArborCraft - Luxury Furniture & Design Solutions';
  }, []);

  const services = [
    {
      title: 'Whole House Design',
      description: 'Comprehensive design solutions that transform your entire living space into a harmonious sanctuary.',
      icon: <Sofa size={32} />,
      link: '/services'
    },
    {
      title: 'Custom Furniture',
      description: 'Bespoke, handcrafted furniture pieces designed specifically for your space and lifestyle needs.',
      icon: <PenTool size={32} />,
      link: '/services'
    },
    {
      title: 'Interior Styling',
      description: 'Expert curation of accessories, art, and furnishings to create a polished, cohesive interior.',
      icon: <Palette size={32} />,
      link: '/services'
    },
    {
      title: 'Space Planning',
      description: 'Strategic layout optimization to enhance flow, functionality, and aesthetic appeal of your space.',
      icon: <AreaChart size={32} />,
      link: '/services'
    },
    {
      title: 'Material Selection',
      description: 'Curated selection of premium materials, textiles, and finishes that elevate your interior design.',
      icon: <Ruler size={32} />,
      link: '/services'
    },
    {
      title: 'Lighting Design',
      description: 'Thoughtful lighting plans that enhance ambiance, highlight architectural features, and improve functionality.',
      icon: <Lightbulb size={32} />,
      link: '/services'
    }
  ];

  return (
    <>
      <Hero 
        title="Our Design Services"
        subtitle="Comprehensive design solutions tailored to your lifestyle and aesthetic preferences."
        imageUrl="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="h-[70vh]"
      />

      {/* Introduction Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Tailored Design Solutions</h2>
              <p className="text-gray-700 text-lg mb-0">
                At ArborCraft, we offer a comprehensive range of design services that can be customized to meet your specific needs. Whether you're looking for a complete home transformation or a single statement piece, our expert team will guide you through the process with meticulous attention to detail.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section 1 */}
      <FeatureSection 
        title="Whole House Design"
        description="Our signature service creates cohesive, functional spaces that reflect your lifestyle and personality. We consider every aspect of your home, from architectural elements to the finishing touches, ensuring a harmonious living environment."
        imageUrl="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        features={[
          "Comprehensive space assessment and planning",
          "Custom furniture design and selection",
          "Material and finish coordination",
          "Lighting and architectural detailing",
          "Art and accessory curation"
        ]}
        buttonText="Learn More"
        imagePosition="right"
      />

      {/* Feature Section 2 */}
      <FeatureSection 
        title="Custom Furniture Design"
        description="From concept to creation, our master craftsmen design and build bespoke furniture pieces that perfectly suit your space and lifestyle needs. Each piece is handcrafted with exceptional attention to detail and quality."
        imageUrl="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        features={[
          "Personalized design consultation",
          "3D modeling and prototyping",
          "Premium material selection",
          "Expert craftsmanship and construction",
          "White-glove delivery and placement"
        ]}
        buttonText="Learn More"
        imagePosition="left"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            <AnimatedSection delay={100}>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center bg-[#3A3A3A] text-white font-medium text-xl mb-6">
                  1
                </div>
                <h3 className="text-xl font-medium mb-3">Initial Consultation</h3>
                <p className="text-gray-600">
                  We begin with a thorough discussion to understand your vision, requirements, and lifestyle needs. This foundational step helps us align our design approach with your expectations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center bg-[#3A3A3A] text-white font-medium text-xl mb-6">
                  2
                </div>
                <h3 className="text-xl font-medium mb-3">Site Assessment</h3>
                <p className="text-gray-600">
                  Our design team conducts a detailed assessment of your space, taking measurements and noting architectural features that will influence the design direction.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center bg-[#3A3A3A] text-white font-medium text-xl mb-6">
                  3
                </div>
                <h3 className="text-xl font-medium mb-3">Concept Development</h3>
                <p className="text-gray-600">
                  Based on our discussions and assessment, we create detailed concept boards and preliminary designs that capture the essence of your vision.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center bg-[#3A3A3A] text-white font-medium text-xl mb-6">
                  4
                </div>
                <h3 className="text-xl font-medium mb-3">Design Refinement</h3>
                <p className="text-gray-600">
                  We collaborate closely with you to refine the design, making adjustments to ensure every detail aligns perfectly with your vision and functional requirements.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center bg-[#3A3A3A] text-white font-medium text-xl mb-6">
                  5
                </div>
                <h3 className="text-xl font-medium mb-3">Implementation</h3>
                <p className="text-gray-600">
                  Our skilled craftsmen and installation team bring the design to life with meticulous attention to quality and detail, ensuring flawless execution.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div className="relative">
                <div className="w-12 h-12 flex items-center justify-center bg-[#3A3A3A] text-white font-medium text-xl mb-6">
                  6
                </div>
                <h3 className="text-xl font-medium mb-3">Final Reveal</h3>
                <p className="text-gray-600">
                  We complete the project with a final presentation, walking you through your transformed space and ensuring complete satisfaction with every aspect.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#3A3A3A] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Contact us today to schedule a consultation with our design experts and begin your journey to an exceptionally crafted home.
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

export default ServicesPage;