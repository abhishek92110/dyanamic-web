const express = require('express');
const path = require('path');
const generateDataScience = require('./controller/generateDataScience');
require("./config/db");
const cors = require("cors");
const content = require('./models/content');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());

// Serve static files with cache control (you can adjust max-age as needed)
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '1d' }));

// Serve the main HTML page (with dynamic content)
app.get('/contact', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '/public/contact.html'));
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error retrieving data");
  }
});
app.get('/placement', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '/public/placement.html'));
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error retrieving data");
  }
});

app.get('/about', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '/public/about.html'));
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error retrieving data");
  }
});
app.get('/privacy', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '/public/privacy.html'));
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error retrieving data");
  }
});
app.get('/term-condition', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '/public/term-condition.html'));
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error retrieving data");
  }
});

// Route for dynamic content based on city
app.get('/course/data-science-training-in-:city', async (req, res) => {
  const city = req.params.city; // Get the city from the route parameter
  try {
    let data = await content.findOne({ city: city, course: "data science" });
    if (!data) {
      console.log(`No data found for ${city}.`);
    } else {
      console.log(`Data for ${city}:`, data);
    }
    // Serve the main HTML page with dynamic content
    res.send(generateDataScience(data)); // Assuming generateDataScience injects content into a template
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error retrieving data");
  }
});


// route for dynamic content without database


app.get('/course/data-science-training-course-in-:city', async (req, res) => {
  const city = req.params.city; // Get the city from the route parameter
  const cities = ["noida", "delhi", "pune", "bhopal", "gurgaon", "indore", "mumbai", "dehradun"];

  console.log("city contain =",cities.includes(city))
  try {

    if(cities.includes(city))
      {
      res.send(generateDataScience(city)); 
    }
    else{
      res.sendFile(path.join(__dirname, '/public/404.html'));
    }
    // Serve the main HTML page with dynamic content
   // Assuming generateDataScience injects content into a template
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error retrieving data");
  }
});

// Server start karna
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
