// estrutura de decisão if, else if e else

// Revisão
// o que é uma variável?
// Quais são os tipos de variáveis
// Comando de entrada e saida de dados

//  console.log("olá mundo")
//  let nome = prompt("digite seu nome")
//  alert("seu nome é ".concat(nome))

// let num1 = 5
// let num2 = "5"

// let logico = num1 == num2

// console.log(logico)
// // tipo lógico


// let maiorDeidade = true

// if(maiorDeIdade){
//     console.log("Você é maior de idade");
// }
// else{
//     console.log("Você é menor de idade");
// }

// let idadeUsuario = Number(prompt("Digite a sua idade"));

// if (idadeUsuario >= 19) {
//     console.log("Maior de idade");
// } else {
//     console.log("Menor de idade");
// }

// let valor = Number(prompt("Digite um valor monetário:"));

// if (valor > 0) {
//     console.log("Seu saldo é positivo!");
// }
//  else if (saldo === 0) {
//     console.log("saldo zerado");
// }
// else{
//     console.log("Saldo negativo")
// }



let idade = Number(prompt("Digite sua idade"))

if (idade < 12) {
    console.log("Você é uma criança.");
} 

else if (idade < 18) {
    console.log("Você é um adolescente.");
}

else if (idade < 60) {
    console.log("Você é um adulto.");
}

else {
    console.log("Você é um idoso.");
}