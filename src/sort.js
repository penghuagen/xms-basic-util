/**
 * 冒泡排序
 * 依次 比较 相邻的两个数,正序则不动,倒序则交换位置
 * 如此循环,直到整个数组为有序为止
 * @param arr
 * @returns {*}
 */
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                let temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

export default {
    bubbleSort
}