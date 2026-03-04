function calculadora(){  
    while(true){  
        let resultado = 0.0;
        let operando1;
        let operando2;
        let operador;
        let continua;
        let operador_valido = true;

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
                alert("Não pode dividir por 0😢");
                continua = prompt ("Digite sim para continuar ou não para encerrar.");
                if(continua === "não"){
                    return
                }
            } else {  
                resultado = operando1 / operando2;                         
            }

        } else {
            //escreva algo😎 
            alert("Algo de errado não está certo🤔");
            operador_valido = false;
            continua = prompt("Digite sim para continuar ou não para encerrar");
            if(continua === "não"){
                return
            }
        }
        if(operador != "/" || operando2 != 0){
        alert("Resultado: " + 
            operando1 + " " + operador + " " + operando2 + " = " + resultado);
        }
    }
}       
 