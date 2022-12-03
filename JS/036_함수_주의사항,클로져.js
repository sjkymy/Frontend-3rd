// 익명 즉시 실행 함수
(function () {
    let a = 1;
    let b = 2;
    return a + b;
}());
// 함수를 어디선가 호출해서 사용한다. 즉시 실행함수는 왜 사용 하는가
// 매모리 효율 때문에
// 함수 끝나면 a,b는 반환된다. 메모리 효율성은 극대화 할 수 있지만 재사용성은 없다.



// 기명 즉시 실행 함수
(function live() {
    let a = 6;
    let b = 3;
    return a * b;
}());

live(); // ReferenceError: foo is not defined
// 어차피 실행하지 못해서 의미가 없음.
// 메모리 효율적으로 관리하기 위해 바로 실행해야 하는 것들을 즉시 실행함수로 관리

// 모든 요소들이 로드된 이후에 실행, 함수는 1개만 실행 가능
// window.onload = function(){}
// $(document).ready() // 위와 같은 기능을 하는 jquery 문법

function 함수(){
    let x1 = 100;
    let x2 = 100;
    let x3 = 100;
    let x4 = 100;
    let x5 = 100;
    let x6 = 100;
    let x7 = 100;
    // ...
}

함수()
// 함수를 실행시키면 x1,x2... 값들이 메모리에 올라간다.
// 함수가 종료되면 지역변수 x1,x2...에 접근할 수 없다.
// 메모리 반환됨. 무거운 프로그램을 앞에 즉시 실행함수로 배치하면 계산하고 메모리를 반환해서 메모리 공간을 잡아먹지 않는다. 용량을 줄인다는 것은 메모리 공간을 더이상 차지않는다는 뜻이다.



// 연습문제
let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}]

// 중간고사 점수의 평균을 구하는 코드를 함수로 작성해주세요.

function 평균() {
    let 총합 = 0
    for (let i = 0; i < data.length; i++) {
        총합 += data[i].중간고사점수
    }
    return 총합 / data.length
}


// 동현, 준근님 코드
function 평균값구하기(data){
    let sum = 0;
    for(student of data){
        sum += student["중간고사점수"]
    }
    return sum / data.length
}

function 평균값구하기(data) {
    let 중간고사점수 = data.map((x) => x.중간고사점수)
    let 중간고사점수합 = 중간고사점수.reduce((a, b) => a + b)
    return 중간고사점수합 / data.length
}

function 평균값구하기(data) {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}

console.log(function () {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}());

let a = (data) => data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
console.log(a(data));

let b = (data) => { return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length }
console.log(b(data));

// call by value, reference, sharing

// array와 같은 convension 자료형을 넘길 때에는 함수 안에서 값의 수정이 가능하다.
// call by value(값의 전달)
// call by reference(참조-주소값의 전달)
// 면접질문 : javascript의 call by value, call by reference에 대해서 설명하세요
// 답변 : javascript는 call by value만 존재합니다.

// call by reference
// 주소값을 전달했기 때문에 수정이 된다. 자바스크립트는 이렇게 설명하면 안된다.
let test = [10, 20, 30]

function 함수(a){
    a[0] = 1000
}

함수(test)

////
// call by value
// value를 전달했기 때문에 수정이 안된다.
// 자바스크립트는 이렇게 설명하면 안된다.
// 자바스크립트는 call by value만 존재한다. 개념이 독특해서 call by sharing이라고 부른다.
let test = 100
function 함수(a){
    a = 1000
}

함수(test)


// 반례
let a = {};
function test(b) {
    b = 1000;
}

test(a)
a

/*
원시값보다 덩치가 큰 배열이나 객체도 인자로써 옮겨질 때 값이 복제되어 전달되면

4. 유윤우 — 오늘 오후 3:29
지금 말씀하시는 부분이 원시값은 메모리에 값을 저장하고
object는 메모리에 참조주소를 저장해서 생기는 일 맞을까요?

4. 김태수 — 오늘 오후 3:29
실행시간이 길어질 수 도 있을까요?

4. 이준근 — 오늘 오후 3:30
함수 내부에서는 인자의 값을 가상 변수에 복제해서 로직을 수행하는데 참조값은 가상 변수에 주소값이 함께 담겨져서 값이 바뀌는 걸까요?

4. 이정호 — 오늘 오후 3:31
메모리 주소를 복사해서 넘기기 때문에 새로운 주소가 할당된 경우에만 변경이 안된다는 거라고 이해해도 될까요?
*/


//Closure
//폐쇄된 공간안의 데이터에 접근하기 위한 테크닉
// 폐쇄된 공간이란 함수와 같은 것들을 말한다.

//왜 사용하나?
//변수의 은닉
//메모리 효율


function 제곱(x) {
    function 승수(y){
        return y **x
    }
    return 승수
}
//승수()가 아니라 함수 이름만 return 한다.

let 제곱2 = 제곱(2)
// 제곱(2)는 위의 함수에 따라 y제곱이 된다.
// 따라서 제곱2는 y제곱이 된다.

제곱2(3)
// y제곱(3)과 같다. 3의 제곱이다.
// 9
제곱2(10)
// 100

console.log(제곱(2)(3));
// 9




// Closure
function makeAdder(x) {
    let y = 1;
    return function(z) {
        y = 100;
        return x + y + z;
    };
}

let add5 = makeAdder(5);
x는 5가 된다. y는 100. z는 값이 없다.
let add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2));  // 107 (x:5 + y:100 + z:2)
// add5는 이미 x:5, y:100 값을 갖고 있다.
// add5(2)는 나머지 z자리에 2가 들어간다는 것이다.

console.log(add10(2)); // 112 (x:10 + y:100 + z:2)


//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능

//  정보의 은닉이란?
//  add5만 보면 y를 알거나 접근할 수 있는 방법이 없다.
//  왜 은닉하는거야?
//  다른 코드가 이 코드를 만지는 것을 불가능하게 한다.
//  왜 불가능 해야해?
//  특수한 경우, 절대로 변하면 안되는 것들. 예시로는 주식 차트를 그려야 하는 것들은 은닉해야 한다.



function cal(a, b, c) {
    let result = 0;  // 초기화
    result = a + b;
    result -= c;
    result -= 100;
    result = result / 10

    return result
}
