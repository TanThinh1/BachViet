import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Resources() {
  const resources = [
    {
      title: 'Tài Liệu Giáo Dục',
      description: 'Bộ sưu tập các tài liệu giáo dục từ các chuyên gia',
      icon: '📚',
    },
    {
      title: 'Video Hướng Dẫn',
      description: 'Các video hướng dẫn chi tiết về các chủ đề giáo dục',
      icon: '🎥',
    },
    {
      title: 'Bài Giảng Trực Tuyến',
      description: 'Bài giảng và khóa học từ các giáo viên giàu kinh nghiệm',
      icon: '💻',
    },
    {
      title: 'Mẹo & Thủ Thuật',
      description: 'Các mẹo hữu ích để nâng cao hiệu quả học tập',
      icon: '💡',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Tài Nguyên Giáo Dục</h1>
            <p className="text-xl text-gray-600">Những công cụ và tài liệu hữu ích cho học tập</p>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {resources.map((resource, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">{resource.title}</h2>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button className="text-primary hover:text-blue-700 font-semibold">
                  Khám Phá →
                </button>
              </div>
            ))}
          </div>

          {/* Featured Resources */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tài Nguyên Được Gới Ý</h2>
            <div className="space-y-4">
              {[
                'Hướng dẫn sử dụng các nền tảng học tập trực tuyến',
                'Kỹ năng quản lý thời gian để học tập hiệu quả',
                'Phương pháp học tập cho các học sinh khác biệt',
                'Công cụ hỗ trợ học tập miễn phí',
                'Tư vấn về chọn ngành và lộ trình sự nghiệp',
              ].map((resource, idx) => (
                <div key={idx} className="flex items-start p-4 border-l-4 border-primary hover:bg-blue-50 cursor-pointer transition">
                  <span className="text-primary mr-3 font-bold">✓</span>
                  <span className="text-gray-700">{resource}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
