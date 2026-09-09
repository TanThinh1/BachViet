# BachViet - Cổng Thông Tin Giáo Dục

Một nền tảng phần mềm đầy đủ cho quản lý và chia sẻ thông tin giáo dục, được thiết kế theo mô hình của daklak.edu.vn.

## ✨ Tính Năng Chính

### 🏠 Trang Chủ
- **Hero Section** - Tiêu đề rõ nội dung chính
- **Tin Tức Nổi Bật** - Hiển thị 6 bài viết mới nhất
- **Danh Mục Nhanh** - Truy cập nhanh các danh mục chính
- **Responsive Design** - Tương thích với mọi thiết bị

### 📰 Quản Lý Tin Tức
- **Danh Sách Tin Tức** - Xem tất cả tin tức với lọc theo danh mục
- **Tìm Kiếm** - Tìm kiếm bài viết theo tiêu đề
- **Chi Tiết Bài Viết** - Xem nội dung đầy đủ
- **Lượt Xem** - Theo dõi số lượt xem bài viết

### 👤 Quản Lý Người Dùng
- **Đăng Ký** - Tạo tài khoản mới
- **Đăng Nhập** - Xác thực với email và mật khẩu
- **Hồ Sơ Người Dùng** - Xem thông tin cá nhân
- **Phân Quyền** - Admin, Editor, User

### 📊 Bảng Điều Khiển Admin
- **Thống Kê** - Tổng bài viết, đã xuất bản, nháp
- **Viết Bài Mới** - Tạo và đăng bài viết
- **Danh Sách Bài Viết** - Xem và quản lý tất cả bài viết
- **Quản Lý Người Dùng** - Xem danh sách người dùng

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Encryption**: bcryptjs
- **HTTP Client**: Axios

## 📁 Cấu Trúc Dự Án

```
BachViet/
├── pages/
│   ├── api/                    # API Routes
│   │   ├── auth/
│   │   │   ├── login.js
│   │   │   ├── register.js
│   │   │   └── me.js
│   │   ├── news.js
│   │   ├── news/
│   │   │   ├── [id].js
│   │   │   └── admin/
│   │   │       └── all.js
│   │   └── health.js
│   ├── admin/
│   │   ├── dashboard.js
│   │   └── create.js
│   ├── news/
│   │   ├── index.js
│   │   └── [id].js
│   ├── login.js
│   ├── register.js
│   ├── index.js               # Homepage
│   └── _app.js
├── components/                # React Components
│   ├── Header.js
│   ├── Footer.js
│   └── NewsCard.js
├── lib/                       # Utilities
│   ├── db.js                  # MongoDB Connection
│   └── auth.js                # JWT Utilities
├── models/                    # MongoDB Models
│   ├── User.js
│   └── News.js
├── public/                    # Static Files
├── styles/
│   └── globals.css
├── .env.local                 # Environment Variables
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🚀 Bắt Đầu Nhanh

### Yêu Cầu
- Node.js 16+
- MongoDB (local hoặc MongoDB Atlas)
- npm hoặc yarn

### Cài Đặt

```bash
# Clone repository
git clone https://github.com/TanThinh1/BachViet.git
cd BachViet

# Cài đặt dependencies
npm install

# Tạo file .env.local
cp .env.local .env.local.backup

# Cấu hình MongoDB URI
# Mở .env.local và thêm:
# MONGODB_URI=mongodb://localhost:27017/bachwiet
# JWT_SECRET=your_secret_key_here_min_32_chars
# NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Chạy Development Server

```bash
# Start MongoDB (nếu cài đặt local)
mongod

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

## 📖 Hướng Dẫn Sử Dụng

### Dành cho Người Dùng Thường

1. **Trang Chủ** - Xem tin tức nổi bật và danh mục
2. **Tin Tức** - Duyệt, tìm kiếm, lọc tin tức theo danh mục
3. **Chi Tiết Bài Viết** - Xem nội dung đầy đủ của bài viết
4. **Đăng Ký/Đăng Nhập** - Tạo tài khoản hoặc đăng nhập

### Dành cho Quản Trị Viên

1. **Đăng Nhập** - Truy cập admin dashboard
2. **Viết Bài Mới** - Tạo bài viết mới
   - Nhập tiêu đề, mô tả, nội dung
   - Chọn danh mục
   - Nhấn "Đăng Bài"
3. **Quản Lý Bài Viết** - Xem danh sách bài viết
   - Xem chi tiết bài viết
   - Xem trạng thái (xuất bản/nháp)
4. **Xem Thống Kê** - Kiểm tra số liệu bài viết

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - Đăng ký tài khoản mới
- `POST /api/auth/login` - Đăng nhập
- `GET /api/auth/me` - Lấy thông tin người dùng hiện tại

### News
- `GET /api/news` - Lấy danh sách bài viết (công khai)
  - Query params: `limit`, `search`, `category`
- `GET /api/news/:id` - Lấy chi tiết bài viết và tăng view count
- `POST /api/news` - Tạo bài viết mới (Admin/Editor)
- `GET /api/news/admin/all` - Lấy tất cả bài viết (Admin/Editor)

## 🔐 Xác Thực & Bảo Mật

- **JWT Authentication** - Token-based authentication
- **Password Hashing** - Sử dụng bcryptjs
- **Protected Routes** - Kiểm tra token trước khi truy cập
- **Role-based Access** - Phân quyền admin/editor/user

## 🐛 Debugging & Troubleshooting

### Lỗi MongoDB Connection
```bash
# Kiểm tra MongoDB có chạy không
mongod --version

# Hoặc sử dụng MongoDB Atlas
# Cập nhật .env.local:
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bachwiet
```

### Lỗi JWT
```bash
# Cập nhật JWT_SECRET trong .env.local
JWT_SECRET=a_very_secure_secret_key_min_32_chars
```

### Lỗi Port 3000 đã sử dụng
```bash
# Chạy trên port khác
PORT=3001 npm run dev
```

## 📊 Danh Mục Bài Viết

- **thong-bao** - Thông Báo (📢)
- **lich-cong-tac** - Lịch Công Tác (📅)
- **tai-nguyen** - Tài Nguyên (📚)
- **su-kien** - Sự Kiện (🎉)

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Render
1. Push code lên GitHub
2. Kết nối repository với Render
3. Thiết lập Environment Variables:
   - MONGODB_URI
   - JWT_SECRET
4. Deploy

### Railway
1. Kết nối GitHub repository
2. Thêm MongoDB plugin
3. Thiết lập Environment Variables
4. Deploy

## 📝 Biến Môi Trường

Tạo file `.env.local` trong root directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/bachwiet

# JWT Secret (tối thiểu 32 ký tự)
JWT_SECRET=your_very_secure_jwt_secret_key_here_min_32_chars

# API URL
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 📦 Build for Production

```bash
# Build
npm run build

# Start production server
npm start
```

## 🤝 Đóng Góp

Chào mừng các pull request! Để đóng góp:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Tạo Pull Request

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

## 📞 Liên Hệ & Hỗ Trợ

- **Email**: info@bachwiet.edu.vn
- **GitHub Issues**: [BachViet Issues](https://github.com/TanThinh1/BachViet/issues)
- **Author**: [TanThinh1](https://github.com/TanThinh1)

## 🙏 Cảm Ơn

Cảm ơn bạn đã sử dụng BachViet! Nếu bạn thích dự án này, vui lòng cho một ⭐ trên GitHub.

---

**Made with ❤️ by TanThinh1**

Last Updated: September 2024
