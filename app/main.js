import express from "express"; 
import routes from './routes';
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from './config/db';
dotenv.config(); 
const app = express();

const { PORT, MONGO_URL, DB_URL } = process.env;

dbConnect(MONGO_URL);

const origin = "*";
app.use(
  cors({
    allowedHeaders: [
      "Origin",
      " X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
      "X-Access-Token",
    ],
    exposedHeaders: ["sessionId"],
    origin: origin,
    methods: "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/hmomgt',routes);
app.get("/", (req, res) => {
  res.send("<h2>Hi there! Welcome to HMO Service </h2>");
});
(async () => {
  try {
    await app.listen(PORT, (err) => {
      if (err) {
        console.log("HMO Server Connection Failed");
        throw err;
      }
      console.log(`HMO Service running on  ${PORT}`);
    });
  } catch (error) {
    console.log("HMO Service error");
    throw err;
  }
})();
