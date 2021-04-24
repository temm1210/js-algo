// 회문

// function test(data, index = 0) {
//     if (index >= Math.floor(data.length / 2)) {
//       return true;
//     }
//     const length = data.length - 1;
//     if (data[index] === data[length - index]) {
//       return test(data, ++index);
//     } else {
//       return false;
//     }
// }

function test2(data) {
  if (data.length <= 1) {
    return true;
  }

  if (data[0] === data[data.length - 1]) {
    return test2(data.slice(1, data.length - 1));
  } else return false;
}

console.log(test2("level"));
