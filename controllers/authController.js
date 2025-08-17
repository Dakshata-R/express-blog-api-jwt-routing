const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// In-memory user store
const users = [];

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPwd = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPwd });
  res.json({ message: 'User registered successfully' });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ error: 'User not found' });

  const validPwd = await bcrypt.compare(password, user.password);
  if (!validPwd) return res.status(400).json({ error: 'Invalid password' });

  const token = jwt.sign({ username: user.username }, 'SECRET_KEY');
  res.json({ token });
};
