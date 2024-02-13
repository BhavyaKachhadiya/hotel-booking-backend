const Review = require('../models/reviewsSchema'); // Assuming 'reviewSchema.js' is in the 'models' directory

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
    // res.send("Reviews");
};

// ... other controller functions as before ...

