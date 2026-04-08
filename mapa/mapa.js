function mapa(){
    const frutas = new Map();

    frutas.set("Maçã", 500);
    frutas.set("Banana", 300);
    frutas.set("Laranja", 200);
    frutas.set("Pera", 200);

    let preco = frutas.get("pera");
    
    console.log(preco);
}
mapa();