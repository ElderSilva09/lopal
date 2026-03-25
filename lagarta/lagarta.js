async function lagarta() {
    let lagarta = "( )( )( )( )( )( )( )( )( )( )(00)";
    let lagarta2 = "()()()()()()()()()()(00)";
    let espaco = "         ";
    
    

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    for (let i = 0; i < 500; i++) {
        lagarta = (espaco + lagarta);
        console.log(lagarta);
        await sleep(500);
        console.clear();        
        lagarta2 = espaco + lagarta2;
        console.log(lagarta2);
        await sleep(250);
        console.clear();

    }
}