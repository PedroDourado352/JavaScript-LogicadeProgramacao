///Um array (ou vetor) é uma estrutura de dados fundamental usada para armazenar uma coleção ordenada de elementos (valores ou objetos) em uma única variável.

const friends = ['Marcos', 'Sofia', 'Diego', 'Valentina', 'Matias'];
const num = [1, 2, 3, 4, 5];

console.log(friends)
console.log(num)


const num1 = [7, 8, 9, 10];

num1.push(6);
num1.unshift(11);
num1.splice(3, 0, 12);

console.log(num1)

const num2 = [13, 14, 15, 16, 17];

console.log(num2.indexOf(14)) //procurar um elemento
console.log(num2.includes(14)) //verificar se um elemento existe

//Localizando itens em uma array de referência

const movies = [ 
    {id: 1, moviename: 'The Shawshank Redemption'},
    {id: 2, moviename: 'The Godfather'},
    {id: 3, moviename: 'The Dark Knight'},
    {id: 4, moviename: 'Pulp Fiction'},
    {id: 5, moviename: 'The Lord of the Rings: The Return of the King'}
]

console.log(movies)
console.log(movies.find(function(movie) {
    return movie.moviename === 'Pulp Fiction';
}))

console.log(movies)
console.log(movies.find(movie => movie.moviename === 'The Godfather'));


///Remover idens de uma aray

const num3 = [18, 19, 20, 21, 22]; ///array original
const final = num3.pop()  //remove o último item da array e retorna ele
const first = num3.shift() //remove o primeiro item da array e retorna ele
const middle = num3.splice(1, 1) //remove um item do meio da array e retorna ele

console.log(num3)   //mostra a array sem o item removido
console.log(final)  //mostra o item removido

////Esvaziando uma Array

let num4 = [23, 24, 25, 26, 27];

//num4 []

num4.splice(0, num4.length)

console.log(num4)


////concatenando uma array

let numbers = [28, 29, 30, 50, 90];
let letters = ['a', 'b', 'c'];

all = numbers.concat(letters)
half = all.slice(3, 5)

console.log(all)
console.log(half)

///Join array 

let clients = ['Alice', 'Bob', 'Charlie'];

console.log(clients)

let clientsJoins = clients.join(', ')

console.log(clientsJoins)

///Reverse array

let colors = ['red', 'green', 'blue', 'yellow', 'purple'];

colors.sort() //ordena a array em ordem alfabética
console.log(colors)

let colors2 = ['red', 'green', 'blue', 'yellow', 'purple'];

colors2.reverse() //inverte a ordem dos itens da array
console.log(colors2)

///Verificando elementos em uma array

const tempLondon = [15, 17, 20, 22, 25];

const tempPositive = tempLondon.every(function(value) {
    return value > 0;
}); //verifica se todos os itens da array são maiores que 0

console.log(tempPositive);

const tempLondon2 = [15, 17, 20, 22, 25];

const tempPositive2 = tempLondon2.filter(function(value) {
    return value > 0;
}); //filtra os itens da array que são maiores que 0 e retorna uma nova array com esses itens

console.log(tempPositive2);
