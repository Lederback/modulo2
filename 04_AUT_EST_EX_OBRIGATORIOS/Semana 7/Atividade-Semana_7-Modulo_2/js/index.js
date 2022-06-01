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

function change(){
    const input1 = document.getElementById("input-ex2A").value;
    const input2 = document.getElementById("input-ex2B").value;

    document.getElementById("input-ex2B").value = input1;
    document.getElementById("input-ex2A").value = input2;
}