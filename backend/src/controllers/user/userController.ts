import { User } from "../../models";
import { hashPassword } from "../../util";
import { Response, Request } from "express";

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const profile = await User.findById(id);

    if (!profile) return res.status(400).send({ msg: "Profile not found" });

    return res.status(200).send(profile);
  } catch (err: any) {
    return res.status(500).send({ error: err });
  }
};

export const getUserInfo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(400).send({ msg: "no user found." });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ msg: err });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!user) return res.status(400).send({ msg: "NO USER FOUND" });
    return res.status(200).send({ msg: "Profile edited" });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User({
      name: req.body.name,
      companyName: req.body.companyName,
      password: hashPassword(req.body.password),
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      isApproved: req.body.isApproved,
      logo: req.file.path ? req.file.path : null,
    });

    await user.save();

    return res.status(200).send({ msg: "User account created" });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
};

export const disableUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, { isApproved: false });
    if (!user) return res.status(400).send({ msg: "NO USER FOUND." });
    return res.status(200).send({ status: "User disabled" });
  } catch (err) {
    return res.status(500).send({ msg: err });
  }
};
