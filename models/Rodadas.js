const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const Rodadas = {
    getByNumber: async (id) => {
        const resultado = prisma.rodadas.findUnique({
            where: {
                numero: parseInt(id),
            },
        });
        console.log("resultado=", resultado)
        return resultado
    },
    update: async (numero_rodada, rodada) => {
        rodada.id = undefined
        const updated = await prisma.rodadas.update({
          where: {
            numero: numero_rodada,
          },
          data: rodada,
        })
        console.log(`UPDATED rodada=`, updated)
    }
}


module.exports = Rodadas