/* 누산기 만들기

생성자 함수 Accumulator(startingValue)를 만들어 보세요.

Accumulator(startingValue)를 이용해 만드는 객체는 아래와 같은 요건을 충족해야 합니다.

프로퍼티 value에 현재 값(current value)을 저장합니다. 최초 호출 시엔 생성자 함수의 인수, startingValue에서 시작값(starting value)을 받아옵니다.
메서드 read()에선 prompt 함수를 사용해 사용자로부터 숫자를 받아오고, 받은 숫자를 value에 더해줍니다.
프로퍼티 value엔 startingValue와 사용자가 입력한 모든 값의 총합이 더해져 저장됩니다.
*/


function Accumulator(start_value) {   // start_value = 1
    this.value = start_value;       // 초깃 값을 this.value에 할당 합니다.
 
    this.read = function () {
        this.num = +prompt('값을 입력해주세요', '');
        this.value += this.num                           // 사용자가 입력한 값과 초기값을 더하고, 그 결과값을 value에 할당합니다. (주석:1 참조)
    }

}

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(); // 사용자가 입력한 값을 더해줌 
accumulator.read(); // 사용자가 입력한 값을 더해줌

alert(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함


/* (1)
this.value는 처음 초깃값과, 이후 연산을 진행하면서 사용자가 입력한 값과의 덧셈의 결과가 저장됩니다.
메서드를 재 호출하면, 이전에 사용자와 초기값을 더한 값을, 이번에 사용자가 입력한 값과 재연산하므로 덧셈의 결과가 누적 됩니다.

결국 누산기가 완성됩니다.
*/
