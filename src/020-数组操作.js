let arr= [2,6,8,10,18]


console.log(arr.every(item=>{//every:每一项都满足才返回true
    return item > 10//false
}))

console.log(arr.some(item=>{//some:任意一项满足就返回true
    return item > 10//true
}))

console.log(arr.map(item=>{//some:遍历每一项返回一个新数组
    return item * 2//[ 4, 12, 16, 20, 36 ]
}))

console.log(arr.filter(item=>{//filter:返回true的组成一个新数组
    return item > 10//[ 18 ]
}))

console.log(arr.forEach(item=>{//forEach:遍历数组，不返回新数组
    return item > 10//undefined
}))

console.log(arr.sort((a,b)=>{//sort:数组排序
    return b-a//[ 18, 10, 8, 6, 2 ]
}))


