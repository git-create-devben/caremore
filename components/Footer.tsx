import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F0E1DC] text-gray-600 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">CAREMORE IN'T</h3>
          <p className="text-sm">Enhancing your natural beauty with our premium cosmetic products.</p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/products" className="hover:text-pink-500 transition-colors">Products</Link></li>
            <li><Link href="/about" className="hover:text-pink-500 transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-pink-500 transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-pink-500 transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-pink-500 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-pink-500 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h4>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <button
              type="submit"
              className="w-full px-3 py-2 text-white bg-[#983A42] rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Cosmetic Brand. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

