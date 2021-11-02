import mathUtil from '../src/mathUtil'

// --------除法---------
test('0.121 / 1.1 to equal 0.10999999999999999', () => {
    expect(0.121/1.1).toBe(0.10999999999999999);
});

test('mathUtil.accDiv(0.121, 1.1) to equal 0.11', () => {
    expect(mathUtil.accDiv(0.121, 1.1)).toBe(0.11);
});

test('mathUtil.accDiv(0.121, 0.11, 2)保留两位小数 to equal 1.1', () => {
    expect(mathUtil.accDiv(0.121, 0.11, 2)).toBe(1.1);
});

// ---------乘法----------
test('19.9 * 100 to equal 1989.9999999999998', () => {
    expect(19.9 * 100).toBe(1989.9999999999998);
});

test('mathUtil.accMul(19.9, 100) to equal 1990', () => {
    expect(mathUtil.accMul(19.9, 100)).toBe(1990);
});

// -----------加法-----------
test('0.1 + 0.2 to equal 0.3', () => {
    expect(0.1 + 0.2).toBe( 0.30000000000000004);
});

test('mathUtil.accAdd(0.1, 0.2) to equal 0.3', () => {
    expect(mathUtil.accAdd(0.1, 0.2)).toBe(0.3);
});

// -----------减法------------
test('0.3 - 0.1 to equal 0.2', () => {
    expect(0.3 - 0.1).toBe( 0.19999999999999998);
});

test('mathUtil.accSub(0.3, 0.1) to equal 0.2', () => {
    expect(mathUtil.accSub(0.3, 0.1)).toBe(0.2);
});