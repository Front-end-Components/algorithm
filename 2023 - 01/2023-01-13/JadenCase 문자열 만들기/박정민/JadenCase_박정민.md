```
s = s.split(' ');
```

### 문자열 배열로 변환
- 각 단어마다 첫 문자가 대문자이기 때문에 공백을 기준으로 배열로 변환해줍니다.

<br />

---

<br />

```js
return s.map((item) => {
    let first = item.charAt(0).toUpperCase();
    let other = item.slice(1).toLowerCase();
    return first + other;
}).join(' ');
```

### 문자열 JadenCase로 변환하기
- JadenCase는 첫 문자가 대문자이고 그 외 문자는 소문자인 문자열 입니다.
- charAt을 이용하여 첫 문자를 대문자로 바꾼다음 first에 할당합니다.
- slice를 이용하여 첫 문자를 제외한 나머지 문자열을 소문자로 바꾼다음 other에 할당합니다.
- first와 other을 합친 문자열을 반환하여 item을 교체한다음 다시 공백을 기준으로 배열을 문자열로 바꿔줍니다.