"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgre',
    database: 'barberkill',
    define: {
        //create_at, update_at
        timestamps: true,
        //formato snake_case
        underscored: true
    }
};
