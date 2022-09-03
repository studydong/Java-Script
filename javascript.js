// 객체 `obj`의 프로퍼티 값이 숫자인 경우 그 값을 `두 배` 해주는 함수 `multiplyNumeric(obj)`을 

// 만들어보세요. `multiplyNumeric`은 아무것도 반환하지 않아도 괜찮습니다. 객체 자체를 수정해주기만 하면 됩니다.


// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

alert(multiplyNumeric(menu));

// 함수 호출 후
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};


function multiplyNumeric (obj) {

  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] == 'number') {       // width, height 각각의 값을 2배로 부풀려야 한다.
      obj[key] *= 2;
    }
  }

  return sum;
}