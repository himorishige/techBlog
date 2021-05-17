const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DATABASE_URL = process.env.MONGO_URI || 'http:localhost:3000';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
