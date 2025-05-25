// storefront/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Sample book data - in a real app, you might fetch this from an API
  const books = [
    {
      id: "1",
      title: "The Art of Programming",
      author: "Jane Developer",
      price: 29.99,
      coverImage: "/the-art-of-programming.png", // You'll need to add these images to your public folder
      description: "A comprehensive guide to mastering modern programming paradigms with practical examples and exercises.",
      featured: true,
    },
    {
      id: "2",
      title: "Data Structures Simplified",
      author: "John Algorithm",
      price: 24.99,
      coverImage: "/data-structures.png",
      description: "Learn essential data structures and algorithms through clear explanations and real-world applications.",
      featured: false,
    },
    {
      id: "3",
      title: "Web Development Mastery",
      author: "Sarah Frontend",
      price: 34.99,
      coverImage: "/web-development.png",
      description: "A complete guide to modern web development, covering HTML, CSS, JavaScript, and popular frameworks.",
      featured: false,
    }
  ];

  return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Level Up Your Programming Skills</h1>
              <p className="text-xl mb-8">Practical guides that help you become a better developer.</p>
              <a
                  href="#books"
                  className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Explore Books
              </a>
            </div>
          </div>
        </section>

        {/* Featured Book */}
        {books.filter(book => book.featured).map(featuredBook => (
            <section key={featuredBook.id} className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 flex justify-center">
                      <div className="relative w-[250px] h-[350px] shadow-xl rounded-lg overflow-hidden transform -rotate-3">
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                          <Image
                              src={featuredBook.coverImage}
                              alt={featuredBook.title}
                              fill
                              sizes="250px"
                              className="object-cover"
                              priority
                          />
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
                        Featured Book
                      </div>
                      <h2 className="text-3xl font-bold mb-4">{featuredBook.title}</h2>
                      <p className="text-gray-600 mb-2">By {featuredBook.author}</p>
                      <div className="text-2xl font-semibold mb-4">${featuredBook.price}</div>
                      <p className="text-gray-600 mb-6">{featuredBook.description}</p>
                      <Link
                          href={`/checkout/?bookId=${featuredBook.id}`}
                          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        ))}

        {/* Book Catalog */}
        <section id="books" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {books.map(book => (
                  <div key={book.id} className="flex flex-col border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-[250px] bg-gray-100">
                      <Image
                          src={book.coverImage}
                          alt={book.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                      <p className="text-gray-600 mb-2">By {book.author}</p>
                      <p className="text-gray-600 mb-4 line-clamp-2">{book.description}</p>
                      <div className="flex items-center justify-between mt-auto pt-4">
                        <span className="text-xl font-semibold">${book.price}</span>
                        <Link
                            href={`/checkout/?bookId=${book.id}`}
                            className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Readers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Alex Johnson",
                  role: "Frontend Developer",
                  testimonial: "This book transformed how I approach programming problems. Highly recommended!",
                },
                {
                  name: "Sarah Williams",
                  role: "Software Engineer",
                  testimonial: "Clear explanations and practical examples make this an essential resource for any developer.",
                },
                {
                  name: "Michael Chen",
                  role: "CS Student",
                  testimonial: "As a student, this book helped me understand complex concepts that my classes couldn't explain well.",
                },
              ].map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">"{testimonial.testimonial}"</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Author Profiles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Expert Authors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Jane Developer",
                  role: "Senior Software Architect",
                  bio: "With 15+ years of experience in enterprise software development, Jane specializes in scalable architecture and best practices.",
                },
                {
                  name: "John Algorithm",
                  role: "Computer Science Professor",
                  bio: "Dr. Algorithm has taught data structures at leading universities for over a decade and contributes to open source projects.",
                },
                {
                  name: "Sarah Frontend",
                  role: "Web Development Expert",
                  bio: "Sarah has worked with Fortune 500 companies to build responsive, accessible websites and is passionate about teaching modern web development techniques.",
                }
              ].map((author, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div className="p-6">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                        {author.name.charAt(0)}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{author.name}</h3>
                      <p className="text-indigo-600 mb-3">{author.role}</p>
                      <p className="text-gray-600">{author.bio}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "Do you offer digital and physical copies?",
                  answer: "Yes, all our books are available in both PDF and print formats. Digital copies include lifetime updates."
                },
                {
                  question: "How long do I have access to digital content?",
                  answer: "You get lifetime access to all digital content, including any future updates to the book."
                },
                {
                  question: "Do you offer refunds if I'm not satisfied?",
                  answer: "Absolutely! We offer a 30-day money-back guarantee if you're not completely satisfied with your purchase."
                },
                {
                  question: "Are the code examples available for download?",
                  answer: "Yes, all code examples are available in a GitHub repository that you'll get access to with your purchase."
                }
              ].map((faq, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Level Up Your Skills?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Our books provide clear, practical guidance to help you become a better developer.</p>
            <a
                href="#books"
                className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Browse Books
            </a>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 md:p-12 shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Stay Updated with New Releases</h2>
              <p className="text-gray-600 text-center mb-8">
                Subscribe to our newsletter and be the first to know about new books, special discounts, and exclusive content.
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                />
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-500 text-sm text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </div>
  );
}