"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrismaClient {
    user = {
        create: async (args) => {
            return Promise.resolve(args.data);
        }
    };
}
const client = new PrismaClient();
async function createUser() {
    await client.user.create({
        data: {
            username: "hatkirat",
            password: "123123",
            age: "21",
            city: "Delhi"
        }
    });
}
createUser();
//# sourceMappingURL=index.js.map