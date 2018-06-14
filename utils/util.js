const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatData = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

//计算两个时间的天数差
const getDiffDay = (data1, data2) => {
  console.log("data1", data1, "data2", data2)
  var diff = Math.abs(data1.getTime() - data2.getTime())
  return diff / 86400000
}


const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  formatData: formatData,
  getDiffDay: getDiffDay,
  formatNumber: formatNumber
}
