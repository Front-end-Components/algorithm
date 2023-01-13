function solution(s) {
    // 문자열을 공백단위로 나누기
    let arr = s.split(" ");
    // answer에 map 함수로 새로운 배열 반환
    // el의 0번째를 toUpperCase() 함수로 대문자 만들기
    // substr 1번째 부터 끝까지 toLowerCase()로 소문자 만들기
    let answer = arr.map(el => el.charAt(0).toUpperCase() + el.substr(1).toLowerCase());
    
    // 배열을 문자열로 치환
    return answer.join(" ");
}
