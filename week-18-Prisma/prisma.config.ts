// Use CommonJS style to avoid ESM/CommonJS conflicts in this project.
// This file intentionally uses require() and module.exports.
const dotenv = require("dotenv");
dotenv.config();

// Provide a lightweight declaration for `process` so TypeScript won't
// error if @types/node is not installed in the environment.
declare const process: { env: { [key: string]: string | undefined } };

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
