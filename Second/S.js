var a = "sdfd\"sd\"fsdf";



JSON.stringify();


var myObj = {
    a: 1,
    b: 2,
    c: function() {
        console.log(this.a);
        return this;
    },
    d: function() {
        console.log(this.b);
        return this;
    }
}

myObj.c().d();



var scope = 'global scope';
function checkscope() {
    var scope = "local scope";
    function f() {console.log(scope)};
    return f();
}

checkscope();

function checkscope1() {
    var scope = "local scope";
    function f() { console.log(scope) };
    return f;
}

checkscope1()();


for(var i = 0; i < 5; i ++) {
    console.log(i);
}

for(var i = 0; i < 5; i ++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}

for(var i = 0; i < 5; i ++) {
    (function(item) {
        setTimeout(function() {
            console.log(item);
        }, 0);
    })(i);
}


var funcs = [];
for(var i = 0; i < 10; i ++) {
    funcs[i] = function() {console.log(i)};
}
funcs[5]();