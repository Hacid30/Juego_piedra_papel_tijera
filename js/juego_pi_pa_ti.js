//Obtener elementos del DOM
const btnTijeras = document.getElementById("tijeras");
const btnPiedra = document.getElementById("piedra");
const btnPapel = document.getElementById("papel");
const mostarResultado = document.getElementById("resultado");
const puntaje = document.getElementById("puntaje");
const selector = document.getElementById("selector");


//variables para el marcador
let victoria = 0;
let derrota = 0;
let empate = 0;
let partidasGanadasUsuario = 0;
let partidasGanadasPc = 0;
let partidasParaGanar = 1;

//Configurar el selector para cuando cambie al numero de partidas
selector.addEventListener("change", () => {
    partidasParaGanar = parseInt(selector.value);
    reiniciarMarcador();
});

//Funcion para reiniciar el marcador cuando se cambie el selector
function reiniciarMarcador(){
    victoria = 0;
    derrota = 0;
    empate = 0;
    partidasGanadasUsuario = 0;
    partidasGanadasPc = 0;
    mostarResultado.textContent = `Elige una opcion para comenzar`
    puntaje.innerHTML = `Victoria: 0 | Derrota: 0 | Empate: 0`
}

//Añadimos el evento click a cada boton para que ejecute la funcion 
btnTijeras.addEventListener("click", () => jugar("tijeras"));
btnPiedra.addEventListener("click", () => jugar("piedra"));
btnPapel.addEventListener("click", () => jugar("papel"));

function jugar(persona){
    //Verificar si hay un ganador
    if(partidasGanadasUsuario >= partidasParaGanar || partidasGanadasPc >= partidasParaGanar){
        return;
    }

    //Creamos un array con las opciones de boton para el PC
    const escoger = [ "tijeras", "piedra", "papel" ];
    const escogerPc = escoger[Math.floor(Math.random() * 3)];

    let resultado;

    if(persona === escogerPc){
        resultado = "empate";
        empate++;
    } else if(persona === "tijeras" && escogerPc === "papel" ||
    persona === "piedra" && escogerPc=== "tijeras" || persona === "papel" && escogerPc === "piedra"){
        resultado = "¡Ganaste!";
        victoria++;
        partidasGanadasUsuario++;
    }else {
        resultado = "¡Perdiste!";
        derrota++;
        partidasGanadasPc++;
    }

    mostarResultado.textContent = `Tú: ${persona} | PC: ${escogerPc} | Resultado: ${resultado}`
    puntaje.innerHTML = `Victoria: ${victoria} | Derrota: ${derrota} | Empate: ${empate} `

    //Verificar quien gano
    if(partidasGanadasUsuario >= partidasParaGanar){
        mostarResultado.textContent = " 🎉 ¡Ganaste el juego! ";
    }else if(partidasGanadasPc >= partidasParaGanar){
        mostarResultado.textContent = " 😢 ¡La PC ganó el juego!";
    }
}
