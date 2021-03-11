import { Request, Response } from "express";
import { Delivery } from "../../models";

export async function getDelivery(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const delivery = await Delivery.findById(id);

    if (!delivery) return res.status(400).send({ msg: "No delivery found" });

    return res.status(200).send(delivery);
  } catch (err) {
    return res.status(500).send({ error: err });
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

    return res.status(200).send({ msg: "Delivery created" });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
}

export async function updateDelivery(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Delivery.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    return res.status(200).send({ status: "Delivery edited" });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
}

export async function deleteDelivery(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const delivery = await Delivery.findByIdAndDelete(id);
    if (!delivery) return res.status(400).send("no delivery found.");

    return res.status(200).send("Delivery deleted");
  } catch (err) {
    return res.status(500).send({ error: err });
  }
}
