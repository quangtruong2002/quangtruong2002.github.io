// Bài 13
// Viết chương trình:

// Khai báo 2 biến a, b và nhập giá trị là 2 số nguyên dương
// Tìm và in ra console bội chung nhỏ nhất của a và b

// PESUDO CODE
// 1. khai báo và gán giá trị cho a và b
// 2. khai báo 2 mảng rỗng arr để lưu trữ các bội số
// 3. khai báo một mảng rỗng để lưu trữ bội số chung

// 4. lặp i từ 1 đến 10
//     4.1 đẩy a * i vào arr1
//     4.2 đẩy b * i vào arr2

// 5. lặp k từ 1 đến arr1.length
//     5.1 lặp n từ 1 đến arr2.length
//         5.1.1 nếu arr1[k] == arr2[n]
//         5.1.2 nối arr1[k] vào mảng rỗng
//         5.1.3 ngắt vòng lặp bằng break nếu đã tìm thấy bội chung đầu tiên (không ngắt)
// 6. khai báo min1 = Math.min/max.apply(Math, number) để kiểm tra số nhỏ nhất
// 6. in min1 ra console
        
let a = 12;
let b = 6;
let arr1 = [];
let arr2 = [];
let arr3 = [];

for (let i = 1; i <= 10; i++) {
    arr1.push(a * i);
    arr2.push(b * i);
}
console.log(arr1);
console.log(arr2);

for (let k = 1; k < arr1.length; k++) {

    for (let n = 1; n < arr2.length; n++ ) {

        if (arr1[k] == arr2[n]) {
            
            arr3.push(arr1[k]);
            break
        }
    }
}
let min1 = Math.min.apply(Math, arr3)
console.log(`bội chung nhỏ nhất của ${a} và ${b} là ${min1}`)
        
// 💡 Một số bài ôn tập thêm với vòng lặp
// Viết chương trình

// Khai báo một biến n và nhập giá trị là một số lẻ (nhỏ hơn 10 thôi)
// In ra theo các mẫu sau (n là số hàng cần in)
// 1. khai báo một biến và gán giá trị < 10
// 2. lặp i từ 1 đến n
// 3. nếu i bằng 1 thì console *
// 4. nếu i bằng 2 thì console **

let n = 5; 
for (let i = 1; i <= n; i++) {
    if (i == 1 ) console.log('*');
    else if (i == 2 ) console.log('*' + ' ' + '*');
}



// *
// * *
// * * *
// * * * *
// * * * * *

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// * * * * *
// * * * *
// * * *
// * *
// *

// * * * * *
//   * * * *
//     * * *
//       * *
//         *
        
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

// *
// * *
// * * *
// * *
// *

//     *
//   * *
// * * *
//   * *
//     *
    
// * * *
// * *
// *
// * *
// * * *