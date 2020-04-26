import express, { Request, Response, NextFunction, Router } from "express";
import { json, urlencoded } from "body-parser";
import initServer from "./socket";
import messageController from "./controllers/messages";
const app = express();
const router = Router();

// use body-parser
app.use(json())
app.use(urlencoded({ extended: false }));
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUSH, PATCH, DELETE, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

router.get('/', messageController);
router.post('/', messageController);
app.use('/', router);
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
