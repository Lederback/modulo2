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

    console.log(list);
}

//Exercício 4


//Exercício 5
