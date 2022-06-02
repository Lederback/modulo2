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

function loadFormation(){
  $.get("http://127.0.0.1:1105/getFormationData", function(resultado){
      var objeto = JSON.parse(resultado);

      for(i = 0; i < Object.keys(objeto).length; i++){
          $("#formation").append(`<b>`+ objeto[i].Local +`</b><br>
                                  ` + objeto[i].Duracao + `<br>
                                  ` + objeto[i].Tipo + `
                                  <br><br>`
          );
      }
  });
}

