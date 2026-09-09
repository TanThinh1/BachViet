import dbConnect from '../../lib/db';
import News from '../../models/News';
import { validateToken } from '../../lib/auth';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const user = validateToken(req);
      if (!user || (user.role !== 'admin' && user.role !== 'editor')) {
        return res.status(403).json({
          success: false,
          message: 'Không có quyền truy cập',
        });
      }

      const news = await News.find();

      return res.status(200).json({
        success: true,
        data: news,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
