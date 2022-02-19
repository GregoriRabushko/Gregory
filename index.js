// const rawString = 'alert("OOPs!")';

import {CONSTANTA} from './second.js';

CONSTANTA.foo = ''; // WILL BE BUG!!!

const rawString = '55*(22-2)/2+(5/((-8)-2)*(-3))'
const clearString = rawString.replace(/\s+/, '');
console.log(clearString);


export function calculateExpressionFromString(inputData) {
    const validator = new RegExp(/^(\d|\+|-|\*|\/|\(|\))+$/g);
    if (validator.test(inputData)) {
        return eval(inputData);
    }
}

console.log('Eval: ', calculateExpressionFromString(clearString));

/*
operators +,-,*,/,(,)

1. 55+22*2
2. 55+22-2
3. (55+22)*2
4. 55+(22-2)*2
5. 2*(22-2)+55
6. 55+(22-2)*2-5
7. 55*(22-2)/2+(5/(5+2)*3)
8. 55*(22-2)/2+(5/((-8)-2)*(-3))

 */

// function calculateCharsArrayWithBrackets(charsArray = [], returnOnCloseBracket = false) {
//     const expressionArray = [];
//
//     let countOfOpenedBrackets = 0;
//     for (let currentIndex = 0; currentIndex < charsArray.length; currentIndex++) {
//         const char = charsArray[currentIndex];
//         switch (char) {
//             case ('('):
//                 countOfOpenedBrackets++;
//                 returnOnCloseBracket = false;
//                 if (countOfOpenedBrackets === 1) {
//                     expressionArray.push(
//                         calculateCharsArrayWithBrackets(charsArray.slice(currentIndex + 1, charsArray.length), true)
//                             .toString()
//                     );
//                 }
//                 break;
//             case (')'):
//                 if (countOfOpenedBrackets > 0) {
//                     countOfOpenedBrackets--;
//                 }
//                 if (countOfOpenedBrackets === 0 && returnOnCloseBracket) {
//                     return calculateCharsArrayWithoutBrackets(expressionArray);
//                 }
//                 break;
//             default:
//                 if (countOfOpenedBrackets === 0) {
//                     expressionArray.push(char);
//                 }
//                 break;
//         }
//     }
//
//     return calculateCharsArrayWithoutBrackets(expressionArray);
// }
//
// function calculateCharsArrayWithoutBrackets(charsArray = []) {
//     const arrayLength = charsArray.length;
//     if (arrayLength === 0) {
//         return NaN;
//     }
//
//     if (arrayLength === 1 && !isNaN(Number(charsArray[0]))) {
//         return Number(charsArray[0]);
//     }
//
//     const arguments = [];
//     const operators = [];
//
//     let lastWas = '';
//     for (let currentIndex = 0; currentIndex < charsArray.length; currentIndex++) {
//         const char = charsArray[currentIndex];
//         const charIsNumber = !isNaN(Number(char));
//         if (charIsNumber) {
//             if (lastWas === 'argument') {
//                 arguments[arguments.length - 1] += char
//             }
//
//             if (lastWas === 'operator' || lastWas === '') {
//                 arguments[arguments.length] = char;
//                 lastWas = 'argument';
//             }
//         } else {
//             if (lastWas === 'argument') {
//                 operators[operators.length] = char;
//                 lastWas = 'operator';
//                 continue;
//             }
//
//             if (char === '-' && (lastWas === 'operator' || lastWas === '')) {
//                 arguments[arguments.length] = char;
//                 lastWas = 'argument';
//                 continue;
//             }
//
//             return NaN;
//         }
//     }
//
//     if (lastWas === 'operator') {
//         return NaN;
//     }
//
//     return calculateArraysOfArgumentsAndOperators(arguments, operators);
// }
//
// function calculateTwoNumbers(first, second, operator) {
//     switch (operator) {
//         case '+':
//             return Number(first) + Number(second);
//         case '-':
//             return Number(first) - Number(second);
//         case '*':
//             return Number(first) * Number(second);
//         case '/':
//             return Number(first) / Number(second);
//         default:
//             return NaN;
//     }
// }
//
// function positionOfPrioritisedOperator(first, second) {
//     if (first === '*' || first === '/') return 1;
//     if (second === '*' || second === '/') return 2;
//     return 1;
// }
//
// function calculateArraysOfArgumentsAndOperators(arguments = [], operators = []) {
//     console.log('arguments: ', arguments)
//     console.log('operators: ', operators)
//     if (operators.length === 0 && (arguments.length === 0 || arguments.length > 1)) {
//         return NaN;
//     }
//
//     if (arguments.length === 1 && operators.length === 0) {
//         return Number(arguments[0]);
//     }
//
//     if (arguments.length - operators.length === 1) {
//         const reverseArguments = arguments.reverse();
//         const reverseOperators = operators.reverse();
//
//         let firstArgument = reverseArguments.pop();
//         let secondArgument = reverseArguments.pop();
//         let firstOperator = reverseOperators.pop();
//         let secondOperator = reverseOperators.pop();
//
//         while (firstArgument && secondArgument) {
//             if (positionOfPrioritisedOperator(firstOperator, secondOperator) === 1) {
//                 firstArgument = calculateTwoNumbers(firstArgument, secondArgument, firstOperator).toString();
//                 secondArgument = reverseArguments.pop();
//                 firstOperator = secondOperator;
//                 secondOperator = reverseOperators.pop();
//             } else {
//                 const thirdArgument = reverseArguments.pop();
//                 secondArgument = calculateTwoNumbers(secondArgument, thirdArgument, secondOperator).toString();
//                 secondOperator = reverseOperators.pop();
//             }
//         }
//
//         return Number(firstArgument);
//     }
//
//     return NaN
// }
//
// console.log('Custom: ', calculateCharsArrayWithBrackets(clearString.split('')))
