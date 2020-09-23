import mongoose, { Schema, Document } from "mongoose";

export interface SellerInterface extends Document {
  name: string;
  companyName: string;
  password: string;
  email: string;
  phoneNumber: string;
  isApproved: boolean;
  rating: number;
  logo: string;
  reviews: ReviewInterface[];
}

interface ReviewInterface {
  name: string;
  rating: number;
  comment: string;
}

const reviewSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: String, default: 0 },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const sellerSchema: Schema = new Schema(
  {
    name: { type: String, required: "Please provide an email" },
    companyName: { type: String },
    password: { type: String, required: "Please provide an email" },
    email: { type: String, required: "Please provide an email" },
    phoneNumber: { type: String, required: "Please provide a phone number" },
    rating: { type: Number, required: true },
    isApproved: { type: Boolean, default: false },
    reviews: [reviewSchema],
    logo: { type: String },
  },
  { timestamps: true }
);

const Seller = mongoose.model<SellerInterface>("Seller", sellerSchema);

export default Seller;
