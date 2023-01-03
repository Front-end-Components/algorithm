function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    // moves 배열의 현재 요소 - 1
    // board 배열에서 인형을 뽑을 인덱스
    let line = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][line] > 0) {
        // board 배열의 요소인 배열에서 line 인덱스로 찾은 값이 stack 배열 변수의 마지막 값과 같을 경우
        // 마지막으로 뽑은 인형과 현재 뽑을 인형의 종류가 같은 것임
        if (board[j][line] === stack[stack.length - 1]) {
          // stack 배열 변수의 마지막 요소 삭제
          stack.pop();
          // 정답 카운트 변수에 2를 더해줌
          answer += 2;
        } else {
          // stack 배열 변수에 board 배열의 요소인 배열에서 line 인덱스로 찾은 값을 넣음
          // 뽑은 인형을 넣음
          stack.push(board[j][line]);
        }
        // 인형을 뽑아서 0이 됨
        board[j][line] = 0;
        // for 문을 빠져나감
        break;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
