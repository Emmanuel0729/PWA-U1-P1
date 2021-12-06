let url = window.location.href;
let swDirect = "/PWA-U1-P1/sw.js"

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        swDirect = '/sw.js';
    }
    navigator.serviceWorker.register(swDirect);
}else{
    console.log("Cambia de navegador.")
}
