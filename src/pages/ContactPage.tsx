import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Hero from '../components/Hero';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Contact Us | ArborCraft - Luxury Furniture & Design Solutions';
  }, []);

  return (
    <>
      <Hero 
        title="Contact Us"
        subtitle="Get in touch to discuss your project or schedule a visit to our showroom."
        imageUrl="https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        height="h-[60vh]"
      />

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                We'd love to hear about your project. Contact us to schedule a consultation with our design team or visit our showroom to experience our craftsmanship firsthand.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="text-[#8A6D4B] mr-4 mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Visit Our Showroom</h3>
                    <p className="text-gray-600">
                      123 Crafted Lane, Mayfair<br />
                      London, W1J 7NT
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#8A6D4B] mr-4 mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Call Us</h3>
                    <p className="text-gray-600">+44 20 7123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#8A6D4B] mr-4 mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email Us</h3>
                    <p className="text-gray-600">info@arborcraft.co.uk</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-[#8A6D4B] mr-4 mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Opening Hours</h3>
                    <p className="text-gray-600">
                      Monday to Friday: 9am - 6pm<br />
                      Saturday: 10am - 4pm<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6">
                <h3 className="text-lg font-medium mb-3">Book a Design Consultation</h3>
                <p className="text-gray-600 mb-0">
                  Our initial consultations typically last 1-2 hours and can be held at your property or in our showroom. During this meeting, we'll discuss your vision, requirements, and the potential scope of your project.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Visit Our Showroom</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Experience our craftsmanship firsthand at our Mayfair showroom, where you can explore our furniture collections and discuss your project with our design team.
            </p>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="aspect-[16/9] w-full bg-gray-200">
              {/* This would be a map iframe in a real implementation */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-500">Interactive Map Would Display Here</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Find answers to common questions about our design process, services, and what to expect when working with ArborCraft.
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={100}>
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">What is your design process like?</h3>
                <p className="text-gray-600">
                  Our design process begins with an initial consultation to understand your needs and vision. We then develop concept designs, refine them based on your feedback, and proceed to implementation once the design is finalized. Throughout the process, we maintain clear communication and collaboration.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">How long does a typical project take?</h3>
                <p className="text-gray-600">
                  Project timelines vary depending on scope and complexity. A custom furniture piece might take 8-12 weeks from design to delivery, while a whole house design project typically takes 4-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">Do you work with existing furniture pieces?</h3>
                <p className="text-gray-600">
                  Absolutely. We're happy to incorporate your existing furniture pieces into our design plans. We can also provide recommendations for refinishing or reupholstering to ensure they complement the overall design scheme.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-2">What areas do you serve?</h3>
                <p className="text-gray-600">
                  While our showroom is located in London, we work on projects throughout the UK and internationally. For projects outside of London, additional travel fees may apply.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={500}>
              <div>
                <h3 className="text-xl font-medium mb-2">How do you charge for your services?</h3>
                <p className="text-gray-600">
                  Our pricing structure varies depending on the service. For whole house design, we typically charge a design fee based on the square footage and complexity of the project. Custom furniture is priced individually based on design, materials, and craftsmanship required. We provide detailed proposals and transparent pricing after our initial consultation.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;