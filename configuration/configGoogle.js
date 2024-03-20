require('dotenv').config();

module.exports = {
  apiKey: process.env.GOOGLE_API_KEY,
  apiSecret: process.env.GOOGLE_API_SECRET,
  callback_url: "http://localhost:4080/auth/google/callback",
};
