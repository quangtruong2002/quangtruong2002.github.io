// Bài 1
// Viết chương trình:

// Khai báo một biến number nhận giá trị số bất kỳ
// Kiểm tra number là số dương, âm, hay bằng 0 và in kết quả ra console
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let negativeNum = randomNumber(-15, 5);
let positiveNum = randomNumber(1, 15);
function num() {
    // let num  = randomNumber;
    if (negativeNum < 0) {
        console.log(`số ${negativeNum} là số dương`);
    }
    else if (negativeNum > 0) {
        console.log(`số ${negativeNum} là số âm`);
    }
}
num();
// Bài 2
// Viết chương trình:

// Khai báo một biến number nhận giá trị số nguyên bất kỳ
// Kiểm tra number là chẵn hay lẻ và in kết quả ra console

function checkNum() {
    if (positiveNum % 2 == 0) {
        console.log(`số ${positiveNum} là số lẻ`);
    }
    else if (positiveNum % 2 != 0) {
        console.log(`số ${positiveNum} là số chẵn`);
    }
}
checkNum();
// Bài 3
// Viết chương trình:

// Khai báo 2 biến a, b nhận giá trị số nguyên bất kỳ
// Kiểm tra và in ra số lớn hơn

function checkLargetNum() {
    let a = positiveNum;
    let b = positiveNum;
    if (a > b) {
        console.log(a);
    }
    else if (b > a) {
        console.log(b);
    }
}
checkLargetNum();

// Bài 4
// Viết chương trình:

// Khai báo một biến number là một số nguyên dương bất kỳ
// Kiểm tra và in ra number có chia hết cho cả 3 và 5 hay không

function checkDivide() {
    if (positiveNum % 3 == 0 && positiveNum % 5 == 0) {
        console.log(`số ${positiveNum} chia hết cho cả 3 và 5`);
    }
    else {
        console.log(`số ${positiveNum} không chia hết cho cả 3 và 5`);
    }
}
checkDivide();

// Bài 5
// Viết chương trình:

// Khai báo 2 biến a, b nhận giá trị số bất kỳ, tương ứng với hệ số phương trình bậc 1 (ax + b = 0)
// Tính và in ra kết quả nghiệm (root) phương trình với 2 giá trị đó
// 💡 Chú ý điều kiện a = 0, PT vô nghiệm

function checkNO() {
    let a = negativeNum;
    let b = randomNumber(10, 20);
    let x = -b / a;
    if (x > 0) {
        console.log(`Tập No của phương trình là: s = {${x}}`);
    }
    else if (x <= 0) {
        console.log(`Phương trình ${a}x + ${b} = 0 vô No`);
    }
}
checkNO();

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

function checkNO2() {
    let a = randomNumber(1, 5);
    let b = randomNumber(2, 15);
    let c = randomNumber(1, 5);

    // nghiệm kép:
    // let a = 1;
    // let b = 2;
    // let c = 1;

    // vô No:
    // let a = 1;
    // let b = 5;
    // let c = 14;
    let delta = b ** 2 - 4 * a * c;
    console.log(delta)
    if (delta > 0) {
        console.log("Pt có No phân biệt là:")
        console.log(`x1 = ${(-b + delta) / 2 * a}`);
        console.log(`x2 = ${(-b - delta) / 2 * a}`);
    }
    else if (delta == 0) {
        console.log("Pt có 2 nghiệm kép là:")
        console.log(-b / 2 * a);
    }
    else if (delta < 0) {
        console.log("Phương trình vô No");
    }

}
checkNO2();

// Bài 7
// Viết chương trình:

// Khai bao 3 biến a, b, c nhận giá trị số ngẫu nhiên
// Kiểm tra số lớn nhất trong 3 số và in kết quả ra console

function maxNum() {
    let a = randomNumber(1, 100);
    let b = randomNumber(1, 100);
    let c = randomNumber(1, 100);
    if (a > b && a > c) {
        console.log(`max number is: ${a}`);
    }
    else if (b > a && b > c) {
        console.log(`max number is: ${b}`);
    }
    else if (c > b && c > a) {
        console.log(`max number is: ${c}`);
    }
}
maxNum();

// Bài 8
// Viết chương trình:

// Khai báo biến year là một số nguyên dương tương ứng với năm bất kỳ
// Kiểm tra year có phải năm nhuận hay không và in ra console
// 💡 Năm nhuận là năm có số năm chia hết cho 400 hoặc chia hết cho 4 nhưng không chia hết cho 100. Ví dụ:
// 2000 là năm nhuận vì chia hết cho 400
// 2004 là năm nhuận vì chia hết cho 4 và không chia hết cho 100
// 2100 không phải năm nhuận vì chia hết cho 100

