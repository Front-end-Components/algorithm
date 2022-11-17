function solution(dartResult) {
    let resArr = [];
    let eachScore = [];
    let stack = [];
    
    // 배열로 만든 후 숫자로 바꾸기
    for(let i = 0; i < dartResult.length; i++) {
        resArr.push(dartResult[i]);
        if (!isNaN(resArr[i])) resArr[i] = parseInt(resArr[i]);
    }
    
    // point 계산
    for(let i = 0; i < resArr.length; i++){
        if(!isNaN(resArr[i])) {
            if(resArr[i] === 0 && resArr[i-1] === 1) {
                stack.pop();
                stack.push(10);
                i++;
                }
            else {
                if(stack.length > 0) eachScore.push(stack.pop());
                stack.push(resArr[i]);
            } 
        }
    // bonus 점수 계산
    if (resArr[i] === "D") stack[0] = Math.pow(stack[0], 2);
    if (resArr[i] === "T") stack[0] = Math.pow(stack[0], 3);
    if (resArr[i] === "*") {
            stack[0] = stack[0] * 2;
            if(eachScore.length > 0) {
                let bonus = eachScore.pop() * 2;
                eachScore.push(bonus);
            }
        }
    if (resArr[i] === "#") stack[0] = stack[0] * -1;
    }
    return eachScore.reduce((acc, cur) => acc + cur, stack[0]);
}
