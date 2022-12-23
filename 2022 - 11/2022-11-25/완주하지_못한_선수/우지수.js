function solution(participant, completion) {
    // 완주한 선수와 완주하지 못한 선수의 배열을 모두 합친다.
    let sumArr = [...participant, ...completion];
    // 이름의 빈도수 세기
    let sH = new Map();
    for(let x of sumArr){
        sH.set(x, (sH.get(x) || 0)+1);
    };
    // 이름이 홀수개이면 return
    for(let [key, value] of sH){
        if(value % 2 !== 0) return key;
    };
};
