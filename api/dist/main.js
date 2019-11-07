"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.use(express.json());
app.get('/', (req, res, next) => {
    res.json({ connected: true });
});
app.listen(3002);
