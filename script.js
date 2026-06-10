let agua = 100;
let ambiente = 100;
let producao = 100;
let dinheiro = 100;

let rodada = 0;
let historico = [];
const eventos = [

{
pergunta: "💧 Como deseja irrigar a plantação?",
opcao1: "Usar irrigação inteligente",
opcao2: "Usar irrigação sem controle",

efeito1(){
    agua -= 10;
    producao += 15;
    ambiente += 5;
    dinheiro += 10;
},

efeito2(){
    agua -= 30;
    producao += 20;
    ambiente -= 15;
    dinheiro -= 5;
}
},

{
pergunta: "🌱 Como deseja cuidar do solo?",
opcao1: "Rotação de culturas",
opcao2: "Plantar sempre a mesma cultura",

efeito1(){
    ambiente += 10;
    producao += 10;
    dinheiro += 5;
},

efeito2(){
    ambiente -= 20;
    producao += 15;
    dinheiro -= 5;
}
},

{
pergunta: "🌳 O que fazer com a área de mata?",
opcao1: "Preservar a vegetação",
opcao2: "Desmatar para ampliar a área",

efeito1(){
    ambiente += 15;
    dinheiro += 5;
},

efeito2(){
    ambiente -= 30;
    producao += 20;
    dinheiro -= 5;
}
}
,
{
pergunta: "☀️ Como deseja obter energia para a fazenda?",

opcao1: "Instalar painéis solares",

opcao2: "Utilizar apenas geradores antigos",

efeito1(){
    ambiente += 15;
    dinheiro += 20;
},

efeito2(){
    ambiente -= 15;
    dinheiro -= 10;
}
},

{
pergunta: "🚁 Como monitorar a plantação?",

opcao1: "Utilizar drones e sensores",

opcao2: "Fazer inspeção sem tecnologia",

efeito1(){
    producao += 20;
    dinheiro += 15;
},

efeito2(){
    producao -= 10;
}
}
];

const telaInicial = document.getElementById("telaInicial");
const jogo = document.getElementById("jogo");

const pergunta = document.getElementById("pergunta");
const opcao1 = document.getElementById("opcao1");
const opcao2 = document.getElementById("opcao2");

document.getElementById("btnIniciar").onclick = iniciar;

function iniciar(){

    telaInicial.style.display = "none";
    jogo.style.display = "block";

    atualizarBarras();
    carregarEvento();
}

function atualizarBarras(){

    document.getElementById("agua").style.width = agua + "%";
    document.getElementById("ambiente").style.width = ambiente + "%";
    document.getElementById("producao").style.width = producao + "%";
    document.getElementById("dinheiro").style.width = dinheiro + "%";
    document.getElementById("textoAgua").innerHTML =
"💧 Água: " + agua;

document.getElementById("textoAmbiente").innerHTML =
"🌳 Meio Ambiente: " + ambiente;

document.getElementById("textoProducao").innerHTML =
"🌾 Produção: " + producao;

document.getElementById("textoDinheiro").innerHTML =
"💰 Dinheiro: " + dinheiro;
}

function carregarEvento(){

    pergunta.innerHTML = eventos[rodada].pergunta;

    opcao1.innerHTML = eventos[rodada].opcao1;
    opcao2.innerHTML = eventos[rodada].opcao2;
}

opcao1.onclick = () => escolher(1);
opcao2.onclick = () => escolher(2);

function escolher(opcao){

    if(opcao === 1){
        eventos[rodada].efeito1();
    }else{
        eventos[rodada].efeito2();
    }
if(opcao === 1){
    historico.push(eventos[rodada].opcao1);
}else{
    historico.push(eventos[rodada].opcao2);
}
    rodada++;

eventoAleatorio();

atualizarBarras();

    if(rodada < eventos.length){
        carregarEvento();
    }else{
        finalizar();
    }
}function eventoAleatorio(){

    const sorteio = Math.floor(Math.random() * 3);

    if(sorteio === 0){

        alert("☀️ Seca! A fazenda perdeu água.");

        agua -= 15;
    }

    else if(sorteio === 1){

        alert("🌧️ Chuva Favorável! A produção aumentou.");

        producao += 10;
    }

    else{

        alert("🐛 Pragas atacaram a plantação!");

        producao -= 10;
        dinheiro -= 5;
    }

    atualizarBarras();
}

function finalizar(){

    let resultado = "";
    let medalha = "";

    if(ambiente >= 100 && producao >= 120){

        resultado = "Fazenda Modelo Sustentável";
        medalha = "🥇";

    }else if(ambiente >= 80){

        resultado = "Produtor Consciente";
        medalha = "🥈";

    }else if(ambiente >= 60){

        resultado = "Fazenda em Desenvolvimento";
        medalha = "🥉";

    }else{

        resultado = "Crise Ambiental";
        medalha = "⚠️";
    }
let listaHistorico = "";

for(let escolha of historico){

    listaHistorico += `<p>✅ ${escolha}</p>`;
}
    document.getElementById("evento").innerHTML = `
<div class="resultadoFinal">

<h2>${medalha} ${resultado}</h2>

<hr>

<p>💧 Água: ${agua}</p>

<p>🌳 Meio Ambiente: ${ambiente}</p>

<p>🌾 Produção: ${producao}</p>

<p>💰 Dinheiro: ${dinheiro}</p>

<br>
<h3>📜 Histórico da Simulação</h3>

${listaHistorico}

<br>
<button onclick="location.reload()">
Nova Simulação
</button>

</div>
`;
