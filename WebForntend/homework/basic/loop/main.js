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

// Pseudo Code
// 1. temp = nCopy % 10
// 2. Tính temp giai thừa và cộng dồn vào biết total
// 3. temp = ((nCopy - temp) / 10) % 10 lấy ra chữ số thứ 2
// 4. Tính temp giai thừa
// 5. Lặp lại từ bước 3 và bước 4 cho đến khi nCopy

let n6 = 234;
let nCopy = n6;
let total = 0;

while (nCopy > 0) {
    let temp = nCopy % 10;
    nCopy = (nCopy - temp) / 10

    let factorial = 1;
    
    for (let i = 2; i <= temp; i++) factorial *= i;

    total += factorial;
}

if (total === n6) console.log(n6, "là số Strong");
else console.log(n6, "không phải số Strong");

// Bài 11
// Viết chương trình:

// Khai báo một biến n và nhập giá trị là một số nguyên dương bất kỳ
// In ra dãy n số Fibonacci
// 💡 Dãy Fibonacci là dãy bắt đầu bằng 0 và 1, các số phía sau bằng tổng 2 số phía trước

// VD: 0 1 1 2 3 5 8 ...

// 1. khai báo và gán giá trị cho n
// 2. khai báo 2 biến a và b = 1;
// 4. khai báo biến c;
// 5. khai báo chuỗi và gán giá trị a,b 
// 6. lặp i từ 1 đến n 
//     6.1 gán c = a + b
//     6.2 gán a = b
//     6.3 gán b = c
//     6.4 gán c vào string
// 7. in giá trị string ra console

let n7 = 10;
let a = 1;
let b = 1;
let c;
let string = a + " " + b + " ";
for(let i = 1; i < n7; i++) {
    c = a + b;
    a = b;
    b = c;
    string += c + " ";
}
console.log(string);
// Bài 12
// Viết chương trình:
// Khai báo 2 biến a, b và nhập giá trị là 2 số nguyên dương
// Tìm và in ra console ước chung lớn nhất của a và b



// PESUDO CODE
// KIỂM TRA SỐ LỚN NHẤT 
// 1. khai báo 2 biến a và b
// 2. khai báo biến min = a
// khai báo mảng rỗng arr để chứa các ước chung 
// 3. nếu a > b
//      thì min = b; 
// TÌM ƯỚC CHUNG
// 4. lặp i từ 1 đến min 
//      nếu a chia hết cho i && b chia hết cho i 
//      thì đẩy i vào arr;

// SO SÁNH KẾT QUẢ VÀ ĐƯA RA ƯỚC CHUNG LỚN NHẤT 
// 5. khai báo và gán giá trị max = 1 để so sánh kết quả và đưa r ước chung lớn nhất
// 6. lặp n từ 1 đến dộ dài của arr
//      nếu arr[n] > max
//      max = arr[n]
// 7. in max ra console
// let a7 = Math.floor(Math.random() * 1000);
// let b7 = Math.floor(Math.random() * 1000);

let a7 = 140;
let b7 = 56;
let min = a7;
let arr = [];

if (a7 > b7) min = b7;
console.log("min là" + " " +min)

for (let i = 1; i <= min; i++) {

    if( a7 % i == 0 && b7 % i == 0 ) {
        arr.push(i);
    }
}

let max = 1;
for (n = 1; n <= arr.length; n++) {

    if (arr[n] > max) {
        max = arr[n];
    } 
}
console.log(`ƯCLN của ${a7} và ${b7} là ${max}`);


