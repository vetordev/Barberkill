"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviroment = {
    server: {
        port: process.env.PORT || 3002,
    },
    db: {
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
    }
};
