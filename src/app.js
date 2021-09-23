import express from "express";
import indexRoutes from './routes/index'
import config from "./config";

const app = express()
app.set('port',config.port ||5000)

app.use(express.json({ limit: "1mb" }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use('/api',indexRoutes)
export default app