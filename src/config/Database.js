const mongoose = require("mongoose")

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env
const URI=`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=kodemia`

const Database = async () => {
    try {
      await mongoose.connect(URI);
      console.log("MongoDB connected...");
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  };
  
  module.exports = Database;