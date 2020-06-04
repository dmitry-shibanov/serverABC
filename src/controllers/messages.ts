import { Request, Response, NextFunction, RequestHandler } from "express";
import io from "../socket";

export const messageChat = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = req.body.message;
  const name = req.body.name;
  const date = req.body.date;

  io.getIO().emit("messages", {
    date: date,
    message: message,
    user_name: name,
  });
  return res.status(201).json({ creeated: "message was sent" });
};

export const messageThemes: RequestHandler = (req, res, next) => {
  const message = req.body.message;
  const name = req.body.name;
  const date = req.body.date;

  io.getIO().emit("themes", { date: date, message: message, user_name: name });
  return res.status(201).json({ creeated: "theme was created" });
};
