function solution(s) {
    let answer = [];
    const arr = s.split(' ');
    // Math.max / min 메소드를 이용해서 최대 최소 값 변수에 저장
    const max = Math.max.apply(null, arr);
    const min = Math.min.apply(null, arr);
    
    // answer에 최소 값 / 최대 값 push
    answer.push(min, max);
    
    // 문자열로 치환
    return answer.join(" ");
}
