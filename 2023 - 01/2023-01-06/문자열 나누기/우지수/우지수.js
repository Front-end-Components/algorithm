function solution(s) {
    let answer = 0;
    let xCount = 0;
    let zCount = 0;
    let stack = [];
    let str = [];
    
    for(let i = 0; i < s.length; i++){
        stack.push(s[i])
        let x = stack[0]
        if(s[i] === x){
            xCount++;
        } else {
            zCount++;
            if(zCount === xCount){
               answer++;
               str.push(stack.join(''))
               xCount = 0;
               zCount = 0;
               stack = []
            }
        }
    }
    
    if(s.length === str.join('').length) {
        return answer;
    } else {
        return answer+1;
    }
}

