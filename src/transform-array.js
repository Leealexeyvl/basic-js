const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Not array');
  }

  let result = arr.slice();

  for (let i = 0; i < result.length; i++) {
    if (result[i] == '--discard-next') {
      result[i] = undefined;
      result[i + 1] = undefined;
      i += 1;
    } else if (result[i] == '--discard-prev') {
      result[i] = undefined;
      result[i - 1] = undefined;
    } else if (result[i] == '--double-next') {
      result[i] = result[i + 1];
    } else if (result[i] == '--double-prev') {
      result[i] = result[i - 1];
    } 
  }

    return result.filter(item => item != undefined);

};
