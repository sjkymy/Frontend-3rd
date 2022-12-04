// this 란?

// - 자신을 호출한 객체
// - 자신이 생성할 객체

function a(){ 
    console.log(this)
}
a();
//함수를 호출한 것이 this



function b(){
    console.log('hello world')
}
b()
window.b()



let test = {
    one:1,
    two:2,
    three: function(){
        console.log(this)
    }
}

test.three()
// {one: 1, two: 2, three: ƒ}
//test를 호출하는 것은 window.
// three를 호출하는 것은 test.
// this는 test다.
// this를 사용하지 않는 경우도 있다. 혼란을 자초하는 경우가 있다. this가 가리키는 상황이 모호하다.

let test2 = test.three
// test2는 윈도우 객체를 출력한다.

// 3가지 경우
// 1. window를 출력
// 2. object로 감싸고 출력하면 object 자신을 출력
// 3. button으로 만들어서 출력하면 button을 출력
// 대부분의 경우 this의 값은 함수를 호출하는 방법에 의해 호출된다.

// 추가 예제 //

function sayName(){
    console.log(this.name);
}

var name = 'Hero';

let peter = {
    name: 'Peter Parker',
    say: sayName
}

let bruce = {
    name: 'Bruce Wayne',
    say: sayName
}

sayName();
//Hero
//var name = 'Hero'윈도우에 등록되어 있다. 
// 그렇기 때문에 window.name을 출력하면 Hero가 나온다.

peter.say(); 
// Peter Parker
bruce.say();
// Bruce Wayne



function a(){
    console.log(this.name)
    function b(){
        console.log(this.name)
    }
    b()
}
a()
// 콘솔창에서 출력하면 빈공간이 나온다.
// b()는 a()를 호출한 것이다.
//a()는 windowfmf 호출한다.


function a(){
    console.log(this)
    function b(){
        console.log(this)
    }
    b()
}
a()
//window를 호출한다.



function sayName() {
    console.log(this);
}

var c = {
    'hello':'world',
    'say' : sayName
}

var b = {
    'c' : c
}

var a = {
    'b':b
}

a.b.c.say()
//c.say()를 출력한다.
// {hello: 'world', say: ƒ}