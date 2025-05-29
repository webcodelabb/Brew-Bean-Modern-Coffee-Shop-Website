
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-coffee-900 mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
            Come experience the warmth of our community and the perfect cup of coffee
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <div className="mb-8">
              <h3 className="text-2xl font-playfair font-semibold text-coffee-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-coffee-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-coffee-900">Address</h4>
                    <p className="text-coffee-700">123 Coffee Street, Bean District, City 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-coffee-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-coffee-900">Phone</h4>
                    <p className="text-coffee-700">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-coffee-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-coffee-900">Email</h4>
                    <p className="text-coffee-700">hello@brewandbean.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-coffee-100 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock text-coffee-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-coffee-900">Hours</h4>
                    <p className="text-coffee-700">Mon-Fri: 6:30 AM - 9:00 PM</p>
                    <p className="text-coffee-700">Sat-Sun: 7:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBCwrA0MiczMy4wIk4gNzRCwrAwMCcyMS4wIlc!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brew & Bean Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="contact-form">
              <h3 className="text-2xl font-playfair font-semibold text-coffee-900 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-coffee-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-coffee-400 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-coffee-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-coffee-400 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-coffee-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-coffee-200 rounded-lg focus:ring-2 focus:ring-coffee-400 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-coffee w-full">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
