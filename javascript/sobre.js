function sobre(){
    document.getElementById("body").innerHTML=`
    <header>
        <img id="logo" src="../midia/gray-wolf-logo.png" title="Acerca de Wolf's Technology">
        <a href="../index.html"><img src="../midia/home_white.png" id="home" title="Home Page"></a>
        <ul>
            <li>Veja também:</li>
            <li class="botao"><a href="historia.html">História dos computadores</a></li>
            <li class="botao" onclick="contatos()">Contatos</li>
        </ul>
    </header>
    <img src="../midia/tech-logo.png" id="img" alt="Logo" >
    <div id="sobre">
        <span>Time Wolf's Technology:</span>
        <ul>
            <li>HTML, CSS, Javascript: Arthur Lobo.</li>
            <li>HTML secundário: Daniel</li>
            <li>Imagens: João Lucas e Arthur Lobo.</li>
            <li>Edição de Imagens: João Castro e Arthur Lobo.</li>
            <li>Conteúdo: Estevão Augusto, Daniel e Samuel Costa. </li>
            <li>Logo: Arthur Lobo.</li>
        </ul>
    </div>`
}
function contatos(){
    document.getElementById("body").innerHTML=`
    <header>
        <img id="logo" src="../midia/gray-wolf-logo.png" title="Acerca de Wolf's Technology">
        <a href="../index.html"><img src="../midia/home_white.png" id="home" title="Home Page"></a>
        <ul>
            <li>Veja também:</li>
            <li class="botao"><a href="historia.html">História dos computadores</a></li>
            <li class="botao" onclick="sobre()">Sobre</li>
        </ul>
    </header>
    <section id="contatos">
            <div id="if">
                    Todos os integrantes da equipe desenvolvedora deste site são alunos do <br>
                    <a href="https://portal.cdm.ifsuldeminas.edu.br/" id="if-homepage">
                        IFSULDEMINAS-Campus de Carmo de Minas<br>
                    
                    <img src="../midia/logo-if.png">
                    </a>
            </div>
            <div class="left">
                Contatos:
                <p>Arthur Lobo: 
                    <a title="Enviar email para Arthur Lobo." href="https://mail.google.com/mail/?view=cm&fs=1&to=arthur.lobo%40alunos.ifsuldeminas.edu.br">
                        arthur.lobo@alunos.ifsuldeminas.edu.br
                    </a>
                </p>
                <p>
                    Daniel: 
                    <a title="Enviar email para Daniel." href="https://mail.google.com/mail/?view=cm&fs=1&to=daniel.oliveira%40alunos.ifsuldeminas.edu.br">
                        daniel.oliveira@alunos.ifsuldeminas.edu.br
                    </a>
                </p>
                <p>
                    Estevão Augusto: 
                    <a title="Enviar email para Estevão Augusto." href="https://mail.google.com/mail/?view=cm&fs=1&to=estevao.augusto%40alunos.ifsuldeminas.edu.br">
                        estevao.augusto@alunos.ifsuldeminas.edu.br
                    </a>
                </p>
                <p>
                    João Castro: 
                    <a title="Enviar email para João Castro." href="https://mail.google.com/mail/?view=cm&fs=1&to=joao.almeida%40alunos.ifsuldeminas.edu.br">
                        joao.almeida@alunos.ifsuldeminas.edu.br
                    </a>
                </p>
                <p>
                    João Lucas: 
                    <a title="Enviar email para João Lucas." href="https://mail.google.com/mail/?view=cm&fs=1&to=joao.dias%40alunos.ifsuldeminas.edu.br">
                        joao.dias@alunos.ifsuldeminas.edu.br
                    </a>
                </p>
                <p>
                    Samuel Costa:
                    <a title="Enviar email para Samuel Costa." href="https://mail.google.com/mail/u/0/?hl=pt-BR&view=cm&tf=1&fs=1&to=samuelcostapaulino64%40gmail.com">
                        samuelcostapaulino64@gmail.com
                    </a>
                </p>
            </div>
    </section>
    `

}