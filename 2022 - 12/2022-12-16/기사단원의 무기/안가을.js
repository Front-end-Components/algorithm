function solution(number, limit, power) {
  let answer = 0;
  const countArr = [];

  // 1부터 주어진 숫자까지 반복
  for (let num = 1; num <= number; num++) {
    let count = 0;

    // 1부터 num의 제곱근까지 반복 (중복 카운트 방지)
    for (let i = 1; i <= Math.sqrt(num); i++) {
      // num를 i로 나눈 나머지가 0일 경우 i는 num의 약수임
      if (num % i === 0) {
        // 나머지와 몫이 같을 경우 i만 num의 약수
        // 예) 16 / 4 === 4
        // 약수 갯수 변수에 +1
        if (num / i === i) {
          count += 1;

          // 나머지와 몫이 다를 경우 i와 나머지는 num의 약수
          // 예) 16 / 2 !== 2
          // 16 / 2 === 8
          // 약수 갯수 변수에 +2 (약수 2, 8)
        } else {
          count += 2;
        }
      }
    }
    // 약수 갯수가 limit 보다 클 경우 power 를,
    // 그렇지 않을 경우 약수 갯수를 카운트 배열에 넣기
    countArr.push(count > limit ? power : count);
  }

  // 카운트 배열의 요소들을 누적하여 정답 변수에 할당
  answer = countArr.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

console.log(solution(5, 3, 2)); // 10
console.log(solution(10, 3, 2)); // 21
