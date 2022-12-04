// object 자료형의 단점들이 많아서 Map을 사용할 수 있다.
// Map은 IE 10까지 사용못함.
// Map은 key - value쌍을 갖는 자료형이다.

let m = new Map();
// 생성자 함수를 이용하여 m은 object의 this를 받는다.

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루')
    .set([1, 2], '리얼리?') //이렇게는 호출되지 않습니다.

console.log(m)

console.log(m.get('하나')) //1
console.log(m.get(true)) // 트루
// object에서 가능하지 않다.
console.log(m.get([1, 2])) // 이렇게는 호출되지 않는다.
// 위에서 [1, 2]와 아래 console안에 [1, 2]는 서로 다른 메모리 주소를 갖고 있기 때문에 다른 값이다.
// x = [1, 2]
// y = [1, 2]
// x == y
// false
// x === y
// false

let test = [1, 2]
m.set(test, '리얼리?')
console.log(m.get(test))
//리얼리?
//이렇게는 호출이 가능하다.


//여기는 블로그 정리 안해도 됨.

// Python Vs JavaScript 
// 1. Python
// python에서 아래 값은 다르게 나옵니다.
// x = [1, 2]
// id(x)

// y = [1, 2]
// id(y)

// x == y // python에서는 true
// x is y // python에서는 false

// 2. JavaScript
// [1, 2] === [1, 2] //false
// [1, 2] == [1, 2] // false
// let x = [1, 2]
// let y = [1, 2]
// x == y // false
// x === y // false
//////////////////////



// Map에 해당 key값이 있는지 확인하기
m.has('하나')
//true

// Map에 값을 제거하기
m.delete('하나')
m.has('하나')
//false

// 크기 구하기
m.size
// 6


// 기존에 있던 자료형에서 Map으로 전환하여 사용하고 싶을 때. (처음부터 Map으로 만드는 것이 낫다.)
let data = new Map({'one':1, 'two':2}) // X
let data = new Map([['one', 1], ['two',2]]) // O

let data = new Map(Object.entries({'one':1, 'two':2})) // O
//{'one' => 1, 'two' => 2}

// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X



// Map의 가장 큰 장점. 직접 순회가 가능하다.
let data = {'one':1, 'two':2}
for (const i of data) { // X 작동되지 않습니다!
    console.log(i)
}

let data = {'one':1, 'two':2}
for (const i of Object.entries(data)) {
    console.log(i)
}
// ['one', 1]
// ['two', 2]
///////////////////


let m = new Map();

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for (const i of m) {
    console.log(i)
}

for(const i of m){
    console.log(i);
}

// 구조분해 할당
for (const [i, j] of m) {
    console.log(i, j)
}

m.keys()
m.values()
m.entries()

///////////////////

// Map - Object 간의 형변환

let 맵 = new Map(Object.entries({'one':1, 'two':2}))

//Map을 Object로 다시 변환하기
let 오브젝트 = Object.fromEntries(맵)



let map = new Map();
map.set('이호준', 1)
map.set('이호준', 2)
map.set('이호준', 3)