function solution(s){
    let stack = [];

    for(let x of s){
        if(x === '(' ){
            stack.push(x)
        } else {
            stack.pop()
        }
    }
    return stack.length === 0;
}
