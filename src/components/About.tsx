
const About = () => {
  return (
    <section id="about" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-coffee-900 mb-4">
            Our Story
          </h2>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
            Passion, quality, and community - the three pillars of Brew & Bean
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <img 
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3" 
              alt="Coffee roasting process" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div data-aos="fade-left">
            <h3 className="text-3xl font-playfair font-semibold text-coffee-900 mb-6">
              From Bean to Cup
            </h3>
            <p className="text-coffee-700 mb-6 leading-relaxed">
              Founded in 2015, Brew & Bean started as a small family business with a simple mission: 
              to serve the finest coffee while creating a warm, welcoming space for our community. 
              We source our beans directly from sustainable farms around the world, ensuring every 
              cup supports both quality and ethical practices.
            </p>
            <p className="text-coffee-700 mb-6 leading-relaxed">
              Our expert roasters craft each blend with precision and care, bringing out the unique 
              characteristics of every origin. Whether you're a coffee connoisseur or just beginning 
              your coffee journey, we're here to guide you to your perfect cup.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-coffee-800">8+</div>
                <div className="text-sm text-coffee-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coffee-800">15K+</div>
                <div className="text-sm text-coffee-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coffee-800">25+</div>
                <div className="text-sm text-coffee-600">Coffee Varieties</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center card-hover p-8 bg-white rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl text-coffee-600 mb-4">
              <i className="fas fa-leaf"></i>
            </div>
            <h4 className="text-xl font-semibold text-coffee-900 mb-3">Sustainable</h4>
            <p className="text-coffee-700">
              We're committed to environmentally responsible practices and supporting farming communities.
            </p>
          </div>
          <div className="text-center card-hover p-8 bg-white rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl text-coffee-600 mb-4">
              <i className="fas fa-award"></i>
            </div>
            <h4 className="text-xl font-semibold text-coffee-900 mb-3">Premium Quality</h4>
            <p className="text-coffee-700">
              Only the finest beans make it to our roastery, ensuring exceptional quality in every cup.
            </p>
          </div>
          <div className="text-center card-hover p-8 bg-white rounded-2xl shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <div className="text-4xl text-coffee-600 mb-4">
              <i className="fas fa-heart"></i>
            </div>
            <h4 className="text-xl font-semibold text-coffee-900 mb-3">Community</h4>
            <p className="text-coffee-700">
              More than a coffee shop, we're a gathering place where connections are brewed daily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
