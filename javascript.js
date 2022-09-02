/* 문제 1. 
함수 pow의 테스트 코드를 보고 무엇이 잘못되었나 알아보세요.

문법적인 오류는 없고, 테스트는 문제없이 통과 했다.


  it("주어진 숫자의 n 제곱", function () {
    let x = 5;

    let result = x;   // 5의 값을 반환 합니다. 
    assert.equal(pow(x, 1), result);    // 5와 1을 인자로 넘기고 result를 비교 , 오류 x

    result *= x;  // 25
    assert.equal(pow(x, 2), result);  // 25 , 2 인자 넘김, 오류 x

    result *= x;  // 125
    assert.equal(pow(x, 3), result);  // 125, 
  });

*/

/*
1. 테스트는 문제 없이 통과 되겠지만, 하나의 it 블럭에 여러 개의 유스케이스를 넣었기 때문에
하나라도 오류가 발생하면, 어디서 오류가 발생되었는지 확인하기 어렵다.
==> 하나의 it 블럭에는 하나의 테스트만 진행하자
*/

/* 문제 해결  */

describe('pow' , function() {

it("5의 1 제곱", function () {
  assert.equal( pow(5, 1), 5);
});

it.only("5의 2 제곱", function () {
  assert.equal( pow(5, 2), 25);
});

it("n이 음수일때는 nan을 반환한다.", function () {
  assert.isNaN( pow(5, -6));
});

});


/* 번외 
it 블럭을 여러 개로 쪼개면, 장점은 
원하는 블럭만 테스트를 진행하게 할 수도 있습니다.

it.only를 사용한다면 해당 블럭만 테스트 합니다.

it.only("5의 2 제곱", function () {
  assert.equal( pow(5, 2), 25);
});


*/

