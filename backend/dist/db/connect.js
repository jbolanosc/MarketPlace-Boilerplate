"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = (db) => {
    const connect = () => {
        mongoose_1.default
            .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
            return console.log("db connected");
        })
            .catch((err) => {
            console.log("Error on db" + err);
            return process.exit(1);
        });
    };
    connect();
    //seedDB();
    mongoose_1.default.connection.on("disconnected", connect);
};
//# sourceMappingURL=connect.js.map