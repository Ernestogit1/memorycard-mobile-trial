const dotenv = require("dotenv");
const app  = require("./app");
const connectDB = require("./config/db");
const { createDefaultUser } = require("./utils/user.utils");

dotenv.config();



connectDB().then(() => {
  createDefaultUser(); 
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`The Server is running on port ${PORT}`);});