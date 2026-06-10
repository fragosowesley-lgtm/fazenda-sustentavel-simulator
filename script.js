let agua = 100;
let ambiente = 100;
let producao = 100;
let dinheiro = 100;

let rodada = 0;

const eventos = [

{
pergunta: "💧 Como deseja irrigar a plantação?",
opcao1: "Usar irrigação inteligente",
opcao2: "Usar irrigação sem controle",

efeito1(){
    agua -= 10;
    producao += 15;
    ambiente += 5;
},

efeito2(){
    agua -= 30;
    producao += 20;
    ambiente -= 15;
}
},

{
pergunta: "🌱 Como deseja cuidar do solo?",
opcao1: "Rotação de culturas",
opcao2: "Plantar sempre a mesma cultura",

efeito1(){
    ambiente += 10;
    producao += 10;
},

efeito2(){
    ambiente -= 20;
    producao += 15;
}
},

{
pergunta: "🌳 O que fazer com a área de mata?",
opcao1: "Preservar a vegetação",
opcao2: "Desmatar para ampliar a área",

efeito1(){
    ambiente += 15;
},

efeito2(){
    ambiente -= 30;
    producao += 20;
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

    rodada++;

    atualizarBarras();

    if(rodada < eventos.length){
        carregarEvento();
    }else{
        finalizar();
    }
}

function finalizar(){

    let resultado = "";

    if(ambiente >= 100 && producao >= 120){
        resultado = "🏆 Fazenda Modelo Sustentável";
    }
    else if(ambiente >= 80){
        resultado = "🌱 Produtor Consciente";
    }
    else{
        resultado = "⚠️ Crise Ambiental";
    }

    document.getElementById("evento").innerHTML = `
        <h2>${resultado}</h2>
        <p>Água: ${agua}</p>
        <p>Meio Ambiente: ${ambiente}</p>
        <p>Produção: ${producao}</p>
        <p>Dinheiro: ${dinheiro}</p>

        <br>

        <button onclick="location.reload()">
            Nova Simulação
        </button>
    `;
}
