// storefront/app/checkout/page.tsx
"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string;
  description: string;
}

// Loading component for Suspense fallback
function LoadingUI() {
  return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
  );
}

// Component that uses useSearchParams
function CheckoutContent() {
  const searchParams = useSearchParams();
  const bookId = searchParams.get("bookId");

  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderError, setOrderError] = useState("");

  // In a real application, this would fetch from an API
  useEffect(() => {
    // Simulate API fetch with sample data
    const sampleBooks = [
      {
        id: "1",
        title: "The Art of Programming",
        author: "Jane Developer",
        price: 29.99,
        coverImage: "/the-art-of-programming.png",
        description: "A comprehensive guide to mastering modern programming paradigms with practical examples and exercises.",
      },
      {
        id: "2",
        title: "Data Structures Simplified",
        author: "John Algorithm",
        price: 24.99,
        coverImage: "/data-structures.png",
        description: "Learn essential data structures and algorithms through clear explanations and real-world applications.",
      },
      {
        id: "3",
        title: "Web Development Mastery",
        author: "Sarah Frontend",
        price: 34.99,
        coverImage: "/web-development.png",
        description: "A complete guide to modern web development, covering HTML, CSS, JavaScript, and popular frameworks.",
      }
    ];

    if (bookId) {
      const foundBook = sampleBooks.find(book => book.id === bookId);
      setBook(foundBook || null);
    }
    setIsLoading(false);
  }, [bookId]);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setOrderError("");

    try {
      // In a real app, this would be an API call to create an order
      // For example:
      // const response = await fetch('/api/orders', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     customerName: formData.customerName,
      //     email: formData.email,
      //     address: formData.address,
      //     productId: parseInt(bookId),
      //     quantity: 1
      //   })
      // });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Set order as complete
      setOrderComplete(true);
    } catch (error) {
      console.error("Error processing order:", error);
      setOrderError("There was an error processing your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <LoadingUI />;
  }

  if (!book) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Book Not Found</h1>
          <p className="mb-6 text-gray-600">Sorry, we couldn't find the book you were looking for.</p>
          <Link
              href="/storefront/public"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
    );
  }

  if (orderComplete) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Order Complete!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase, {formData.customerName}! A confirmation email has been sent to {formData.email}.
            </p>
            <p className="text-gray-600 mb-8">
              Your order will be processed shortly.
            </p>
            <Link
                href="/"
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
    );
  }

  return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Order Summary Section */}
              <div className="md:w-1/3 bg-gray-100 p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="mb-4">
                  <div className="relative h-40 w-full bg-gray-200 rounded mb-3">
                    <Image
                        src={book.coverImage}
                        alt={`Cover of ${book.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                        priority
                    />
                  </div>
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-gray-600 text-sm">By {book.author}</p>
                </div>
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <span>Price:</span>
                    <span>${book.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Quantity:</span>
                    <span>1</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span>${book.price.toFixed(2)}</span>
                  </div>
                </div>
                <Link
                    href="/storefront/public"
                    className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Continue Shopping
                </Link>
              </div>

              {/* Checkout Form */}
              <div className="md:w-2/3 p-6">
                <h2 className="text-2xl font-bold mb-6">Checkout</h2>
                {orderError && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                      {orderError}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="customerName" className="block text-gray-700 mb-2">Full Name</label>
                    <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="address" className="block text-gray-700 mb-2">Shipping Address</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Payment Information</h3>
                    <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <p className="text-center text-gray-600">
                        For this demo, no actual payment will be processed.
                      </p>
                    </div>
                  </div>

                  <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
                      disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                    ) : (
                        "Complete Purchase"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

// Main page component with Suspense
export default function Page() {
  return (
      <Suspense fallback={<LoadingUI />}>
        <CheckoutContent />
      </Suspense>
  );
}