/**
 * Word Count Engine

Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words in it 
and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the same count, 
they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. 
You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.

The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.


input:  document = "Practice makes perfect. you'll only
                    get Perfect by practice. just practice!"

output: [ ["practice", "3"], ["perfect", "2"],
          ["makes", "1"], ["youll", "1"], ["only", "1"], 
          ["get", "1"], ["by", "1"], ["just", "1"] ]
Important: please convert the occurrence integers in the output list to strings (e.g. "3" instead of 3).

 */

export function wordCountEngine(document) {
    const normalizeDoc = document.toLowerCase().replace(/[^\w\s]/g, '');
    const words = normalizeDoc.split(' ');
    const wordMap = new Map();

    words.forEach((word, index) => {
        if (!word) return;
        if (wordMap.has(word)) {
            wordMap.get(word).count += 1;
        } else {
            wordMap.set(word, {count: 1, index});
        }
    });

    const wordList = Array.from(wordMap.entries()).sort((a,b) => {
        if (a[1].count === b[1].count) {
            return a[1].index - b[1].index;
        } else {
            return b[1].count - a[1].count;
        }
    });

    return wordList.map(([word, info]) => [word, info.count.toString()]);
}

