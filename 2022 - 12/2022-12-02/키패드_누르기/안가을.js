function solution(numbers, hand) {
  const answer = [];
  // 왼손으로 누를 숫자
  const left = [1, 4, 7];

  // 오른손으로 누를 숫자
  const right = [3, 6, 9];

  // 가운데 있는 숫자
  const center = [2, 5, 8, 0];

  // 인덱스 : 현재 손가락이 위치한 숫자
  // 값: 해당 숫자에서부터 가운데 있는 숫자인 2, 5, 8, 0 까지의 거리
  // 숫자는 1부터 시작하기 때문에 0번째 인덱스 요소는 비워두었음
  const move = [[], [1, 2, 3, 4], [0, 1, 2, 3], [1, 2, 3, 4], [2, 1, 2, 3], [1, 0, 1, 2], [2, 1, 2, 3], [3, 2, 1, 2], [2, 1, 0, 1], [3, 2, 1, 2], [4, 3, 2, 1], [3, 2, 1, 0], [4, 3, 2, 1]];

  // 현재 왼쪽 손가락이 위치한 숫자 (* 를 10 으로 표현)
  let curLeft = 10;

  // 현재 오른쪽 손가락이 위치한 숫자 (# 를 12 로 표현)
  let curRight = 12;

  for (let i = 0; i < numbers.length; i++) {
    // 현재 숫자가 left 배열 변수에 존재할 경우 정답 배열에 "L" 을 넣음
    if (left.includes(numbers[i])) {
      answer.push('L');

      // 현재 숫자가 right 배열 변수에 존재할 경우 정답 배열에 "R" 을 넣음
    } else if (right.includes(numbers[i])) {
      answer.push('R');

      // 현재 숫자가 left, right 배열 변수에 존재하지 않는 경우
      // 가운데 있는 숫자들 중에 하나임
    } else {
      // center 배열에서 현재 숫자의 인덱스를 찾음
      let idx = center.indexOf(numbers[i]);

      // move 배열에서 현재 왼쪽/오른쪽 손가락의 위치, 현재 가운데 숫자를 인덱스로 거리를 구함
      // 왼쪽 손가락에서부터 현재 가운데 숫자까지의 거리가 더 작을 경우 정답 배열에 "L" 을 넣음
      if (move[curLeft][idx] < move[curRight][idx]) {
        answer.push('L');

        // 오른쪽 손가락에서부터 현재 가운데 숫자까지의 거리가 더 작을 경우 정답 배열에 "R" 을 넣음
      } else if (move[curLeft][idx] > move[curRight][idx]) {
        answer.push('R');

        // 두 거리가 같을 경우 왼손잡이면 정답 배열에 "L", 오른손잡이면 정답 배열에 "R" 을 넣음
      } else {
        if (hand === 'left') answer.push('L');
        else answer.push('R');
      }
    }

    // 가장 마지막으로 정답 배열에 넣은 값을 찾음
    const direction = answer[answer.length - 1];

    // 현재 숫자가 0일 경우
    if (numbers[i] === 0) {
      // 가장 마지막으로 정답 배열에 넣은 값이 "L" 일 경우 현재 왼쪽 손가락 위치 변수에 11 을 넣음
      if (direction === 'L') curLeft = 11;
      // 아닐 경우 "R" 이기 때문에 현재 오른쪽 손가락 위치 변수에 11 을 넣음
      else curRight = 11;

      // 현재 숫자가 0이 아닐 경우
    } else {
      // 가장 마지막으로 정답 배열에 넣은 값이 "L" 일 경우 현재 왼쪽 손가락 위치 변수에 현재 숫자를 넣음
      if (direction === 'L') curLeft = numbers[i];
      // 아닐 경우 "R" 이기 때문에 현재 오른쪽 손가락 위치 변수에 현재 숫자를 넣음
      else curRight = numbers[i];
    }
  }
  // 정답 배열 변수를 문자열로 이어서 반환함
  return answer.join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')); // "LLRLLRLLRL"
