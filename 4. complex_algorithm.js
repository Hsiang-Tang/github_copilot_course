// 4. 編寫複雜或不熟悉(非專業領域)的算法
// 編寫一個SharpRatio方法  接受一個double類型的array 遞迴一個double類型的值

function getSharpRatio(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var avg = sum / arr.length;
    var sum2 = 0;
    for (var i = 0; i < arr.length; i++) {
        sum2 += Math.pow(arr[i] - avg, 2);
    }
    var std = Math.sqrt(sum2 / arr.length);
    return avg / std;
}

//甚麼是SharpRatio? 這是一個用於衡量投資組合風險的指標, 通常用於金融領域, 用於評估投資組合的風險和報酬之間的關係, 通常越高越好
//SharpRatio = (Ri - Rf) / σi
//Ri: 投資組合的收益率
//Rf: 無風險利率
//σi: 投資組合的波動率

