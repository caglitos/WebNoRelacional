export const authRequiered = (req, res, next) => {
  console.log(">>> Validating token");

  // Verificar si existe la cookie de token
  if (!req.cookies.token) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = req.cookies.token;
  console.log("Token received:", token);

  // Aquí deberías validar el token (con JWT por ejemplo)
  try {
    // Ejemplo con JWT:
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
};
