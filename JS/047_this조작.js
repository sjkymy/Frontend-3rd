var peter = {
    name: 'Peter Parker',
    sayName: function () {
        console.log(this.name);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName()
//Peter Parker

peter.sayName.call(bruce, "!");
// Bruce Wayne



////////////
// apply()

var peter = {
    name: 'Peter Parker',
    sayName: function (is, is2) {
        console.log(this.name + ' is ' + is + ' or ' + is2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);
// bruce가 sayName을 호출한다.
// 


////////////
//bind() -> this가 고정될 때.

function sayName() {
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName: sayName
}

var peter = {
    name: 'peter',
    sayName: sayName.bind(bruce)
}

sayName();
peter.sayName();
// bruce
bruce.sayName();
// bruce