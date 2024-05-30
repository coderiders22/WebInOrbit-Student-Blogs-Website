const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

const blogs = [
  {
    id: '1',
    title: 'Technology',
    image: '/assets/images/56.jpg',
    description: '1 Articles',
    category: 'hot-topics',
    sections: [
      {
        title: 'Introduction to Technology',
        content: 'Technology is the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.'
      },
      {
        title: 'The Future of Technology',
        content: 'The future of technology is expected to bring more innovation and convenience in various fields such as AI, robotics, and renewable energy.'
      }
    ]
  },
  {
    id: '2',
    title: 'Student Placements',
    image: '/assets/images/56.jpg',
    description: '44 Articles',
    category: 'hot-topics',
    sections: [
      {
        title: 'Student Placements Overview',
        content: 'Student placements involve placing students in professional settings to gain real-world experience.'
      }
    ]
  },
  {
    id: '3',
    title: 'Company News',
    image: '/assets/images/56.jpg',
    description: '62 Articles',
    category: 'hot-topics',
    sections: [
      {
        title: 'Latest Company News',
        content: 'Stay updated with the latest news and updates from various companies.'
      }
    ]
  },
  {
    id: '4',
    title: 'Technology Trends',
    image: '/assets/images/56.jpg',
    description: '57 Articles',
    category: 'hot-topics',
    sections: [
      {
        title: 'Emerging Technology Trends',
        content: 'Emerging trends in technology include AI, blockchain, and quantum computing.'
      }
    ]
  },
  {
    id: '5',
    title: 'Career Advice',
    image: '/assets/images/56.jpg',
    description: '35 Articles',
    category: 'hot-topics',
    sections: [
      {
        title: 'Career Development Tips',
        content: 'Find useful tips and advice to advance your career.'
      }
    ]
  },
  {
    id: '6',
    title: 'The Future of AI in Education',
    image: '/assets/images/56.jpg',
    description: 'Exploring the impact of AI on modern education.',
    readTime: 5,
    author: 'Joseph',
    authorImage: '/assets/images/author-1.png',
    date: '25 Nov 2023',
    tags: ['Technology', 'AI'],
    category: 'editors-picks',
    sections: [
      {
        title: 'Introduction',
        content: 'AI is transforming education in many ways...'
      },
      {
        title: 'Current Trends',
        content: 'Currently, AI is being used to personalize learning...'
      }
    ]
  },
  {
    id: '7',
    title: 'The Future of AI in Education',
    image: '/assets/images/56.jpg',
    description: 'Exploring the impact of AI on modern education.',
    readTime: 5,
    author: 'Joseph',
    authorImage: '/assets/images/author-1.png',
    date: '25 Nov 2023',
    tags: ['Technology', 'AI'],
    category: 'editors-picks',
    sections: [
      {
        title: 'Introduction',
        content: 'AI is transforming education in many ways...'
      },
      {
        title: 'Current Trends',
        content: 'Currently, AI is being used to personalize learning...'
      }
    ]
  },
  {
    id: '8',
    title: 'The Future of AI in Education',
    image: '/assets/images/56.jpg',
    description: 'Exploring the impact of AI on modern education.',
    readTime: 5,
    author: 'Joseph',
    authorImage: '/assets/images/author-1.png',
    date: '25 Nov 2023',
    tags: ['Technology', 'AI'],
    category: 'editors-picks',
    sections: [
      {
        title: 'Introduction',
        content: 'AI is transforming education in many ways...'
      },
      {
        title: 'Current Trends',
        content: 'Currently, AI is being used to personalize learning...'
      }
    ]
  },
  {
    id: '9',
    title: 'The Future of AI in Education',
    image: '/assets/images/56.jpg',
    description: 'Exploring the impact of AI on modern education.',
    readTime: 5,
    author: 'Joseph',
    authorImage: '/assets/images/author-1.png',
    date: '25 Nov 2023',
    tags: ['Technology', 'AI'],
    category: 'editors-picks',
    sections: [
      {
        title: 'Introduction',
        content: 'AI is transforming education in many ways...'
      },
      {
        title: 'Current Trends',
        content: 'Currently, AI is being used to personalize learning...'
      }
    ]
  },
  {
    id: '10',
    title: 'The Future of AI in Education',
    image: '/assets/images/56.jpg',
    description: 'Exploring the impact of AI on modern education.',
    readTime: 5,
    author: 'Joseph',
    authorImage: '/assets/images/author-1.png',
    date: '25 Nov 2023',
    tags: ['Technology', 'AI'],
    category: 'editors-picks',
    sections: [
      {
        title: 'Introduction',
        content: 'AI is transforming education in many ways...'
      },
      {
        title: 'Current Trends',
        content: 'Currently, AI is being used to personalize learning...'
      }
    ]
  },
  {
    id: '11',
    title: 'The Future of AI in Education',
    image: '/assets/images/56.jpg',
    description: 'Exploring the impact of AI on modern education.',
    readTime: 5,
    author: 'Joseph',
    authorImage: '/assets/images/author-1.png',
    date: '25 Nov 2023',
    tags: ['Technology', 'AI'],
    category: 'editors-picks',
    sections: [
      {
        title: 'Introduction',
        content: 'AI is transforming education in many ways...'
      },
      {
        title: 'Current Trends',
        content: 'Currently, AI is being used to personalize learning...'
      }
    ]
  },
  {
    id: '12',
    title: 'The Future of AI in Education',
    image: '/assets/images/56.jpg',
    description: 'Exploring the impact of AI on modern education.',
    readTime: 5,
    author: 'Joseph',
    authorImage: '/assets/images/author-1.png',
    date: '25 Nov 2023',
    tags: ['Technology', 'AI'],
    category: 'editors-picks',
    sections: [
      {
        title: 'Introduction',
        content: 'AI is transforming education in many ways...'
      },
      {
        title: 'Current Trends',
        content: 'Currently, AI is being used to personalize learning...'
      }
    ]
  },
  {
    id: '13',
    title: 'The Future of AI in Education',
    image: '/assets/images/56.jpg',
    description: 'Exploring the impact of AI on modern education.',
    readTime: 5,
    author: 'Joseph',
    authorImage: '/assets/images/author-1.png',
    date: '25 Nov 2023',
    tags: ['Technology', 'AI'],
    category: 'editors-picks',
    sections: [
      {
        title: 'Introduction',
        content: 'AI is transforming education in many ways...'
      },
      {
        title: 'Current Trends',
        content: 'Currently, AI is being used to personalize learning...'
      }
    ]
  },
  {
    id: '14',
    title: 'Placements Advice',
    image: '/assets/images/56.jpg',
    description: '35 Articles',
    category: 'hot-topics',
    sections: [
      {
        title: 'Career Development Tips',
        content: 'Find useful tips and advice to advance your career.'
      }
    ]
  },
  {
    id: '13',
    title: 'The Future of AI in Education',
    image: '/assets/images/56.jpg',
    description: 'Exploring the impact of AI on modern education.',
    readTime: 5,
    author: 'Joseph',
    authorImage: '/assets/images/author-1.png',
    date: '25 Nov 2023',
    tags: ['Technology', 'AI'],
    category: 'editors-picks',
    sections: [
      {
        title: 'Introduction',
        content: 'AI is transforming education in many ways...'
      },
      {
        title: 'Current Trends',
        content: 'Currently, AI is being used to personalize learning...'
      }
    ]
  }

];
const jobs = [
  {
    id: '1',
    companyName: 'Tech Corp',
    companyLogo: '/assets/images/56.jpg',
    jobType: 'Full-Time',
    role: 'Software Engineer',
    location: 'San Francisco, CA',
    duration: 'Permanent',
    batch: '2023',
    salary: '$120,000/year',
    description: 'Join our dynamic team as a Software Engineer.',
    applyLink: 'https://webinorbit.com'
  },
  {
    id: '2',
    companyName: 'Innovate Ltd.',
    companyLogo: '/assets/images/56.jpg',
    jobType: 'Internship',
    role: 'Product Manager Intern',
    location: 'New York, NY',
    duration: '6 months',
    batch: '2024',
    salary: '$3,000/month',
    description: 'Gain hands-on experience in product management.',
    applyLink: 'https://webinorbit.com'
  },
  {
    id: '3',
    companyName: 'Tech Corp',
    companyLogo: '/assets/images/56.jpg',
    jobType: 'Full-Time',
    role: 'Software Engineer',
    location: 'San Francisco, CA',
    duration: 'Permanent',
    batch: '2023',
    salary: '$120,000/year',
    description: 'Join our dynamic team as a Software Engineer.',
    applyLink: 'https://webinorbit.com'
  }
  
];



app.get('/blogs', (req, res) => {
  res.json(blogs);
});


app.get('/blogs/:id', (req, res) => {
  const blog = blogs.find(b => b.id === req.params.id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});
app.get('/jobs', (req, res) => {
  res.json(jobs);
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.get('/blog.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/blog.html'));
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});