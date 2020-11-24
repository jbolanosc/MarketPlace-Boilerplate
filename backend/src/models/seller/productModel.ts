import mongoose, { Schema, Document } from "mongoose";

interface ReviewInterface {
  name: string;
  rating: number;
  comment: string;
}

export interface ProductInterface extends Document {
  name: string;
  category: string;
  subcategory: string;
  price: number;
  old_price: number;
  description: number;
  seller: Schema.Types.ObjectId;
  images: string[];
  rating: number;
  brand: string;
  reviews: ReviewInterface[];
  countInStock: number;
  deal: boolean;
}

const reviewSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: String, default: 0 },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const productSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    description: { type: String, required: true },
    seller: { type: Schema.Types.ObjectId, ref: "Seller", required: true },
    images: { type: [String] },
    rating: { type: Number, required: true },
    brand: { type: String, required: true },
    reviews: [reviewSchema],
    countInStock: { type: Number, default: 0 },
    deal: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Product = mongoose.model<ProductInterface>("Product", productSchema);

export default Product;
