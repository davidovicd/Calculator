// storing components

let clear = document.querySelector(".clear")
let equal = document.querySelector(".equal")
let numbers = document.querySelectorAll(".number")
let math = document.querySelectorAll(".math")
let decimal = document.querySelector(".decimal")

let previous = document.querySelector(".previous")
let current = document.querySelector(".current")
let currentValue = ""

numbers.forEach((number) => number.addEventListener("click", function(e){
  getNumber(e.target.textContent)
  current.textContent = currentValue
}))

math.forEach((simbol) => simbol.addEventListener("click", function(e){
  getOperator(e.target.textContent)
  previous.textContent = `${previousValue} ${operator}`
  current.textContent = currentValue
}))

equal.addEventListener("click", function(){

  if (currentValue != "" && previousValue != ""){
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)
  
    switch (operator) {
      case "+":
        previousValue += currentValue;
        break;
      case "-":
        previousValue -= currentValue;
        break;
      case "*":
        previousValue *= currentValue;
        break;
      case "/":
        previousValue /= currentValue;
        break;
      case "pow":
        previousValue **= currentValue;
        break;
      case "root":
        previousValue **= 1/currentValue;
        break;
    }
    previousValue = round(previousValue)
    previousValue = previousValue.toString()
    currentValue = previousValue.toString()
    previous.textContent = ""
    if (previousValue.length < 8){
      current.textContent = previousValue
    }
    else {
      current.textContent = previousValue.slice(0, 5) + "...";
    }

  }
})

decimal.addEventListener("click", function(){
  addDecimal()
})

function round (num){
  return Math.round(num * 1000) / 1000
}

clear.addEventListener("click", function(){
  previousValue = " "
  currentValue = " "
  operator = " "
  previous.textContent = " "
  current.textContent = " "
})

function getNumber(num){
  if (currentValue.length < 8){
    currentValue += num
  }
}

function getOperator(op){
  operator = op
  previousValue = currentValue
  currentValue = ""
}

function addDecimal(){
  if(!currentValue.includes(".")){
    currentValue +=".";
  }
}