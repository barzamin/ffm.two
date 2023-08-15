import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
    const artist = await prisma.artist.upsert({
        where: { email: 'sonny@skrillex.com' },
        update: {},
        create: {
            email: 'sonny@skrillex.com',
            name: 'Skrillex',
            passwordHash: '$argon2id$v=19$m=65536,t=3,p=4$sCVZKas3ap61Mdw8zbtb+w$7zri1mIr2oPSUo2gH+dup065l4lQG+ZBtUXlv7uL1e4', // `wub`
            links: {},
        }
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('---- error seeding db: ----');
        console.error(e);

        await prisma.$disconnect();
        process.exit(1);
    });
