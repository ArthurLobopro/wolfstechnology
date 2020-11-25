function mostra_div(num,lado){
    let direito = document.getElementById("direito")
    let esquerdo = document.getElementById("esquerdo")
    let img_direita = document.getElementById("img-direita")
    let img_esquerda =  document.getElementById("img-esquerda")
    if(lado==1){
        switch(num){
            case 1:
                img_direita.src="midia/desktop-dell.png"
                img_direita.style.width="143px"
                img_direita.style.height="225px"
                direito.style.visibility="visible"
                break
            case 2:
                img_direita.src="midia/Monitores/monitor.png"
                img_direita.style.width="225px"
                img_direita.style.height="169px"
                direito.style.visibility="visible"
                break
            case 3:
                img_direita.src="midia/mouse/mouse.png"
                img_direita.style.width="225px"
                img_direita.style.height="147px"
                direito.style.visibility="visible"
                break
            case 4:
                img_direita.src="midia/teclados/teclado.png"
                img_direita.style.width="225px"
                img_direita.style.height="153px"
                direito.style.visibility="visible"
                break
        }
    }
    if(lado==2){
        switch(num){
            case 1:
                img_esquerda.src="midia/caixa-de-som.png"
                img_esquerda.style.width="225px"
                esquerdo.style.visibility="visible"
                break
            case 2:
                img_esquerda.src="midia/estabilizador.png"
                img_esquerda.style.width="225px"
                esquerdo.style.visibility="visible"
                break
            case 3:
                img_esquerda.src="midia/fones/fones.png"
                img_esquerda.style.width="203px"
                esquerdo.style.visibility="visible"
                break
            case 4:
                img_esquerda.src="midia/impressora/impressora.png"
                img_esquerda.style.width="225px"
                esquerdo.style.visibility="visible"
                break
        }
    }
}
function esconde_div(){
    document.getElementById("direito").style.visibility="hidden"
    document.getElementById("esquerdo").style.visibility="hidden"
}