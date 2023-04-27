// const supertest = require('supertest')
// const Participantes = require("../models/Participantes")
// const app = require('../app')
//
// beforeEach(() => {
//   Participantes.dropAll()
// });
//
// describe('Post Endpoints', () => {
//   it('should create a new post', async () => {
//     await supertest(app)
//         .get('/participantes')
//         .expect(200)
//         .then((res) => {
//           expect(res.body.length).toEqual(1)
//     })
//   })
//
//   it('should create a new post', async () => {
//     await supertest(app)
//         .post('/participantes')
//         .send({
//             "name": "Teste",
//             "github_url": "aaa"
//         })
//         .expect(201)
//         .then(async (res) => {
//             expect(res.body.id).toBeTruthy()
//
//             const all = await Participantes.findAll()
//             expect(all.length).toEqual(1)
//     })
//   })
// })