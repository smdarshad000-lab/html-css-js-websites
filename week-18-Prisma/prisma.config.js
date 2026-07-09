"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Use CommonJS style to avoid ESM/CommonJS conflicts in this project.
// This file intentionally uses require() and module.exports.
const dotenv = require("dotenv");
dotenv.config();
const prismaConfig = {
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    datasource: {
        url: process.env["DATABASE_URL"],
    },
};
module.exports = prismaConfig;
//# sourceMappingURL=prisma.config.js.map