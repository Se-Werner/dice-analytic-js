

// Model section -----

function getValues() {
    const numField = document.getElementById('inputNum');
    const dieField = document.getElementById('inputDice');
    const modField = document.getElementById('inputMod');

    if (numField.value <= 30) {
        if (numField.value >= 1) {
            if (modField.value < 100) {
                const valueObject = {
                    'num': numField.value,
                    'dice': dieField.value,
                    'mod': modField.value
                };
                return valueObject;
            } else {
                console.log('Please choose Mod value below 100')
            };
        } else {
            console.log('Dice amount has to be at least 1')
        };
    } else {
        console.log('Please choose dice amount of 30 or below')
    };
};

function simDice(input) {
    console.log(input)
};


// Visiual Section -----


// Control Section -----

function buttonTest() {
    //console.log(Math.floor(Math.random() * (diceKind + 1)) + 1);
    const input = getValues();
    simDice(input);
};