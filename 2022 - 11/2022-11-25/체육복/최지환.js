function solution(n, lost, reserve) {
  let students = Array(n).fill(1); // 학생들이 가진 체육복의 갯수를 나타내는 배열(1로 채워넣어 선언)

  // 체육복을 도난당한 학생은 인덱스를 0으로 바꿔준다.
  for (let i = 0; i < lost.length; i++) {
    students[lost[i] - 1] = 0;
  }

  // 여벌의 체육복이 있는 학생은 1추가
  for (let j = 0; j < reserve.length; j++) {
    students[reserve[j] - 1] += 1;
  }

  // students 배열의 길이만큼 반복
  for (let k = 0; k < students.length; k++) {
    // students 배열의 인덱스가 2일때, 앞 또는 뒤의 인덱스가 0이면 2는 1로, 0은 1로 바꿔준다.
    if (students[k] === 2) {
      if (students[k - 1] === 0) {
        students[k] -= 1;
        students[k - 1] += 1;
      } else if (students[k + 1] === 0) {
        students[k] -= 1;
        students[k + 1] += 1;
      }
    }
  }

  // 인덱스가 1이상인 배열의 요소들을 모아 새로운 배열을 만든 뒤 길이를 리턴
  return students.filter((el) => el >= 1).length;
}
