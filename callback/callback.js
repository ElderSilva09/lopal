function callback(){
    let minhaFunc = (num1, num2, operacao) => {
        return operacao(num1, num2);
    }

    const calcular = (a, b) => {return a + b};

    console.log(minhaFunc(numb1 = 2, numb2 = 5, operacao = calcular));
}

callback();