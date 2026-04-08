function mapa(){
    const frutas = new Map();

    frutas.set("Maçã", 499);
    frutas.set("Banana", 299);
    frutas.set("Laranja", 199);
    frutas.set("Pera", 139);
    frutas.set("Mamão", 399);
    frutas.set("Abacaxi", 999);
    frutas.set("Melancia", 1499);
    frutas.set("Uva", 799);
    frutas.set("Morango", 599);
    frutas.set("Abacate", 999);
    frutas.set("Limão", 149);
    frutas.set("Coco", 169);
    frutas.set("Maracujá", 499);
    frutas.set("Goiaba", 349);

    let preco = frutas.get("pera");
    console.log(preco);

    //size é uma propriedade que armazena o tamanho do mapa e 
    console.log(frutas.size);

    //O método has() retorna um valor booleano indicando se 
    // um elemento com o valor especificado existe ou não no mapa.
    console.log(frutas.has("Mamão"));
    frutas.forEach((valor, chave) => console.log(`${chave} = R$${valor},90`));

    //O método keys() retorna uma coleção com as chaves do mapa
    // A estrutura de repetição for of intera sobre os valores de uma coleção
    for (const x of frutas.keys()) {
        console.log(x);
    }

    //values() é um método que retorna uma coleção com os valores do mapa
    for (const x of frutas.values()) {
        console.log(x);
    }



}
mapa();