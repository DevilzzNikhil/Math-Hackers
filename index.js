
const input = document.querySelector('.input');
const output = document.querySelector('.operation .value');
const answer = document.querySelector('.result .value');

const column1 = document.querySelector('.column1');
const column2 = document.querySelector('.column2');

const content = document.querySelector(".history-content");


let history = [];
let outcome = [];


//variables 
const OPERATORS = ["+", "-", "*", "/"];

let data = {
    operation: [],
    formula: []
}

const POWER = "POWER(";
const FACTORIAL = "factoiral";



// CALCULATOR BUTTONS
let calculator_buttons = [
    {
        name: "rad",
        symbol: "Rad",
        formula: false,
        type: "key"
    },
    {
        name: "deg",
        symbol: "Deg",
        formula: false,
        type: "key"
    },
    {
        name: "square-root",
        symbol: "√",
        formula: "Math.sqrt",
        type: "math_function"
    },
    {
        name: "square",
        symbol: "x²",
        formula: POWER,
        type: "math_function"
    },
    {
        name: "open-parenthesis",
        symbol: "(",
        formula: "(",
        type: "number"
    },
    {
        name: "close-parenthesis",
        symbol: ")",
        formula: ")",
        type: "number"
    },
    {
        name: "clear",
        symbol: "C",
        formula: false,
        type: "key"
    },
    {
        name: "delete",
        symbol: "⌫",
        formula: false,
        type: "key"
    },
    {
        name: "pi",
        symbol: "π",
        formula: "Math.PI",
        type: "number"
    },
    {
        name: "cos",
        symbol: "cos",
        formula: "trigo(Math.cos,",
        type: "trigo_function"
    }, {
        name: "sin",
        symbol: "sin",
        formula: "trigo(Math.sin,",
        type: "trigo_function"
    }, {
        name: "tan",
        symbol: "tan",
        formula: "trigo(Math.tan,",
        type: "trigo_function"
    }, {
        name: "7",
        symbol: 7,
        formula: 7,
        type: "number"
    }, {
        name: "8",
        symbol: 8,
        formula: 8,
        type: "number"
    }, {
        name: "9",
        symbol: 9,
        formula: 9,
        type: "number"
    },
    {
        name: "division",
        symbol: "÷",
        formula: "/",
        type: "operator"
    },
    {
        name: "e",
        symbol: "e",
        formula: "Math.E",
        type: "number"
    },
    {
        name: "acos",
        symbol: "acos",
        formula: "inv_trigo(Math.acos,",
        type: "trigo_function"
    }, {
        name: "asin",
        symbol: "asin",
        formula: "inv_trigo(Math.asin,",
        type: "trigo_function"
    }, {
        name: "atan",
        symbol: "atan",
        formula: "inv_trigo(Math.atan,",
        type: "trigo_function"
    },
    {
        name: "4",
        symbol: 4,
        formula: 4,
        type: "number"
    }, {
        name: "5",
        symbol: 5,
        formula: 5,
        type: "number"
    }, {
        name: "6",
        symbol: 6,
        formula: 6,
        type: "number"
    }, {
        name: "multiplication",
        symbol: "×",
        formula: "*",
        type: "operator"
    }, {
        name: "factorial",
        symbol: "×!",
        formula: FACTORIAL,
        type: "math_function"
    }, {
        name: "exp",
        symbol: "exp",
        formula: "Math.exp",
        type: "math_function"
    }, {
        name: "ln",
        symbol: "ln",
        formula: "Math.log",
        type: "math_function"
    }, {
        name: "log",
        symbol: "log",
        formula: "Math.log10",
        type: "math_function"
    }, {
        name: "1",
        symbol: 1,
        formula: 1,
        type: "number"
    }, {
        name: "2",
        symbol: 2,
        formula: 2,
        type: "number"
    }, {
        name: "3",
        symbol: 3,
        formula: 3,
        type: "number"
    }, {
        name: "subtraction",
        symbol: "–",
        formula: "-",
        type: "operator"
    }, {
        name: "power",
        symbol: "x<span>y</span>",
        formula: POWER,
        type: "math_function"
    }, {
        name: "ANS",
        symbol: "ANS",
        formula: "ans",
        type: "number"
    }, {
        name: "percent",
        symbol: "%",
        formula: "/100",
        type: "number"
    }, {
        name: "comma",
        symbol: ".",
        formula: ".",
        type: "number"
    }, {
        name: "0",
        symbol: 0,
        formula: 0,
        type: "number"
    }, {
        name: "history",
        symbol: "HIS",
        formula: "history",
        type: "show"
    }, {
        name: "calculate",
        symbol: "=",
        formula: "=",
        type: "calculate"
    }, {
        name: "addition",
        symbol: "+",
        formula: "+",
        type: "operator"
    }
];

