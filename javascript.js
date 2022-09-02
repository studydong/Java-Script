describe("pow 함수 테스트", function () {

  describe("x의 3제곱 테스트", function () {

    function powTest(x) { // x 값을 인자로 받음

      let result = x * x * x;

      it(`${x} 의 3 제곱은 :: ${result}`, function () {
        assert.equal(pow(x, 3), result);
      });

    }

    for (let x = 1; x <= 5; x++) {
      powTest(x);
    }

  });

  describe("x의 4 제곱 테스트", function () {

    function powTest(x) { // x 값을 인자로 받음

      let result = x * x * x * x;

      it(`${x} 의 4 제곱은 :: ${result}`, function () {
        assert.equal(pow(x, 4), result);
      });

    }

    for (let x = 1; x <= 5; x++) {
      powTest(x);
    }

  });

});