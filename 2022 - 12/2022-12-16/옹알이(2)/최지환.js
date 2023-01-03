function solution(babbling) {
  // 말할 수 있는 발음의 배열
  const baby = ["aya", "ye", "woo", "ma"];
  let count = 0;

  // babbling 배열을 순회하며 각각의 인덱스에 대해
  babbling.forEach((babble) => {
    // baby 배열의 인덱스와 비교해서
    baby.forEach((el) => {
      // 만약 babbling 배열의 인덱스가 baby 배열의 인덱스 2번 반복한 것을 포함하면
      // 다음 인덱스로 넘김
      if (babble.includes(el.repeat(2))) {
        return;
      } else {
        // 2번 반복되지 않는다면
        // babbling 배열의 인덱스를 baby 배열의 인덱스로 split해주고 합쳐준다
        // join("") 아니고 join(" ")
        babble = babble.split(el).join(" ");
      }
    });

    // 연산을 마친 babbling 배열의 인덱스의 공백을 제거해주고
    // 해당 인덱스가 ""이면 발음 할 수 있는 것이므로 count를 올려준다.
    if (babble.split(" ").join("") === "") {
      count++;
    }
  });

  return count;
}
