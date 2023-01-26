function solution(s) {
    let answer = [0, 0];
    while(s !== "1"){
        let count = 0;
        let sArr = s.split("");
        let isOne = sArr.filter((x) => x !== "0").length;
        answer[0]++;
        answer[1] += s.length - isOne;
        s = isOne.toString(2);
    }
    return answer;
}
