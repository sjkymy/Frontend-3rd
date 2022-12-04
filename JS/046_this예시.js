let 호텔 = [
    {
        '이름': '하나호텔',
        '방의개수': 50,
        '예약자수': 25,
        '남은방의개수': function(){return this.방의개수-this.예약자수} //this는 하나호텔1을 가리킨다.
    },
    {
        '이름': '둘호텔',
        '방의개수': 100,
        '예약자수': 30,
        '남은방의개수': function(){return this.방의개수-this.예약자수}
    },
    {
        '이름': '셋호텔',
        '방의개수': 120,
        '예약자수': 80,
        '남은방의개수': function(){return this.방의개수-this.예약자수}
    }
];

//1.
호텔[0]['방의개수'] - 호텔[0]['예약자수']

//2. 자료구조 파악에 용이
호텔[0]['남은방의개수']

//3. 메모리 공간에 이득
function getEmptyRoomCount(호텔){
    return 호텔.방의개수 - 호텔.예약자수
}
console.log(getEmptyRoomCount(호텔[0]));