import User from '../../models/User';
import dbConnect from '../../lib/db';
import { validateToken } from '../../lib/auth';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const user = validateToken(req);
      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Chưa được xác thực',
        });
      }

      const currentUser = await User.findById(user.userId);
      if (!currentUser) {
        return res.status(404).json({
          success: false,
          message: 'Người dùng không tồn tại',
        });
      }

      return res.status(200).json({
        success: true,
        data: currentUser,
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
