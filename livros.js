const precoslivros = [{titulo:"JavaScript", preco: 25},
                      {titulo:"PHP", preco: 15},
                      {titulo:"Java", preco: 30},
                      {titulo:"GO", preco: 50},
                      {titulo:"Python", preco: 45},
                      {titulo:"Elixir", preco: 20}]

module.exports = precoslivros;


const livros = require("./listaLivros");
let maisbarato = 0;
for(let atual = 0 < livros.length;atual++){
    if(livros[atual].preco < livros[maisbarato].preco){
        maisbarato = atual
    }
}
console.log(`O livro mais barato custa ${livro[maisbarato].preco} e o titulo é ${livros[maisbarato].titulo}`)

