import { Order } from "../../models";
import { Response, Request } from "express";

export async function getOrder(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const order = await Order.findById(id)
      .populate({ path: "user", select: name })
      .populate({ path: "seller", select: name })
      .populate("orderItems")
      .exec();

    if (!order) return res.json({ msg: "order not found." }).status(400);

    return res.json(order);
  } catch (err) {
    return res.json({ err: err });
  }
}

export async function createOrder(req: Request, res: Response) {
  try {
    const newOrder = new Order({
      user: req.user,
      seller: req.body.seller,
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      itemsPrice: req.body.itemPrice,
      tax: req.body.tax,
      isPaid: req.body.isPaid,
    });

    await newOrder.save();

    return res.json({ msg: "Order Created" });
  } catch (err) {
    return res.json({ err: err });
  }
}

export async function updateOrder(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await Order.findByIdAndUpdate(id, { $set: req.body }, { new: true });

    return res.json({ msg: "Order Updated" });
  } catch (err) {
    return res.json({ err: err });
  }
}

export async function deleteOrder(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await Order.findByIdAndDelete(id);

    return res.json({ msg: "order deleted." });
  } catch (err) {
    return res.json({ err: err });
  }
}

export async function getUserOrders(req: Request, res: Response) {
  try {
    const { user } = req.body;
    const orders = await Order.find({ user: user });

    if (!orders) res.json({ msg: "No orders found" });

    return res.json(orders);
  } catch (err) {
    return res.json({ err: err });
  }
}

export async function getSellerOrders(req: Request, res: Response) {
  try {
    const { seller } = req.body;
    const orders = await Order.find({ seller: seller });

    if (!orders) res.json({ msg: "No orders found" });

    return res.json(orders);
  } catch (err) {
    return res.json({ err: err });
  }
}
