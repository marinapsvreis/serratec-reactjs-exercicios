const grupo5 = {
  integrante1: {
    nome: 'Marina Portugal',
    idade: 30,
    endereco: {
      cidade: 'Petrópolis',
      estado: 'Rio de Janeiro'
    }
  },
  integrante2: {
    nome: 'Breno de Medeiros',
    idade: 28,
    endereco: {
      cidade: 'Petrópolis',
      estado: 'Rio de Janeiro'
    }
  },
  integrante3: {
    nome: 'Ester Baltazar',
    idade: 21,
    endereco: {
      cidade: 'Petrópolis',
      estado: 'Rio de Janeiro'
    }
  },
  integrante4: {
    nome: 'Kauã Cassiano',
    idade: 18,
    endereco: {
      cidade: 'Petrópolis',
      estado: 'Rio de Janeiro'
    }
  },
  integrante5: {
    nome: 'Pedro Henrique Curioni',
    idade: 19,
    endereco: {
      cidade: 'Petrópolis',
      estado: 'Rio de Janeiro'
    }
  },
  integrante6: {
    nome: 'Sophia Araújo',
    idade: 18,
    endereco: {
      cidade: 'Petrópolis',
      estado: 'Rio de Janeiro'
    }
  }
}

//console.log(grupo5.integrante1.nome)
//console.log(grupo5.integrante2.nome)
//console.log(grupo5.integrante3.nome)
//console.log(grupo5.integrante4.nome)
//console.log(grupo5.integrante5.nome)
//console.log(grupo5.integrante6.nome)

//function executar() {
//  console.log('Rodou...')
//}

//setTimeout(executar, 5000)

//function executando() {
//  console.log('Executando...')
//}

//setInterval(executando, 1000)

// var integranteValues = Object.values(grupo5)
// for(var i = 0; i<integranteValues.length; i++){
//   for(var j = 0; j < 30; j++){
//     console.log(integranteValues[i].nome)
//   }
// }

// function imprimindo() {
//   console.log(grupo5.integrante1.nome)
// }

// var impressao = setInterval(imprimindo, 1000)

// function limparInterval() {
//   clearInterval(impressao)
// }

// setTimeout(limparInterval, 5000)

// const array = [1, 2, 3, 4, 5]

// const novoArray = array.map((res, index) => {
//   return 'index(' + index + '): ' + res
// })

// console.log(novoArray)

// const array = [1, 2, 3, 4, 5]
// const arrayFiltrado = array.filter(num => num % 2 != 0)
// console.log(arrayFiltrado)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//reduce = soma de todos os itens
const result = array.reduce(
  (acumulador, valorCorrente) => acumulador + valorCorrente
)

console.log(result)
