function solution(new_id) {
    // 첫번째 조건 - 소문자로 치환
    new_id = new_id.toLowerCase();
    
    // 두번째 조건 - 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)만 남기기
    new_id = new_id.match(/[a-z]*\d*\.*\-*\_*/g).join('');
    
    // 세번째 조건 - 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    new_id = new_id.replace(/\.{2,}/g, '.');
  
    // 네번째 조건 - 마침표(.)가 처음이나 끝에 위치한다면 제거
    new_id = new_id.replace(/^\.|\.$/g, '');
  
    // 다섯번째 조건 - 빈 문자열이라면, new_id에 "a"로 만들기
    if(new_id.length === 0) new_id = 'a';
  
    // 여섯번째 조건 - 길이가 16자 이상이면, 0 ~ 15 남기고 나머지 문자들 제거
    if(new_id.length >= 16) new_id = new_id.slice(0, 15);
  
    // 여섯번째 조건 - 만약 잘라냈을 때 끝 문자가 .이면 제거
    new_id = new_id.replace(/\.$/g, '');
  
    // new_id의 길이가 2자 이하일때 new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복
    if (new_id.length <= 2) {
        const last = new_id.charAt(new_id.length - 1);
        while(new_id.length < 3){
            new_id += last;
        }
    }
    return new_id;
}
