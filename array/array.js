function arranjo(){
    let turma = ["Alessandra", "Alexandre", "Allan"];

    console.log(turma)    
    console.log(turma[0])
    console.log(turma[1])
    console.log(turma[2])


    const frutas = [];

    frutas[0] = "Banana";
    frutas[1] = "Laranja";
    frutas[2] = "Maçã";

    console.log(frutas)

    for(i = 0; i < frutas.lenght; i++){
        console.log(i + " " + frutas[i]);        
    }
    for(i = 0; i < turma.length; i++){
        console.log(i + " " + turma[i]);
    }
    
}
arranjo();