const jwt = require('jsonwebtoken');
const config = process.env;

const verifyToken = (req, res, next) => {
  // Mendapatkan token dari berbagai sumber: body, query, atau headers
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  // Jika token tidak ada
  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }

  try {
    // Verifikasi token menggunakan TOKEN_KEY dari environment
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    
    // Menyimpan data user yang terdekripsi dalam request
    req.user = decoded;

    // Lanjutkan ke middleware atau handler berikutnya
    next();
  } catch (err) {
    // Tanggapan jika token tidak valid
    return res.status(401).send('Invalid Token');
  }
};

module.exports = verifyToken;
