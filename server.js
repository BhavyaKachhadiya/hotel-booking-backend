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

app.use('/api/v1', hotelRoutes);
app.use('/api/v1', roomsRouter);
app.use('/api/v1', reviewsRouter);
app.use('/api/v1', bookingRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1', paymentRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB!'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})