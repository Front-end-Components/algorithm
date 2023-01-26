function solution(s) {
    let answer = [0, 0];
    while(s !== "1"){
        let sArr = s.split("");
        let filtered = sArr.filter((x) => x !== "0").length;
        answer[0]++;
        answer[1] += s.length - filtered;
        s = filtered.toString(2);
    }
    return answer;
}
