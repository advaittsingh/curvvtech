"use client";

import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/use-auth';
import { useCart } from '@/hooks/use-cart';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { items } = useCart();

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-gray-900 shadow-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="CurvvTech Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-white">CurvvTech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 hover:bg-gray-800"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            {/* Cart */}
            <Link href="/cart" className="relative p-3 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:bg-gray-800 rounded-lg">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* User menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full border-2 border-gray-700"
                  />
                  <span className="hidden sm:block text-base font-semibold text-gray-300">
                    {user.name}
                  </span>
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-gray-800 rounded-xl shadow-2xl py-2 z-50 border border-gray-700">
                    <Link
                      href="/profile"
                      className="block px-6 py-3 text-base font-semibold text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-6 py-3 text-base font-semibold text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Orders
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-6 py-3 text-base font-semibold text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-all duration-300 p-3 rounded-lg hover:bg-gray-800"
              >
                <User className="h-6 w-6" />
                <span className="hidden sm:block text-base font-semibold">Sign in</span>
              </Link>
            )}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold text-base hover:shadow-2xl transition-all duration-300"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:bg-gray-800 rounded-lg"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {!user && (
                <Link
                  href="/login"
                  className="text-gray-300 hover:text-blue-400 block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign in
                </Link>
              )}
              <Link
                href="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 