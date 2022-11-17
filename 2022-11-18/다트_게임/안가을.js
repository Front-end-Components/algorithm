function solution(dartResult) {
  let answer = [];
  let temp = '';
  const bonus = { S: 1, D: 2, T: 3 };

  dartResult.split('').forEach((item, idx) => {
    if (item === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    } else if (item === '#') {
      answer.push(answer.pop() * -1);
    } else if (!isNaN(Number(item))) {
      if (dartResult[idx + 1] === '0') {
        temp += item;
      } else {
        temp += item;
        answer.push(Number(temp));
        temp = '';
      }
    } else {
      answer.push(answer.pop() ** bonus[item]);
    }
  });
  return answer.reduce((acc, cur) => acc + cur);
}

console.log(solution('1S2D*3T')); // 37
console.log(solution('1D2S#10S')); // 9
