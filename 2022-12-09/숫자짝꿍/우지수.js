function solution(X, Y) {
    let answer = [];
    let check = 0;
    
    // X의 빈도수
    let xMap = new Map();
    for(let x of X){
        xMap.set(x, (xMap.get(x) || 0)+1);
    }
    
    // Y의 빈도수
    let yMap = new Map();
    for(let y of Y){
        yMap.set(y, (yMap.get(y) || 0)+1);
    }

    // X의 key를 Y도 가지고 있다면 더 작은 빈도수 만큼 answer배열에 push
    for(let [key, val] of xMap){
        if(yMap.has(key)){
            let cnt = Math.min(yMap.get(key),xMap.get(key));
            for(let i = 0; i < cnt; i++){
                answer.push(key);
            }
        }
    }
    
    // answer 내림차순으로 정렬
    answer.sort((a, b) => b - a);
    
    // CASE-1. answer 배열이 비어있다면 -1 반환
    if(answer.length === 0) return '-1';
    
    // CASE-2 .answer 모든 요소의 합이 0 이라면 0 반환
    for(let i = 0; i < answer.length; i++){
        check += Number(answer[i]);
    }
    if(check === 0) return '0';
    
    // CASE-3. answer 배열의 요소를 문자열로 반환
    return answer.join('');
}
