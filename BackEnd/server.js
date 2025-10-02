require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3000;  // ✅ use cloud-assigned port or fallback

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
