function idade(){
    let idade;
    do{
        idade = parseInt(prompt("Informe sua idade (valores aceitos de 4 a 150) "));
    }while(idade < 4 || idade > 150 || Number.isNaN(idade) );
    alert("Idade validada.");


}