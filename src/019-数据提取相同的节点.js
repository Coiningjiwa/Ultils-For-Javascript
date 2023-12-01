const list = [
    {name:'1',type:1},
    {name:'2',type:2},
    {name:'3',type:3},
    {name:'4',type:4},
    {name:'5',type:3},
    {name:'6',type:1}
]
const types = Array.from(new Set(list.map(item=>{
    return item.type
})))
console.log(types)
const results = types.map(item=>({
    type:item,
    values:list.filter(it=>it.type === item)
}))

console.log(JSON.stringify(results))