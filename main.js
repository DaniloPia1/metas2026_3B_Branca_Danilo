const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function (){
        // Corrigido o 'let j = 0'
        for (let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        // Usando o índice 'i' do botão clicado para ativar
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Corrigido o querySelectorAll
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2028-01-01T00:00:00");
const tempoObjetivo2 = new Date("2027-05-28T00:00:00");
const tempoObjetivo3 = new Date("2027-02-23T00:00:00");
const tempoObjetivo4 = new Date("2028-08-12T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function atualizaCronometro(){
    for (let i = 0; i < tempos.length; i++){
        let tempoAtual = new Date();
        let tempoFinal = tempos[i] - tempoAtual;

        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);
        let dias = Math.floor(horas / 24);

        segundos %= 60;
        minutos %= 60;
        horas %= 24;

        if (tempoFinal > 0){
            document.getElementById(`dias${i}`).textContent = dias;
            document.getElementById(`horas${i}`).textContent = horas;
            document.getElementById(`min${i}`).textContent = minutos;
            document.getElementById(`seg${i}`).textContent = segundos;
        } else {
            document.getElementById(`dias${i}`).textContent = "0";
            document.getElementById(`horas${i}`).textContent = "0";
            document.getElementById(`min${i}`).textContent = "0";
            document.getElementById(`seg${i}`).textContent = "0";
        }
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();