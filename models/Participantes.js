const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const Participantes = {
    create: async (github_url, name) => {
        const data = {
            name: name,
            github_url: github_url,
            status: "ATIVO",
            created: new Date()
        };
        const x = await prisma.participantes.create({
          data: data,
        });
        return x
    },
    findAll: async () => {
        const all = await prisma.participantes.findMany();
        return all
    },
    dropAll: async() => {
      await prisma.participantes.deleteMany({});
      console.log("DELETEANDO TUDO")
      return true
    }
}


module.exports = Participantes