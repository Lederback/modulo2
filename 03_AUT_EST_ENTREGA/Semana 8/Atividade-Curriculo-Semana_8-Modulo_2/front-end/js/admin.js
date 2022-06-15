var formationId = 1;
let info;

function changeFormationId(){
    formationId = parseInt($('.id :selected').text());

    document.querySelector(".place").value = info[parseInt(document.querySelector(".id").value)].Local;
    document.querySelector(".period").value = info[parseInt(document.querySelector(".id").value)].Duracao;
    document.querySelector(".type").value = info[parseInt(document.querySelector(".id").value)].Tipo;

    console.log(formationId);
}

const changeConfigType = async (index) => {
    switch (index){
        case 1:
            $(".main-box").html(`<input type="text" class="place" placeholder="Informe o local">
                                <input type="text" class="period" placeholder="Informe o período">
                                <input type="text" class="type" placeholder="Informe o tipo de formação">
                                <button onclick="insertFormation()">Adicionar</button>
            `);

            $(".left").css("background-color", "#0030F9");
            $(".mid").css("background-color", "#003049");
            $(".right").css("background-color", "#003049");
            break;
        case 2:
            info = await getFormation();

            $(".main-box").html(`<select class="id" onchange="changeFormationId()">
                                </select>
                                <input type="text" class="place" placeholder="Informe o local">
                                <input type="text" class="period" placeholder="Informe o período">
                                <input type="text" class="type" placeholder="Informe o tipo de formação">
                                <button onclick="updateFormation()">Atualizar</button>
            `);

            for(i = 0; i <  Object.keys(info).length; i ++){
                $(".id").append(`<option value="` + i + `">` + info[i].ID + `</option>`);
            }

            document.querySelector(".place").value = info[0].Local;
            document.querySelector(".period").value = info[0].Duracao;
            document.querySelector(".type").value = info[0].Tipo;

            $(".left").css("background-color", "#003049");
            $(".mid").css("background-color", "#0030F9");
            $(".right").css("background-color", "#003049");
            break;
        case 3:
            info = await getFormation();

            $(".main-box").html(`<select class="id" onchange="changeFormationId()">
                                </select>
                                <input type="text" class="place" placeholder="Informe o local" readonly>
                                <input type="text" class="period" placeholder="Informe o período" readonly>
                                <input type="text" class="type" placeholder="Informe o tipo de formação" readonly>
                                <button onclick="deleteFormation()">Deletar</button>
            `);

            for(i = 0; i <  Object.keys(info).length; i ++){
                $(".id").append(`<option value="` + i + `">` + info[i].ID + `</option>`);
            }
            
            document.querySelector(".place").value = info[0].Local;
            document.querySelector(".period").value = info[0].Duracao;
            document.querySelector(".type").value = info[0].Tipo;

            $(".left").css("background-color", "#003049");
            $(".mid").css("background-color", "#003049");
            $(".right").css("background-color", "#0030F9");
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

const getFormation = async () => {

    let obj;

    await $.get("http://127.0.0.1:1105/getFormationData", function(resultado){
        var objeto = JSON.parse(resultado);
        obj = objeto;
    });

    return obj;
}