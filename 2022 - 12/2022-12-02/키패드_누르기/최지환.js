function solution(numbers, hand) {
  let answer = "";

  // 2차원 배열을 이용해 키패드를 만들어줌
  const keypad = [
    [1, 3],
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
  ]; // 숫자 0 ~ 9
  let curLeft = [0, 3]; // 현재 왼손 위치
  let curRight = [2, 3]; // 현재 오른손 위치

  answer = numbers
    .map((x) => {
      // 1,4,7은 왼손으로 입력하고 현재 왼손 위치를 해당 숫자로 바꿔줌
      if (x === 1 || x === 4 || x === 7) {
        curLeft = keypad[x];
        return "L";
      }
      // 3,6,9는 오른손으로 입력하고 현재 오른손 위치를 해당 숫자로 바꿔줌
      else if (x === 3 || x === 6 || x === 9) {
        curRight = keypad[x];
        return "R";
      }
      // 2,5,8,0일 경우
      else {
        // 현재 왼손, 오른손 위치와 해당 숫자와의 거리
        const leftDistance =
          Math.abs(keypad[x][0] - curLeft[0]) +
          Math.abs(keypad[x][1] - curLeft[1]);
        const rightDistance =
          Math.abs(keypad[x][0] - curRight[0]) +
          Math.abs(keypad[x][1] - curRight[1]);

        // 왼손이 더 가깝다면 왼손으로 입력하고 현재 왼손 위치를 해당 숫자로 바꿔줌
        if (leftDistance < rightDistance) {
          curLeft = keypad[x];
          return "L";
        }
        // 오른손이 더 가깝다면 오른손으로 입력하고 현재 오른손 위치를 해당 숫자로 바꿔줌
        else if (leftDistance > rightDistance) {
          curRight = keypad[x];
          return "R";
        }
        // 거리가 같다면
        else {
          // 왼손잡이일 경우에는 왼손으로
          if (hand === "left") {
            curLeft = keypad[x];
            return "L";
          }
          // 오른손잡이는 오른손으로
          else {
            curRight = keypad[x];
            return "R";
          }
        }
      }
    })
    .join("");

  return answer;
}
