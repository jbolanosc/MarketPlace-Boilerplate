import { Request, Response } from "express";
import { User, Seller } from "../models";
import { compareSync, getToken, getSellerToken } from "../util";

export async function userLogin(req: Request, res: Response) {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    if (!user || !compareSync(req.body.password, user.password))
      return res.json({ msg: "Incorrect Username or password" });

    const token = getToken(user);

    res.cookie("token", token, { httpOnly: true });

    return res.status(200).send({
      isSeller: false,
      token: token,
    });
  } catch (err: any) {
    return res.status(500).send({ error: err.toString() });
  }
}

export async function sellerLogin(req: Request, res: Response) {
  try {
    const seller = await Seller.findOne({
      email: req.body.email,
    });

    if (!seller || !compareSync(req.body.password, seller.password))
      return res.status(400).send({ msg: "Incorrect Username or password" });

    return res.status(200).send({
      isSeller: true,
      token: getSellerToken(seller),
    });
  } catch (err: any) {
    return res.status(500).send({ error: err });
  }
}

export async function getCsrf(req: Request, res: Response) {
  return res.status(200).send({ csrfToken: req.csrfToken() });
}
