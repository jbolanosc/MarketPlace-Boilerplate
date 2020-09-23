import jwt from "jsonwebtoken";
import config from "../config";
import { Request, Response, NextFunction } from "express";

export const getToken = (user: any) => {
  return jwt.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
      isSeller: user.isSeller,
    },
    config.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, config.JWT_SECRET, (err, decode) => {
      if (err) res.send({ msg: "invalid Token" }).status(401);
      req.body.user = decode;
      next();
    });
  } else {
    res.send({ msg: "No token found" }).status(401);
  }
};

export const isSeller = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.user && req.body.user.isSeller) return next();
  return res.status(401).send({ msg: "Invalid Token" });
};
