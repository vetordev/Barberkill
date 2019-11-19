"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Address_1 = require("../models/Address");
class AddressController {
    static store(req, res) {
        Address_1.Address.create(req.body).then(address => {
            return res.json(address);
        });
    }
    static index(req, res) {
        Address_1.Address.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        }).then(addresses => {
            return res.json(addresses);
        }).catch(error => {
            console.log(error);
        });
    }
}
exports.AddressController = AddressController;
