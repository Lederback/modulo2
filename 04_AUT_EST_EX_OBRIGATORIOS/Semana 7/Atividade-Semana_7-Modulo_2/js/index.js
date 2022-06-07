//Exercício 1
function plusLess(type){
    let input = document.getElementById("input-ex1");
    switch(type){
        case "+":
            input.value = parseInt(input.value) + 1;
            break;
        case "-":
            input.value = parseInt(input.value) - 1;
            break;
    }
}

//Exercício 2
function change(){
    const input1 = document.getElementById("input-ex2A").value;
    const input2 = document.getElementById("input-ex2B").value;

    document.getElementById("input-ex2B").value = input1;
    document.getElementById("input-ex2A").value = input2;
}

//Exercício 3
function numberValidation(){
    let pattern = /^\([1-9]{2}\)(?:[2-8]|[1-9][1-9])[0-9]{3}\-[0-9]{4}$/g;
    let text = document.getElementById("input-tel").value;

    if(text.match(pattern) != null){
        document.getElementById("result-validation").innerHTML = "Telefone escrito corretamento";
    }
    else{
        document.getElementById("result-validation").innerHTML = "Telefone ecrito no formato errado, tente este (XX)XXXXX-XXXX";
    }
}

//Exercício 4
function travel(){
    const qtdTravelers = document.getElementById("input-travelers").value;
    const period = document.getElementById("select-period").value;

    switch(period){
        case "Diurno":
            if(qtdTravelers > 50){
                document.getElementById("total-travel").innerHTML = (qtdTravelers * 200) * 0.6;
            }
            else{
                document.getElementById("total-travel").innerHTML = qtdTravelers * 200;
            }
            break;
        case "Noturno":
            if(qtdTravelers > 50){
                document.getElementById("total-travel").innerHTML = (qtdTravelers * 100) * 0.8;
            }
            else {
                document.getElementById("total-travel").innerHTML = qtdTravelers * 100
            }
            break;
    }
}

//Exercício 5
let numberStudents = 0;

function showInputs(){
    const totalStudents = document.querySelector("#number-students");

    document.querySelector("#button-students").style.display = "none";
    document.querySelector("#button-media").style.display = "block";

    for (i = 0; i < parseInt(totalStudents.value); i ++){
        numberStudents = i + 1;

        document.querySelector("#students").innerHTML += `<tr>
                                                            <td>Aluno ` + String(i) + `</td>
                                                            <td>Nota da prova: <input id="test-` + String(i) + `" type="number"></input></td>
                                                            <td>Nota do trabalho: <input id="homework-` + String(i) + `" type="number"></input></td>
                                                            <td>Média calculada: <input id="media-` + String(i) + `" readonly="readonly" type="number"></input></td>
                                                        </tr>`;
    }
}

let mediaGeral = 0;
let notaArit = 0;
let homeArit = 0;
let minMaxNota = [];
let minMaxHome = [];
let validado = false;

function calcMedia(){
    for(i = 0; i < numberStudents; i++){
        document.querySelector("#media-" + String(i)).value = (parseFloat(document.querySelector("#test-" + i).value) * 2 + parseFloat(document.querySelector("#homework-" + i).value) * 3) / 5;
        mediaGeral += parseFloat(document.querySelector("#media-" + String(i)).value);
        notaArit += parseFloat(document.querySelector("#test-" + String(i)).value);
        homeArit += parseFloat(document.querySelector("#homework-" + String(i)).value);

        if (!validado){
            minMaxNota[0] = parseFloat(document.querySelector("#test-" + String(i)).value);
            minMaxNota[1] = parseFloat(document.querySelector("#test-" + String(i)).value);
            minMaxHome[0] = parseFloat(document.querySelector("#homework-" + String(i)).value);
            minMaxHome[1] = parseFloat(document.querySelector("#homework-" + String(i)).value);
            validado = true;
        }

        if (parseFloat(document.querySelector("#test-" + String(i)).value) > minMaxNota[0]){
            minMaxNota[0] = parseFloat(document.querySelector("#test-" + String(i)).value);
        }
        if (parseFloat(document.querySelector("#test-" + String(i)).value) < minMaxNota[1]){
            minMaxNota[1] = parseFloat(document.querySelector("#test-" + String(i)).value);
        }

        if (parseFloat(document.querySelector("#homework-" + String(i)).value) > minMaxHome[0]){
            minMaxHome[0] = parseFloat(document.querySelector("#homework-" + String(i)).value);
        }
        if (parseFloat(document.querySelector("#homework-" + String(i)).value) < minMaxHome[1]){
            minMaxHome[1] = parseFloat(document.querySelector("#homework-" + String(i)).value);
        }
    }

    document.querySelector("#final-result").innerHTML += `<tr>
                                                            <td>` + String(mediaGeral / numberStudents) + `</td>
                                                            <td>` + String(notaArit / numberStudents) + `</td>
                                                            <td>` + String(homeArit / numberStudents) + `</td>
                                                            <td>` + String(minMaxNota[0]) + `</td>
                                                            <td>` + String(minMaxNota[1]) + `</td>
                                                            <td>` + String(minMaxHome[0]) + `</td>
                                                            <td>` + String(minMaxHome[1]) + `</td>
                                                        </tr>`;
}

function reset(){
    document.querySelector("#button-students").style.display = "block";
    document.querySelector("#button-media").style.display = "none";

    validado = false;
    mediaGeral = 0;
    notaArit = 0;
    homeArit = 0;
    minMaxNota = [];
    minMaxHome = [];

    totalStudents = 0;

    document.querySelector("#students").innerHTML = `<tr>
                                                        <th>Aluno</th>
                                                        <th>Nota da prova</th>
                                                        <th>Nota do trabalho</th>
                                                        <th>Média calculada</th>
                                                    </tr>`;

    document.querySelector("#final-result").innerHTML = `<tr>
                                                            <th>Média Geral</th>
                                                            <th>Média Aritiméticas Notas Prova</th>
                                                            <th>Média Aritiméticas Notas Trabalho</th>
                                                            <th>Maior Nota Prova</th>
                                                            <th>Menor Nota Prova</th>
                                                            <th>Maior Nota Trabalho</th>
                                                            <th>Menor Nota Trabalho</th>
                                                        </tr>`;
}