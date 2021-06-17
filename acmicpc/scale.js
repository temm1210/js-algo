const test = [8, 7, 1, 6, 5, 4, 3, 2, 1];

function isScale(arr) {
  let ascending = true;
  let descending = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      descending = false;
    } else {
      ascending = false;
    }
  }

  if (ascending) console.log("ascending");
  else if (descending) console.log("descending");
  else console.log("mixed");

  console.log("ascending:", ascending);
  console.log("descending:", descending);
}

isScale(test);
