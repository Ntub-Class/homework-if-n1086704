// 請介紹兩個字串方法跟數字方法
let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(string.substring(5, 8));
// a.substring(indexStart[, indexEnd])
// 提取部分的字串出來
console.log(string.substr(8, 15));
// str.substr(start[, length])
// 指定開頭字串，以及後面的長度
let number = 0.0000123456789;
console.log(number.toFixed(6));
// number.toFixed([digits])
// number使用定點小數表示法來格式化數字
// digits小數點後出現的位數
console.log(number.toPrecision(6));
// number.toPrecision（[ precision ]）
// number以定點或指數表示形式表示對象的字符串，四捨五入到precision有效數字
// precision可選的一個整數，指定有效位數


// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money > 30000) {

    console.log('乾爹');

} else {

    console.log('窮鬼');

}
