"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const reviewSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    rating: { type: String, default: 0 },
    comment: { type: String, required: true },
}, { timestamps: true });
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    description: { type: String, required: true },
    seller: { type: mongoose_1.Schema.Types.ObjectId, ref: "Seller", required: true },
    images: { type: [String] },
    rating: { type: Number, required: true },
    brand: { type: String, required: true },
    reviews: [reviewSchema],
    countInStock: { type: Number, default: 0 },
    deal: { type: Boolean, default: false },
}, { timestamps: true });
const Product = mongoose_1.default.model("Product", productSchema);
exports.default = Product;
//# sourceMappingURL=productModel.js.map