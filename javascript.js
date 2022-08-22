/* if 문을 ? 조건문 연산자를 사용해서 코드 간소화 시키기 */ 
let message;

if (login == '직원') {
  message = '안녕하세요.';
} else if (login == '임원') {
  message = '환영합니다.';
} else if (login == '') {
  message = '로그인이 필요합니다.';
} else {
  message = '';
}

let message2;

message = (login2 == 직원) ? '안녕하세요' :
 (login2 == 임원) ? '환영합니다' :
 (login2 == '')  ? '로그인이 필요합니다.' :
'';