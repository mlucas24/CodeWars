var canFormArray = function(arr, pieces) {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < pieces.length; j++) {
            if (found == true) continue;
            if (pieces[j][0] == arr[i]) {
                if (pieces[j].length == 1) {
                    found = true;
                    continue;
                }
                for (let k = 1; k < pieces[j].length; k++) {
                    if (arr[i+1] != pieces[j][k]) {
                        return false;
                    }
                    found = true;
                    i++;
                }
            }
        }
        if (found == false) return false;
        found = false;
    }
    return true;
};