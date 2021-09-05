function baseEach (obj, callback) {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      callback(i, obj[i])
    }
  } else {
    for (const key in obj) {
      callback(key, obj[key])
    }
  }
  return obj
}

function breakEach (obj, callback) {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      if (callback(i, obj[i]) === false) {
        break
      }
    }
  } else {
    for (const key in obj) {
      if (callback(key, obj[key]) === false) {
        break
      }
    }
  }
  return obj
}

function thisEach (obj, callback) {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      if (callback.call(obj[i], i, obj[i]) === false) {
        break
      }
    }
  } else {
    for (const key in obj) {
      if (callback.call(obj[key], key, obj[key]) === false) {
        break
      }
    }
  }
  return obj
}

const array = [1, 2, 3, 4, 5]
const obj = { name: '12', age: 23, address: 'jiangxi' }
/**
 * 基础
 */
baseEach(array, function (index, item) {
  console.log('index:%s,i tem:%s', index, item)
})

baseEach(obj, function (key, value) {
  console.log('key:%s,value:%s', key, value)
})

/**
 * 支持中断
 */
breakEach(array, function (index, item) {
  console.log('index:%s,i tem:%s', index, item)
  if (index > 1) return false
})

breakEach(obj, function (key, value) {
  console.log('key:%s,value:%s', key, value)
})

/**
 * this指向到当前对象
 */
thisEach(array, function (index, item) {
  console.log('index:%s,i tem:%s, this:%s', index, item, this)
  if (index > 1) return false
})

thisEach(obj, function (key, value) {
  console.log('key:%s,value:%s, this:%s', key, value, this)
})
