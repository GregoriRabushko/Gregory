const someString = '55+22*2';
// const someString = 'alert("OOPs!")';

// function calculateExpressionFromString(inputData) {
//     const validator = new RegExp(/^(\d|\+|-|\*|\/|\(|\))+$/g);
//     if (validator.test(inputData)) {
//         return eval(inputData);
//     }
// }
//
// console.log(calculateExpressionFromString(someString));

/*
operators +,-,*,/,(,)

1. 55+22*2
2. 55+22-2
3. (55+22)*2
4. 55+(22-2)*2
5. 2*(22-2)+55
6. 55+(22-2)*2-5
7. 55*(22-2)/2+(5/(5+2)*3)

function calculateTwoOperators(a,b,op);
function parseExpressionString(s);

 */

function calculateExpressionFromCharsArray(charsArray = []) {
    const expressionArray = [];

    for (let currentIndex = 0; currentIndex < charsArray.length; currentIndex++) {
        const char = charsArray[currentIndex];
        switch (char) {
            case ('('):
                expressionArray.push(
                    calculateExpressionFromCharsArray(charsArray.slice(currentIndex + 1, charsArray.length)).toString()
                );
                break;
            case (')'):
                return calculateCharsArrayWithoutBrackets(expressionArray);
            default:
                expressionArray.push(char);
                break;
        }
    }

    return calculateCharsArrayWithoutBrackets(expressionArray);
}

function calculateCharsArrayWithoutBrackets(charsArray = []) {
    const arrayLength = charsArray.length;
    if (arrayLength === 0) {
        return 0;
    }

    if (arrayLength === 1 && !isNaN(Number(charsArray[0]))) {
        return Number(charsArray[0]);
    }

    // 55*(22-6/5-2)/2+(5/(5+2)*3)

    let firstArgument = '';
    let secondArgument = '';
    let thirdArgument = '';
    let firstOperator = '';
    let secondOperator = '';

    charsArray.forEach(
        (char, currentIndex, array) => {
            const charIsNumber = !isNaN(Number(char));
            if (firstArgument === '') {
                if (charIsNumber || (char === '-' || char === '+')) {
                    firstArgument += char;
                }

                throw Error('Syntax error!!!'); // TODO
            } else {
                if (firstOperator === '' && !charIsNumber) {
                    firstOperator = char;
                } else if (firstOperator === '' && charIsNumber) {
                    firstArgument += char;
                } else if (charIsNumber && secondArgument === '') {
                    secondArgument += char;
                } else if (charIsNumber) {
                    thirdArgument += char;
                } else {
                    if (secondArgument !== '' && secondOperator === '') {
                        secondOperator += char;
                        throw Error('Syntax error!!!'); // TODO
                    }

                    if (positionOfPrioritisedOperator(firstOperator, secondOperator) === 1) {
                        firstArgument = calculateTwoNumbers(firstArgument, secondArgument, firstOperator);
                        secondArgument = '';
                        firstOperator = secondOperator;
                        secondOperator = '';
                    } else {
                        secondArgument = calculateTwoNumbers(secondArgument, thirdArgument, secondOperator);
                        thirdArgument = '';
                        secondOperator = char;

                        if (positionOfPrioritisedOperator(firstOperator, secondOperator) === 1) {
                            firstArgument = calculateTwoNumbers(firstArgument, secondArgument, firstOperator);
                            secondArgument = '';
                            firstOperator = secondOperator;
                            secondOperator = '';
                        } else {
                            // TODO
                        }
                    }
                }
            }
        }
    );

    return calculateTwoNumbers(firstArgument, secondArgument, firstOperator);
}

function calculateTwoNumbers(first, second, operator) {
    switch (operator) {
        case '+':
            return Number(first) + Number(second);
        case '-':
            return Number(first) - Number(second);
        case '*':
            return Number(first) * Number(second);
        case '/':
            return Number(first) / Number(second); // TODO check division with zero
        default:
            return 0;
    }
}

function positionOfPrioritisedOperator(first, second) {
    if (second === '*' || second === '/') {
        if (first === '*' || first === '/') return first;
        return 2;
    }
    return 1;
}