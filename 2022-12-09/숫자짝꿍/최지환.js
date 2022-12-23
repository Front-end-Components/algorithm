function solution(X, Y) {
  let answer = "";
  // 숫자 0 ~ 9를 담을 길이가 10인 빈 배열 선언
  const arrX = Array(10).fill(0);
  const arrY = Array(10).fill(0);

  // X와 Y에 대해 숫자가 존재하면 빈 배열의 해당 숫자 인덱스 증가
  [...X].forEach((el) => arrX[el]++);
  [...Y].forEach((el) => arrY[el]++);

  // 빈 배열이 채워지면 배열을 순회하며
  // arrY와 비교해 더 작은 수만큼 반복해 해당 인덱스를 answer에 담아준다.
  arrX.forEach((el, idx) => {
    if (el !== 0 && arrY[idx] !== 0) {
      for (let i = 0; i < Math.min(el, arrY[idx]); i++) {
        answer += idx;
      }
    }
  });

  // 가장 큰 수를 만들기 위해 뒤집어줌
  const result = answer.split("").reverse().join("");

  // 조건에 맞게 리턴
  if (result === "") {
    return "-1";
  } else if (Number(result) === 0) {
    return "0";
  } else return result;
}
