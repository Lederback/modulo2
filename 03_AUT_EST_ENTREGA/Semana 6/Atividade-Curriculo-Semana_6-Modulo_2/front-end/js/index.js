let added = false

$(document).ready(function(){
    $("#project-div").click(function(){
      switch (added) {
        case false:
          $(this).html("<h4 id='projetos'>PROJETOS(Clique aqui para exibir os projetos)</h4><b>Inteli RoadLab — Jogo Educativo</b> (<a href='https://github.com/2022M1T4/Projeto3' target='_blank'>Repositório</a>)<br> Projeto criado com o intuito de auxiliar alunos na escolha de qual curso da área da computação seguir.");
          added = true;
          break;
        case true:
          $(this).html("<h4 id='projetos'>PROJETOS(Clique aqui para exibir os projetos)</h4>");
          added = false;
          break;
      }
    });
  });

function online(){
  $.get("http://127.0.0.1:1105/user", function(resultado){
    $("#json").html(resultado);
    var objeto = JSON.parse(resultado);
    $("#nome").html(objeto.nome);
    $("#idade").html(objeto.idade);
  });
}