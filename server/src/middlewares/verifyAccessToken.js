const jwt = require('jsonwebtoken')

function verifyAccessToken(req, res, next) {
  try {
 console.log("=== MIDDLEWARE VERIFY ACCESS TOKEN ===");
    console.log("Path:", req.path);
    console.log("Method:", req.method);
    console.log("Headers authorization:", req.headers.authorization);
    if (!req.headers.authorization) {
      console.log("❌ Нет заголовка authorization");
      return res.sendStatus(401)
    }

    const accessToken = req.headers.authorization.split(' ')[1];
    console.log("Token received:", accessToken ? "есть" : "нет");
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    console.log("✅ Token verified, user:", user);

    res.locals.user = user;
    console.log("User saved to res.locals.user");
    next()

  } catch (err) {
    console.log("❌ Token verification error:", err.message);
    return res.sendStatus(403)
  }

}

module.exports = verifyAccessToken