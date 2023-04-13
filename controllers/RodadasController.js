const {PrismaClient} = require('@prisma/client')
const { body, validationResult } = require('express-validator');
const express = require('express');
const RodadasModel = require("../models/Rodadas")

const router = express.Router();
const prisma = new PrismaClient()


const validateRules = [
    body('name').not().isEmpty(),
    body('github_url').not().isEmpty(),
]

const RodadasController = {
    validateRules: validateRules,

    getByID: async(req, res) => {

    },

    put: async(req, res) => {

    }

    // getByID: async (req, res) => {
    //     const id = req.params.id;
    //
    //     const rodada = RodadasModel.getByID(id)
    //
    //     if (rodada === undefined) {
    //         // TODO: validar
    //         return res.sendStatus(404)
    //     }
    //
    //     res.status(200).json(rodada);
    // },
    // put: async (req, res) => {
    //     const id = parseInt(req.params.id);
    //
    //     const data = {
    //         numero: id,
    //         votos: [],
    //         created: new Date()
    //     };
    //
    //     // TODO: migrar para a Model
    //     const rodada = await prisma.rodadas.create({
    //       data: data,
    //     });
    //
    //     res.status(201).json(rodada);
    // }
}

module.exports = RodadasController;