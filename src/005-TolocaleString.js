function toMoney(num){
    num = num.toFixed(2)
    num = parseFloat(num)
    num = num.toLocaleString(num)
    return num
}

let a = 33333333
let b = 315159.26927
console.log(toMoney(a))
console.log(toMoney(b))