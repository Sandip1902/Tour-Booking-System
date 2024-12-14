// authMiddleware.js
const adminCredentials = {
    username: 'admin',
    password: 'admin123'
  };
  
  // Simple authentication middleware
  const authenticateAdmin = (req, res, next) => {
    const { username, password } = req.body;
  
    if (username === adminCredentials.username && password === adminCredentials.password) {
      return next(); // Proceed to next middleware (admin routes)
    }
  
    res.status(401).json({ message: 'Unauthorized' });
  };
  
  module.exports = authenticateAdmin;
  