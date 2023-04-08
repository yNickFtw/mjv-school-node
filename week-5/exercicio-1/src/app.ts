import express from "express";
import cors from "cors";
import routes from "./routers";
import connection from "./config/database";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

const port = 3000;

connection
  .then(() => {
    console.log("Database Connected!");
    app.listen(port, () => {
      console.log(`Server running, port: ${port}`);
    });
  })
  .catch((err) => console.log(err));
