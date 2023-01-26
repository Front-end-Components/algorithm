function solution(board, moves) {
  let answer = 0;
  const stack = [];

  for(let x of moves) {
    for (let i = 0; i < board.length; i++) {
      let crane = board[i][x - 1];
      if (crane === 0) continue;
      if (crane === stack[stack.length - 1]) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(crane);
      }
      board[i][x - 1] = 0;
      break;
    }
  }
  return answer;
}

// 풀이
// moves로 board로 순회하기 때문에 이중 for문으로 돈다.
// 인형을 뽑을 크레인의 값을 crane 변수에 저장한다.
// crane이 0일때, 인형이 없기 때문에 continue를 시킨다.
// stack에 마지막 배열의 값과 뺀 crane 값이 같을 때, 맞닿은 두 인형이 같이 사라지는 규칙에 따라
// answer을 +2를 해주고, stack의 마지막 인형은 pop()을 시키고 crane에 있는 인형은 담지 않는다.
// 위의 조건들이 아니라면, stack에 crane이 갖고 있는 인형을 푸시해준다.
// 다음 해당 board[i]의 배열은 인형이 뽑혔기 때문에 0으로 만들어준다.
// 그리고 break를 하여 다음 moves가 실행되게 한다.
// for문이 다 돌고, 사라진 인형의 갯수가 담긴 answer을 반환한다.
