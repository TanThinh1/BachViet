import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CreateNews() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    category: 'thong-bao',
    author: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [user, setUser] = useState(null);

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
      setFormData((prev) => ({
        ...prev,
        author: response.data.data.name,
      }));
    } catch (err) {
      localStorage.removeItem('token');
      router.push('/login');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/news', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess('Bài viết đã được tạo thành công!');
      setTimeout(() => {
        router.push(`/news/${response.data.data._id}`);
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || 'Lỗi tạo bài viết');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
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
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Viết Bài Viết Mới</h1>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Tiêu Đề</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Nhập tiêu đề bài viết"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Mô Tả Ngắn</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="2"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Nhập mô tả ngắn"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nội Dung</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows="8"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
                placeholder="Nhập nội dung bài viết"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Danh Mục</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="thong-bao">Thông Báo</option>
                <option value="lich-cong-tac">Lịch Công Tác</option>
                <option value="tai-nguyen">Tài Nguyên</option>
                <option value="su-kien">Sự Kiện</option>
              </select>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-primary text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
              >
                {loading ? 'Đang xử lý...' : 'Đăng Bài'}
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
              >
                Hủy
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
