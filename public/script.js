document.body.addEventListener("click", handleClick);
var inputScreen = document.querySelector('.screen');

var operators = ['÷', 'x', '+', '-'];
var nums = ['0', '1', '2', '3', '4', '5', '6', '8', '9'];
var actions = ['DEL', 'AC', '='];
var extras = ['.']

function handleClick(event) {
    // Handles the clicks by the user
    btnValue = event.target.innerHTML
    if(actions.includes(btnValue)){
        // calls specAction function if an action key is pressed
        input = inputScreen.innerHTML
        specAction(input, btnValue)
    }
    else if(nums.includes(btnValue) || operators.includes(btnValue) || extras.includes(btnValue))
        // Adds character to working area if it is valid
        inputScreen.innerHTML += btnValue
}

function specAction(input, btnValue){
    var inputScreen = document.querySelector('.screen');
    // Takes input actions and edits calculator screen based on them
    if(btnValue === '='){
        // if button was '=' takes string and evaluates it
        try{
        input = opConvert(input)
        console.log(eval(input))
        inputScreen.innerHTML = eval(input)
        }
        catch (err) {
            // Prints a message to screen if user inputs an invalid string
            inputScreen.innerHTML = ('Syntax Error')
        }
    }

    else if(btnValue === 'DEL'){
        // if button was 'DEL' removes last character
        innerScreen.innerHTML = input
        inputScreen.innerHTML = inputScreen.innerHTML.slice(0, -1);
    }

    else if (btnValue === 'AC'){
        // if button was 'AC' clears the working area
        inputScreen.innerHTML = ''
    }
}

function opConvert(input){
    // Converts the inputs operators where neccessary
    input = input.replace(/x/g, '*').replace(/÷/g, '/');
    return input
}

module.exports = {
    opConvert,
    specAction,
    handleClick
}