var tiradas=0, vueltas=0, dados=[], cambioJugador=0;
function tirada(){
    let dadosGuardados=document.getElementsByName("guardar");
    if(tiradas<3){
        if(dadosGuardados[0].checked==false){dados[0]=Math.floor(Math.random()*6);}
        if(dadosGuardados[1].checked==false){dados[1]=Math.floor(Math.random()*6);}
        if(dadosGuardados[2].checked==false){dados[2]=Math.floor(Math.random()*6);}
        if(dadosGuardados[3].checked==false){dados[3]=Math.floor(Math.random()*6);}
        if(dadosGuardados[4].checked==false){dados[4]=Math.floor(Math.random()*6);}
        tiradas++;}
    else{alert("Número de tiradas por turno excedido")}
    document.getElementById("resDado1").innerHTML=dados[0]+1;
    document.getElementById("resDado2").innerHTML=dados[1]+1;
    document.getElementById("resDado3").innerHTML=dados[2]+1;
    document.getElementById("resDado4").innerHTML=dados[3]+1;
    document.getElementById("resDado5").innerHTML=dados[4]+1;
}
function sigTurno(){
    let text=document.getElementsByName("jugador");
    while(vueltas<11){
        tiradas=0; cambioJugador++;
        if(cambioJugador>5){vueltas++; cambioJugador=0;} 
        switch(true){
            case (text[0].classList.contains('turnoDeJugador')): text[0].classList.replace('turnoDeJugador', 'esperandoTurno'); text[1].classList.replace('esperandoTurno', 'turnoDeJugador'); break;
            case (text[1].classList.contains('turnoDeJugador')): text[1].classList.replace('turnoDeJugador', 'esperandoTurno'); text[2].classList.replace('esperandoTurno', 'turnoDeJugador'); break;
            case (text[2].classList.contains('turnoDeJugador')): text[2].classList.replace('turnoDeJugador', 'esperandoTurno'); text[3].classList.replace('esperandoTurno', 'turnoDeJugador'); break;
            case (text[3].classList.contains('turnoDeJugador')): text[3].classList.replace('turnoDeJugador', 'esperandoTurno'); text[4].classList.replace('esperandoTurno', 'turnoDeJugador'); break;
            case (text[4].classList.contains('turnoDeJugador')): text[4].classList.replace('turnoDeJugador', 'esperandoTurno'); text[0].classList.replace('esperandoTurno', 'turnoDeJugador'); break;
        }
        break;
    }
    if(vueltas==11){alert("Fin de la partida")}
} //guía visual de la partida, determina cuando esta termina
function puntaje(){
    let resultado1=document.getElementsByName('1j');
    let resultado2=document.getElementsByName('2j');
    let resultado3=document.getElementsByName('3j');
    let resultado4=document.getElementsByName('4j');
    let resultado5=document.getElementsByName('5j');
    let puntajeFinal=[0, 0, 0, 0, 0]; //preferiría que en este caso el arreglo no este "hard coded"
    for(let i=0; i<resultado1.length; i++){puntajeFinal[0]+= +resultado1[i].value}
    for(let i=0; i<resultado2.length; i++){puntajeFinal[1]+= +resultado2[i].value}
    for(let i=0; i<resultado3.length; i++){puntajeFinal[2]+= +resultado3[i].value}
    for(let i=0; i<resultado4.length; i++){puntajeFinal[3]+= +resultado4[i].value}
    for(let i=0; i<resultado5.length; i++){puntajeFinal[4]+= +resultado5[i].value}
    let ganador=-999;
    for(let i=0; i<puntajeFinal.length; i++){
        if(puntajeFinal[i]>ganador){ganador=puntajeFinal[i]}
    }
    for(let i=0; i<puntajeFinal.length; i++){
        if(puntajeFinal[i]==ganador){alert("El ganador es el jugador "+ (i+1))}
    }
}
/*
*/