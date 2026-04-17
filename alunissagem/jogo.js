//Jogo da Alunissagem
//Elder Silva
//08/04/2026
//Versão 0.1.0
/** @type {HTMLCanvasElement} */


//Modelo
let canvas = document.querySelector("#jogo");
let ctx = canvas.getContext("2d");
const gravidade = 0.01;
let lancamento = (Math.round(Math.random()) == 0);//  Variavel booleana pseudoaleatoria para decidir se o 
//                                                    módulo lunar começa do lado esquerdo ou direito da tela
let estrelas = [];
for (let i = 0; i < 500; i++){
    estrelas[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        raio: Math.sqrt(2 * Math.random()),
        brilho: 1.0,
        apagando: true,
        cintilacao: 0.05 * Math.random()
    }
}

let moduloLunar = {
    posicao: {
        x: lancamento ? 100 : 700,
        y: 100
    },
    angulo: lancamento ? -Math.PI / 2 : Math.PI / 2,
    largura: 20,
    altura: 20,
    cor: "#008080",
    velocidade: {
        x: lancamento ? 2 : -2,
        y: 0
    },
    motorLigado: false,
    combustivel: lancamento ? 1000 : 900,
    rotacaoAntiHorario: false,
    rotacaoHorario: false
}

//Visualização
function mostrarAngulo() {
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "left";
    ctx.testBaseline = "middle";
    ctx.fillStyle = "lightgray";
    ctx.fillText(
        `Ângulo: ${(moduloLunar.angulo * 180 / Math.PI).toFixed(0)}°`,
        400,
        40
    );
}

function mostrarIndicador(mensagem, x, y) {
    ctx.font = "bold 18px Arial";
    ctx.textAlign = "left";
    ctx.testBaseline = "middle";
    ctx.fillStyle = "lightgray";
    ctx.fillText(
        mensagem,
        x,
        y
    );
}

function mostrarAltitude() {
    mostrarIndicador(
    `Altitude: ${(canvas.height - moduloLunar.posicao.y - 0.5 * moduloLunar.altura).toFixed(0)}`,
     400, 
     60,
     
    );
}

function mostrarVelocidadeVertical() {
    mostrarIndicador(
        `Velocidade Vertical: ${(moduloLunar.velocidade.y * 10).toFixed(2)}`,
        50,
        40
    );
}

function mostrarVelocidadeHorizontal() {
    mostrarIndicador(
        `Velocidade Horizontal: ${(moduloLunar.velocidade.x * 10).toFixed(2)}`,
        50,
        60
    );
}

function mostrarCombustivel() {
    mostrarIndicador(
        `Combustível: ${(moduloLunar.combustivel / 10).toFixed(0)} %`,
        50,
        80
    );
}

function mostrarResultado(mensagem, cor) {
    ctx.font = "bold 24px Calibri";
    ctx.textAlign = "center";
    ctx.fillStyle = cor;
    ctx.fillText(mensagem, canvas.width / 2, canvas.height / 2);
}

function desenharEstrelas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.fillStyle = "#03032a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < estrelas.length; i++){
        let estrela = estrelas[i];
        ctx.beginPath();
        ctx.arc(estrela.x, estrela.y, estrela.raio, 0, 2 * Math.PI );
        ctx.closePath();
        ctx.fillStyle = `rgba(255, 255, 255, ${estrela.brilho})`;
        ctx.fill();
        if(estrela.apagando){
            estrela.brilho -= estrela.cintilacao;
            if (estrela.brilho <= 0.1){
                estrela.apagando = false;
            }
        } else{
            estrela.brilho += estrela.cintilacao;
            if(estrela.brilho > 0.95){
                estrela.apagando = true
            }
        }
    }
    ctx.restore();
}

