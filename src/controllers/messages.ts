import { RequestHandler, Request, Response, NextFunction } from "express";
import io from "../socket";

export default (req: Request, res: Response, next: NextFunction) => {
const message = req.body.message;
  io.getIO().emit("messages", { action: "create", message: message });
  return res.status(201).json({});
};
