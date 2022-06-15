var formationId = 1;
var formation = [];

function changeConfigType(index){
    switch (index){
        case 1:
            $(".main-box").html(`<input type="text" class="place" placeholder="Informe o local">
                                <input type="text" class="period" placeholder="Informe o período">
                                <input type="text" class="type" placeholder="Informe o tipo de formação">
                                <button onclick="insertFormation()">Adicionar</button>
            `);
            break;
        case 2:
            $(".main-box").html(`<input type="text" class="place" placeholder="Informe o local">
                                <input type="text" class="period" placeholder="Informe o período">
                                <input type="text" class="type" placeholder="Informe o tipo de formação">
                                <button onclick="updateFormation()">Atualizar</button>
            `);
            break;
        case 3:
            $(".main-box").html(`
            <button onclick="deleteFormation()">Deletar</button>
            `);
            break;
    }
}

function insertFormation(){
    const title = document.querySelector(".place").value;
    const period = document.querySelector(".period").value;
    const type = document.querySelector(".type").value;

    $.ajax({
        type: 'POST',
        url: "http://127.0.0.1:1105/insertFormacaoData",
        data: {
            titulo: title,
            periodo: period,
            tipo: type
        }
    }).done(function () {
        console.log("enviado com sucesso");
    })
}

function updateFormation(){
    $.ajax({
        type: 'PUT',
        url: "http://127.0.0.1:1105/updateFormacaoData/" + formationId,
        data: {
            titulo: document.querySelector(".place").value,
            periodo: document.querySelector(".period").value,
            tipo: document.querySelector(".type").value
        }
    }).done(function () {
        console.log("enviado com sucesso");
    })
}

function deleteFormation(){
    $.ajax({
        type: 'DELETE',
        url: "http://127.0.0.1:1105/deleteFormacaoData",
        data: {
            id: formationId
        }
    }).done(function () {
        console.log("enviado com sucesso");
    })
}

function getFormation(){
    $.get("http://127.0.0.1:1105/getFormationData", function(resultado){
        formation = JSON.parse(resultado);
    });
}