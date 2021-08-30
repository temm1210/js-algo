function solution(phone_number) {
  const sizeToReplace = phone_number.slice(0, phone_number.length - 4).length;
  const viewLastNumber = phone_number.slice(phone_number.length - 4);

  const hiddenNumber = [...Array(sizeToReplace).keys()].reduce((total, _) => {
    return `${total}*`;
  }, "");

  const result = hiddenNumber + viewLastNumber;

  return result;
}

console.log("solution:", solution("01033334444"));
console.log("solution:", solution("027778888"));
