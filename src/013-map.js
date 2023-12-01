let num = ['1','2','3']
let newNum = num.map(parseInt)
console.log(newNum)

// parseInt 接收2个参数，一个是字符串，一个是进制2-36，map传递2个参数，一个是内容，一个是index,所以1进制不存在，2进制3不存在，返回的是NaN,0的话默认是10进制