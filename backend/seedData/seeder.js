const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Path to your DB config
const Package = require('../models/Package'); // Path to your Package model

// Hardcoded tour packages data
const packages = [
    {
      title: 'Goa Beach Retreat',
      description: 'Relax on the sunny beaches of Goa and enjoy the vibrant nightlife.',
      price: 15000, // ₹15,000
      availableDates: ['2024-06-10', '2024-07-15', '2024-08-20'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Palolem_beach_south_Goa.JPG/320px-Palolem_beach_south_Goa.JPG',
    },
    {
      title: 'Manali Mountain Adventure',
      description: 'Explore the serene beauty and thrilling activities in the Himalayas.',
      price: 20000, // ₹20,000
      availableDates: ['2024-05-05', '2024-06-12', '2024-07-20'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Manali_Town_in_Himachal_Pradesh%2C_India.jpg/320px-Manali_Town_in_Himachal_Pradesh%2C_India.jpg',
    },
    {
      title: 'Jaipur Royal Tour',
      description: 'Immerse yourself in the history and culture of the Pink City.',
      price: 12000, // ₹12,000
      availableDates: ['2024-07-01', '2024-08-10', '2024-09-05'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Hawa_Mahal_Jaipur_India.jpg/320px-Hawa_Mahal_Jaipur_India.jpg',
    },
    {
      title: 'Kerala Backwater Escape',
      description: 'Cruise through tranquil backwaters and savor traditional Kerala cuisine.',
      price: 25000, // ₹25,000
      availableDates: ['2024-06-15', '2024-07-10', '2024-08-25'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Houseboats_at_Alappuzha%2C_Kerala.jpg/320px-Houseboats_at_Alappuzha%2C_Kerala.jpg',
    },
    {
      title: 'Ladakh Adventure',
      description: 'Experience the rugged terrain and breathtaking landscapes of Ladakh.',
      price: 35000, // ₹35,000
      availableDates: ['2024-05-20', '2024-06-25', '2024-07-30'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pangong_Tso_Lake%2C_Ladakh.jpg/320px-Pangong_Tso_Lake%2C_Ladakh.jpg',
    },
    {
      title: 'Rajasthan Desert Safari',
      description: 'Embark on a camel safari and explore the golden sands of the Thar Desert.',
      price: 18000, // ₹18,000
      availableDates: ['2024-07-15', '2024-08-20', '2024-09-15'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Sunset_in_Thar_Desert%2C_Rajasthan.jpg/320px-Sunset_in_Thar_Desert%2C_Rajasthan.jpg',
    },
    {
      title: 'Andaman Islands Paradise',
      description: 'Dive into crystal-clear waters and explore the beauty of Andaman.',
      price: 40000, // ₹40,000
      availableDates: ['2024-06-01', '2024-07-10', '2024-08-15'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Radhanagar_Beach%2C_Andaman.jpg/320px-Radhanagar_Beach%2C_Andaman.jpg',
    },
    {
      title: 'Varanasi Spiritual Tour',
      description: 'Experience the spiritual essence of India along the ghats of Varanasi.',
      price: 10000, // ₹10,000
      availableDates: ['2024-08-01', '2024-09-05', '2024-10-10'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ganga_Ghats%2C_Varanasi.jpg/320px-Ganga_Ghats%2C_Varanasi.jpg',
    },
    {
      title: 'Darjeeling Tea Gardens',
      description: 'Discover the charm of the Queen of Hills and its lush tea gardens.',
      price: 22000, // ₹22,000
      availableDates: ['2024-06-20', '2024-07-25', '2024-08-15'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Tea_garden_in_Darjeeling.jpg/320px-Tea_garden_in_Darjeeling.jpg',
    },
    {
      title: 'Rishikesh Yoga Retreat',
      description: 'Rejuvenate your body and soul with yoga by the holy Ganges.',
      price: 14000, // ₹14,000
      availableDates: ['2024-05-15', '2024-06-30', '2024-07-20'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Rishikesh_View.jpg/320px-Rishikesh_View.jpg',
    },
  ];
  
  
// Function to seed the database with the hardcoded packages
const seedPackages = async () => {
  try {
    // Connect to the database
    await connectDB();

    // Delete existing data if any
    await Package.deleteMany({});

    // Insert the hardcoded packages
    await Package.insertMany(packages);

    console.log('Tour packages successfully seeded!');

    // Disconnect from the database
    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding the database:', error);
    mongoose.disconnect();
  }
};

// Run the seeding function
seedPackages();
