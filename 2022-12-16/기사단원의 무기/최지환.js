function solution(number, limit, power) {
  let knights = Array(number)
    .fill(1)
    .map((cur, i) => i + 1); // 기사단원 배열
  let weapon = 0; // 약수의 갯수(공격력)
  let weapons = []; // 약수의 갯수를 담을 배열
  let answer = 0;

  // 기사단원 배열을 순회하면서 기사 각각의 약수의 갯수를 구해줌
  // 구한 약수의 갯수를 weapons 배열에 담아준다.
  knights.forEach((knight) => {
    for (let i = 1; i <= Math.sqrt(knight); i++) {
      if (knight % i === 0) {
        if (knight / i === i) {
          weapon++;
        } else weapon += 2;
      }
    }
    weapons.push(weapon);
    weapon = 0;
  });

  // 약수의 개수를 담은 배열을 순회하며 제한 수치를 넘는 인덱스는 power로 교체
  // 배열의 모든 인덱스의 합을 구해주고 리턴
  for (let i = 0; i < weapons.length; i++) {
    if (weapons[i] > limit) {
      weapons[i] = power;
    }
    answer += weapons[i];
  }

  return answer;
}
