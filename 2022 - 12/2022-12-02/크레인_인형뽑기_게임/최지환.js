function solution(board, moves) {
  let answer = 0;
  let basket = []; // 뽑은 인형을 담을 배열

  // 크레인을 작동시킨 횟수만큼 배열을 순회
  moves.forEach((move) => {
    // board 배열을 순회해 뽑을 위치의 값이 0이 아닐때 뽑기 진행
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        // 뽑은 인형이 basket의 마지막 인형과 같으면
        // basket의 마지막 인형 빼주고 answer에 2추가
        if (board[i][move - 1] === basket[basket.length - 1]) {
          basket.pop();
          answer += 2;
        }
        // 같지 않을 경우엔 basket에 push
        else {
          basket.push(board[i][move - 1]);
        }
        // 위 과정이 끝나면(인형 뽑기를 완료하면) 뽑은 위치를 0으로 바꿔주고 다음 move 진행
        board[i][move - 1] = 0;
        break;
      }
    }
  });

  return answer;
}
