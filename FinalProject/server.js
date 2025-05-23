const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Use Netlify's port or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});