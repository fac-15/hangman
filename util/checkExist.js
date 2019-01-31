export const fillArray = (value, len) => {
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(value);
  }
  return arr;
};

export const check = (word, letter, previousLetter) => {
  const array = word.split("");

  const indexes = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] == letter) {
      indexes.push([i]);
    }
  }

  for (var j = 0; j < indexes.length; j++) {
    previousLetter[indexes[j]] = letter;
  }

  return previousLetter.join(" ");
};
