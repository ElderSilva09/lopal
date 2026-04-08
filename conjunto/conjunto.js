function conjunto(){
    const letras = new Set();
    letras.add("a");
    letras.add("b");
    letras.add("c");
    letras.add("d");
    letras.add("e");

    console.log(letras.has("g"));

    //delete() método para eliminar um elemento do conjunto
    letras.delete("c");
    console.log(letras);

    
    for (const x of letras.values()) {
        console.log(x);
    }

    for (const x of letras.keys()) {
        console.log(x);
    }

}
conjunto();