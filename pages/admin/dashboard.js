import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [news, setNews] = useState([]);
  const [stats, setStats] = useState({
    totalNews: 0,
    publishedNews: 0,
    draftNews: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }
      const response = await axios.get('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.data);
      fetchNews(token);
    } catch (err) {
      localStorage.removeItem('token');
      router.push('/login');
    }
  };

  const fetchNews = async (token) => {
    try {
      const response = await axios.get('/api/news/admin/all', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNews(response.data.data || []);
      setStats({
        totalNews: response.data.data?.length || 0,
        publishedNews: response.data.data?.filter((n) => n.status === 'published').length || 0,
        draftNews: response.data.data?.filter((n) => n.status === 'draft').length || 0,
      });
    } catch (err) {
      console.error('Error fetching news:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  if (loading || !user) {
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

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Bảng Điều Khiển Admin</h1>
            <p className="text-gray-600 mt-2">Xin chào, {user.name}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Đăng Xuất
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Tổng Bài Viết</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalNews}</p>
              </div>
              <div className="text-4xl">📝</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Bài Đã Xuất Bản</p>
                <p className="text-3xl font-bold text-green-600">{stats.publishedNews}</p>
              </div>
              <div className="text-4xl">✅</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Bài Nháp</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.draftNews}</p>
              </div>
              <div className="text-4xl">📌</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-8">
          <Link
            href="/admin/create"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            ✍️ Viết Bài Viết Mới
          </Link>
        </div>

        {/* News Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Các Bài Viết Gần Đây</h2>
          </div>

          {news.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Tiêu Đề</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Danh Mục</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Trạng Thái</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Tác Giả</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Ngày Tạo</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {news.map((item) => (
                    <tr key={item._id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-800">{item.title}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.category}</td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            item.status === 'published'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {item.status === 'published' ? 'Xuất Bản' : 'Nháp'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.author}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(item.createdAt).toLocaleDateString('vi-VN')}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <Link href={`/news/${item._id}`} className="text-primary hover:text-blue-700 mr-4">
                          Xem
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-600">
              <p>Chưa có bài viết nào</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
