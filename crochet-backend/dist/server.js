"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 5500;
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello, backend is here');
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
