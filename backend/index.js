const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const packageRoutes = require('./routes/packageRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const adminRoutes = require('./routes/adminRouts');  
const dbConnect  = require('./config/db');

const path  = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());


const _dirname = path.resolve()


// Connect to MongoDB
dbConnect();

// Routes
app.use('/api/packages', packageRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes); // This is for admin routes


app.use(express.static(path.join(_dirname,"/frontend/build")))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","build","index.html"))
})

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
