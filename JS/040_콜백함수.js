// callback function 나중에 부를 함수를 말한다.
// 함수 이름을 argument로 전달해서 코드 어딘가에서 호출하는 것

function sum(x, y, 콜백함수){
    // 1000 줄
    콜백함수(x + y);
    // 1000 줄
    // return x + y
}

sum(10, 20, console.log)
//30
//undefined

// sum(10, 20, document.write) // 안되는 이유 확인중


function documentWriter(s){
    document.write('콜백함수', s)
}

sum(10, 20, documentWriter)

//콜백함수30



// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])


let arr = [10, 20, 30, 40, 50]
// arr.map(제곱)

// function 제곱(x) {
//     return x**2
// }

//화살표 함수로 바꿔서 사용가능.
arr.map(x => x**2)
// [100, 400, 900, 1600, 2500]


// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// https://caniuse.com/mdn-api_nodelist_foreach // 노드에서의 forEach는 IE에서 작동하지 않습니다.

//map은 새로운 array를 만들어주고 forEach는 순회만 한다.
function 두배(x){
    console.log(x * 2)
}

let arr = [10, 20, 30, 40, 50]
arr.forEach(두배)
// 20
// 40
// 60
// 80
// 100


//////////////////
// 문제 : 화살표 함수를 사용해서 아래 map과 동일한 기능을 하는 forEach문을 완성해주세요.
let arr = [10, 20, 30, 40, 50]
arr.map(x => x**2)

arr.forEach(제곱)
function 제곱(x){
    console.log(x**2)
}

let result = []
arr.forEach(i => {
    result.push(i**2)
})
console.log(result);

//forEach는 주의해야 한다. 
// NodeList의 forEach는 IE에서 호환하지 않는다.