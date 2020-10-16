const { nomeCalculadora } = require("./calculadora");
//Abordando module no node
var calculadora = require("./calculadora");

calculadora.nomeCalculadora = 'Calculator V2';//Tbm posso setar o valor dele nesse escopo

var calculatorName = calculadora.nomeCalculadora;
var resultadoSoma = calculadora.soma(10,20);
var resultadoSubtracao = calculadora.subtracao(20,2);
var resultadoDiv = calculadora.div(40,2);
var resultadoMult = calculadora.mult(30,2);

console.log(calculatorName)
console.log('Soma '.concat(resultadoSoma));
console.log('Subtração '.concat(resultadoSubtracao));
console.log('Divisão '.concat(resultadoDiv));
console.log('Multiplicação '.concat(resultadoMult ));