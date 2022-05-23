//#region Exercício 1
function simpleCal(){
    const value1 = parseInt(document.getElementById("value1").value);
    const value2 = parseInt(document.getElementById("value2").value);
    const result = document.getElementById("result");

    switch(document.getElementById("type").value){
        case "plus":
            result.innerHTML = value1 + value2;
            break;
        case "less":
            result.innerHTML = value1 - value2;
            break;
        case "mult":
            result.innerHTML = value1 * value2;
            break;
        case "divF":
            result.innerHTML = value1 / value2;
            break;
        case "divI":
            result.innerHTML = parseInt(value1 / value2);
            break;
        case "rest":
            result.innerHTML = value1 % value2;
            break;
    }
}
//#endregion

//#region Exercício 2
function payNotes(){
    let aux = 0;
        
    let value = document.getElementById("price").value;
    
    document.getElementById("all-notes").innerHTML = "";

    aux = value / 100;
    document.getElementById("all-notes").innerHTML +=  parseInt(aux) + " nota(s) de R$ 100,00<br>";
    value = value % 100;

    aux = value / 50;
    document.getElementById("all-notes").innerHTML +=  parseInt(aux) + " nota(s) de R$ 50,00<br>";
    value = value % 50;
    
    aux = value / 20;
    document.getElementById("all-notes").innerHTML +=  parseInt(aux) + " nota(s) de R$ 20,00<br>";
    value = value % 20;
    
    aux = value / 10;
    document.getElementById("all-notes").innerHTML +=  parseInt(aux) + " nota(s) de R$ 10,00<br>";
    value = value % 10;
    
    aux = value / 5;
    document.getElementById("all-notes").innerHTML +=  parseInt(aux) + " nota(s) de R$ 5,00<br>";
    value = value % 5;
    
    aux = value / 2;
    document.getElementById("all-notes").innerHTML +=  parseInt(aux) + " nota(s) de R$ 2,00<br>";
    value = value % 2;
    
    aux = value / 1;
    document.getElementById("all-notes").innerHTML +=  parseInt(aux) + " nota(s) de R$ 1,00";
}
//#endregion

//#region Exercío 3
function bubbleSort(){
    const inputText = document.getElementById("list").value;
    const initialListOutput = document.getElementById("initial-list");
    const finalListOutput = document.getElementById("ordered-list");
    const focus = document.getElementById("focus").value;
    let focusExist = false;

    initialListOutput.innerHTML = inputText;

    let list = inputText.split(",");

    for(i = 0; i < list.length; i++){
        list[i] = parseInt(list[i]);
    }

    for(i = 0; i < list.length-1; i++) {
        for (j = 0; j < list.length-1; j++){
            if (list[j] >= list[j+1]){
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }

    finalListOutput.innerHTML = list;
    
    for (j = 0; j <= list.length; j++){
        if (list[j] == focus){
            focusExist = true;
        }
    }

    if (focus != "" && focusExist){
        binarySearch(list, parseInt(focus));
    }
    else{
        const focusOutput = document.getElementById("focus-output");
        focusOutput.innerHTML = "Valor foco não está na lista, ou o campo está vazio";
    }
}

function binarySearch(list, focus){
    let search = "";
    let found = false;
    const focusOutput = document.getElementById("focus-output");

    let mid = parseInt(list.length/2);

    if (list[mid] < focus){
        search = "next";       
    }
    else{
        search = "previous";
    }

    while(!found){
        switch(search){
            case "next":
                for(i = mid; i <= list.length; i++){
                    if(list[i] == focus){
                        focusOutput.innerHTML = i;
                        found = true;
                    }
                }
                break;
            case "previous":
                for(i = mid; i >= 0; i--){
                    if(list[i] == focus){
                        focusOutput.innerHTML = i;
                        found = true;
                    }
                }
                break;
        }
    }
}
//#endregion