"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const connect_1 = __importDefault(require("./db/connect"));
const app = express_1.default();
const port = process.env.PORT || 5000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const db = process.env.DB_URI || "";
connect_1.default(db);
app.get("/", (res) => {
    res.send("hello");
});
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
//# sourceMappingURL=server.js.map