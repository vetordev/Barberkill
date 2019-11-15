"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Address_1 = require("../models/Address");
class AddressController {
    static store(req, res) {
        Address_1.Address.create(req.body).then(address => {
            return res.json(address);
        });
    }
}
exports.AddressController = AddressController;
