import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        uid: 'john.doe',
        name: 'John Doe',
      },
      {
        uid: 'ada.lovelace',
        name: 'Ada Lovelace',
      },
    ],
  });
  await prisma.userAdmin.create({
    data: {uid: 'ada.lovelace'},
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1); // eslint-disable-line no-process-exit
  });
