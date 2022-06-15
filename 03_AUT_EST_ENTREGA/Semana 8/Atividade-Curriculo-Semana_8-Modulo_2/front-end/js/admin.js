var formationId = 1;
var formationDatas = {}

function changeFormationId(){
    formationId = document.querySelector(".id").value;
    console.log(formationId);
}

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
            getFormation();

            $(".main-box").html(`<select class="id" onchange="changeFormationId()">
                                </select>
                                <input type="text" class="place" placeholder="Informe o local">
                                <input type="text" class="period" placeholder="Informe o período">
                                <input type="text" class="type" placeholder="Informe o tipo de formação">
                                <button onclick="updateFormation()">Atualizar</button>
            `);

            for(i = 0; i <  Object.keys(formationDatas).length; i ++){
                $(".id").append(`<option value="` + formationDatas[i].ID + `">` + formationDatas[i].ID + `</option>`);
            }
            break;
        case 3:
            $(".main-box").html(`<select class="id" onchange="changeFormationId()">
                                </select>
                                <input type="text" class="place" placeholder="Informe o local">
                                <input type="text" class="period" placeholder="Informe o período">
                                <input type="text" class="type" placeholder="Informe o tipo de formação">
                                <button onclick="deleteFormation()">Deletar</button>
            `);

            getFormation();

            for(i = 0; i <  Object.keys(formationDatas).length; i ++){
                $(".id").append(`<option value="` + formationDatas[i].ID + `">` + formationDatas[i].ID + `</option>`);
            }
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
        var objeto = JSON.parse(resultado);
        formationDatas = objeto;
        console.log(formationDatas);
    });
}