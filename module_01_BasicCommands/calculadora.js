var nomeCalculadora = 'Calculator V1';//Tbm posso exportar variaveis

//Posso exportar funções
function soma(a,b) {
    return a + b;
}

function subtracao(a,b) {
    return a - b;
}

function div(a,b) {
    return a / b;
}

function mult(a,b) {
    return a * b;
}

module.exports = {
    soma,
    subtracao,
    div,
    mult,
    nomeCalculadora
}