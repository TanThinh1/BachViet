import React from 'react';
import Link from 'next/link';

export default function NewsCard({ news }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link href={`/news/${news._id}`}>
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
        {/* Thumbnail */}
        <div className="w-full h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-4xl">
          {news.category === 'thong-bao' && '📢'}
          {news.category === 'lich-cong-tac' && '📅'}
          {news.category === 'tai-nguyen' && '📚'}
          {news.category === 'su-kien' && '🎉'}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {news.category}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
            {news.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {news.description}
          </p>

          {/* Meta */}
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>{formatDate(news.createdAt)}</span>
            <span>Bởi {news.author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