// Create Calculator 

function factoiral(number) {
    if (number == 1 || number == 0) return 1;
    else return number * factoiral(number - 1);
}

function create() {
    const btn_in_rows = 8;
    let current = 0;



    calculator_buttons.forEach(button => {

        if (current % btn_in_rows == 0) {
            column1.innerHTML += `<div class="row"></div>`;
        }

        if (current % btn_in_rows < 4) {
            const now = document.querySelector(".row:last-child");
            now.innerHTML += `<button id=${button.name}> ${button.symbol} </button>`;
        }
        current++;
    });
    current = 0;


    calculator_buttons.forEach(button => {

        if (current % btn_in_rows == 0) {
            column2.innerHTML += `<div class="row2"></div>`;
        }

        if (current % btn_in_rows >= 4) {
            const now = document.querySelector(".row2:last-child");
            now.innerHTML += `<button id=${button.name}> ${button.symbol} </button>`;
        }
        current++;
    });
}

create();


let RADIAN = true;
const rad = document.getElementById("rad");
const deg = document.getElementById("deg");


rad.classList.add("active-angle");

function toggle() {
    rad.classList.toggle("active-angle");
    deg.classList.toggle("active-angle");

}

const toggler = document.getElementById("history");
const history_show = document.querySelector('.history');

toggler.addEventListener("click", function () {

    history_show.classList.remove("toggle");
    history_show.classList.add("showing");

})


input.addEventListener("click", event => {
    const target = event.target;

    calculator_buttons.forEach(button => {
        if (button.name == target.id) calculate(button);
    })
});

function calculate(button) {
    if (button.type == "operator") {

        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    }
    else if (button.type == "number") {
        data.operation.push(button.symbol);
        data.formula.push(button.formula);

    }
    else if (button.type == "trigo_function") {
        data.operation.push(button.symbol + "(");
        data.formula.push(button.formula);

    }
    else if (button.type == "math_function") {

        let symbol, formula;

        if (button.name == "factorial") {
            symbol = "!";
            formula = button.formula;
            data.operation.push(symbol);
            data.formula.push(formula);
        }
        else if (button.name == "power") {
            symbol = "^(";
            formula = "**(";
            data.operation.push(symbol);
            data.formula.push(formula);
        }
        else if (button.name == "square") {
            symbol = "^(";
            formula = "**(";
            data.operation.push(symbol);
            data.formula.push(formula);
            data.operation.push("2)");
            data.formula.push("2)");
        }
        else {
            symbol = button.symbol;
            formula = button.formula;
            data.operation.push(symbol);
            data.formula.push(formula);
        }
    }
    else if (button.type == "key") {

        if (button.name == "delete") {
            data.operation.pop();
            data.formula.pop();
            updateResult(0);
        }
        if (button.name == "clear") {
            data.operation = [];
            data.formula = [];

            updateResult(0);
        }
        if (button.name == "rad") {
            RADIAN = true;
            toggle();
        }
        if (button.name == "deg") {
            RADIAN = false;
            toggle();
        }

    }
    else if (button.type == "calculate") {

        let string = data.formula.join('');
        let result;

        let string1 = data.operation.join('');
        history.push(string1);
        try {
            result = eval(string);
        } catch (error) {
            if (error) {
                result = "!!SYNTAX ERROR"
            }
        }
        outcome.push(result);
        console.log(outcome);
        console.log(history);
        updateResult(result);

        content.innerHTML += '<div class = "history-row"></div>'
        const history_text = document.querySelector(".history-row:last-child");

        
        history_text.innerHTML += `<div class="question"> ${history[history.length-1]} </div>`
        history_text.innerHTML += `<div class="answer"> ${outcome[outcome.length-1]} </div>`


    }

    updateOutput(data.operation.join(''));
    return;
}

function updateOutput(operation) {
    output.innerHTML = operation;
}

function updateResult(result) {
    answer.innerHTML = result;
}

function trigo(fun, angle) {
    if (!RADIAN) {
        angle = angle * Math.PI / 180;
    }
    return fun(angle);
}

function inv_trigo(fun, val) {
    let angle = fun(val);
    if (!RADIAN) {
        angle = angle * 180 / Math.PI;
    }
    return angle;
}
