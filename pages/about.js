import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Giới Thiệu BachViet</h1>
            <p className="text-xl text-gray-600">Cổng thông tin giáo dục hiện đại và toàn diện</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* About Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Về BachViet</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                BachViet là một nền tảng cấp thiết kế để cung cấp các dịch vụ thông tin giáo dục hiện đại. 
                Chúng tôi cam kết mang lại những công cụ tốt nhất để quản lý, chia sẻ và tiếp cận thông tin giáo dục một cách dễ dàng.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Với giao diện thân thiện, tính năng mạnh mẽ và hiệu suất cao, BachViet giúp các cơ sở giáo dục 
                kết nối tốt hơn với học sinh, phụ huynh và cộng đồng.
              </p>
            </section>

            {/* Mission Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Sứ Mệnh</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Cung cấp thông tin giáo dục minh bạch và kịp thời</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Tạo nền tảng quản lý tài nguyên giáo dục hiệu quả</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Kết nối cộng đồng giáo dục một cách dễ dàng</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>Hỗ trợ phát triển công nghệ trong giáo dục</span>
                </li>
              </ul>
            </section>

            {/* Features Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Các Tính Năng Chính</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: '📰', title: 'Quản Lý Tin Tức', desc: 'Đăng, cập nhật và quản lý tin tức dễ dàng' },
                  { icon: '🔐', title: 'Bảo Mật', desc: 'Xác thực an toàn với JWT và mã hóa' },
                  { icon: '📊', title: 'Thống Kê', desc: 'Xem chi tiết thống kê về bài viết và lượt xem' },
                  { icon: '📱', title: 'Responsive', desc: 'Tương thích với tất cả thiết bị' },
                ].map((feature, idx) => (
                  <div key={idx} className="p-4 border-l-4 border-primary">
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Bắt Đầu Ngay</h2>
              <p className="mb-6">Tham gia cộng đồng BachViet hôm nay</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                >
                  Đăng Ký Ngay
                </Link>
                <Link
                  href="/login"
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition"
                >
                  Đăng Nhập
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
