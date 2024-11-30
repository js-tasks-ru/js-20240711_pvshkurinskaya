/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const props = path.split(".");
    
    function inner(obj) {
      let ans = obj;
      for (let i = 0; i < props.length; i++) {
        if (ans === undefined || !Object.prototype.hasOwnProperty.call(ans, props[i])) {
          return undefined;
        }
        ans = ans[props[i]];
      }
      return ans;
    }
    
    return inner;
  }
