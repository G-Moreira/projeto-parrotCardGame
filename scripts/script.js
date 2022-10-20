let qtdCartas = Number(prompt("Digite com quantas cartas quer jogar, com números pares de 4 a 14:"));

let qtdInvalida= !( (qtdCartas >= 4) && (qtdCartas <= 14) && (qtdCartas % 2 === 0) );

while (qtdInvalida){
    alert("Essa quantidade não é válida.");
    qtdCartas = Number(prompt("Digite com quantas cartas quer jogar, com números pares de 4 a 14:"));
    qtdInvalida= !( (qtdCartas >= 4) && (qtdCartas <= 14) && (qtdCartas % 2 === 0) );
}

let cartasDisponiveis = [
    "./img/bobrossparrot.gif",
    "./img/explodyparrot.gif",
    "./img/fiestaparrot.gif",
    "./img/metalparrot.gif",
    "./img/revertitparrot.gif",
    "./img/tripletsparrot.gif",
    "./img/unicornparrot.gif"
];
let parDeCartas = [];


for (let i = 0; i < (qtdCartas / 2) ; i++){
    parDeCartas.push(cartasDisponiveis[i]);
    parDeCartas.push(cartasDisponiveis[i]);
}

parDeCartas.sort(sortearCartas);

function sortearCartas() { 
	return Math.random() - 0.5; 
}

for (let i = 0; i < qtdCartas ; i++){
    const areaDoJogo = document.querySelector(".jogo");
    
    areaDoJogo.innerHTML += `
    <div class="carta">
        <img class="carta-frente esconder" src="${parDeCartas[i]}">
        <img class="carta-tras" src="./img/back.png">
    </div>
    `; 
}
