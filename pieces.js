/*
 * @Author: PlanC
 * @Date: 2021-01-12 12:33:16
 * @LastEditTime: 2021-01-12 13:25:16
 * @FilePath: \iplanc.github.io\pieces.js
 */

function text() {
};

text = new text();
number = 0;

//text[number++] = "";
text[number++] = "晓看天色暮看云  行也思卿  坐也思卿";
text[number++] = "但愿人长久  千里共婵娟";
text[number++] = "愿我如星君如月  夜夜流光相皎洁";
text[number++] = "浮世三千  吾爱有三  日月与卿";
text[number++] = "玲珑骰子安红豆  入骨相思知不知";
text[number++] = "今夕何夕  见此良人";
text[number++] = "衣带渐宽终不悔  为伊消得人憔悴";
text[number++] = "人生自是有情痴  此恨不关风与月";

increment = Math.floor(Math.random() * number);
document.write(text[increment]);
console.log(text[increment]);
