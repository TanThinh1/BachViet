import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function NewsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchNews();
    }
  }, [id]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`/api/news/${id}`);
      setNews(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!news) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Bài viết không tìm thấy</h1>
            <Link href="/news" className="text-primary hover:text-blue-700">
              Quay lại trang tin tức
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/news" className="text-primary hover:text-blue-700 mb-6 inline-block">
            ← Quay lại tin tức
          </Link>

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-96 bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-6xl">
              {news.category === 'thong-bao' && '📢'}
              {news.category === 'lich-cong-tac' && '📅'}
              {news.category === 'tai-nguyen' && '📚'}
              {news.category === 'su-kien' && '🎉'}
            </div>

            <div className="p-8">
              <div className="inline-block bg-primary text-white text-xs font-semibold px-4 py-2 rounded-full mb-4">
                {news.category}
              </div>

              <h1 className="text-4xl font-bold text-gray-800 mb-4">{news.title}</h1>

              <div className="flex flex-wrap gap-6 text-gray-600 border-b pb-6 mb-8">
                <div>
                  <span className="font-semibold">Tác Giả:</span> {news.author}
                </div>
                <div>
                  <span className="font-semibold">Ngày Đăng:</span>{' '}
                  {new Date(news.createdAt).toLocaleDateString('vi-VN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div>
                  <span className="font-semibold">Lượt Xem:</span> {news.views}
                </div>
              </div>

              <div className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-lg text-gray-700 leading-relaxed">{news.description}</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">{news.content}</div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
