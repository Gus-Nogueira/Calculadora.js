function soma(n1, n2){
    return n1 + n2;
}

function menos(n1, n2){
    return n1 - n2;
}

function vezes(n1, n2){
    return n1 * n2;
}

function div(n1, n2){
    if (n2 == 0){
       console.log("Erro: Divisão por zero");
       return;
    }
    return n1 / n2;
}

function principal(){
    console.log("Escolha uma operação:");
    console.log("......................");
    console.log("1 - soma");
    console.log("2 - subtração");
    console.log("3 - multiplicação");
    console.log("4 - divisão");

    var operacao = prompt("Digite a operação desejada: ");

    var num1 = parseFloat(prompt("Digite o primeiro número: "));
    var num2 = parseFloat(prompt("Digite o segundo número: "));

    var resultado;

    if (operacao == 1){
        resultado = soma(num1, num2);
    } else if (operacao == 2){
        resultado = menos(num1, num2);
    } else if (operacao == 3){
        resultado = vezes(num1, num2);
    } else if (operacao == 4){
        resultado = div(num1, num2);
    } else {
        console.log("Opção inválida");
        return;
    }
    console.log(resultado);
}

principal();
