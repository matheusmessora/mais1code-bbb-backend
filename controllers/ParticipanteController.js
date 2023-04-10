const {PrismaClient} = require('@prisma/client')
const { body, validationResult } = require('express-validator');
const express = require('express');

const router = express.Router();
const prisma = new PrismaClient()

const UserStatus = {
    ATIVO: 'ativo',
    ELIMINADO: 'eliminado'
}

const validateRules = [
    body('name').not().isEmpty(),
    body('github_url').not().isEmpty(),
]

const ParticipanteController = {
    validateRules: validateRules,

    getAll: async (req, res) => {
        await prisma.$connect()
        const all = await prisma.participantes.findMany();

        // TODO:
        // IMPLEMENTAR o NOT FOUND
        res.status(200).json(all);
    },
    post: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        let {name, github_url} = req.body
        const data = {
            name: name,
            github_url: github_url,
            status: UserStatus.ATIVO,
            created: new Date()
        };
        // TODO:
        // VALIDACAO DE CAMPOS

        await prisma.$connect()
        const user = await prisma.participantes.create({
          data: data,
        });

        res.status(201).json(user);
    }
}

module.exports = ParticipanteController;