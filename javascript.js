/* 
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
  }
  
  ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
  );
*/

// 위에 함수를 화살표 함수로 간소화 시키기

let ask = (question, yes, no) => {
  if ( confirm(question) ) yes();
  else no();
}

ask(
'동의하십니까?' ,
() => alert('동의하셨습니다.') ,
() => alert('취소 버튼을 눌렀습니다.') , 
);
