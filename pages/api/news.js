import dbConnect from '../../lib/db';
import News from '../../models/News';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const { limit = 10, search, category } = req.query;
      let query = { status: 'published' };

      if (search) {
        query.$or = [
          { title: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
        ];
      }

      if (category) {
        query.category = category;
      }

      const news = await News.find(query)
        .sort({ createdAt: -1 })
        .limit(parseInt(limit));

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

  if (req.method === 'POST') {
    try {
      const { title, description, content, category, author } = req.body;

      if (!title || !description || !content || !author) {
        return res.status(400).json({
          success: false,
          message: 'Please provide all required fields',
        });
      }

      const news = await News.create({
        title,
        description,
        content,
        category: category || 'thong-bao',
        author,
        status: 'published',
      });

      return res.status(201).json({
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
