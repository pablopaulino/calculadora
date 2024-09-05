let valorAtual = '';
let operacaoAtual = '';
let valorAnterior = '';

function adicionarNumero(numero) {
    valorAtual += numero;
    atualizarDisplay();
}

function operacao(op) {
    if (valorAtual === '') return;
    valorAnterior = valorAtual;
    operacaoAtual = op;
    valorAtual = '';
}

function calcular() {
    if (valorAnterior === '' || valorAtual === '' || operacaoAtual === '') return;

    let resultado;
    const anterior = parseFloat(valorAnterior);
    const atual = parseFloat(valorAtual);

    switch (operacaoAtual) {
        case '+':
            resultado = anterior + atual;
            break;
        case '-':
            resultado = anterior - atual;
            break;
        case '*':
            resultado = anterior * atual;
            break;
        case '/':
            resultado = anterior / atual;
            break;
        default:
            return;
    }

    valorAtual = resultado.toString();
    operacaoAtual = '';
    valorAnterior = '';
    atualizarDisplay();
}

function limpar() {
    valorAtual = '';
    operacaoAtual = '';
    valorAnterior = '';
    atualizarDisplay();
}

function atualizarDisplay() {
    document.getElementById('display').value = valorAtual;
}
