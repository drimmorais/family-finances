"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = __importDefault(require("http"));
const ApiV1_1 = __importDefault(require("./src/routes/ApiV1"));
dotenv_1.default.config();
mongoose_1.default.connect('mongodb://localhost:27017/conShare')
    .then(() => {
    console.log('conShare Database is connect');
});
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1', ApiV1_1.default);
const port = process.env.PORT || 8080;
http_1.default.createServer(app).listen(port, () => {
    console.log(`Http server started. Port ${port} `);
});
