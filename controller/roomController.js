const express = require('express');
const mongoose = require('mongoose');
const Room = require('../models/roomSchema');

exports.getAllRooms = async (req, res) => {
    try {
      const rooms = await Room.find();
      res.json(rooms);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    // res.send("Room");
  };
  
  exports.createRoom = async (req, res) => {
    try {
      const newRoom = new Room(req.body);
      const savedRoom = await newRoom.save();
      res.json(savedRoom);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  