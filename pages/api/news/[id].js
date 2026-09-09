import dbConnect from '../../lib/db';
import News from '../../models/News';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const news = await News.findByIdAndUpdate(
        id,
        { $inc: { views: 1 } },
        { new: true }
      );

      if (!news) {
        return res.status(404).json({
          success: false,
          message: 'Bài viết không tìm thấy',
        });
      }

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
