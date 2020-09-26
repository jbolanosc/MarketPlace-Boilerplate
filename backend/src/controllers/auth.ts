import { Request, Response } from "express";
import { User, Seller } from "../models";
import { compareSync, getToken } from "../util";

export async function userLogin(req: Request, res: Response) {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user || !compareSync(req.body.password, user.password))
    return res.json({ msg: "Incorrect Username or password" });

  return res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isSeller: false,
    token: getToken(user),
  });
}

export async function sellerLogin(req: Request, res: Response) {
  const seller = await Seller.findOne({
    email: req.body.email,
  });

  if (!seller || !compareSync(req.body.password, seller.password))
    return res.json({ msg: "Incorrect Username or password" });

  return res.json({
    _id: seller._id,
    name: seller.name,
    email: seller.email,
    isSeller: false,
    token: getToken(seller),
  });
}

export async function logout(req: Request, res: Response) {}
