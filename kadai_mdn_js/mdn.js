// 今日の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear(); // 年
const month = today.getMonth() + 1; // 月（0から始まるため +1）
const day = today.getDate(); // 日

// 年月日形式で表示
console.log(`${year}年${month}月${day}日`);
