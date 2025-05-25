import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dev Books | Programming Books for Developers",
    description: "Quality programming resources to help you level up your development skills",
    keywords: ["programming books", "developer resources", "coding books", "tech books"],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        >
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Link href="/" className="font-bold text-2xl text-indigo-600">
                            Dev Books
                        </Link>
                    </div>

                    <div className="flex-grow flex justify-center">
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
                                Home
                            </Link>
                            <Link href="#books" className="text-gray-700 hover:text-indigo-600 font-medium">
                                Books
                            </Link>
                            <Link href="#testimonials" className="text-gray-700 hover:text-indigo-600 font-medium">
                                Testimonials
                            </Link>
                            <Link href="#faq" className="text-gray-700 hover:text-indigo-600 font-medium">
                                FAQ
                            </Link>
                        </nav>
                    </div>

                    <div className="w-[100px]"></div>
                </div>
            </div>
        </header>

        <main className="flex-grow">
            {children}
        </main>

        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">Dev Books</h2>
                        <p className="text-gray-400 mt-2">Quality programming resources</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Dev Books. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}