import { Request, Response } from "express";
import { Delivery } from "../../models";

export async function getDelivery(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const delivery = await Delivery.findById(id);

    if (!delivery) return res.json({ msg: "No delivery found" });

    return res.json(delivery);
  } catch (err) {
    return res.json({ error: err });
  }
}

export async function createDelivery(req: Request, res: Response) {
  try {
    const delivery = new Delivery({
      orderId: req.body.orderId,
      seller: req.body.seller,
      owner: req.body.owner,
      deliveryStatus: req.body.deliveryStatus,
      deliveryLocation: req.body.deliveryLocation,
      deliveryContact: req.body.deliveryContact,
      deliveryDate: req.body.deliveryDate,
    });

    await delivery.save();

    return res.json({ msg: "Delivery created" });
  } catch (err) {
    return res.json({ error: err });
  }
}

export async function updateDelivery(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Delivery.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    return res.json({ status: "Delivery edited" });
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
}

export async function deleteDelivery(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const delivery = await Delivery.findByIdAndDelete(id);
    if (!delivery) return res.json("no delivery found.");

    return res.json("Delivery deleted");
  } catch (err) {
    return res.json({ error: err });
  }
}
