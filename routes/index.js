const express = require('express');
const router = express.Router();
const ParticipanteController = require('../controllers/ParticipanteController')
const RodadasController = require('../controllers/RodadasController')


router.get('/participantes', ParticipanteController.getAll)
router.post('/participantes', ParticipanteController.validateRules, ParticipanteController.post)
router.put('/participantes/:id', ParticipanteController.validateRules, ParticipanteController.put);

router.get('/rodadas/:numero', RodadasController.getByNumber);
router.put('/rodadas/:numero', RodadasController.create);
router.put('/rodadas/:id/lider/:liderId', RodadasController.addLider);
router.post('/rodadas/:id/voto', RodadasController.addVoto);

module.exports = router;


