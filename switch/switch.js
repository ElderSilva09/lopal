function meuSwitch(){

    let dia;
    let data = new Date().getDay();

    switch(data){
        case 0:
            dia = "Domingo";
            break;
        case 2:
        case 3:
        case 4:
            dia = "meio da semana";
            break;
        case 6:
            dia = "Sábado";
            break;
        default:
            dia = "Segunda ou Sexta";
            
            
    }
    /*if (data == 0){
        dia = "Domingo";
    }else if (data == 1){
        dia = "Segunda-feira";
    }else if (data == 2){
        dia = "Terça-feira";
    }else if (data == 3){
        dia = "Quarta-feira";
    }else if (data == 4){
        dia = "Quinta-feira";
    }else if (data == 5){
        dia = "Sexta-feira";
    }else (data == 6){
        dia = "Sábado";
    }*/
    document.getElementById("demo").innerHTML = "Hoje é " + dia;
}