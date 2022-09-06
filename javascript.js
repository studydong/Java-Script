/* 
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // undefined
*/

// 위에서 user.ref.name로 접근했을 때 정상적으로 "John"을 출력할 수 있게 코드를 수정 해보세요.


function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

alert( user.ref().name ); // John