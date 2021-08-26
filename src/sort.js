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

/**
 * 排序方法、只支持升序
 * @param item1
 * @param item2
 * @param propArray 排序属性数组
 * @returns {boolean|*}
 */
function ascSort(item1, item2, propArray) {
    let compareArray = []
    for (let i = 0; i < propArray.length; i++) {
        let prop = propArray[i]
        if (item1[prop] > item2[prop]) {
            compareArray.push(1);
            break;
        } else if (item1[prop] === item2[prop]) {
            compareArray.push(0);
        } else {
            compareArray.push(-1);
            break;
        }
    }

    for (let j = 0; j < compareArray.length; j++) {
        if (compareArray[j] === 1 || compareArray[j] === -1) {
            return compareArray[j];
        }
    }
    return false;
}

/**
 * sort extensions by "firstName" + "lastName" + "ext" ASC
 * @param extensions
 */
function sortObjectByProp(objectArray){
    let sortProp = ['firstName', 'lastName', 'ext']
    objectArray.sort((a, b) => {
        return ascSort(a, b, sortProp)
    })
    return objectArray
}

export default {
    bubbleSort,
    sortObjectByProp
}


const extensions = [
    {firstName: 'a', lastName: 'pn', ext: 33, extType: 'DigitalUser'},
    {firstName: 'b', lastName: 'pn', ext: 32, extType: 'DigitalUser'},
    {firstName: 'a', lastName: 'pn', ext: 50, extType: 'AO'},
    {firstName: 'a', lastName: 'ab', ext: '123', extType: 'AO'},
    {firstName: 'b', lastName: 'pn', ext: 40, extType: 'Dept'},
    {firstName: 'b', lastName: '', ext: '34', extType: 'AO'},
    {firstName: 'b', lastName: 'nb', ext: '', extType: 'VirtualUser'},
    {firstName: 'en', lastName: 'ww', ext: 32, extType: 'FaxUser'}
];
// 名称排序
console.log('sortExtensionsByName:%o', sortObjectByProp(extensions))