self.addEventListener('install',(event)=>{
    console.log("SW: Instalado")
});

self.addEventListener('activate',(event)=>{
    console.log("SW: Activado y controlando la app")
});

self.addEventListener('fetch',(event)=>{
    if(event.request.url.includes('.jpg')){
        let newResp = fetch('/PWA-U1-P1/img/gato.png');        
        console.log("Imagen")
        event.respondWith(newResp);
    }

    if(event.request.url.includes('page.css')){
        let newResponse = new Response(`body{
            background-color: blue !important;
            color: white !important;
        }`, {
            headers:{
                'Content-Type':'text/css'
            }
        });
        event.respondWith(newResponse);
    }
});

