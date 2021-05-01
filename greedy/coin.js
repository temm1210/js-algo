// 총 가격이 주어지면 해당 가격을 만족하기위해 코인을 몇개를 사용해야하는지를 출력
// 그리디 알고리즘은 최적의 해를찾는 알고리즘 이라기 보다는 매 경우 최적의 선택만 하는알고리즘
// 결과값이 최적의 해가 아닐수도있음(근사치값을 구하는대 자주사용됨)

const coins = [1, 100, 50, 500];
const price = 4870;

function calMiniCoinCount(targetPrice, coins) {
  let totalConinCount = 0;
  let totalPrice = targetPrice;
  const coinCountBoard = [];

  coins.sort((a, b) => b - a);

  for (let i = 0; i < coins.length; i++) {
    const coinCount = Math.floor(totalPrice / coins[i]);
    totalConinCount += coinCount;
    coinCountBoard.push([coins[i], coinCount]);
    totalPrice -= coinCount * coins[i];
  }

  return { totalConinCount, coinCountBoard };
}

console.log(calMiniCoinCount(price, coins));
