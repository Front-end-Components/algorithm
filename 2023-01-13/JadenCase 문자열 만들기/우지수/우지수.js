function solution(s) {
    let lowerArr = s.toLowerCase().split('');
    lowerArr[0] = lowerArr[0].toUpperCase();
    
    for(let i = 0; i < lowerArr.length-1; i++){
       if(lowerArr[i] === ' ' && lowerArr[i+1] !== ' '){
           lowerArr[i+1] = lowerArr[i+1].toUpperCase()
       }
    }
    return lowerArr.join('');
}