function desenharModuloLunar() {
    //desenhar módulo lunar
    //ctx = contexto de desenho do canvas
 //Retângulo Fogute
    ctx.save();
    ctx.beginPath();
    ctx.translate(moduloLunar.posicao.x, moduloLunar.posicao.y);
    ctx.rotate(moduloLunar.angulo);
    ctx.rect(moduloLunar.largura * -0.5, moduloLunar.altura * -0.4,
                  moduloLunar.largura, moduloLunar.altura * 1.6);
    ctx.fillStyle = moduloLunar.cor;
    ctx.fill();
    //Janela da Nave
    ctx.beginPath();
    ctx.arc(0, moduloLunar.altura * 0.1, moduloLunar.largura * 0.2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = 'lightblue'
    ctx.fill();
    //Triângulo Foguete
        ctx.beginPath();
    ctx.moveTo(moduloLunar.largura * 0.5, moduloLunar.altura * -0.4);
    ctx.lineTo(moduloLunar.largura * -0.5, moduloLunar.altura * -0.4)
    ctx.lineTo(0, moduloLunar.altura *-1.1);
    ctx.closePath();
    ctx.fillStyle = 'gray'
    ctx.fill();
     //Base Foguete
        ctx.beginPath();
         ctx.rect(moduloLunar.largura * -0.5, moduloLunar.altura * 1.11,
                  moduloLunar.largura * 1, moduloLunar.altura * 0.1);
        ctx.closePath();
        ctx.fillStyle = 'red'
        ctx.fill();
    
    if (moduloLunar.motorLigado) {
        desenharChama();
        consumirCombustivel();
    }


    ctx.restore();
}

function desenharChama() {
        ctx.beginPath();
    //desenhar linha da base do fogo no canto inferior esquerdo do módulo lunar
    ctx.moveTo(moduloLunar.largura * -0.5, moduloLunar.altura * 1.2);
    //desenhar linha da base do fogo no canto inferior direito do módulo lunar
    ctx.lineTo(moduloLunar.largura * 0.5, moduloLunar.altura * 1.2);

    //tamanho da chama
    //desenha uma linha de posição y aleatória entre a base do módulo e 35 pixels
    ctx.lineTo(0, moduloLunar.altura * 1 + Math.random() * 45);
    ctx.closePath();
    ctx.fillStyle = "orange"; //desenha automaticamente a chama do motor
    ctx.fill();
}


function desenharFundo() {
//desenhar fundo da tela
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.fillStyle = "#03032a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}

function desenhar() {
    atracaoGravitacional();

    desenharEstrelas();
    desenharModuloLunar();
    mostrarVelocidadeVertical();
    mostrarVelocidadeHorizontal();
    mostrarCombustivel();
    mostrarAltitude();
    mostrarAngulo();
    
    if(encerrarJogo()) {
        return;
    }

    /*if (moduloLunar.posicao.y > canvas.height - moduloLunar.altura * 0.5) {
        if(moduloLunar.velocidade.y <= 0.5 && Math.abs(moduloLunar.velocidade.x) <= 0.5 && Math.abs(moduloLunar.angulo) <= 5) {
            //você ganhou!
            mostrarResultado("Parabéns, você conseguiu pousar o módulo lunar com segurança!🎉🥳🎉", cor = "#1ca700");
        } else {
            //você perdeu
            mostrarResultado("Você não conseguiu pousar o módulo lunar com segurança. Tente novamente!😢", cor = "#ff0000");
        }
        return
    }*/
    requestAnimationFrame(desenhar);
}

//Controle


function encerrarJogo() {
    if (moduloLunar.posicao.y > canvas.height - moduloLunar.altura * 0.5) {
        if(moduloLunar.velocidade.y <= 0.5 && Math.abs(moduloLunar.velocidade.x) <= 0.5 && Math.abs(moduloLunar.angulo) <= 5) {
            //você ganhou!
            mostrarResultado("Parabéns, você conseguiu pousar o módulo lunar com segurança!🎉🥳🎉", cor = "#1ca700");
        } else {
            //você perdeu
            mostrarResultado("Você não conseguiu pousar o módulo lunar com segurança. Tente novamente!😢", cor = "#ff0000");
        }
        return true
}
    return false
}

document.addEventListener("keydown", teclaPressionada);

function teclaPressionada(evento) {
    if (evento.key === "ArrowUp" && moduloLunar.combustivel > 0){
        moduloLunar.motorLigado = true;
        moduloLunar.velocidade.y -= 0.02;
    } else if (evento.key === "ArrowRight") {
        moduloLunar.rotacaoHorario = true;
    } else if (evento.key === "ArrowLeft") {
        moduloLunar.rotacaoAntiHorario = true;
    }
}

document.addEventListener("keyup", teclaSolta);
function teclaSolta(evento) {
    if (evento.key === "ArrowUp"){
        moduloLunar.motorLigado = false;
    } else if (evento.key === "ArrowRight") {
        moduloLunar.rotacaoHorario = false;
    } else if (evento.key === "ArrowRight") {
        moduloLunar.rotacaoHorario = false;
    } else if (evento.key === "ArrowLeft") {
        moduloLunar.rotacaoAntiHorario = false;
    }
}

function consumirCombustivel() {
    moduloLunar.combustivel --;
    if (moduloLunar.combustivel <= 0) {
        moduloLunar.motorLigado = false;
    }
}

function atracaoGravitacional() {
    //atração gravitacional
    moduloLunar.posicao.x += moduloLunar.velocidade.x;
    moduloLunar.posicao.y += moduloLunar.velocidade.y;
    moduloLunar.velocidade.y += gravidade;

    if (moduloLunar.rotacaoHorario) {
        moduloLunar.angulo += Math.PI / 180;
    } else if (moduloLunar.rotacaoAntiHorario) {
        moduloLunar.angulo -= Math.PI / 180;
    }

    if (moduloLunar.motorLigado) {
        moduloLunar.velocidade.y -= 0.0125 * Math.cos(moduloLunar.angulo);
        moduloLunar.velocidade.x += 0.0125 * Math.sin(moduloLunar.angulo);
    }
}

desenhar();
