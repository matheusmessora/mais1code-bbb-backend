const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const Rodadas = {
    getByID: async(id) => {
        return prisma.rodadas.findUnique({
            where: {
                numero: parseInt(id),
            },
        });
    }
}


module.exports = Rodadas