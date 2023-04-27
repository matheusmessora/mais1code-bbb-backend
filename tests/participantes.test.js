const supertest = require('supertest')
const app = require('../app')
const Participantes = require("../models/Participantes")

beforeEach(async () => {
    await Participantes.dropAll()
});

describe('Testes do Participante Controller', () => {

    it('GET participantes deve retornar 200', async () => {
        await supertest(app)
            .get("/participantes")
            .expect(200)
            .then((response) => {
                expect(response.body.length).toEqual(0)
            })
    })

    it('GET participantes deve retornar 200 com o participante cadastrado', async () => {
        await Participantes.create("fakegithub", "TEST FAKE")
        await supertest(app)
            .get("/participantes")
            .expect(200)
            .then((response) => {
                expect(response.body.length).toEqual(1)
            })
    })

      it('POST participantes DEVE cadastrar participante', async () => {
        await supertest(app)
            .post('/participantes')
            .send({
                "name": "teste",
                "github_url": "aaa"
            })
            .expect(201)
            .then(async (res) => {
                expect(res.body.id).toBeTruthy()
                expect(res.body.name).toBe("TESTE")

                const all = await Participantes.findAll()
                expect(all.length).toEqual(1)
                expect(all[0].name).toEqual("TESTE")
        })
      })
})