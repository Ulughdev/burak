// TASK-  G

//const { max } = require("moment");

getHighestIndex = (a) => {
    // let b = 0;
    let index = 0;
    let max = a[0];
    for(let i=1; i < a.length; i++){
        if (a[i] > max){
         //b++
        max = a[i];
        index = i;
        } 
    }

    return index;
};

const javob = getHighestIndex([3, 21, 12, 21, 21, 8, ]);
console.log("javob :", javob)