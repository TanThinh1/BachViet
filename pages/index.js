import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import axios from 'axios';

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('/api/news?limit=6');
      setNews(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">BachViet</h1>
          <p className="text-xl mb-2">Cổng Thông Tin Giáo Dục</p>
          <p className="text-gray-200">Nơi chia sẻ tin tức, thông báo và tài nguyên giáo dục</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Featured News Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Tin Tức Nổi Bật</h2>
            <a href="/news" className="text-primary hover:text-secondary font-semibold">
              Xem tất cả →
            </a>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-gray-600">Đang tải dữ liệu...</p>
            </div>
          ) : news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <NewsCard key={item._id} news={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-gray-600">Chưa có tin tức nào</p>
            </div>
          )}
        </section>

        {/* Quick Links Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Danh Mục</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Thông Báo', icon: '📢', link: '/news?category=thong-bao' },
              { title: 'Lịch Công Tác', icon: '📅', link: '/news?category=lich-cong-tac' },
              { title: 'Tài Nguyên', icon: '📚', link: '/news?category=tai-nguyen' },
              { title: 'Sự Kiện', icon: '🎉', link: '/news?category=su-kien' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
