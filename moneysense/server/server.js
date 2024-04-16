const express = require('express');
const app = express();
const fs = require('fs');
const csv = require('csv-parser');

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to get all users
app.get('/api/users', (req, res) => {
  const users = [];

  fs.createReadStream('users.csv')
    .pipe(csv())
    .on('data', (row) => {
      users.push(row);
    })
    .on('end', () => {
      res.json(users);
    });
});

// Endpoint to handle user signup
app.post('/api/signup', (req, res) => {
  const userData = req.body;

  // Check if the users.csv file exists
  if (!fs.existsSync('users.csv')) {
    // If it doesn't exist, create the file with headers
    fs.writeFileSync('users.csv', 'name,email,password\n');
  }
  
  // Write user data to a file
  fs.appendFile('users.csv', `${userData.name},${userData.email},${userData.password}\n`, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      res.status(500).json({ success: false, message: 'Error writing to file' });
    } else {
      res.status(201).json({ success: true, message: 'User data saved successfully' });
    }
  });
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