function checkYear() {
    let year = randomNumber(1990, 2022);
    if (year % 400 == 0 || year % 4 == 0) {
        console.log(`Năm ${year} là năm nhuận.`);
    }
    else {
        console.log(`Năm ${year} không phải là năm nhuận.`);
    }
}
checkYear()


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
let year = randomNumber(1990, 2022);

switch (year, month) {
    case 1:
        console.log(`Tháng ${month} có 31 ngày`);
        break
    case 2:
        if (year % 400 == 0 || year % 4 == 0) {
            console.log(`Tháng ${month} có 29 ngày`);
        }
        else {
            console.log(`Tháng ${month} có 28 ngày`);
        }
        break
    case 3:
        console.log(`Tháng ${month} có 31 ngày`);
        break
    case 4:
        console.log(`Tháng ${month} có 30 ngày`);
        break
    case 5:
        console.log(`Tháng ${month} có 31 ngày`);
        break
    case 6:
        console.log(`Tháng ${month} có 30 ngày`);
        break
    case 7:
        console.log(`Tháng ${month} có 31 ngày`);
        break
    case 8:
        console.log(`Tháng ${month} có 31 ngày`);
        break
    case 9:
        console.log(`Tháng ${month} có 30 ngày`);
        break
    case 10:
        console.log(`Tháng ${month} có 31 ngày`);
        break
    case 11:
        console.log(`Tháng ${month} có 30 ngày`);
        break
    case 12:
        console.log(`Tháng ${month} có 30 ngày`);
        break
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

function checkBMI() {
    let weight = randomNumber(40, 100);
    let height = randomNumber(140, 200) / 100;
    let BMI = weight / (height * 2);
    if (16 < BMI) {
        console.log(`${BMI} Gầy cấp độ I`);
    }
    else if (17 < BMI) {
        console.log(`${BMI} Gầy cấp độ II`);
    }
    else if (18 < BMI) {
        console.log(`${BMI} Gầy cấp độ III`);
    }
    else if (19 < BMI) {
        console.log(`${BMI} Bình thường`);
    }
    else if (25 < BMI) {
        console.log(`${BMI} Hơi béo`);
    }
    else if (30 < BMI) {
        console.log(`${BMI} Béo phì cấp độ I`);
    }
    else if (35 < BMI) {
        console.log(`${BMI} Béo phì cấp độ II`);
    }
    else if (40 < BMI) {
        console.log(`${BMI} Béo phì cấp độ III`);
    }

}
checkBMI();
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
function checkPoint() {

    let point = (randomNumber(100, 1000) / 100) - randomNumber(0, 1);

    if (point < 3.99) {
        console.log("F");
    }
    else if (point < 5.49 && point > 4.0) {
        console.log("D");
    }
    else if (point < 6.99 && point > 5.0) {
        console.log("C");
    }
    else if (point < 8.49 && point > 7.0) {
        console.log("B");
    }
    else if (point < 10 && point > 8.5) {
        console.log("D");
    }
}
checkPoint()
// Bài 13
// Viết chương trình:

// Khai báo 2 giá trị a, b
// Kiểm tra và in ra 2 số có trùng số cuối cùng hay không
function checkSameNum() {
    let a = randomNumber(300, 900);
    let b = randomNumber(100, 500);
    // let c = a - b;
    if (b % 2 === 0 && a % 2 === 0) {
        console.log(`${b}`);
    }
    else {
        console.log(`hai số ${a}, ${b} không trùng số cuối`);
    }
}
checkSameNum();
// Bài 14
// Viết chương trình máy tính đơn giản:

// Khai báo 2 biến a, b nhận giá trị là 2 số bất kỳ
// Một biến operator là phép tính cần thực hiện (+ - * /)
// Tính và in kết quả ra console
// 💡 Sử dụng switch case 💡 VD: a = 1, b = 2, operator = "+" => a + b = 3

function casioComputer() {
    let a = randomNumber(10, 20);
    let b = randomNumber(1, 10);
    let operator = "+";

    if (operator == '+') {
        console.log(`${a} + ${b} = ${a + b}`);
    }
    else if (operator == '-') {
        console.log(`${a} - ${b} = ${a - b}`);
    }
    else if (operator == '*') {
        console.log(`${a} * ${b} = ${a * b}`);
    }
    else if (operator == '/') {
        console.log(`${a} ÷ ${b} = ${a / b}`);
    }
    else {
        console.log("erro");
    }
}
casioComputer();