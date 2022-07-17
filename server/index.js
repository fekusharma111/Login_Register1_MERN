import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connection from "./database/db.js";
import Schema from "./models/Schema.js";
import bodyParser from "body-parser";
import router from "./routers/routes.js";

dotenv.config();
const app = Express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
const db_url = process.env.MONGO_URI;
connection(db_url);
app.use("/", router);

const Port = process.env.PORT;
app.listen(Port, () => {
  console.log(`Server is running at port: ${Port}`);
});
