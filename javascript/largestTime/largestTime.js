// Given an array of 4 digits, return the largest 24 hour time that can be made.

// The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

// Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

// Input: [1,2,3,4]
// Output: "23:41"

// Input: [5,5,5,5]
// Output: ""

var largestTimeFromDigits = function(A) {
    let newArray = A.slice();
    let t1 = A.indexOf(2);
    let t2 = -1;
    let t3 = -1;
    let t4 = -1;
    if (t1 !== -1) {
        t2 = A.indexOf(3);
        if (t2 === -1) t2 = A.indexOf(2, t1 + 1);
        if (t2 === -1) t2 = A.indexOf(1);
        if (t2 === -1) t2 = A.indexOf(0);
        if (t2 !== -1) {
            let checkValidt3 = false;
            for (let i = 0; i < A.length; i++) {
                if (i === t1 || i === t2) continue;
                if (A[i] < 6) checkValidt3 = true;
            }
            if (checkValidt3 === false) t2 = -1;
        }
        if (t2 === -1) t1 = -1;
    }
    if (t1 === -1) {
        t1 = A.indexOf(1);
        if (t1 === -1) t1 = A.indexOf(0);
        if (t1 === -1) return "";
    }
    newArray.splice(t1, 1);
    if (t2 !== -1) {
        let spliceIndex = newArray.indexOf(A[t2]);
        newArray.splice(spliceIndex, 1);
    }
    if (t2 === -1) {
        let maxNum = Math.max(...newArray);
        t2 = A.indexOf(maxNum);
        newArray.splice(newArray.indexOf(maxNum), 1);
    }

    for (let i = 5 ; i >= 0; i--) {
        t3 = newArray.indexOf(i);
        if (t3 !== -1) break;
    }
    if (t3 === -1) return "";

    t3 = A.indexOf(newArray[t3]);
    let spliceIndex = newArray.indexOf(A[t3]);
    newArray.splice(spliceIndex, 1);
    t4 = newArray[0];
    t1 = A[t1];
    t2= A[t2];
    t3 = A[t3];
    return `${t1}${t2}:${t3}${t4}`;
};

console.log(largestTimeFromDigits([0,0,0,2]))