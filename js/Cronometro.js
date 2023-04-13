let cronometro = document.querySelector("#cronometro");
let boton_iniciar = document.querySelector("#boton_iniciar")
let boton_restablecer = document.querySelector("#boton_restablecer")
let boton_pausar = document.querySelector("#boton_pausar")

boton_iniciar.addEventListener("click", ()=>{
    let tiempo_inicial = Date.now();
    setInterval(()=>{
        cronometro.innerHTML = `${parseInt(Date.now() - tiempo_inicial)/1000} Segundos`;
    },100);
})
