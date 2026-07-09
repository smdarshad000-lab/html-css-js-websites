class PrismaClient {
    user = {
        create: async (args: { data: { username: string; password: string; age: string; city: string } }) => {
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