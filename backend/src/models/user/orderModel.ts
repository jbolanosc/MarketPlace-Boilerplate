import mongoose, { Schema, Document } from "mongoose";

export interface OrderInterface extends Document {
  user: Schema.Types.ObjectId;
  seller: Schema.Types.ObjectId;
  orderItems: string[];
  shippingAddress: string;
  itemsPrice: number;
  tax: number;
  shippingPrice: number;
  isPaid: boolean;
  paidAt: Date;
  status: string;
}

const orderSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    seller: { type: Schema.Types.ObjectId, ref: "Seller", required: true },
    orderItems: [
      { type: Schema.Types.ObjectId, ref: "Product", required: true },
    ],
    shippingAddress: { type: String, required: true },
    itemsPrice: { type: Number, required: true },
    tax: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date, default: null },
    status: {
      type: String,
      enum: ["ON SHOP", "SHIPPED", "ABOUT TO DELIVERY"],
      default: "ON SHOP",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model<OrderInterface>("Order", orderSchema);

export default Order;
