/**
Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', write a function isValid to determine if the input string is valid. An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Return true if the string is valid, otherwise return false.

Examples
Input: s = "({"
Output: false

Input: s = "({[]()})"
Output: true
In the first example, all brackets are properly closed and nested, so the result is true. In the second example, each type of bracket is matched and nested correctly, so the result is also true.

Constraints
The string s has a length of at most 10^4.
 */

export function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            // If the character is an opening bracket, push its corresponding closing bracket onto the stack
            stack.push(map[char]);
        } else {
            // If the character is a closing bracket, check if it matches the top of the stack
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets were properly closed
    return stack.length === 0;
}
