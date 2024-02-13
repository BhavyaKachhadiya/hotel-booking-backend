const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
require('dotenv').config();
const hotelRoutes = require('./router/hotelRoutes'); 
const roomsRouter = require('./router/roomRouter'); 
const reviewsRouter = require('./router/reviewsRoutes'); 
const bookingRouter = require('./router/bookingRoutes'); 
const userRouter = require('./router/userRoutes'); 
const paymentRouter = require('./router/paymentRoutes'); 

app.use('/api/v1/h', hotelRoutes);
app.use('/api/v1/r', roomsRouter);
app.use('/api/v1/re', reviewsRouter);
app.use('/api/v1/b', bookingRouter);
app.use('/api/v1/u', userRouter);
app.use('/api/v1/p', paymentRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
})
.then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})