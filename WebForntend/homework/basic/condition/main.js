function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Bài 1
// Viết chương trình:

// Khai báo một biến number nhận giá trị số bất kỳ
// Kiểm tra number là số dương, âm, hay bằng 0 và in kết quả ra console


let num = randomNumber(-15, 10);

if (num < 0) console.log(`number ${num} là số âm`);
else if (num == 0) console.log(`number = ${num}`);
else console.log(`number ${num} là số dương`);

// Bài 2
// Viết chương trình:

// Khai báo một biến number nhận giá trị số nguyên bất kỳ
// Kiểm tra number là chẵn hay lẻ và in kết quả ra console

let num2 = randomNumber(0, 20);

if (num2 % 2 == 0) console.log(`${num2} là số chẵn`);
else if (num2 == 0) console.log(`number = 0`);
else console.log(`${num2} là số chẵn`);
// Bài 3
// Viết chương trình:

// Khai báo 2 biến a, b nhận giá trị số nguyên bất kỳ
// Kiểm tra và in ra số lớn hơn

let a = randomNumber(-20, 50);
let b = randomNumber(5, 20);
if (a > b) console.log(a);
else if (a < b) console.log(b);
else console.log(`${a} = ${b}`);

// Bài 4
// Viết chương trình:

// Khai báo một biến number là một số nguyên dương bất kỳ
// Kiểm tra và in ra number có chia hết cho cả 3 và 5 hay không

let num3 = randomNumber(0, 15);
if (num3 % 3 == 0 && num3 % 5 == 0) console.log(`số ${num3} chia hết cho cả 3 và 5`);
else console.log(`số ${num3} không chia hết cho cả 3 và 5`);

// Bài 5
// Viết chương trình:

// Khai báo 2 biến a, b nhận giá trị số bất kỳ, tương ứng với hệ số phương trình bậc 1 (ax + b = 0)
// Tính và in ra kết quả nghiệm (root) phương trình với 2 giá trị đó
// 💡 Chú ý điều kiện a = 0, PT vô nghiệm

// let a = randomNumber(-15, 15);
// let b = randomNumber(-15, 15);
let x = -b / a;
if (x) console.log(`Tập No của phương trình là: s = {${x}}`);
else if (a == 0) console.log(`Phương trình ${a}x + ${b} = 0 vô No`);

// Bài 6
// Viết chương trình:

// Khai báo 3 biến a, b, c nhận giá trị số bất kỳ (a != 0), tương ứng với hệ số phương trình bậc 2 (quadratic equation) ax**2 + bx + c = 0
// Giải phương trình ứng với 3 giá trị đó
// In kết quả ra console
// 💡 Tính delta (b**2 - 4ac)
// Nếu delta > 0, PT có 2 nghiệm phân biệt (-b ± √b2 - 4ac) / 2a
// Nếu delta = 0, PT có 2 nghiệm kép -b / 2a
// Nếu delta < 0, PT vô nghiệm
// pt = ax**2 + bx + c;

let aNum = randomNumber(0, 5);
let bNum = randomNumber(2, 15);
let c = randomNumber(1, 5);

// nghiệm kép:
// let a = 1;
// let b = 2;
// let c = 1;

// vô No:
// let a = 1;
// let b = 5;
// let c = 14;
let delta = bNum ** 2 - 4 * aNum * c;
console.log(delta)

if (a == 0) console.log('a = 0 => PT vô No');
else if (delta > 0) {
    console.log("Pt có No phân biệt là:")
    console.log(`x1 = ${(-bNum + delta) / 2 * aNum}`);
    console.log(`x2 = ${(-bNum - delta) / 2 * aNum}`);
}
else if (delta == 0) {
    console.log("Pt có 2 nghiệm kép là:");
    console.log(-bNum / 2 * aNum);
}
else if (delta < 0) console.log("Phương trình vô No");




// Bài 7
// Viết chương trình:

// Khai bao 3 biến a, b, c nhận giá trị số ngẫu nhiên
// Kiểm tra số lớn nhất trong 3 số và in kết quả ra console

let maxA = randomNumber(1, 1000);
let maxB = randomNumber(1, 1000);
let maxC = randomNumber(1, 1000);
let max = maxA;
console.log(maxA, maxB, maxC)

if (maxB > max) max = maxB;
else if (maxC > max) max = maxC;
console.log(`số lớn nhất là ${max}`)


// Bài 8
// Viết chương trình:

// Khai báo biến year là một số nguyên dương tương ứng với năm bất kỳ
// Kiểm tra year có phải năm nhuận hay không và in ra console
// 💡 Năm nhuận là năm có số năm chia hết cho 400 hoặc chia hết cho 4 nhưng không chia hết cho 100. Ví dụ:
// 2000 là năm nhuận vì chia hết cho 400
// 2004 là năm nhuận vì chia hết cho 4 và không chia hết cho 100
// 2100 không phải năm nhuận vì chia hết cho 100

let year = randomNumber(1980, 2100);
if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) console.log(`Năm ${year} là năm nhuận.`);
else console.log(`Năm ${year} không phải là năm nhuận.`);


// Bài 9
// Viết chương trình:

