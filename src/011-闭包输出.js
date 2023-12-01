function Foo(){
    let i = 0
    return function(){
        console.log(i++)
    }
}
let f1 = Foo()
let f2 = Foo()
f1()
f1()
f2()
// 0 1 0