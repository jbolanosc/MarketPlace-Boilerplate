import { Seller } from "../../models";
import hashPassword from "../../util/hashPassword";
import { Response, Request } from "express";

export const getSellers = async (res: Response) => {
  try {
    const sellers = await Seller.find();
    if (!sellers) return res.json({ msg: "No sellers found" }).status(400);
    return res.json(sellers);
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
};

export const getTopSellers = async (res: Response) => {
  try {
    const topSellers = Seller.find().sort({ "seller.rating": -1 }).limit(10);
    return res.json(topSellers);
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
};

export const getSellerProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const profile = await Seller.findById(id);

    if (!profile) return res.json({ msg: "Profile not found" });

    return res.json(profile);
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
};

export const getSellerInfo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const seller = await Seller.findById(id);
    if (!seller) return res.json({ msg: "no seller found." });
    return res.json(seller);
  } catch (err) {
    return res.json({ msg: err }).status(500);
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Seller.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    return res.json({ status: "Profile edited" });
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
};

export const createSeller = async (req: Request, res: Response) => {
  try {
    const seller = new Seller({
      name: req.body.name,
      companyName: req.body.companyName,
      password: hashPassword(req.body.password),
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      isApproved: req.body.isApproved,
      logo: req.body.logo ? req.body.logo : null,
    });

    await seller.save();

    return res.json({ status: "Seller account created" });
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
};

export const disableSeller = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Seller.findByIdAndUpdate(id, { isApproved: false });
    return res.json({ status: "Seller disabled" });
  } catch (err) {
    return res.json({ msg: err }).status(500);
  }
};
