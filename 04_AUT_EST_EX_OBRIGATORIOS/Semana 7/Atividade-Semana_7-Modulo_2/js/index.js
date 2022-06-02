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