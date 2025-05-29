
import { useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Customer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b587?ixlib=rb-4.0.3",
      text: "The best coffee in town! The atmosphere is perfect for working or catching up with friends. The baristas really know their craft.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Coffee Enthusiast",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
      text: "I've tried coffee shops all over the city, but Brew & Bean stands out. Their single-origin coffees are exceptional and the service is always friendly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Local Business Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3",
      text: "This place has become my second office. Great WiFi, comfortable seating, and the best lattes in the neighborhood. Highly recommended!",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Food Blogger",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      text: "As someone who reviews coffee shops professionally, I can say Brew & Bean exceeds expectations. Quality, service, and ambiance are all top-notch.",
      rating: 5
    }
  ];

  useEffect(() => {
    // Initialize Swiper when component mounts
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).Swiper) {
        new (window as any).Swiper('.testimonials-swiper', {
          slidesPerView: 1,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-coffee-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our amazing community
          </p>
        </div>

        <div className="testimonials-swiper swiper" data-aos="fade-up">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="bg-cream-50 p-8 rounded-2xl shadow-lg text-center h-full">
                  <div className="mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-cream-600 text-lg"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-coffee-700 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-coffee-900 text-lg">{testimonial.name}</h4>
                    <p className="text-coffee-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
