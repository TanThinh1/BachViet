import User from '../../models/User';
import dbConnect from '../../lib/db';
import { signToken } from '../../lib/auth';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Vui lòng cung cấp email và mật khẩu',
        });
      }

      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Email hoặc mật khẩu không đúng',
        });
      }

      const isPasswordValid = await user.matchPassword(password);
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: 'Email hoặc mật khẩu không đúng',
        });
      }

      const token = signToken({
        userId: user._id,
        email: user.email,
        role: user.role,
      });

      return res.status(200).json({
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
