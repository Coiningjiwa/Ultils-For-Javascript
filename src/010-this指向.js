let obj = {
    a : 1,
    b : function (){
        console.log(this.a)
    }
}
let fun = obj.b
fun()       //undefined
obj.b()     //1
