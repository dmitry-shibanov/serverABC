import express, { Request, Response, NextFunction } from "express";
import initServer from "./socket";
import messageController from "./controllers/messages";

const app = express();

app.use('/', messageController);

app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({ page: "page not found" });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message);
  return res.status(500).json({ message: err.message });
});

const server = app.listen(3000);
const io = initServer.init(server);
io.on("connection", (socket) => {
  console.log("client connected");
});
