let cronometro = document.querySelector("#cronometro");
let tiempo = new Date();
setInterval(()=>{
    cronometro.innerHTML = tiempo.toLocaleTimeString('en-US')
},100);