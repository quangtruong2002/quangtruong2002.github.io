// Bài 2

// Viết chương trình:

// Khai báo một biến n và nhập giá trị là một số nguyên dương
// Tính tổng dãy số từ 1 đến n và in ra kết quả ra console

// 1. Khai báo biến n, gán giá trị
// 2. Khai báo biến sum = 0 để lưu trữ tổng
// 3. Lặp i từ 1 đến n:
//       - Cộng sum và i
// 4. In ra console

let n = 4;
let sum = 0;
for (let i = 1; i <= n; i++) { // sai ở điều kiện dừng vòng lặp
    sum += i;
}
console.log(sum); // 6


// Bài 3

// Viết chương trình:

// Khai báo một biến n và nhập giá trị là một số nguyên dương
// Kiểm tra các giá trị trong dãy số từ 1 đến n và in ra console
// Nếu số chia hết cho 3 thì in ra Fizz
// Nếu số chia hết cho 5 thì in ra Buzz
// Nếu số chia hết cho cả 3 và 5 thì in ra FizzBuzz
// Nếu không chia hết cho số nào thì in ra giá trị số đó

// 1. khai báo và gán giá trị
// 2. lặp giá trị từ i từ 1 đến n
// 2.1 sử dụng toán tử so sánh và in ra fizz nếu chia hết cho 3
// 2.2 sử dụng toán tử so sánh và in ra buzz nếu chia hết cho 5
// 2.3 sử dụng toán tử so sánh và in ra fizzBuzz nếu chia hết cho cả 3 và 5
// 3. nếu không chia hết được số nào thì in ra số đó


// 1. Khai báo n và gán giá trị
// 2. Lặp i từ 1 đến n:
//     - Nếu i chia hết cho cả 3 và 5 thì in ra "FizzBuzz"
//     - Nếu i chia hết cho 3 thì in ra "Fizz"
//     - Nếu i chia hết cho 5 thì in ra "Buzz"
//     - Các trường hợp khác in ra giá trị i

let n1 = 15;

for (let i = 1; i <= n1; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Bizz");
    }
    else {
        console.log(i);
    }
}

// Bài 4
// Viết chương trình:

// Khai báo một biến n và nhập giá trị là một số nguyên dương
// Tính và in ra console giá trị n! (giai thừa)

//=======================================

// 1. khai báo biến n và gán giá trị
// 2. khai báo mul = n để lưu trữ giá trị

// 3. lặp i từ 1 đến n 
//    - lấy mul nhân với i

// 4. in ra giá trị mul

let n2 = 5; // !5 = 120
let mul = n2;
for (let i = 1; i < n2; i++) {
    mul *= i;
}
console.log(mul);


// Bài 5
// Viết chương trình:

// Khai báo một biến n và nhập giá trị là một số nguyên dương
// Tìm và in ra console tất cả ước số (chia hết) của nó (VD: n = 12, kết quả = 1, 2, 3, 4, 6, 12)

//=======================================

// 1. khai báo và gán giá trị cho n
// 2. khai báo một chuỗi rỗng để lưu trữ giá trị

// 3. lặp i từ 1 đến n
//     - nếu n chia hết cho i nối vào chuỗi rỗng

// 4. in ra chuỗi 

let n3 = 12;
let str = "";

for (let i = 1; i <= n3; i++) {
    if (n3 % i === 0) str += i + " ";
}
console.log(`các ước số của ${n} là ${str}`);

// Bài 6
// Viết chương trình:

// Khai báo một biến n và nhập giá trị là số nguyên dương 1 <= n <= 10
// In ra console bảng cửu chương của n
// 💡 VD n = 5

// 5 * 1 = 5
// 5 * 2 = 10
// ...

//=======================================

// 1. khai báo và gán giá trị 1 <= n <= 10;
// 2. lặp i từ 1 đến 9 
//     - n * i
//     - in biếu thức và kết quả trong vòng lặp

let n4 = 6;

for (let i = 1; i <= 10; i++) {
    console.log(`${n4} * ${i} = ${n4 * i}`)
}

// Bài 7
// Viết chương trình in bảng cửu chương từ 1 đến 10

// lưu ý sử dụng vòng lặp lồng nhau

// 1. lặp n từ 1 đến 10
//     1.1 lặp i từ 1 đến 10
//         1.1.1 n * i
//         1.1.2 in ra phép tính trong vòng lặp

for (let n = 1; n <= 10; n++) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`)
    }
    console.log("======================================================")
}

// Bài 8
// Viết chương trình:

// Khai báo một biến n và nhập giá trị là một số nguyên dương bất kỳ
// Kiểm tra n có phải số nguyên tố (Prime) hay không và in ra console
// 💡 Số nguyên tố là số chỉ chia hết cho 1 và chính nó (1 không phải số nguyên tố)

//=======================================

// 1. khai báo và gán giá trị cho biến n
// 2. khai báo một biến flag gán giá trị là 'true'

// 2. nếu n = 1 số đó không phải số nguyên tố
// 3. lặp i từ 2 đến n - 1
//     - nếu n chia hết cho i thì n không phải số nguyên tố và flag bằng false
// 4. nếu falg bằng true thì n là số nguyên tố

// gợi ý!!! cho một biến flag gán bằng true từ trước bước số 2

// VD
// n = 5
// i =  từ 2 cho đến 4

let n5 = 10;
let flag = true;

if (n5 == 1) flag = false;

else {

    for (let i = 2; i <= n5 - 1; i++) {
        if (n5 % i == 0) {
            console.log(`${n5} không phải số nguyên tố`);
            flag = false;
            break;
        }
    }

    if (flag == true) console.log(`${n5} là số nguyên tố`);
}

// Quan trọng nhất: Hiểu yêu cầu bài toán {không hiểu phải hỏi}
// Viết Pseudo code để hình dung cách giải quyết
// Viết mã và kiểm tra

// Bài 9
// Viết chương trinh:

// Khai báo một biến n và nhập giá trị là một số nguyên dương bất kỳ
// Kiểm tra n có phải là số Strong hay không và in ra console
// 💡 Số Strong là số có tổng giai thừa các chữ số bằng chính nó

// VD: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145 là số Strong

// 1. khai báo và gán giá trị cho biến n
// 2. khai báo mảng rỗng arr

// 3. tính giai thừa 
//      3.1 lặp n từ 0 đến n6[n] 
//          3.1.1 tạo mảng num và gán giá trị n6[n]
//          3.1.2 lặp i từ 1 đến n6[n]
//              2.1.2.1 lấy num *= i
//          3.1.3 đẩy num vào arr
// 
// 4. khai báo và gán giá trị 0 cho biến number
// 5. lặp i từ 0 đến arr.length
//      number += arr
// 6. in str ra console

let n6 = [4,2,7];
let arr = [];

for (n = 0; n < n6.length; n++) {
    let num = n6[n];
    for (i = 1; i < n6[n]; i++){
        num *= i;

    }
    arr.push(num);
}

let number = 0;
for (i = 0; i < arr.length; i++){
    number += arr[i];

}  
console.log(number)