"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const csurf_1 = __importDefault(require("csurf"));
const connect_1 = __importDefault(require("./db/connect"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const port = process.env.PORT || 5000;
const csrfProtection = csurf_1.default({
    cookie: true,
});
app.use(cors_1.default());
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(cookie_parser_1.default());
app.use(csrfProtection);
const db = process.env.MONGODB_URI || "";
connect_1.default(db);
app.use("/api/v1", routes_1.default);
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
exports.default = app;
//# sourceMappingURL=server.js.map