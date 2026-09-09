import User from '../../models/User';
import dbConnect from '../../lib/db';
import { signToken, validateToken } from '../../lib/auth';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Vui lòng cung cấp tất cả các trường bắt buộc',
        });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'Email đã tồn tại',
        });
      }

      const user = await User.create({
        name,
        email,
        password,
        role: 'user',
      });

      const token = signToken({
        userId: user._id,
        email: user.email,
        role: user.role,
      });

      return res.status(201).json({
        success: true,
        data: user,
        token,
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
