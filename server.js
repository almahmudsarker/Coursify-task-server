// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock data for job openings
const jobOpenings = [
  {
    id: 1,
    position: 'Software Engineer',
    location: 'Bangalore',
    description: 'Looking for a skilled software engineer...',
    image: 'https://images.unsplash.com/photo-1573495611823-5397efa4fac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    position: 'Product Manager',
    location: 'Mumbai',
    description: 'Seeking an experienced product manager...',
    image: 'https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    position: 'Data Scientist',
    location: 'Delhi',
    description: 'Hiring a data scientist with expertise in...',
    image: 'https://images.unsplash.com/photo-1580894912989-0bc892f4efd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  },
];

// Get a list of job openings
app.get('/api/jobOpenings', (req, res) => {
  res.json(jobOpenings);
});

// Submit a job application
app.post('/api/apply', (req, res) => {
  const { name, email, jobId } = req.body;
  // In a real application, you would save the application to a database
  res.json({ message: `Application for job ${jobId} submitted successfully!` });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});