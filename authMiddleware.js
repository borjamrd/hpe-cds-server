const jwt = require('jsonwebtoken');

const secretKey = 'mi_clave_secreta'; // Cambia esto por una clave secreta más segura

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: 'No se proporcionó un token' });
  } else {
    try {
      const decodedToken = jwt.verify(token.split(' ')[1], secretKey);
      req.user = decodedToken;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Token inválido' });
    }
  }
}

module.exports = authMiddleware;
