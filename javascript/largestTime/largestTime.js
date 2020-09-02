// Given an array of 4 digits, return the largest 24 hour time that can be made.

// The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

// Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

// Input: [1,2,3,4]
// Output: "23:41"

// Input: [5,5,5,5]
// Output: ""

var largestTimeFromDigits = function(A) {
    let returnTime = "";
    let time1 = "";
    let time2 = "";
    let time4 = "";
    let time5 = "";

    const isFail = () => {
        if (time1.length === 0) return false;
        if (time4.length === 0) return false;
        if (time2.length === 0) return false;
    }

    for (let i = 0; i < 4; i++) {
        if (A[i] <= 2) {
            time1 += i;
        }
        if (A[i] <= 5) {
            time4 += i;
        }
        time2 += i;
        time5 += i;
    }

    if (time1.length === 0) {
        return "";
    }
    for (let j = 0; j < time1.length; j++) {
        if (A[time1[j]] == 2) {
            for (let k = 0; k < time2.length; k++) {
                if (A[time2[k]] <= 3 && time2[k] !== time1[j]) {
                    time1 = `${A[j]}`;
                    time2.replace(time1[j], "");
                    time4.replace(time1[j], "");
                    time5.replace(time1[j], "");
                    break;
                }
            }
            break;
        }
        else if ()
    }
};