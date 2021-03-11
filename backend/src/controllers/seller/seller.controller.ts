import { Seller } from "../../models";
import { hashPassword } from "../../util";
import { Response, Request } from "express";

export const getSellers = async (req: Request, res: Response) => {
  try {
    const sellers = await Seller.find();
    if (!sellers) return res.status(400).send({ msg: "No sellers found" });
    return res.status(201).send(sellers);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

export const getTopSellers = async (req: Request, res: Response) => {
  try {
    const topSellers = await Seller.find({}).sort({ rating: -1 }).limit(3);
    return res.status(200).send(topSellers);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

export const getSellerProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const profile = await Seller.findById(id);

    if (!profile) return res.status(400).send({ msg: "Profile not found" });

    return res.status(200).send(profile);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

export const getSellerInfo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const seller = await Seller.findById(id);
    if (!seller) return res.status(400).send({ msg: "no seller found." });
    return res.status(200).send(seller);
  } catch (err) {
    return res.status(500).send({ msg: err });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    req.body.logo = req.file.cloudStoragePublicUrl || "";
    await Seller.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    return res.status(200).send({ status: "Profile edited" });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

export const createSeller = async (req, res) => {
  try {
    const seller = new Seller({
      name: req.body.name,
      companyName: req.body.companyName,
      password: hashPassword(req.body.password),
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      isApproved: req.body.isApproved,
      logo: req.file.cloudStoragePublicUrl
        ? req.file.cloudStoragePublicUrl
        : null,
    });

    await seller.save();

    return res.status(200).send({ status: "Seller account created" });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

export const disableSeller = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Seller.findByIdAndUpdate(id, { isApproved: false });
    return res.status(200).send({ status: "Seller disabled" });
  } catch (err) {
    return res.status(500).send({ msg: err });
  }
};
