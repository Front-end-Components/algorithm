function solution(participant, completion) {
  // 두 배열을 정렬
  const totalPeople = participant.sort();
  const passPeople = completion.sort();

  // 정렬한 두 배열을 비교하여 인덱스가 서로 같지 않을 때의 인덱스 리턴
  for (let i = 0; i < passPeople.length; i++) {
    if (totalPeople[i] !== passPeople[i]) {
      return totalPeople[i];
    }
  }

  // 반복문이 끝나고도 리턴이 되지 않으면 참가한 선수 중 마지막 선수가 완주하지 못한 것이므로 마지막 선수 리턴
  return totalPeople[totalPeople.length - 1];
}
