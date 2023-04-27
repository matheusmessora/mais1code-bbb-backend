// const {PrismaClient} = require('@prisma/client')
const { body, validationResult } = require('express-validator');
const express = require('express');
const RodadasModel = require("../models/Rodadas")

const router = express.Router();
// const prisma = new PrismaClient()


const validateRules = [
    body('name').not().isEmpty(),
    body('github_url').not().isEmpty(),
]

const RodadasController = {
    validateRules: validateRules,

    getByNumber: async (req, res) => {
        const numero = req.params.numero;

        const rodada = RodadasModel.getByNumber(numero)
        // const rodada = await prisma.rodadas.findUnique({
        //         where: {
        //             numero: parseInt(numero),
        //         },
        //     });

        console.log(rodada, numero)
        if (rodada === null) {
            return res.sendStatus(404) // NOT FOUND
        }

        res.status(200).json(rodada);
    },
    create: async (req, res) => {
        const id = parseInt(req.params.numero);

        const rodada = {
            numero: id,
            votos: [],
            created: new Date()
        };

        // TODO: migrar para a Model
        const resultado = await prisma.rodadas.create({
          data: rodada,
        });

        res.status(201).json(resultado);
    },
    addLider: async (req, res) => {
        const id = parseInt(req.params.id);
        const liderId = req.params.liderId;

        const rodada = RodadasModel.getByNumber(numero)
        rodada.lider = liderId
        const updated =RodadasModel.update(id, rodada)

        res.status(200).json(updated);
    },
    addVoto: async (req, res) => {
        const id = parseInt(req.params.id);

        const {participante} = req.body;

        const rodadas = RodadasModel.getByNumber(id)
        console.log(`participante=`, participante)
        console.log(rodada.votos)

        const data = {
            "participante": participante,
            "qtd": antigo_votos+1
        }
        const votos = rodada.votos
        votos.push(data)
        console.log(rodada.votos)

        const updated = RodadasModel.update(id, rodada)


        res.status(200).json(updated);
    }






    // addVoto: async (req, res) => {
    //     const id = parseInt(req.params.id);
    //     let {participante} = req.body
    //
    //     // const rodada = RodadasModel.getByNumber(id)
    //     const rodada = await prisma.rodadas.findUnique({
    //             where: {
    //                 numero: parseInt(id),
    //             }
    //         });
    //
    //     // link
    //     let votos = rodada.votos
    //
    //     console.log(`votos=${votos}, rodada=${rodada.id}, participante=${participante}`)
    //
    //     // const updated = await prisma.rodadas.update({
    //     //   where: {
    //     //     id: rodada.id,
    //     //   },
    //     //   data: rodada,
    //     // })
    //
    //
    //     return res.sendStatus(405);
    // }
}

module.exports = RodadasController;