try {
    // code
} catch(에러메시지) {
    // code
} finally {
    // code
}

//new Error(message);
//new SyntaxError(message);
//new ReferenceError(message);

try {
    let x = 10;
    let y = 20;
    console.log(x + y);
} catch(e) {
    console.error(e);
} finally {
    console.log('finally');
}

//////////////////

try {
    let x = 10;
    let y = 20;
    console.log(x + y + z);
} catch(e) {
    console.error(e);
} finally {
    console.log('finally');
}

/////////////////

let x = 10;
let y = 20;
console.log(x + y + z); // 일부러 error를 만들었을 때
let z = 30 // 할당되지 않는다. 서비스가 멈춘다.

/////////////

try {
    let x = 10;
    let y = 20;
    console.log(x + y + z);
} catch(e) {
    console.error(e);
} finally {
    // 일부 기능이 수행이 안될 수 는 있지만 서비스는 정상적으로 작도하죠.
    console.log('finally');
}


a() // 로고 받아오기 메서드
b() // 상품 정보 받아오기 메서드
c() // 장바구니 구현 함수

//a()에서 문제가 발생되었을 경우 b(), c()


try {
    let x = 10;
    let y = 10;
    
}