function mostra_div(num, lado){
    let direito = document.getElementById("direito")
    let esquerdo = document.getElementById("esquerdo")
    let img_direita = document.getElementById("img-direita")
    let img_esquerda =  document.getElementById("img-esquerda")
    if(lado==1){
        switch(num){
            case 1: 
                img_esquerda.src="../midia/fonte/fonte.png"
                img_esquerda.style.width="225px"
                esquerdo.style.visibility="visible"
                break
            case 2:
                img_esquerda.src="../midia/placa-de-video/placa-de-video-4.png"
                img_esquerda.style.width="225px"
                esquerdo.style.visibility="visible"
                break
            case 3:
                img_esquerda.src="../midia/cooler/cooler-4.png"
                img_esquerda.style.width="225px"
                esquerdo.style.visibility="visible"
                break
            case 4:
                img_esquerda.src="../midia/placa-mae/placa-mae.png"
                img_esquerda.style.width="225px"
                esquerdo.style.visibility="visible"
                break
            case 5:
                img_esquerda.src="../midia/memoria-ram/memoria-ram-6.png"
                img_esquerda.style.width="225px"
                esquerdo.style.visibility="visible"
                break
        }
    }
    if(lado==2){
        switch(num){
            case 1:
                img_direita.src="../midia/hd/hd-6.png"
                img_direita.style.transform="none"
                img_direita.style.width="225px"
                img_direita.style.height="225px"
                direito.style.visibility="visible"
                break
            case 2:
                img_direita.src="../midia/processadores/processador.png"
                img_direita.style.width="225px"
                img_direita.style.transform="rotate(-20deg)"
                img_direita.style.height="225px"
                direito.style.visibility="visible"
                break
            case 3:
                img_direita.src="../midia/cabos/cabos.png"
                img_direita.style.transform="none"
                img_direita.style.height="auto"
                img_direita.style.width="225px"
                direito.style.visibility="visible"
                break
            case 4:
                img_direita.src="../midia/Driver-CD/driver-cd-1.png"
                img_direita.style.transform="none"
                img_direita.style.height="auto"
                img_direita.style.width="225px"
                direito.style.visibility="visible"
                break
        }
    }
}
function esconde_div(){
    document.getElementById("direito").style.visibility="hidden"
    document.getElementById("esquerdo").style.visibility="hidden"
}