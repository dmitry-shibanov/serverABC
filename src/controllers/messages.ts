import { RequestHandler, Request, Response, NextFunction } from "express";
import io from "../socket";

export default (req: Request, res: Response, next: NextFunction) => {
  io.getIO().emit("messages", { action: "create", message: "some message" });
  return res.status(201).json({});
};
