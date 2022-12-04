// 생성자 함수

// 'new'연산자를 붙여서 실행해야 한다.
// 함수 이름 첫 글자는 대문자로 시작한다.

// 이런 함수를 왜 사용해야 하는가

let book = {
    책이름: '자바스크립트',
    책가격: 10000,
    저자: '김자바',
    출판일: '25.01.01'
}


let myBook = {}

myBook['책이름'] = '자바스크립트'
myBook['책가격'] = 100000
myBook['저자'] = '김자바'
myBook['출판일'] = '25.02.02'
console.log(mybook)
// {책이를: '자바스크립트', 책가격: 100000, 저자: '길동홍', 출판일: '23.02.02'}


//이렇게 데이터를 생성할 수 있다.
// 코드가 깔끔하지 못하다. 효율적으로 하기 위해 생성자 함수를 사용.


//생성자 함수를 사용해보자
function Book(책이름, 책가격, 저자, 출판일) {
    // this = {}
    this.BookName = 책이름;
    this.BookPrice = 책가격;
    this.BookAuthor = 저자;
    this.BookPublish = 출판일;
    // return this
    // new키워드를 사용하면 내부적으로 이렇게 사용한 것처럼 된다.
}


let data = Book('CSS', 10000, '영희', '23.03.03')
// console.log(data); //undefined가 나온다. 왜? -> return이 생략되어 있기 때문이다.
//그러나 'new' 연산자를 붙인다면 undefined가 되지 않는다.
let book1 = new Book('CSS', 10000, '영희', '23.03.03')
let book2 = new Book('HTML', 20000, '영희', '24.03.03')
let book3 = new Book('JS', 30000, '영희', '25.03.03')
console.log(book1, book2, book3);

// 반드시 'new' 연산자를 붙여 실행하는 것을 생성자 함수라고 하는데,
// 생성자 함수를 사용하면 객체를 찍어낼 수 있는 용도로 사용할 수 있다.
//메모리 효율성도 좋다.
//new키워드는 함수에서 숨겨져 있는 this = {}, return this가 실행되는 것

