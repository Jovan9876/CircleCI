document.body.addEventListener("click", handleClick);
var inputScreen = document.querySelector('.screen');

var operators = ['÷', 'x', '+', '-'];
var nums = ['0', '1', '2', '3', '4', '5', '6', '8', '9'];
var actions = ['DEL', 'AC', '='];
var extras = ['.']


function handleClick(event) {
    btnValue = event.target.innerHTML
    if(actions.includes(btnValue)){
        input = inputScreen.innerHTML
        specAction(input, btnValue)
    }
    else if(nums.includes(btnValue) || operators.includes(btnValue) || extras.includes(btnValue))
        inputScreen.innerHTML += btnValue
}

function specAction(input, btnValue){
    if(btnValue === '='){
        input = opConvert(input)
        console.log(eval(input))
        inputScreen.innerHTML = eval(input)
    }

    else if(btnValue === 'DEL'){
        inputScreen.innerHTML = inputScreen.innerHTML.slice(0, -1);
    }

    else if (btnValue === 'AC'){
        inputScreen.innerHTML = ''
    }
}

function opConvert(input){
    input = input.replace(/x/g, '*').replace(/÷/g, '/');
    return input
}