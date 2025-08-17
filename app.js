const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
