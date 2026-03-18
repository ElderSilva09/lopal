function urna(){
    let candidato_Russel = 0;
    let candidato_Norris = 0;
    let brancos = 0;
    let nulos =0;
    let total =0;
    let porcent_cand_Russel;
    let porcent_cand_Norris;
    let porcent_brancos;
    let porcent_nulos
    let voto;

    do{
        voto = prompt("Escolha seu candidato ou tecle zero para encerrar\n" + 
            "  1 -> Candidato Russel\n" + 
            "  2 -> Candidato Norris\n" +
            "  3 -> Branco\n" +
            "\nQualquer numero diferente de 0, 1, 2 e 3 anulará seu voto\n" +
        "Digite seu voto: ");

        if( voto == "0"){
            alert("Votação encerrada")
        } else if ( voto == "1" ){
            //candidato_Russel = candidato_Russel + 1;
            //candidato_Russel++
            ++candidato_Russel;
            //alert("O candidato Russel tem " + candidato_Russel + " votos.")
        }else if ( voto == "2" ){
            ++candidato_Norris;
            //alert("O candidato Norris tem " + candidato_Norris + " votos.")
        }else if ( voto == "3" ){
            ++brancos;
        }else {
            ++nulos;
        }

    }while(voto != 0);

        total = candidato_Russel + candidato_Norris + brancos + nulos;

    if( total > 0){

        porcent_cand_Russel = (candidato_Russel * 100) / total;
        porcent_cand_Norris = (candidato_Norris * 100) / total;
        porcent_brancos = (brancos * 100)/total;
        porcent_nulos = (nulos * 100) / total;

        alert("Total de votos: " + total + "\n" +
            "Candidato Russel: " + candidato_Russel + "voto(s) - " + 
            porcent_cand_Russel + "% do total. \n" +
            "Candidato Norris: " + candidato_Norris + "voto(s) - " + 
            porcent_cand_Norris + "% do total. \n" +
            "Brancos: " + brancos + " voto(s). " + 
            porcent_brancos + "% do total. \n" +
            "Nulos: " + nulos + " voto(s). " + 
            porcent_nulos + "% do total. \n"
        );
    }
}