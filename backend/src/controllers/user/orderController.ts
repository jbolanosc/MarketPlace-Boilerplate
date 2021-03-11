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

    if (!order) return res.status(400).send({ msg: "order not found." });

    return res.status(200).send(order);
  } catch (err) {
    return res.status(500).send({ err: err });
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

    return res.status(200).send({ msg: "Order Created" });
  } catch (err) {
    return res.status(500).send({ err: err });
  }
}

export async function updateOrder(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (checkOrderStatus(order))
      return res.status(400).send({
        msg:
          "The order cannot be modified or deleted because it is " +
          order.status,
      });

    return res.status(201).send({ msg: "Order Updated" });
  } catch (err) {
    return res.status(500).send({ err: err });
  }
}

export async function deleteOrder(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const order = await Order.findByIdAndDelete(id);
    if (checkOrderStatus(order))
      return res.status(400).send({
        msg:
          "The order cannot be modified or deleted because it is " +
          order.status,
      });

    return res.status(200).send({ msg: "order deleted." });
  } catch (err) {
    return res.status(500).send({ err: err });
  }
}

export async function getUserOrders(req: Request, res: Response) {
  try {
    const { user } = req.body;
    const orders = await Order.find({ user: user });

    if (!orders) res.status(400).send({ msg: "No orders found" });

    return res.status(200).send(orders);
  } catch (err) {
    return res.status(500).send({ err: err });
  }
}

export async function getSellerOrders(req: Request, res: Response) {
  try {
    const { seller } = req.body;
    const orders = await Order.find({ seller: seller });

    if (!orders) res.status(400).send({ msg: "No orders found" });

    return res.status(200).send(orders);
  } catch (err) {
    return res.status(500).send({ err: err });
  }
}

function checkOrderStatus(order) {
  if (order.status === "SHIPPED" || order.status === "ABOUT TO DELIVER")
    return false;
  return true;
}
