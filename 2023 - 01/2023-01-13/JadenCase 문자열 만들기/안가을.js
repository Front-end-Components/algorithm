function solution(s) {
  return (
    s
      // 주어진 문자열을 공백으로 구분하여 쪼갬, 해당 요소들을 가진 배열을 생성함
      .split(' ')
      // 배열의 요소들을 하나씩 꺼내어 반환된 값으로 새로운 배열을 생성함
      .map((str) =>
        str
          ? // 요소가 비어있지 않을 경우
            // 요소의 첫 번째 문자를 대문자로 바꿈
            // 요소의 두 번째 문자부터 끝까지 자르고 소문자로 바꿈
            // 두 문자를 + 연산자로 이어주어 반환함
            str[0].toUpperCase() + str.substring(1).toLowerCase()
          : // 요소가 비어있는 경우 '' 를 반환함
            // 주어진 문자열 s에 공백이 연속으로 있을 경우임
            // 예) 'A  B'.split(' ') ==> ['A', '', 'B']
            ''
      )
      // 해당 배열의 요소를 공백으로 구분해 문자열로 만들어 반환함
      .join(' ')
  );
}

console.log(solution('3people unFollowed me')); // "3people Unfollowed Me"
console.log(solution('for the last week')); // "For The Last Week"
