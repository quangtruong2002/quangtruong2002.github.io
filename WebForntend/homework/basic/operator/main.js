function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Bài 1
// Viết chương trình:

// Khai báo một biến number và nhập giá trị số bất kỳ
// Tính và in ra console căn bậc 2 của number
// 💡 Tính căn bậc 2 sử dụng Math.sqrt() 💡 Lưu ý chuyển đổi kiểu dữ liệu

// PESUDO CODE
// 1. khai báo và gán giá trị cho n
// 2. Math.sqrt(Number(n))

let n = randomNumber(5, 20);
console.log(` căn bậc 2 của ${n} là ${Math.sqrt(Number(n))}`);

// Bài 2
// Viết chương trình

// Khai báo 3 biến a, b, c và nhập giá trị tương ứng là 3 cạnh của tam giác
// Tính và in ra console diện tích tam giác đó
// 💡 Sử dụng công thức Heron
// s = (a+b+c)/2
// area = √(s(s-a)*(s-b)*(s-c))

// PESUDO CODE
// 1. khai báo và gán giá trị cho 3 biến a, b, c
// 2. tính diện tích tam giác s = (a + b + c ) / 2
// 3. area = Math.sqrt(Number(s*(s-a)*(s-b)*(s-c)))
// 4. in area ra console

let a = randomNumber(1, 10);
let b = randomNumber(1, 10);
let c = randomNumber(1, 10);
let s = (a + b + c) / 2;
console.log(`diện tích hình tam giác (${a} + ${b} + ${c}) = ${s}`)
let area = Math.sqrt(Number(s*(s-a)*(s-b)*(s-c)));
console.log(`(${s} * (${s} - ${a}) * (${s} - ${b}) * (${s} - ${c}) ) = ${area}`);

// Bài 3
// Viết chương trình:

// Khai báo 2 biến a, b và nhập giá trị bất kỳ
// Hoán đổi giá trị của 2 biến đó và in kết quả ra console

// PESUDO CODE
// 1. khai báo và gán giá trị cho biến a, b
// 2. khai báo và gán giá trị 0 cho c
// 3. c = b; dùng c để chứa b
// 4. b = a; gán b = a 
// 5. a = c; đưa giá trị từ c quay trở lại a

let a1 = randomNumber(1, 20);
let b1 = randomNumber(1, 20);
let c1 = 0;
console.log(a1, b1);
c1 = a1;
a1 = b1;
b1 = c1;
console.log(a1, b1);

// Bài 4
// Viết chương trình:

// Khai báo một biến km và nhập giá trị là số kilometers bất kỳ
// Chuyển đổi và in ra console giá trị tương ứng với đơn vị mile, m, in
// 💡 1 mile = 0.621371 km 💡 1 m = 0.001 km 💡 1 in = 2.54 × 10-5 km

// PESUDO CODE
// 1. khai báo và gan giá trị cho biến km (kilometers)
// 2.chuyển đổi giá trị 
//     - mile = km * 0.621371;
//     - m = km * 1000;
//     - inch = km * 39.370;
// 3. in các giá trị trên ra console

let km = randomNumber(1, 10);
let mile = km * 0.621371;
let m = km * 1000;
let inch = km * 39.370;
console.log(`${km} km = ${mile} mile`);
console.log(`${km} km = ${m} m`);
console.log(`${km} km = ${inch} inch`);

// Bài 5
// Viết chương trình:

// Khai báo một biến celcius và nhập giá trị là nhiệt độ bất kỳ ở thang nhiệt Celcius
// Chuyển đổi và in ra console nhiệt độ tương ứng ở thang nhiệt Kevin và Farenheit
// 💡 °F = °C × 9/5 + 32 💡 °K = °C + 273.15

// PESUDO CODE
// 1. khai báo và gán giá trị 
// 2. chuyển đổi nhiệt độ 
//     - K = C + 273.15;
//     - F = C × 9/5 + 32;
// 3. in k và F ra console

let celcius = randomNumber(-10, 42);
let keven = celcius + 273.15;
let farenheit = celcius * 9/5 + 32;

console.log(`${celcius} °C = ${keven} °K`);
console.log(`${celcius} °C = ${farenheit} °F`);

// Bài 6
// Viết chương trình:

// Khai báo một biến number và nhập giá trị là một số nguyên dương (số giây)
// Tính và in ra console giá trị giờ, phút, giây tương ứng

// PESUDO CODE
// 1. khai báo và gán giá trị cho time
// 2. tính toán thời gian

// in ra console

// H thì trừ đi số phút dư * 60 trừ số giây

let time = 3600;
// let sec = Math.floor(time % 60);
// let min = Math.floor((time - sec) / 60);
// let hour = Math.floor((time - min * 60 - sec) / 24); 

let sec = time % 60;
let min = ((time - sec) / 60) % 60;
let hour = ((time - min) * 60 (time - sec)) % 60;


// cách 2 Math.floor()
// let hour = Math.floor(time / 3600);
// let min = Math.floor((time - hour * 3600) / 60);
// let sec = (time - hour * 3600 - m * 60);

console.log(`${hour}:${min}:${sec}`);