function solution(X, Y) {
    // 0부터 9까지 각각의 배열을 만든다.
    const Xarr = Array(10).fill(0);
    const Yarr = Array(10).fill(0);
    
    // X와 Y의 값을 배열에 넣는다.
    [...X].forEach((item) => Xarr[item]++);
    [...Y].forEach((item) => Yarr[item]++);
    
    // answer 변수에 Xarr를 Yarr의 값의 공통된 값을 찾는다.
    let answer = Xarr.map((item, idx) => {
        // Xarr의 값이 0이 아니거나 Yarr의 값이 0이 아닐때
        if (item !== 0 && Yarr[idx] !== 0) {
            // 문자열로 바꾼 뒤, 공통된 숫자는 반복시켜 작은 값 순으로 배열에 넣는다.
            return String(idx).repeat(Math.min(item, Yarr[idx]));
        }
    });
    console.log(answer);
    // 배열을 문자열로 바꿔준다.
    const result = answer.reverse().join("");
    // 만약 result 값이 없다면 -1반환
    if(!result) return "-1";
    // result를 더했을때 참이면 result, 거짓이면 0 반환
    return +result ? result : "0";
}
