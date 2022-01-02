
const produtos = [
    {
        id: 1,
        nome: "Relogio",
        valor: 50.78,
        quantidade: 5,
        img: "images/relogio.jpg"

    },
    {
        id: 2,
        nome: "Camisa",
        valor: 100.50,
        quantidade: 2,
        img: "images/camisa.jpg"
    } ,
    {
        id: 3,
        nome: "Livro",
        valor: 19.90,
        quantidade: 6,
        img: "images/livro.jpg"
    } ,
    {
        id: 4,
        nome: "Mochila",
        valor: 50,
        quantidade: 4,
        img: "images/mochila.jpg"

    }



]

let criarProdutos = () => {
    let painel = document.getElementById('painel');
    for(let i=0;i<produtos.length;i++){
        painel.innerHTML += `
        <div class='prod-encap'><img src=`+produtos[i].img+`>
        <h1>`+produtos[i].nome+`</h1>
        <h2>R$ `+produtos[i].valor.toFixed(2).replace('.',',')+`</h2>
        <a href='#'>Comprar agora</a>
        </div>
        `
        
    }
}

criarProdutos();