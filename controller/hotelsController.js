const express = require('express');
const mongoose = require('mongoose');
const Hotel = require('../models/hotelSchema');
const PopularHotel = require('../models/popularHotelsSchema');


exports.getAllHotels = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Parse the page query parameter or default to 1
    const pageSize = 10; // Number of documents per page

    const totalHotels = await Hotel.countDocuments();
    const totalPages = Math.ceil(totalHotels / pageSize);

    const hotels = await Hotel.find()
      .skip((page - 1) * pageSize) // Skip documents based on the page number
      .limit(pageSize); // Limit the number of documents returned

    res.json({
      hotels,
      currentPage: page,
      totalPages
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addHotel = async (req, res) => {
//   try {
//     const hotels = await Hotel.find();
//     res.json(hotels);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
    res.send("add");
};

exports.getAllPopularHotels = async (req, res) => {
  try {
    const popularHotels = await PopularHotel.find().populate('hotelId'); // Populate hotel details
    res.json(popularHotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.hotelId);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};