import {  Request, Response, NextFunction } from "express";
import io from "../socket";

export default (req: Request, res: Response, next: NextFunction) => {
  const message = req.body.message;
  const name = req.body.name;
  const date = req.body.date;

  io.getIO().emit("messages", { date: date, message: message, user_name: name });
  return res.status(201).json({ creeated: "message was sent" });
};
