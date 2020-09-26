import { User } from "../../models";
import { hashPassword } from "../../util";
import { Response, Request } from "express";

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const profile = await User.findById(id);

    if (!profile) return res.json({ msg: "Profile not found" });

    return res.json(profile);
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
};

export const getUserInfo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.json({ msg: "no user found." });
    return res.json(user);
  } catch (err) {
    return res.json({ msg: err }).status(500);
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    return res.json({ status: "Profile edited" });
  } catch (err) {
    return res.json({ error: err }).status(500);
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

    return res.json({ msg: "User account created" });
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
};

export const disableUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, { isApproved: false });
    return res.json({ status: "User disabled" });
  } catch (err) {
    return res.json({ msg: err }).status(500);
  }
};
