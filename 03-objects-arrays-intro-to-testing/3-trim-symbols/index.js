/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if (size === null || size === undefined){
        return string;
    }
    let ans = "";
    let prevSymb = null;
    let count = 0;
    for (let i = 0; i < string.length; ++i){
        if (prevSymb === string[i]){
            if (count >= size){
                continue;
            }
            count++;
            ans = ans + prevSymb;
        } else {
            count = 1;
            prevSymb = string[i];
            if (size > 0){
                ans = ans + prevSymb;
            }
        }
    }
    return ans;
}
