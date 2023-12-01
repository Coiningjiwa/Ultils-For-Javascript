const randomNum = () => {
    return Math.random()*1000
}


// const arr = new Array(16).fill(randomNum())
const arr = new Array(16).fill(0)
for(var i = 0;i < arr.length;i++){
    arr[i] = randomNum().toFixed(0)
}
console.log(arr)