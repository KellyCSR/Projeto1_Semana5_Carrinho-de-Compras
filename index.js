console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras ')
console.log('        Kelly C. S. Ricardo ')
console.log('--------------------------------------')

//Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior).

const dataBase = require('./database')
const {produtos} = dataBase

produtos.sort((a, b) => a.preco - b.preco)
console.log('--------------------------------------')
console.log('     PRODUTOS DISPONÍVEIS: ')
console.log('--------------------------------------')

console.table(produtos)

const read = require('readline-sync')

const carrinho = []

console.log('--------------------------------------') 

const verProdutos = read.question('Voce deseja encontrar produtos por categoria? (S/N): ')
if(verProdutos.toUpperCase() === 'S') {
    console.log('--------------------------------------')
    console.log('Essas são as categorias disponíveis:')
    console.log('Alimento, Bebida, Casa, Higiene, Informática')
    console.log('--------------------------------------')

const escolherCategoria = read.question('Voce procura produtos de qual categoria?')
const categorias = produtos.filter(item => item.categoria === escolherCategoria)
    console.table(categorias);

} else{   (verProdutos.toUpperCase() !== 'S')
    console.log('Esses são todos os produtos disponíveis:')
      console.log('--------------------------------------')
      console.table(produtos)
}
  
// Calcular o valor do subtotal (sem considerar o desconto)

const array = new Array()

class Pedido {
    constructor(array){
        this.products = array
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItens = 0
    }
}
// //Receber via terminal as entradas de id e quantidade dos produtos a serem adquiridos.
const compras = () => {
    productID = parseInt(read.question('Informe o ID do produto desejado: '))

//validar o ID
     for (i = 0; i < 1000; i++){
encontrandoId = produtos.find(item => item.id === productID)
    if(encontrandoId) {
        break
    } else{
        productID = parseInt(read.question('ID nao encontrado. Tente novamente.'))
    }
     }
                
quantidadeDeItens = parseInt(read.question('Digite a quantidade de produtos desejada:'))

// validar a quantidade
for (i = 0; i < 1000; i++){
    if(quantidadeDeItens > 0){
        break
    }else{
        quantidadeDeItens = parseInt(read.question('Digite uma quantidade valida: '))
    }
    }

//adicionar os produtos
const produtosCarrinho = {...encontrandoId, quantidade: quantidadeDeItens}
carrinho.push(produtosCarrinho)

//Validação para cliente continuar comprando - checar se possui cumpom e valor
const compreMais = read.question('Deseja inserir mais algum produto no carrinho? (S/N)')
const formatoCompreMais = compreMais.toLowerCase()
if(formatoCompreMais === 'n'){

cupomCheck = (read.question('Voce possui cumpom de desconto? (S/N)'))
const cupomEscolhido = cupomCheck.toLowerCase()
    if(cupomEscolhido === 's'){
    cupom = parseInt(read.question('Digite o valor do cumpom de desconto: '))
}
}else{
    compras()
}

//validar o cumpom
for (i = 0; i < 1000; i++) {
    if(cupom > 15 || cupom < 0){
        cupom = parseInt(read.question('Lamento, cupom invalido! Tente novamente! '))
    } else{
        break
    }
}
}

compras()
class Order {
    constructor(carrinho){
    this.newProducts = carrinho
    this.subTotal = 0
}
calcSubtotal(){
    this.subTotal = this.newProducts.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0)
}
}

const order = new Order (carrinho)
console.table(order.newProducts)

//calcular o subtotal
order.calcSubtotal()
console.log(`Valor do pedido é R$: ${order.subTotal.toFixed(2)}.`)

//calcular desconto
const desconto = order.subTotal * (cupom/100)
console.log(`Valor do desconto é R$: ${desconto.toFixed(2)}.`);

//cacular o total com desconto
const total = order.subTotal - desconto
console.log(`Valor total é R$: ${total.toFixed(2)}.`)
console.log('--------------------------------------')
console.log('   COMPRA FINALIZADA      ')
console.log('--------------------------------------')
console.log('Obrigada por comprar conosco. Volte sempre!')
console.log('--------------------------------------')
