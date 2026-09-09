import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">BachViet</h3>
            <p className="text-sm text-gray-400">
              Cổng thông tin giáo dục hàng đầu, cung cấp tin tức, tài nguyên và công cụ học tập cho cộng đồng giáo dục.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Trang Chủ</a></li>
              <li><a href="/news" className="hover:text-white transition">Tin Tức</a></li>
              <li><a href="/resources" className="hover:text-white transition">Tài Nguyên</a></li>
              <li><a href="/about" className="hover:text-white transition">Giới Thiệu</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Liên Hệ</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@bachwiet.edu.vn</li>
              <li>Điện thoại: (028) 1234 5678</li>
              <li>Địa chỉ: Đắk Lắk, Việt Nam</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-bold mb-4">Theo Dõi</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">YouTube</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 BachViet. Tất cả quyền được bảo lưu.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Chính Sách Bảo Mật</a>
              <a href="#" className="hover:text-white transition">Điều Khoản Sử Dụng</a>
              <a href="#" className="hover:text-white transition">Liên Hệ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
