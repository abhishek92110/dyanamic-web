const mongoose = require('mongoose');

// Define the complete schema
const DataSchema = new mongoose.Schema({
  city: { type: String, required: true },
  course: { type: String, required: true },
  chooseHeading: { type: String, required: true },
  chooseDescription: { type: String, required: true },
  chooseTopic: [
    {
      topicHeading: { type: String, required: true },
      topicDescription: { type: String, required: true },
      topicPoint: [
        {
          mainPoint: { type: String, required: true },
          pointDescription: { type: String, required: true }
        }
      ],
      topicEnd: { type: String, default: '' }
    }
  ]
});

// Create the model
const content = mongoose.model('contents', DataSchema);

module.exports = content;
