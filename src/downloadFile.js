const handleDown = (data) => {
  axios.get(data.url,{responseType: 'blob'}).then(res=>{
    const blob = new Blob([res.data])
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = data.name
    a.click()
  })
}