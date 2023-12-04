import express, { Request, Response } from "express";
import connect from "./config/connect";
import cors from 'cors';
import cookieParser from 'cookie-parser'
import connectDatabase from "./database";
import routes from "./routes/UserRoutes"; 

const app = express(); 
app.use(express.json());
app.use(cors())
app.use(routes)
app.use(cookieParser())

app.get("/api/users", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});


connectDatabase()
  .then(() =>
    app.listen(connect.port || 3333, () => {
      console.log(`Server is Fire at http://localhost:${connect.port}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });
