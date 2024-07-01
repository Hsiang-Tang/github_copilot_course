// 2. 編寫測試代碼, 包含各類邊界條件驗證
// 編寫一個函數, 用於計算兩個數字的和, 並且包含各類邊界條件驗證

function calculator(str) {
    var reg = /(\d+)\+(\d+)/;
    var arr = str.match(reg);
    if (arr) {
        return parseInt(arr[1]) + parseInt(arr[2]);
    } else {
        return '輸入格式錯誤';
    }

}


//測試數據生成,並且使用console.log打印出來
console.log(calculator('1+2')); //3
console.log(calculator('1+3')); //4
console.log(calculator('1+4')); //5
console.log(calculator('1+5')); //6