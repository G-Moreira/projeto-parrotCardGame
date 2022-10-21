// Quantidade de cartas que o usuário deseja no jogo
let qtdCartas = Number(prompt("Digite com quantas cartas quer jogar, com números pares de 4 a 14:")); 

// Validação do numero de cartas que o usuário escolheu
let qtdInvalida= !( (qtdCartas >= 4) && (qtdCartas <= 14) && (qtdCartas % 2 === 0) );

// Enquanto não for válido a quantidade de cartas perguntar novamente
while (qtdInvalida){
    alert("Essa quantidade não é válida.");
    qtdCartas = Number(prompt("Digite com quantas cartas quer jogar, com números pares de 4 a 14:"));
    qtdInvalida= !( (qtdCartas >= 4) && (qtdCartas <= 14) && (qtdCartas % 2 === 0) );
}

// Repositório de cartas
let cartasDisponiveis = [
    "./img/bobrossparrot.gif",
    "./img/explodyparrot.gif",
    "./img/fiestaparrot.gif",
    "./img/metalparrot.gif",
    "./img/revertitparrot.gif",
    "./img/tripletsparrot.gif",
    "./img/unicornparrot.gif"
];

let parDeCartas = []; // Armazena par de cartas

// Armazenando a quantidade de pares de cartas para o jogo 
for ( let i = 0; i < (qtdCartas / 2) ; i++ ){
    parDeCartas.push(cartasDisponiveis[i]);
    parDeCartas.push(cartasDisponiveis[i]);
}

// Codigo que sorteia uma array
parDeCartas.sort(sortearCartas);
function sortearCartas() { 
    return Math.random() - 0.5; 
}

// Adicionando a quantidade pedida de cartas(Duas a Duas) no jogo aleatóriamente
for ( let i = 0; i < qtdCartas ; i++ ){
    const areaDoJogo = document.querySelector(".jogo");
    
    areaDoJogo.innerHTML += `
    <div class="carta">
        <div class="carta-frente esconder">
            <img src="${parDeCartas[i]}">
        </div>
        <div class="carta-tras" onclick="virarCarta(this)">
            <img src="./img/back.png">
        </div>
    </div>
    `; 
}

let arrayFrenteCarta = []; // Armazena frente da carta clicada
let arrayTrasCarta = []; // Armazenta tras da carta
let qtdAcertos=0; // Quantidade de pares acertados
let qtdJogadas=0; // Quantidade de jogadas para acertar todas as cartas
let clicarDisponivel = true; // não deixar clicar enquanto não compara

function compararCartas(){
    const imgPrimeiraCarta = (arrayFrenteCarta[arrayFrenteCarta.length - 2].querySelector('img')).src;
    const imgSegundaCarta = (arrayFrenteCarta[arrayFrenteCarta.length - 1].querySelector('img')).src;

    // Comparar a img da frente da primeira carta com a img da frente da segunda carta
    // Se for diferente virar a carta, senão é pq acertou
    if( imgPrimeiraCarta !== imgSegundaCarta ){
        arrayFrenteCarta[arrayFrenteCarta.length - 2].parentNode.classList.remove("virar-carta");
        arrayFrenteCarta[arrayFrenteCarta.length - 1].parentNode.classList.remove("virar-carta");

        arrayFrenteCarta[arrayFrenteCarta.length - 2].classList.add("esconder");
        arrayFrenteCarta[arrayFrenteCarta.length - 1].classList.add("esconder");

        arrayTrasCarta[arrayTrasCarta.length - 2].classList.remove("esconder");
        arrayTrasCarta[arrayTrasCarta.length - 1].classList.remove("esconder");
    } else {
        qtdAcertos++;
    }
    clicarDisponivel = true;
}

function virarCarta(parteTras){
    if(clicarDisponivel === true){
        const parteFrente = parteTras.previousElementSibling; // Armazena parte da frente da carta clicada
        
        if( parteTras.classList.contains("carta-tras") ){
            // Mostrar a frente da carta quando houver um clique em uma carta virada para tras
            (parteTras.parentNode).classList.add("virar-carta");
            parteTras.classList.add("esconder");
            parteFrente.classList.remove("esconder");
            // Armazenar frente da carta clicada
            arrayFrenteCarta.push(parteFrente);
            arrayTrasCarta.push(parteTras);

            qtdJogadas++;
        }
        // A cada duas cartas verificar se são iguais ou diferentes
        if( qtdJogadas % 2 === 0 ){
            clicarDisponivel = false;
            setTimeout(compararCartas,2000);
        }
    } else {
        return;
    }
} 




