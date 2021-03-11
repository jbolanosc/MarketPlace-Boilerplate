import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const getToken = (user: any) => {
  return jwt.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
      isSeller: false,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

export const getSellerToken = (user: any) => {
  return jwt.sign(
    {
      _id: user.id,
      name: user.name,
      email: user.email,
      isSeller: true,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;

  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) res.send({ msg: "invalid Token From AUTH" }).status(401);
      req.user = decode;
      return next();
    });
  } else {
    return res.send({ msg: "No token found" }).status(401);
  }
};

export const isSeller = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.isSeller) return next();
  return res.status(401).send({ msg: "Invalid Token FROM SELLER" });
};

export const isUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.isUser) return next();
  return res.status(401).send({ msg: "Invalid Token FROM USER" });
};
