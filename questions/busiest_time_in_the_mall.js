/**
 * Busiest Time in The Mall

The Westfield Mall management is trying to figure out what the busiest moment at the mall was last year. 
You’re given data extracted from the mall’s door detectors. Each data point is represented as an integer array whose size is 3. 
The values at indices 0, 1 and 2 are the timestamp, the count of visitors, and whether the visitors entered or exited the mall (0 for exit and 1 for entrance), 
respectively. Here’s an example of a data point: [ 1440084737, 4, 0 ].

Given an array, data, of data points, write a function findBusiestPeriod that returns the time at which the mall reached its busiest moment last year. 
The return value is the timestamp, e.g. 1480640292. Note that if there is more than one period with the same visitor peak, return the earliest one.

Assume that the array data is sorted in an ascending order by the timestamp. 


input:  data = [ [1487799425, 14, 1], 
                 [1487799425, 4,  0],
                 [1487799425, 2,  0],
                 [1487800378, 10, 1],
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  0] ]

output: 1487800378

 */

function findBusiestPeriod1(data) {
    let newData = [];
    let curTime = 0;
    for (let i = 0; i < data.length; i++) {
        // same timeStamp
        if (data[i][0] === curTime) {
            newData[newData.length - 1].countArr.push([data[i][1], data[i][2]]);
        } else {
            // new timeStamp
            curTime = data[i][0];
            newData.push({timeStamp: data[i][0], countArr: [[data[i][1], data[i][2]]]});
        }
    }

    newData = newData.map(e => {
        return [e.timeStamp, e.countArr.reduce((pre, [count, isEntrance]) => pre + (isEntrance === 1 ? count : -count), 0)]
    })

    let result = newData.reduce((acc, [timestamp, value], curIndex) => {
        let curCount = acc.curPeople + value;
        if (curCount > acc.maxCount) {
            return {
                maxCount: curCount,
                curPeople: curCount,
                busiestTime: timestamp
            }
        }
        return {
            ...acc,
            curPeople: curCount
        }
    }, {maxCount: 0, curPeople: 0, busiestTime: 0});

    return result.busiestTime;
}

function findBusiestPeriod2(data) {
    // initial variables
    let maxPeople = 0;
    let busiestTime = 0;
    let curPeople = 0;

    for (let i = 0; i < data.length; i++) {
        let [timestamp, count, type] = data[i];

        // calculate the current people based on exit or entry
        if (type === 1) {
            curPeople += count;
        } else {
            curPeople -= count;
        }

        // check if we have reached a new timestamp
        if ((i === data.length - 1) || (data[i+1][0] !== timestamp)) {
            // update the busiestTime if needed
            if (curPeople > maxPeople) {
                maxPeople = curPeople;
                busiestTime = timestamp;
            }
        }

    }
    return busiestTime;
}

let data = [ [1487799425, 14, 1], 
            [1487799425, 4,  0],
            [1487799425, 2,  0],
            [1487800378, 10, 1],
            [1487801478, 18, 0],
            [1487801478, 18, 1],
            [1487901013, 1,  0],
            [1487901211, 7,  1],
            [1487901211, 7,  0] ];

console.log(findBusiestPeriod1(data));
console.log(findBusiestPeriod2(data));
