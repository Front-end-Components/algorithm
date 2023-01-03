// 입출력 예
// food   [1, 3, 4, 6]
// result "1223330333221"

function solution(food) {
  let front = ""; // 결과의 0을 기준으로 앞부분
  let back = ""; // 결과의 0을 기준으로 뒷부분
  let answer = "";

  // food의 길이만큼 반복하여 음식을 배치해준다.
  // 음식을 2로 나눈 수의 올림을 하여 채운다.
  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      front += i;
    }
  }

  // front를 뒤집어 back을 만들어 주고
  back = front.split("").reverse().join("");
  // 조건에 맞게 합쳐주고 출력
  answer = front + "0" + back;

  return answer;
}
