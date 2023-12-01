/**
 * 隐藏手机号中间四位，正则替换
 * @param {*} phone
 * @returns
 */
function hidePhone(phone) {
  let reg = /^(\d{3})\d{4}(\d{4})$/
  return phone.replace(reg, '$1****$2')
}

const mobile = hidePhone('18888888888')
console.log(mobile)
