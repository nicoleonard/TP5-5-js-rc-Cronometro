let cronometro = document.querySelector("#cronometro");
let boton_iniciar = document.querySelector("#boton_iniciar")
let boton_restablecer = document.querySelector("#boton_restablecer")
let boton_pausar = document.querySelector("#boton_pausar")
let intervalo = "";
let tiempo_actual = "";

boton_iniciar.addEventListener("click", ()=>{
    tiempo_inicial = Date.now();
    intervalo = setInterval(()=>{
        console.log(tiempo_actual)
        cronometro.innerHTML = `${(parseInt(Date.now() - tiempo_inicial)/1000) + tiempo_actual} Segundos`;
    },100);
})

boton_pausar.addEventListener("click", ()=>{
    tiempo_actual=(parseFloat(cronometro.innerHTML));
    clearInterval(intervalo);
})

boton_restablecer.addEventListener("click", ()=>{
    tiempo_actual="";
    cronometro.innerHTML = ``
})

