/**
 * 函数防抖
 * @param fn
 * @param delay
 * @returns {function(...[*]=)}
 */
function debounce (fn, delay) {
  let timer // 维护一个 timer
  return function () {
    const _this = this // 取debounce执行作用域的this
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      fn.apply(_this, args) // 用apply指向调用debounce的对象，相当于_this.fn(args);
    }, delay)
  }
}

/**
 * 函数节流
 * @param fn
 * @param delay
 * @returns {function(...[*]=)}
 */
function throttle (fn, delay) {
  let previous = 0
  // 使用闭包返回一个函数并且用到闭包函数外面的变量previous
  return function () {
    const _this = this
    const args = arguments
    const now = new Date()
    if (now - previous > delay) {
      fn.apply(_this, args)
      previous = now
    }
  }
}

export default {
  debounce,
  throttle
}
