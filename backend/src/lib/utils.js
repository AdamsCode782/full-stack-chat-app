import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,         // 🔥 Must always be true on Netlify → Render
    sameSite: "none",     // 🔥 Required for cross-site cookies
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return token;
};