// Khai báo 1 biến day nhận giá trị là một số nguyên dương từ 1 - 7, tương ứng với số ngày trong tuần
// Kiểm tra và in ra tên thứ tương ứng (ví dụ: 1 - Thứ 2)
// 💡 Đầu tuần là thứ 2, sử dụng switch case

let day = randomNumber(1, 7);

switch (day) {
    case 1:
        console.log("Thứ 2");
        break
    case 2:
        console.log("Thứ 3");
        break
    case 3:
        console.log("Thứ 4");
        break
    case 4:
        console.log("Thứ 5");
        break
    case 5:
        console.log("Thứ 6");
        break
    case 6:
        console.log("Thứ 7");
        break
    case 7:
        console.log("Chủ Nhật");
        break
}

// Bài 10
// Viết chương trình:

// Khai báo 2 biến year và month là 2 số nguyên dương tương ứng với một năm và một tháng bất kỳ trong năm
// Kiểm tra và in ra console số ngày trong tháng đó
// 💡 Sử dụng switch case 💡 Số ngày trong tháng

// Tháng 1, 3, 5, 7, 8, 10 và 12 có 31 ngày
// Tháng 4, 6, 9, 11 có 30 ngày
// Tháng 2 nếu là năm nhuận có 29 ngày, nếu không phải năm nhuận là 28 ngày

let month = randomNumber(1, 12);

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`Tháng ${month} có 31 ngày`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`Tháng ${month} có 30 ngày`);
        break;
    case 2:
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) console.log(`Tháng ${month} năm ${year} có 29 ngày`);
        else console.log(`Tháng ${month} năm ${year} có 28 ngày`);
}
// Bài 11
// Viết chương trình:

// Khai báo 2 biến weight và height tương ứng với chiều cân nặng (đơn vị kg) và chiều cao (đơn vị m)
// Tính chỉ số BMI và in kết quả ra console
// 💡 BMI (Body Mass Index) = weight / height2

// BMI <= 16: Gầy độ III
// 16 < BMI <= 17.5: Gầy độ II
// 17.5 < BMI <= 18.5: Gầy độ I
// 18.5 < BMI <= 25: Bình thường
// 25 < BMI <= 30: Hơi béo
// 30 < BMI <= 35: Béo phì độ I
// 35 < BMI <= 40: Béo phì độ II
// 40 < BMI: Béo phì độ III


let weight = randomNumber(40, 100);
let height = randomNumber(140, 200) / 100;
let BMI = weight / (height ** 2);
if (BMI < 16) console.log(`${BMI} Gầy cấp độ I`);
else if (BMI < 17) console.log(`${BMI} Gầy cấp độ II`);
else if (BMI < 18) console.log(`${BMI} Gầy cấp độ III`);
else if (BMI < 25) console.log(`${BMI} Bình thường`);
else if (BMI < 30) console.log(`${BMI} Hơi béo`);
else if (BMI < 35) console.log(`${BMI} Béo phì cấp độ I`);
else if (BMI < 40) console.log(`${BMI} Béo phì cấp độ II`);
else if (BMI >= 40) console.log(`${BMI} Béo phì cấp độ III`);

// Bài 12
// Viết chương trình:

// Khai báo biến point nhận giá trị là một số tương ứng với điểm của sinh viên (0 <= point <= 10)
// Quy đổi ra thang điểm chữ và in kết quả ra console
// 💡 Thang điểm chữ

// 0 - 3.99 => F
// 4.0 - 5.49 => D
// 5.5 - 6.99 => C
// 7.0 - 8.49 => B
// 8.5 - 10 => A

let point = (Math.random() * 10).toFixed(2);

if (point <= 3.99) console.log("F");
else if (point <= 5.49 && point >= 4.0) console.log("D");
else if (point <= 6.99 && point >= 5.0) console.log("C");
else if (point <= 8.49 && point >= 7.0) console.log("B");
else if (point <= 10 && point >= 8.5) console.log("A");



// Bài 13
// Viết chương trình:

// Khai báo 2 giá trị a, b
// Kiểm tra và in ra 2 số có trùng số cuối cùng hay không
    let sameA = randomNumber(300, 900) % 10;
    let sameB = randomNumber(100, 500) % 10;


    if (sameB === sameA) console.log(`${sameB}`);
    
    else console.log(`hai số ${sameA}, ${sameB} không trùng số cuối`);

// Bài 14
// Viết chương trình máy tính đơn giản:

// Khai báo 2 biến a, b nhận giá trị là 2 số bất kỳ
// Một biến operator là phép tính cần thực hiện (+ - * /)
// Tính và in kết quả ra console
// 💡 Sử dụng switch case 💡 VD: a = 1, b = 2, operator = "+" => a + b = 3

    let a1 = randomNumber(10, 20);
    let b1 = randomNumber(1, 10);
    let operator = "+";

switch(operator){
    case '+':
        if (operator == '+') console.log(`${a1} + ${b1} = ${a1 + b1}`);
        break;
    case '-':
        if (operator == '-') console.log(`${a1} - ${b1} = ${a1 - b1}`);
        break;
    case '*':
        if (operator == '*') console.log(`${a1} * ${b1} = ${a * b1}`);
        break;
    case '/':
        if (operator == '/') console.log(`${a1} ÷ ${b1} = ${a1 / b1}`);
        break;
};