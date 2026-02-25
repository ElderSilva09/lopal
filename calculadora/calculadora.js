function calculadora(){  
    while(true){  
        let resultado = 0.0;
        let operando1;
        let operando2;
        let operador;

        operando1 = parseFloat( prompt("Digite o primeiro número: ") );
        operando2 = parseFloat( prompt("Digite o segundo número: ") );
        operador = prompt("Digite uma das operações ( + - * / ): ");

        if ( operador === "+") {
            resultado = operando1 + operando2;
        } else if (operador === "-" ){
            resultado = operando1 - operando2;
        } else if (operador === "*" ){
            resultado = operando1 * operando2;
        }  else if (operador === "/" ){
            if (operando2 == 0){
                alert("Não pode dividir por 0😢")
            }
            resultado = operando1 / operando2;
        } else {
            //escreva algo😎 
            alert("Algo de errado não está certo🤔")
            return
        }
        alert("Resultado: " + 
            operando1 + " " + operador + " " + operando2 + " = " + resultado);
    }
}       
 