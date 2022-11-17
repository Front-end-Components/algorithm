// 로또 순위 함수
function Lotto(num) {
  if (num <= 1) return 6;

  for (let i = 0; i < 6; i++) {
    if (num === 6 - i) return i + 1;
  }
}

function solution(lottos, win_nums) {
  let count = 0; // 맞은 번호 개수
  let count0 = 0; // 0인 번호의 개수
  let max = 0; // 최대 당첨 개수
  let min = 0; // 최소 당첨 개수

  // 로또 배열 길이만큼 반복
  // 2중 반복문으로 로또 번호와 당첨 번호 하나씩 모두 비교
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < lottos.length; j++) {
      // 번호가 같으면 맞은 번호 증가
      if (lottos[i] === win_nums[j]) count++;
    }
    // 0인 번호를 찾아 0인 번호의 개수 증가
    if (lottos[i] === 0) count0++;
  }

  // 최대 당첨 개수는 0인 번호가 모두 당첨이므로 맞은 번호 개수에 더해준다.
  // 최소 당첨 개수는 0인 번호가 모두 틀리기 때문에 그냥 맞은 번호 개수를 넣어준다.
  max = count + count0;
  min = count;

  // 순위를 계산해 출력
  return [Lotto(max), Lotto(min)];
}
