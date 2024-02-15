const express = require('express');
const mongoose = require('mongoose');
const Hotel = require('../models/hotelSchema');
const PopularHotel = require('../models/popularHotelsSchema');

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
    // res.send("hotel all");
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