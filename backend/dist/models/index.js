"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deliveryModel_1 = __importDefault(require("./deliveryModel"));
const productModel_1 = __importDefault(require("./seller/productModel"));
const refundModel_1 = __importDefault(require("./seller/refundModel"));
const sellerModel_1 = __importDefault(require("./seller/sellerModel"));
const orderModel_1 = __importDefault(require("./user/orderModel"));
const userModel_1 = __importDefault(require("./user/userModel"));
module.exports = {
    Delivery: deliveryModel_1.default,
    Product: productModel_1.default,
    Refund: refundModel_1.default,
    Seller: sellerModel_1.default,
    Order: orderModel_1.default,
    User: userModel_1.default,
};
//# sourceMappingURL=index.js.map