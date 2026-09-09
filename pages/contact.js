import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate sending email
    setTimeout(() => {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Liên Hệ Với Chúng Tôi</h1>
            <p className="text-xl text-gray-600">Chúng tôi rất vui được nghe từ bạn</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Thông Tin Liên Hệ</h2>
                
                {[
                  {
                    icon: '📍',
                    title: 'Địa Chỉ',
                    content: 'Đắk Lắk, Việt Nam'
                  },
                  {
                    icon: '📞',
                    title: 'Điện Thoại',
                    content: '(028) 1234 5678'
                  },
                  {
                    icon: '📧',
                    title: 'Email',
                    content: 'info@bachwiet.edu.vn'
                  },
                  {
                    icon: '🕐',
                    title: 'Giờ Làm Việc',
                    content: 'Thứ 2 - Thứ 6: 8:00 - 17:00'
                  },
                ].map((item, idx) => (
                  <div key={idx} className="border-b pb-4">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Gửi Tin Nhắn</h2>
              
              {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Cảm ơn bạn! Chúng tôi sẽ trả lời sớm nhất.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Tên Của Bạn</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nhập tên của bạn"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="nhap@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Chủ Đề</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nhập chủ đề"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Tin Nhắn</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nhập tin nhắn của bạn"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
                >
                  {loading ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
