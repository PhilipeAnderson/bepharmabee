"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = (0, express_1.default)();
const cards_1 = require("../database/cards");
const oldApi_1 = require("../database/oldApi");
routes.get('/cards', (req, res) => {
    return res.json(cards_1.cards);
});
routes.get('/oldApi', (req, res) => {
    return res.json(oldApi_1.oldApi);
});
module.exports = routes;
