const express = require('express');
const path = require('path');
const generateHTML = require('./controller/generateHtml')
const generateDataScience = require('./controller/generateDataScience')
require("./config/db");
const cors = require("cors");
const content = require('./models/content')

const app = express();
const PORT = 5000;

app.use(cors());

// Static files serve karna
app.use(express.static(path.join(__dirname, 'public')));

// Dynamic content routes
app.get('/contact', async (req, res) => {
  try {
    
    // res.send(generateHTML('Data Scientist in Noida', 'Noida'));
    res.sendFile(path.join(__dirname, '/public/contact.html'));
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error retrieving data");
  }
});
app.get('/about', async (req, res) => {
  try {
    
    // res.send(generateHTML('Data Scientist in Noida', 'Noida'));
    res.sendFile(path.join(__dirname, '/public/about.html'));
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error retrieving data");
  }
});

// app.get('/course/delhi', async (req, res) => {
//   try {
//     let data = await content.findOne({ city: "delhi", course: "data science" });
//     if (data.length === 0) {
//       console.log("No data found for delhi.");
//     } else {
//       console.log("Data for delhi:", data);
//     }
//     // res.send(generateHTML('Data Scientist in Noida', 'Noida'));
//     res.send(generateDataScience(data));
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).send("Error retrieving data");
//   }
// });






app.get('/course/data-science-training-in-:city', async (req, res) => {
  const city = req.params.city; // Get the city from the route parameter
  try {
    let data = await content.findOne({ city: city, course: "data science" });
    if (!data) {
      console.log(`No data found for ${city}.`);
    } else {
      console.log(`Data for ${city}:`, data);
    }
    res.send(generateDataScience(data)); // Assuming generateDataScience is a function to format the data
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error retrieving data");
  }
});


// Dynamic HTML generate karne ka function


// Server start karna
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
