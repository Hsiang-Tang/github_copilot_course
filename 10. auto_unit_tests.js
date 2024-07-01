// 10.自動編寫大量單元測試 一次性提高程式碼測試覆蓋率
// 生成一個方法, 用於快速排序演算法, 並且生成大量測試數據, 並且自動執行單元測試

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
} 

module.exports = {
    quickSort
}

// 生成大量測試數據
const testArr = [];
for (let i = 0; i < 100; i++) {
    testArr.push(Math.floor(Math.random() * 100));
}

// 自動執行單元測試
test('quickSort', () => {
    const sortedArr = quickSort(testArr);
    for (let i = 0; i < sortedArr.length - 1; i++) {
        expect(sortedArr[i] <= sortedArr[i + 1]).toBe(true);
    }
});


_____________________________________________________________________________________________________________________________

function calculateDaysBetweenTwoDates(date1, date2) {
    // Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;
    var beginDate = new Date(date1);
    var endDate = new Date(date2);
    return day = Math.ceil((endDate.getTime() - beginDate.getTime()) / (one_day));
}

module.exports = {
    calculateDaysBetweenTwoDates
}

test('calculateDaysBetweenTwoDates', () => {
    expect(calculateDaysBetweenTwoDates('2021-01-01', '2021-01-02')).toBe(1);
    expect(calculateDaysBetweenTwoDates('2021-01-01', '2021-01-03')).toBe(2);
    expect(calculateDaysBetweenTwoDates('2021-01-01', '2021-01-04')).toBe(3);
    expect(calculateDaysBetweenTwoDates('2021-01-01', '2021-01-05')).toBe(4);
    expect(calculateDaysBetweenTwoDates('2021-01-01', '2021-01-06')).toBe(5);
    expect(calculateDaysBetweenTwoDates('2021-01-01', '2021-01-07')).toBe(6);

    for (let i = 0; i < 10; i++) {
        expect(calculateDaysBetweenTwoDates('2021-01-01', '2021-01-0' + i)).toBe(i - 1);
    }
});


class calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
}


test('calculator', () => {
    const calc = new calculator();
    expect(calc.add(1, 2)).toBe(3);
    expect(calc.subtract(1, 2)).toBe(-1);
    expect(calc.multiply(1, 2)).toBe(2);
    expect(calc.divide(1, 2)).toBe(0.5);
}
);


