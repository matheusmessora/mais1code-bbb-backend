function calcular() {
  return true;
}
function somar(x, y) {
  const z = x + y;
  return z;
}
function maisculo(texto) {
  return texto.toUpperCase()
}

describe('Calculadora simples Test', () => {
  it('deve retornar verdadeiro se verdadeiro', () => {
    const resultado = calcular()
    expect(resultado).toBe(true)
  })
  it('deve retornar 4 se somar 2 + 2', () => {
    const resultado = somar(2,2)
    expect(resultado).toBe(4)

    const resultado2 = somar(3, 5)
    expect(resultado).toBe(8)

    const resultado3 = somar(0,null)
  })
  it('deve retornar a string em maisculo', () => {
    const resultado = maisculo("mAtHeUs")
    expect(resultado).toBe("MATHEUS")
  })
})




