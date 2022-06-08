function reset(){
    sum = ''
    document.getElementById("output").innerHTML = sum

}

let sum ="";

function buildSum(char){
    sum += char
    document.getElementById("output").innerHTML = sum
  }

  function check(){
    sum = eval(sum)
    document.getElementById("output").innerHTML = sum
  }

  