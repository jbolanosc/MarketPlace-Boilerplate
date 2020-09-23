import mongoose, { Document, Schema } from "mongoose";

export interface DeliveryInterface extends Document {
  orderId: Schema.Types.ObjectId;
  seller: Schema.Types.ObjectId;
  owner: Schema.Types.ObjectId;
  deliveryStatus: string;
  deliveryLocation: string;
  deliveryContact: string;
  deliveryDate: Date;
}

const deliveryShema: Schema = new Schema({
  orderId: { type: Schema.Types.ObjectId, required: true },
  seller: { type: Schema.Types.ObjectId, required: true },
  owner: { type: Schema.Types.ObjectId, required: true },
  deliveryStatus: { type: String, required: true },
  deliveryLocation: { type: String, required: true },
  deliveryContact: { type: String, required: true },
  deliveryDate: { type: Date, required: true },
});

const Delivery = mongoose.model<DeliveryInterface>("Deliver", deliveryShema);

export default Delivery;
