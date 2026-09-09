import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NewsCard from '../../components/NewsCard';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function NewsPage() {
  const router = useRouter();
  const { category, search } = router.query;
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(category || '');
  const [searchTerm, setSearchTerm] = useState(search || '');

  useEffect(() => {
    fetchNews();
  }, [selectedCategory, searchTerm]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (selectedCategory) params.append('category', selectedCategory);
      if (searchTerm) params.append('search', searchTerm);

      const response = await axios.get(`/api/news?${params.toString()}`);
      setNews(response.data.data || []);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/news?search=${searchTerm}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Tất Cả Tin Tức</h1>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex gap-4 flex-col md:flex-row">
              <input
                type="text"
                placeholder="Tìm kiếm tin tức..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Tìm Kiếm
              </button>
            </div>
          </form>

          {/* Categories */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">Danh Mục</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { value: '', label: 'Tất Cả' },
                { value: 'thong-bao', label: 'Thông Báo' },
                { value: 'lich-cong-tac', label: 'Lịch Công Tác' },
                { value: 'tai-nguyen', label: 'Tài Nguyên' },
                { value: 'su-kien', label: 'Sự Kiện' },
              ].map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-lg transition ${
                    selectedCategory === cat.value
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* News Grid */}
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
            <p className="text-gray-600 text-lg">Không tìm thấy tin tức nào</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
