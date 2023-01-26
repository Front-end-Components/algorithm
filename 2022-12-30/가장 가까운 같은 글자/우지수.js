function solution(s) {
    // sArr = s를 배열로 만듦
    let sArr = s.split('');
    // stack = 반복문을 돌면서 한글자씩 담길 배열
    let stack = []
    // 반복문 실행될 때 마다 제일 먼저 stack에 sArr[i] push
    for(let i = 0; i < sArr.length; i++){
        // stack 배열에 sArr[i] 포함할 경우
        if(stack.includes(sArr[i])){
            stack.push(sArr[i]);
            // stack이 포함하는 요소의 인덱스를 num에 할당.
            let num = stack.indexOf(sArr[i]);
            // sArr[i] 거리값으로 치환
            sArr[i] = i - num;
            // 다음번에 탐색할 때 가장 가까운 값이
            // 탐색될 수 있도록 stakc[num]을 0으로 바꾸어주기
            stack[num] = 0;
         } else {
             stack.push(sArr[i])
             // stack이 가지고있지 않을 경우 -1로 치환
             sArr[i] = -1;        
         }
    }
    return sArr;
}
