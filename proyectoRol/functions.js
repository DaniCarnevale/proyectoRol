// import { personaje, mob } from "./objects";
 const personaje = {
    nombre: "Player",
    nivel: 1,
    sigNivel: 50,
    hpMax: 200,
    hp: 200,
    atk: 25,
    def: 20,
    vel: 5
}

 const mob = {
    nombre: "Mob 1",
    nivel: "1",
    hp: 75,
    atk: 30,
    def: 10,
    vel: 1,
    dropxp: 25
}

function nivelMob(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
  }

function updateStats(){
    personaje.sigNivel= 50 * personaje.nivel;
    personaje.hpMax = personaje.hpMax * 1.2;
    personaje.hp = personaje.hpMax;
    personaje.atk = personaje.atk * 1.10;
    personaje.def= personaje.def * 1.05;
    personaje.vel = personaje. vel * 1.009;

    console.log(personaje);
}

function aumentarNivel(){
    personaje.nivel++;
    updateStats();
}

function aumentarXP(){
    personaje.sigNivel= personaje.sigNivel - mob.dropxp;
    if(personaje.sigNivel > 0){
        console.log("Al personaje: " + personaje.nombre + " le faltan: " + personaje.sigNivel + " para subir de nivel");
    }else{
        aumentarNivel();
    }
}

 function batalla() {
    nivelMob();



    let hpMob = mob.hp;
    while(personaje.hp > 0 && hpMob > 0){
        if(personaje.vel >= mob.vel){
            console.log("El personaje es mas rapido");
            hpMob= (hpMob) - (personaje.atk  - mob.def);
            personaje.hp = (personaje.hp) - (mob.atk - personaje.def);
        }else{
            console.log("el mob es mas rapido");
            personaje.hp = (personaje.hp) - (mob.atk - personaje.def);
            hpMob= (hpMob) - (personaje.atk  -mob.def);
        }
    }
    if(personaje.hp<=0){
        let objetivo = document.getElementById('perHp');
        objetivo.innerHTML = "GAME OVER";   
        console.log("game over");

    }else{
        aumentarXP();
        let objetivo = document.getElementById('perHp');
        objetivo.innerHTML = personaje.nombre +": " + personaje.hp.toFixed(0) + "/" + personaje.hpMax.toFixed(0) + " - LVL: " + personaje.nivel;   
    }
}


let jugador = document.getElementById('perHp');
jugador.innerHTML = personaje.nombre +": " + personaje.hp + "/" + personaje.hpMax.toFixed(0) + " - LVL: " + personaje.nivel;

let monstruo = document.getElementById('mobHp');
monstruo.innerHTML = mob.nombre +": " + mob.hp + "/" + mob.hp.toFixed(0) + " - LVL: " + mob.nivel;


