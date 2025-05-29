
const Hero = () => {
  return (
    <section id="home" className="hero-bg relative flex items-center justify-center text-center text-white">
      <div className="relative z-10 container mx-auto px-4">
        <div data-aos="fade-up" data-aos-delay="300">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Welcome to<br />
            <span className="text-cream-300">Brew & Bean</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Where every cup tells a story and every sip is an experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-coffee"
            >
              <i className="fas fa-utensils mr-2"></i>
              Explore Menu
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-coffee-900 transition-all duration-300 font-medium"
            >
              <i className="fas fa-map-marker-alt mr-2"></i>
              Visit Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Coffee Elements */}
      <div className="absolute bottom-10 left-10 text-6xl text-cream-300 opacity-20 animate-float">
        <i className="fas fa-coffee"></i>
      </div>
      <div className="absolute top-1/4 right-10 text-4xl text-cream-300 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
        <i className="fas fa-seedling"></i>
      </div>
    </section>
  );
};

export default Hero;
