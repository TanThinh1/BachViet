import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="text-2xl font-bold text-gray-800 hidden sm:inline">BachViet</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-primary transition">
            Trang Chủ
          </Link>
          <Link href="/news" className="text-gray-700 hover:text-primary transition">
            Tin Tức
          </Link>
          <Link href="/resources" className="text-gray-700 hover:text-primary transition">
            Tài Nguyên
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary transition">
            Giới Thiệu
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary transition">
            Liên Hệ
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="text-gray-700 hover:text-primary transition">
            Đăng Nhập
          </Link>
          <Link href="/register" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Đăng Ký
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/" className="block text-gray-700 hover:text-primary transition">
              Trang Chủ
            </Link>
            <Link href="/news" className="block text-gray-700 hover:text-primary transition">
              Tin Tức
            </Link>
            <Link href="/resources" className="block text-gray-700 hover:text-primary transition">
              Tài Nguyên
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-primary transition">
              Giới Thiệu
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-primary transition">
              Liên Hệ
            </Link>
            <div className="border-t pt-4 space-y-2">
              <Link href="/login" className="block text-gray-700 hover:text-primary transition">
                Đăng Nhập
              </Link>
              <Link href="/register" className="block bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center">
                Đăng Ký
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
