const express = require('express');
const router = express.Router();
const ParticipanteController = require('../controllers/ParticipanteController')
const RodadasController = require('../controllers/RodadasController')


router.get('/participantes', ParticipanteController.getAll)
router.post('/participantes', ParticipanteController.validateRules, ParticipanteController.post)
router.put('/participantes/:id', ParticipanteController.validateRules, ParticipanteController.put);

// router.get('/rodadas/:id', RodadasController.getByID);
// router.put('/rodadas/:id', RodadasController.put);

module.exports = router;

// + Diferenca GET/POST/PUT
// + Modelo complexo no MongoDB
// + MVC Pattern
// + Correta utilização do Prisma.connect()
// + Votacao real


// ------------------------
// + Diferenca GET/POST/PUT
// GET IDEMPOTENTE
// POST CADASTRA
// PUT CADASTRA/ALTERA

// CADASTRAR USUARIO com CPF unico (POST... PUT /usuarios/400)
// BUSCAR USUARIO -- IDEMPOTENTE GET
// ACAO DE SOMAR 1+1=2 =2 IDEMPOTENTE
// Botao do Elevador == IDEMPOTENTE
// ===================
// DELETAR UM USUARIO ==> IDEMPOTENTE
// Gerador de numeros aleatorios ==> NAO IDEMPOTENTE
// Embaralhar cartas ==> NAO IDEMPOTENTE
// ACENDER UMA LUZ ==> IDEMPOTENTE
// METODO que converte letras para maisculo ==> IDEMPOTENTE
// "aBc".upper() ==> "ABC"
// Passar o cartao na maquinininha ==>
// CARTAO MESMO, VALOR EH O MESMO, SENHA
// NAO IDEMPOTENTE: ||||
// IDEMPOTENTE: M

// Enviar EMAIL ==> POST




