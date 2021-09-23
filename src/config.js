import { config } from "dotenv";
config()
export default{
    mongodbUrl:process.env.MONGODB_URI,
    port:process.env.PORT
}