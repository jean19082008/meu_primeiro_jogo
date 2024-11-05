// variaveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

// velocidade do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

// variaveis da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
} 

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

// placar jogo
let meusPontos = 0;
let pontosDoOponente =0;
//sons do jogo 
let raquetada;
let ponto;
let trilha;

let chanceDeErro = 0;

let colidiu = false;

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  rect (x, y, raqueteComprimento, raqueteAltura);
}
function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -=10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete +=10;
  }
}

function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + raqueteComprimento &&
    yBolinha - raio < yRaquete + raqueteAltura &&
    yBolinha + raio > yRaquete
  ) {
    velocidadeXBolinha *= yRaquete
  }
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(
    x, y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio
  );
  if (colidiu) {
    velocidadeXBolinha *= -1;
  }
}

function movimentaRaqueteOponente() { 
   velocidadeYOponente = 
     yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
   yRaqueteOponente += velocidadeYOponente + chanceDeErro;
  calculaChanceDeErro()
} 

function incluiPlacar() { 
   fill(255);
   textAlign(CENTER);
   textSize(16);
   fill(color(255, 140, 0));
   rect(150, 10, 40, 20);
   fill(255);
   text(meusPontos, 170, 26);
   fill(color(255,140, 0));
   rect(450, 10, 40, 20);
   fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPonto () { 
  if (xBolinha > 590)  { 
    meusPontos += 1;
    ponto.play(); 
  }
  if (xBolinha < 15) {
    pontosDoOponente +=1;
    ponto.play();
  }
}

function calculaChanceDeErro() {

if (pontosDoOponente >= meusPontos) {

chanceDeErro += 1;

if (chanceDeErro >= 39) {

chanceDeErro = 40;

}

 } else {

chanceDeErro -= 1;

if (chanceDeErro <= 35) {

chanceDeErro = 35;

 }

}function calculaChanceDeErro() {

if (pontosDoOponente >= meusPontos) {

chanceDeErro += 1;

if (chanceDeErro >= 39) {

chanceDeErro = 40;

}

 } else {

chanceDeErro -= 1;

if (chanceDeErro <= 35) {

chanceDeErro = 35;

 }

}

 }

 }
