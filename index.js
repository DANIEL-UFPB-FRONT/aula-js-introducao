// ###### Hello World ###### 

console.log("Hello World")

// ###### Tipos de dados ###### 

// Number
const year = 1970
console.log('year é do tipo ' + typeof year)

// Boolean
const isTrue = true
console.log('isTrue é do tipo ' + typeof isTrue)

// String
const nome = 'John Doe'
console.log('nome é do tipo ' + typeof nome)

// Object
const empty = {}
const student = {
    student: 'John Doe',
    mat: 4738
}
console.log('student é do tipo ' + typeof student)

// null
const nullType = null
console.log('nullType é do tipo ' + typeof nullType)

// undefined
const uType = undefined
console.log('uType é do tipo ' + typeof uType)

// Array
const vector = [1,2,3,5,'a']
console.log('vector é do tipo ' + typeof vector + '. Ele é array? R: ' + Array.isArray(vector))

// Date
const date = new Date();
console.log('Data atual: ' + date)
console.log('date é do tipo ' + typeof date)


// ###### Tamanho da string ###### 
const len = 'Meu tamanho é vinte!'
console.log('O tamanho da string é ' + len.length)

// ###### Operações com String ###### 
const course = 'Projeto Avançado'
const greetings = 'Bem vindo à disciplina '

// Concatenação
console.log('Hey! ' + greetings + course) // Com operador de concatenação
console.log(`Hey! ${greetings}${course}`) // Com template string
console.log(greetings.concat(course))// via função 

//Acessar caracter em uma posição

console.log(course.charAt(1)) // r
console.log(course[0]) // P
console.log(course.indexOf('P')) // posição de P - 0. Caso não encontrasse seria -1


//Manipulação
console.log(course.toLocaleLowerCase()) // projeto avançado
console.log(course.toUpperCase()) // PROJETO AVANÇADO
console.log(course.substring(0,2)) // Pr
console.log(course.slice(0,2)) // Pr

console.log(course.replace('Avançado', 'Avançado de Software I')) // Projeto Avançado de Software I
console.log(course.split(' ')) // ['Projeto', 'Avançado']
// Outras opções trim()...


// ###### Funções ######

const somaDeclaracao = function(a, b) {
    console.log('[logger] Executando soma...')
    return a + b
}
function somaExpressao  (a, b) { return a + b}
const somaArrow = (a,b) => { return a + b}
const somaArrowShort = (a,b) => a + b // Podemos omitir o return e os {} para one line expression
console.log('Soma declaração: ' + somaDeclaracao(2,2))
console.log('Soma expressão: ' + somaExpressao(2,4))
console.log('Soma arrow: ' + somaArrow(3,4))
console.log('Soma arrowShort: ' + somaArrowShort(6,4))

// ###### Declarações ######

{
    var notBlockScoped = 'Escopo global ou de função'
    let blockScoped = 'Escopo de bloco'
    console.log('Sou var e existo aqui - ' + notBlockScoped)
    console.log('Sou let e existo aqui - ' + blockScoped)
}
console.log('Sou var e existo aqui também - ' + notBlockScoped)
// console.log('Não existo aqui - ' + blockScoped)

const blockScopedAndReadOnly = 'Sou read-only'

// blockScopedAndReadOnly = 'Será?' // erro nesta atribuição


// ###### Operadores Lógicos e Condicionais ######
console.log(true && false) // false
console.log(true || false) // true
console.log(!true) //  false

console.log('Valor 1 == 1? R. ' + (1 == '1')) // true
console.log('Valor 1 === 1? R. ' + (1 === '1')) // false
console.log('Valor 1 != 1? R. ' + (1 != '1')) // false
console.log('Valor 1 !== 1? R. ' + (1 !== '1')) // true

const value = 12
if (value % 2 === 0) {
    console.log('valor par')
}

if (value % 2 === 0) {
    console.log('valor par')
} else {
 console.log('Valor ímpar')   
}

value % 2 === 0 ? console.log('valor par') : console.log('valor ímpar') // Operador ternário



// ###### Laços de Repetição ######
const animais = ['cachorro', 'gato', 'pássaro', 'elefante', 'girafa']

console.log('for')
for (let i = 0; i < animais.length; i++) {
    console.log(`Eu sou o ${animais[i]}`);
}

console.log('forof')
for (const elem of animais) {
    console.log(`Eu sou o ${elem}`)
}

console.log('while')
let item = 0
while (item < animais.length) {
    console.log(animais[item])
    item = item + 1
}

console.log('do-while')
item = 0
do {
    console.log(animais[item])
    item = item + 1
} while (item < animais.length);



// ###### Operações com Arrays ######

const array = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(array.length) // tamanho do array 8

array.forEach(element => console.log(element)); // 1 2 3 4 5 6 7 8

const more2 = [9, 10]
console.log(array.concat(more2)) // 1 2 3 4 5 6 7 8 9 10

array.map((element) => element % 2 === 0) // false true false true false true...

array.filter(element => element % 2 === 0) // 2, 4, 6, 8

array.reduce((acumulador, element) => acumulador + element) // 1 + 2 + 3 + 4 ...

array.find(element => element / 3 === 2) // 6 - caso não seja encontrado um item retorna undefined

array.some(element => element / 3 === 2) // Mesmo que find, porém só indica se o item existe [true, false]

array.every(element => typeof element === 'number') // true - verifica se todos os itens satisfazem o teste


// ###### Promessas ######

let p = fetch("https://swapi.dev/api/starships/?page=2")
.then((response) => response.json()) // response.json() é equivalente a return response.json()
.then((data) => console.log("Lista de naves: ", data.results)) // equivalente a 'function print(data) { console.log('Lista de naves: ', data.results) }'
.catch((e) => console.log(e));


async function callAsync() {
try {
  let res = await fetch("https://swapi.dev/api/species/?page=2");
  let speciesList = await res.json();
  console.log("Lista de espécies");
  console.log(speciesList.results);
} catch (error) {
  console.log(error);
}
}


callAsync(); // Precisamos chamar desta forma pois o uso de await exige um async anterior.