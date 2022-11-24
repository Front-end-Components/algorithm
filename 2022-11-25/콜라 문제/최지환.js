function solution(a, b, n) {
  let answer = 0;

  // 갖고 있는 빈 병의 갯수가 마트에 가져다 줘야 하는 빈 병의 갯수보다 많을 때 반복문 실행
  while (n >= a) {
    const changeBottle = n - (n % a); // 바꿀 빈 병의 갯수
    const getCoke = parseInt(n / a, 10) * b; // 받는 콜라 갯수

    n = n - changeBottle + getCoke;

    answer += getCoke;
  }

  return answer;
}
