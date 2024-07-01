# Copilot 操作簡介

## 1. Copilot Chat 自動預測
本質為程式碼自動預測和推薦程式碼。

## 2. 程式碼錯誤修正和解釋
建立 function `calculateDaysBetweenTwoDates` 並透過 camelcase 去解釋錯誤：

function calculateDaysBetweenTwoDates(date1, date2) {
    // Get 1 day in milliseconds
    var one_day = 1000 * 60 * 60 * 24;
    var beginDate = new Date(date1);
    var endDate = new Date(date2);
    return day = Math.ceil((endDate.getTime() - beginDate.getTime()) / (one_day));
}

## 3. 功能介紹
- `@workspace/vscode/terminal`
- `/fix, explain, tests, new, newNotebook`

## 4. 解釋 Copilot 的幻覺 (hallucination)
來源不一定是對的，若有疑問需要多加查證。Copilot Chat 有可能他的解釋不一定是對的，例如透過生成 Dockerfile，可能會生成版本錯誤之類的 Dockerfile。

## 5. Copilot Chat 的建議指令
可以插入到終端機裡面。

# AI 應用的十個場景

1. 正則表達式編寫
2. 編寫測試代碼，包含各類邊界條件驗證
3. 使用難以記憶的關鍵字編寫代碼，例如：HTML/CSS 編寫
4. 編寫複雜或不熟悉（非專業領域）的算法
5. 使用/學習不熟悉的程式語言
6. 按常識完善對象字段或代碼
7. 範例/測試數據生成
8. 複雜參數填寫和上下文匹配
9. 理解複雜的程式碼並編寫文檔 評審程式碼 提出改進意見
10. 自動編寫大量單元測試 一次性提高程式碼測試覆蓋率
