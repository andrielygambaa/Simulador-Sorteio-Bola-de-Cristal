// Função chamada quando o usuário clica no botão "Tentar a Sorte"
function tentar(){

// Pega o valor digitado no input com id "numero"
// parseInt converte o texto do input para número inteiro
let numeroUsuario = parseInt(document.getElementById("numero").value)


// Verifica se o número digitado é menor que 1 ou maior que 10
// Caso seja inválido, mostra uma mensagem na tela
if(numeroUsuario < 1 || numeroUsuario > 10){

// Exibe mensagem dentro do elemento com id "resultado"
document.getElementById("resultado").innerHTML = "Escolha um número entre 1 e 10"

// "return" encerra a função aqui para não continuar executando o restante
return
}


// Variável que vai contar quantas tentativas o computador fez
let tentativas = 0

// Variável que guarda o número sorteado pelo computador
let numeroSorteado = 0


// Loop while
// Enquanto o número sorteado for diferente do número do usuário
// o computador continua tentando
while(numeroSorteado !== numeroUsuario){

// Gera um número aleatório entre 1 e 10
// Math.random() gera número entre 0 e 1
// *10 transforma em 0 a 9
// +1 transforma em 1 a 10
numeroSorteado = Math.floor(Math.random()*10) + 1

// A cada tentativa o contador aumenta em 1
tentativas++

}


// Quando o computador finalmente "acerta" o número,
// o resultado aparece na tela
document.getElementById("resultado").innerHTML =

// Mostra quantas tentativas foram necessárias
"O computador precisou de <b>" + tentativas + "</b> tentativas para descobrir seu número 🔮"

}