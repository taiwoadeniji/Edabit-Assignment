//Create a function that takes two numbers and a mathematical operator + - / * and //
//will perform a calculation with the given numbers.//

function calculator(num1, operator, num2) {
    if (num2 === 0) { return "Can't divide by 0!"; }
    else {
        switch (operator) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;
        }
    }
}
// This codes runs on edabit too.//

