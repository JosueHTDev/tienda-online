// Middleware para verificar si el usuario es admin
const adminMiddleware = (req, res, next) => {
  if (req.user.rol !== 1) { // Suponemos que rol 1 = admin
    return res.status(403).json({ error: "Acceso denegado, se requiere rol admin" });
  }
  next();
};

module.exports = adminMiddleware;
