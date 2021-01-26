import mongoose, { Schema, Document } from "mongoose";

export interface UserInterface extends Document {
  name: string;
  password: string;
  email: string;
  mobile: number;
  address: string;
  profilePicture: string;
  temp_verification_code: string;
  favList: string[];
}

let UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  profilePicture: { type: String, default: "" },
  temp_verification_code: { type: String, default: false },
  favList: { type: [String], default: [] },
});

const User = mongoose.model<UserInterface>("User", UserSchema);

export default User;
