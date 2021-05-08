document.body.addEventListener("click", handleClick);
var inputScreen = document.querySelector('.screen');

var operators = ['÷', 'x', '+', '-', '(', ')', '^', '%'];
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
        inputScreen.innerHTML = input
        inputScreen.innerHTML = inputScreen.innerHTML.slice(0, -1);
        console.log(inputScreen.innerHTML)
    }

    else if (btnValue === 'AC'){
        // if button was 'AC' clears the working area
        inputScreen.innerHTML = ''
    }
}

function opConvert(input){
    // Converts the inputs operators where neccessary
    input = input.replace('x', '*').replace('÷', '/').replace('^', '**');
    return input
}

/* Dark Mode JS */

function changeTheme() {

    let element = document.body;
    let screen = document.getElementById("screen");
    let calc = document.getElementById("calcMain");
    let nav = document.getElementById("navbar");
    let mode = document.getElementById("dark-mode");
    
    element.classList.toggle("dark-calc");
    screen.classList.toggle("dark-screen");
    calc.classList.toggle("calcContain");
    calc.classList.toggle("hover");
    nav.classList.toggle("bg-dark");
    mode.classList.toggle("darkBtn");
};

module.exports = {
    opConvert,
    specAction,
    handleClick
}