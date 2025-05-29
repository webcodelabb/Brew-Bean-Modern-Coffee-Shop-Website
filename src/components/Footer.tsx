
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="footer-bg text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <i className="fas fa-coffee text-2xl text-cream-300"></i>
              <span className="text-2xl font-playfair font-bold">
                Brew & Bean
              </span>
            </div>
            <p className="text-cream-200 mb-6 leading-relaxed">
              Where every cup tells a story and every sip is an experience. 
              Join our community of coffee lovers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-coffee-600 rounded-full flex items-center justify-center hover:bg-coffee-500 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-coffee-600 rounded-full flex items-center justify-center hover:bg-coffee-500 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-coffee-600 rounded-full flex items-center justify-center hover:bg-coffee-500 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-coffee-600 rounded-full flex items-center justify-center hover:bg-coffee-500 transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-cream-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-cream-200 hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#gallery" className="text-cream-200 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#blog" className="text-cream-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="text-cream-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Opening Hours</h3>
            <div className="space-y-3 text-cream-200">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>6:30 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>7:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>7:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Stay Updated</h3>
            <p className="text-cream-200 mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-4 py-3 bg-coffee-800 border border-coffee-600 rounded-lg text-white placeholder-cream-300 focus:ring-2 focus:ring-cream-400 focus:border-transparent"
              />
              <button type="submit" className="w-full btn-coffee">
                <i className="fas fa-envelope mr-2"></i>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-coffee-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream-200 mb-4 md:mb-0">
              © 2024 Brew & Bean. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-cream-200 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-cream-200 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-cream-200 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
