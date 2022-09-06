/* `calculator`라는 객체를 만들고 세 메서드를 구현해 봅시다.

- `read()`에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다. 입력받은 값은 객체의 프로퍼티에 저장합니다.
- `sum()`은 저장된 두 값의 합을 반환합니다.
- `mul()`은 저장된 두 값의 곱을 반환합니다.
*/


let calculator = {
  num: 0,
  num2: 0,  

  read() {
    this.num = +prompt('값을 입력해주세요 (1)', '');
    this.num2 = +prompt('값을 입력해주세요 (2)', '');
  },

  sum() {
    return this.num + this.num2;
  },

  mul() {
    return this.num * this.num2;
  }

};

calculator.read();
alert(calculator.mul());