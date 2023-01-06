function solution(id_list, report, k) {
    let answer = new Array(id_list.length);
    answer.fill(0)
    let reportSet = [...new Set(report)];
    let reportArr = [];
    
    let sH = new Map;
    let reportUser = [];
    let blackUser = [];
    
    for(let x of reportSet){
        reportArr.push(x.split(' '));
    }    
    for(let x of reportArr){
        reportUser.push(x[1])
    }    
    for(let x of reportUser){
        sH.set(x, (sH.get(x) || 0)+1)
    }    
    for(let [key, val] of sH){
        if(val >= k){
            blackUser.push(key)
        }
    }
    for(let x of reportArr){
        if(blackUser.includes(x[1])){
            let num = id_list.indexOf(x[0]);
            answer[num]++;
        }
    }
    
    return answer;
}
