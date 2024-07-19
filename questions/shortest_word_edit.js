/**
 * Shortest Word Edit Path

Given two words source and target, and a list of words words, find the length of the shortest series of edits that transforms source to target.

Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words.

If the task is impossible, return -1.


source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

output: 5
explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.
source = "no", target = "go"
words = ["to"]

output: -1
 */

function shortestWordEditPath(source, target, words) {
    const wordSet = new Set(words);

    // if words not contain target, the task is impossible
    if (!wordSet.has(target)) {
        return -1;
    }

    let queue = [[source, 0]];
    const visited = new Set([source]);

    while (queue.length) {
        const [curWord, steps] = queue.shift();

        if (curWord === target) {
            return steps;
        }

        for (const neighbor of getNeighbors(curWord, wordSet)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([neighbor, steps + 1]);
            }
        }
    }
    return -1;
}

function getNeighbors(word, wordSet){
    let neighbors = [];
    let charArray = word.split('');
    const ALLLETTERS = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < charArray.length; i++) {
        const originalChar = charArray[i];
        for (let j = 0; j < 26; j++) {
            let newChar = ALLLETTERS.charAt(j);
            if (newChar !== originalChar) {
                charArray[i] = newChar;
            }
            let newWord = charArray.join('');
            if (wordSet.has(newWord)) {
                neighbors.push(newWord);
            }
        }
        charArray[i] = originalChar;
    }

    return neighbors;
}

let source = "bit", target = "dog", words = ["but", "put", "big", "pot", "pog", "dog", "lot"];
console.log(shortestWordEditPath(source,target,words))

/**
 bit => but ?

 b,i,t
 b => a-z
 i => a-z ===> find but in words, continue
 t => a-z

 b => a-z ====> find put in words, continue
 u => a-z
 t => a-z

 p => a-z
 u => a-z ===> find pot in words, continue
 t => a-z

 p => a-z
 o => a-z
 t => a-z ====> find pog in words, continue

 p => a-z ====> find dog equals to target, end
 o => a-z
 g => a-z

 */