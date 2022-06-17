//Exercício 1

//Exercício 2
function calc2(){
    var number = document.getElementById("ex2-input").value;
    var list = number.split('');
    var result = 0;

    for(i = 0; i < list.length; i ++){
        list[i] = parseInt(list[i]);
        result += list[i];
    }

    document.getElementById("ex2-result").innerHTML = result;
}

//Exercício 3
function calc3(){
    var name1 = document.getElementById("ex3-input1").value;
    var name2 = document.getElementById("ex3-input2").value;
    var name3 = document.getElementById("ex3-input3").value;
    var list = [];
    list.push(name1, name2, name3)

    for(i = 0; i < list.length-1; i++) {
        for (j = 0; j < list.length-1; j++){
            if (list[j] >= list[j+1]){
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }

    document.getElementById("ex3-result").innerHTML = list;
}

//Exercício 4
function calc4(){
    var n1 = 1;
    var n2 = 1;
    var termo = parseInt(document.getElementById("ex4-input").value);
    var result = [];
    result.push(n1, n2);

    for(i = 2; i < termo; i ++){
        var aux = n1 + n2;
        result.push(aux);
        n1 = n2;
        n2 = aux;
    }

    document.getElementById("ex4-result").innerHTML = result;
}

//Exercício 5
function calc5(){
    var n1 = parseInt(document.getElementById("ex5-input1").value);
    var n2 = parseInt(document.getElementById("ex5-input2").value);
    var numerosPrimos = [];

    for(i = n1; i <= n2; i++){
        var bool = false;
        for(j = 2; j < i; j++){
            if(i % j === 0){
                bool = true; 
            }
        }
        
        if (i === 1){
            bool = true;
        }

        if (!bool){
            numerosPrimos.push(i);
        }
    }

    document.getElementById("ex5-result").innerHTML = numerosPrimos;
}