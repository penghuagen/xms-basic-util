import sort from '../src/sort'

let beforeSort = [1,2,5,3,4]

console.log('原数组:' + beforeSort);
//使用es6数据排序的sort方法
console.log('es6转换后数组:' +beforeSort.sort((a,b) => a-b));
console.log('冒泡排序后数组:' +sort.bubbleSort(beforeSort))