/**
 * Bracket Match

A string of brackets is considered correctly matched if every opening bracket in the string can be paired up with a later closing bracket, and vice versa. 
For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t. For instance, “((” could become correctly matched by adding two closing brackets 
at the end, so you’d return 2.

Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets 
you’d need to add to the input in order to make it correctly matched.


input:  text = “(()”
output: 1

input:  text = “(())”
output: 0

input:  text = “())(”
output: 2
 */

// brute force solution
export function bracketMatch1(text) {
    let stack = [];
    for (let i = 0; i < text.length; i++) {
        // text.charAt(i)
        const bracket = text.charAt(i);
        if (bracket === ')') {
            if (stack.length && stack[stack.length - 1] === '(') {
                stack.pop();
            } else { // stack is empty; or stack[stack.length - 1] is )
                stack.push(bracket);
            }
        } else { // '('
            stack.push(bracket);
        }
    }
    return stack.length;
}

export function bracketMatch2(text) {
    let ans = 0;
    let midval = 0;
    let openCount = 0;
    let closeCount = 0;
    for (let i = 0; i < text.length; i++) {
        const bracket = text.charAt(i);
        if (bracket === '(') {
            openCount++;
        } else {
            if (openCount > 0) {
                openCount--;
            } else {
                closeCount++;
            }
        }
    }
    return openCount + closeCount;
}
