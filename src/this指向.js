let obj = {
    name:'zhangsan',
    fn:function(age,gender){
        console.log(`${this.name}今年${age},性别${gender}`)
    }
}

// obj.fn()

let obj1 = {
    name:'lisi'
}

// obj.fn.call(obj1,18,'女')
// obj.fn.apply(obj1,[22,'男'])
// obj.fn.bind(obj1)(30,'不详')

let obj2 = {
    name:'wangwu',
    fn:()=>console.log(this),
    fn1:()=> this
}

obj2.fn()//箭头函数this指向父级作用域的this
console.log(this == obj2.fn1())