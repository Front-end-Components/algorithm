function solution(t, p) {
    var answer = 0;
    // 전개 연산자로 배열로 만든 뒤, map 메소드로 배열을 탐색한다.
    // map(처리할 요소, 처리할 인덱스, 호출된 배열)
    [...t].map((cur, i, arr) => {
        // 호출된 배열을 slice를 이용하여 호출된 i번째, p의 길이로 자르고 변수에 담는다.
        const str = arr.slice(i, i + p.length);
        // 변수의 길이와 p의 길이가 일치할 때
        if(str.length === p.length) {
            // p의 값과 t의 잘린 값을 비교해야 하기 때문에 문자열로 만든뒤 비교해준다.
            // p의 값보다 작거나 같을 때 answer에 카운트 해준다.
            if(str.join("") <= p) answer += 1;
        }
    });
    return answer;
}
