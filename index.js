const someString = '55+22*2';
// const someString = 'alert("OOPs!")';

function calculateExpressionFromString(inputData) {
    const validator = new RegExp(/^(\d|\+|-|\*|\/|\(|\))+$/g);
    if (validator.test(inputData)) {
        return eval(inputData);
    }
}

console.log(calculateExpressionFromString(someString));

/*
operators +,-,*,/,(,)

1. 55+22*2
2. 55+22-2
3. (55+22)*2
4. 55+(22-2)*2
5. 2*(22-2)+55
6. 55+(22-2)*2-5

function calculateTwoOperators(a,b,op);
function parseExpressionString(s);

 */
