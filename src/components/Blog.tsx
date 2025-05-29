
const Blog = () => {
  const blogPosts = [
    {
      title: "The Art of Coffee Brewing",
      excerpt: "Discover the secrets behind the perfect cup of coffee and learn about different brewing methods.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Brewing Tips"
    },
    {
      title: "Sustainable Coffee Farming",
      excerpt: "Learn about our commitment to ethical sourcing and how we support coffee farming communities.",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Sustainability"
    },
    {
      title: "Latte Art Masterclass",
      excerpt: "Watch our expert baristas create beautiful latte art and learn the techniques behind it.",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Barista Skills"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-coffee-900 mb-4">
            Coffee Stories
          </h2>
          <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
            Explore the world of coffee through our blog
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-cream-600 bg-cream-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-coffee-600">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-coffee-900 mb-3 hover:text-coffee-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-coffee-700 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-coffee-600">{post.date}</span>
                  <button className="text-coffee-600 hover:text-coffee-800 font-medium">
                    Read More <i className="fas fa-arrow-right ml-1"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <button className="btn-coffee">
            <i className="fas fa-book mr-2"></i>
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
