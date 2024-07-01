8. 複雜參數填寫和上下文參數匹配
// 接受用戶輸入的id,並且根據id查詢用戶訊息,返回用戶訊息,並且下載圖片
@GetMapping("/user/{id}")
public User getUser(@PathVariable String id) {
    User user = userService.getUserById(id);
    if (user != null) {
        downloadImage(user.getAvatarUrl());
    }
    return user;
}

//下載圖片
private void downloadImage(String url) {
    // 下載圖片程式碼
}
