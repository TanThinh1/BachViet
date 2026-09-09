export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      message: 'Server is running',
      timestamp: new Date().toISOString(),
    });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
