let added = false

function addLine() {
    if (!added) {
        document.getElementById("project-div").innerHTML += "<b>Inteli RoadLab — Jogo Educativo</b> (<a href='https://github.com/2022M1T4/Projeto3' target='_blank'>Repositório</a>)<br> Projeto criado com o intuito de auxiliar alunos na escolha de qual curso da área da computação seguir.";
        added = true;
    }
    else {
        document.getElementById("project-div").innerHTML = "<h4 id='projetos' onclick='addLine()'>PROJETOS(Clique aqui para exibir os projetos)</h4>";
        added = false;
    }
}