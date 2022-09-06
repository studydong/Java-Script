/* 아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들어보세요.

read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장합니다.
sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환합니다.
mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환합니다.
예시:
*/

function Calculator() {
    // 생성자 함수를 생성하면 this { } 객체가 생성 됩니다.

    this.read = function () {       
        this.num = +prompt('첫 번째 값을 입력하세요.', '');     // this.num에 사용자가 입력한 값 할당
        this.num2 = +prompt('두 번째 값을 입력하세요.', '');    // thus.num2에 사용자가 입력한 값 할당
    }

    this.sum = function () {    // this.sum 메서드는 사용자가 입력한 값들을 더해서 반환합니다.     
        return this.num + this.num2;
    }

    this.mul = function () {    // this.mul 메서드는 사용자가 입력한 값들을 곱해서 반환합니다.
        return this.num * this.num2;
    }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());