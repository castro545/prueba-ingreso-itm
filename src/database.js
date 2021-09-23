import mongoose from "mongoose";
import config from "./config";
(async () => {
  const db = await mongoose.connect(config.mongodbUrl);
  
  
  console.log('conectado a ',db.connection.name);
})();
