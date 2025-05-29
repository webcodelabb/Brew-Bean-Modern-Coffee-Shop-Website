
const Menu = () => {
  const coffeeMenu = [
    {
      name: "Signature Espresso",
      description: "Rich, bold, and perfectly balanced",
      price: "$3.50",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3"
    },
    {
      name: "Caramel Macchiato",
      description: "Espresso with steamed milk and caramel",
      price: "$4.25",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3"
    },
    {
      name: "Cold Brew",
      description: "Smooth and refreshing cold extraction",
      price: "$3.75",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3"
    },
    {
      name: "Cappuccino",
      description: "Classic Italian coffee with foamed milk",
      price: "$4.00",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3"
    },
    {
      name: "Mocha Latte",
      description: "Coffee meets chocolate in perfect harmony",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1485808191679-5760e38583c2?ixlib=rb-4.0.3"
    },
    {
      name: "Vanilla Bean Frappé",
      description: "Iced coffee blend with vanilla and cream",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3"
    }
  ];

  const foodMenu = [
    {
      name: "Artisan Croissant",
      description: "Buttery, flaky pastry baked fresh daily",
      price: "$3.25",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3"
    },
    {
      name: "Avocado Toast",
      description: "Sourdough with fresh avocado and seasonings",
      price: "$8.50",
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3"
    },
    {
      name: "Berry Parfait",
      description: "Greek yogurt with fresh berries and granola",
      price: "$6.75",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3"
    },
    {
      name: "Breakfast Sandwich",
      description: "Egg, cheese, and bacon on English muffin",
      price: "$7.25",
      image: "https://images.unsplash.com/photo-1619740455993-a9cdc09ad56b?ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-coffee-900 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
            Carefully crafted beverages and fresh food made with love
          </p>
        </div>

        {/* Coffee Menu */}
        <div className="mb-16">
          <h3 className="text-3xl font-playfair font-semibold text-coffee-900 text-center mb-12" data-aos="fade-up">
            <i className="fas fa-coffee mr-3"></i>
            Coffee & Beverages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffeeMenu.map((item, index) => (
              <div key={index} className="menu-card rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-coffee-900">{item.name}</h4>
                    <span className="text-lg font-bold text-coffee-600">{item.price}</span>
                  </div>
                  <p className="text-coffee-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Food Menu */}
        <div>
          <h3 className="text-3xl font-playfair font-semibold text-coffee-900 text-center mb-12" data-aos="fade-up">
            <i className="fas fa-utensils mr-3"></i>
            Fresh Food
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foodMenu.map((item, index) => (
              <div key={index} className="menu-card rounded-2xl overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay={index * 100}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-coffee-900">{item.name}</h4>
                    <span className="text-lg font-bold text-coffee-600">{item.price}</span>
                  </div>
                  <p className="text-coffee-700 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
