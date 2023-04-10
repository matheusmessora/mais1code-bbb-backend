const {PrismaClient} = require('@prisma/client')
const { body, validationResult } = require('express-validator');
const express = require('express');

const router = express.Router();
const prisma = new PrismaClient()

// const ParticipanteController = require('../controllers/ParticipanteController')
// router.get('/v2/participantes', ParticipanteController.getAll)
// router.post('/v2/participantes', ParticipanteController.validateRules, ParticipanteController.post)

router.get('/participantes', async (req,res) => {
    await prisma.$connect()
    const all = await prisma.participantes.findMany();

    // TODO:
    // IMPLEMENTAR o NOT FOUND
    res.status(200).json(all);
})
router.post('/participantes',
    body('name').not().isEmpty(),
    body('github_url').not().isEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        let {name, github_url} = req.body
        const data = {
            name: name,
            github_url: github_url,
            status: '',
            created: new Date()
        };
        // TODO:
        // VALIDACAO DE CAMPOS

        await prisma.$connect()
        const user = await prisma.participantes.create({
          data: data,
        });

        res.status(201).json(user);
});

router.put('/participantes/:id', async (req, res) => {
    const id = req.params.id;
    let {name, github_url} = req.body

    await prisma.$connect()
    const user = await prisma.participantes.findUnique({
      where: {
        id: id,
      },
    })
    // TODO:
    // IMPLEMENTAR O NOT FOUND

    const data = {
        name: name,
        github_url: github_url,
        updated: new Date()
    }

    const updatedUser = await prisma.participantes.update({
      where: {
        id: user.id,
      },
      data: data,
    })

    res.status(200).json(updatedUser);
});

module.exports = router;