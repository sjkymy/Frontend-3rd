// 동기 - 순차적
// 호준 : 로봇 청소기 돌리고(10시)
// 호준 : 빨래하고(11시)
// 호준 : 설거지하고(12시)
// 호준 : 요리한다(1시)

// 비동기 - 비순차적
// 호준 : 로봇 청소기 돌리면서(10시)
// 호준 : 빨래도 돌리고(10시)
// 호준 : 설거지하고(10시)
// 호준 : 요리할려고 물도 끓이고(10시)
const one = '1';
const two = '2';
const three = '3';

console.log(one);
setTimeout(() => {
    console.log(two);
}, 1000);
console.log(three);

// 아래 코드는 왜 그럴까요?
const one = '1';
const two = '2';
const three = '3';

console.log(one);
setTimeout(() => {
    console.log(two);
}, 0);
console.log(three);

// 싱글쓰레드
// 일할 수 있는 녀석이 1명 -> JS

// 멀티쓰레드
// 일할 수 있는 녀석이 여러명 -> 다른언어 대부분이 지원합니다.

// 우리가 이런 비동기 프로그래밍을 왜 알아야 하고, js의 실행 구조는 왜 알아야 하는가?

one() // 페이지 로드하고
two() // 서버에서 이미지와 상세 데이터를 받아오고
three() // 읽어온 데이터를 뿌려준다.
four() // 페이지에 static 데이터 로드

// one과 four 독자적으로 실행가능
// two와 three는 데이터를 받아야만 실행 가능

// 페이지를 들어갔을 때 one과 four 먼저 로드되고, two와 three 실행되면서 실행이 다 되면 뿌려준다.
// 빠르게 로드 되는 것처럼 보인다.