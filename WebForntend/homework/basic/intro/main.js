function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Bài 1
// Sử dụng console thực hiện các phép tính đơn giản + - * /

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);

// Bài 2
// Viết các câu lệnh:

// Sử dụng prompt() nhập vào tên, gán cho biến name
// In ra console câu chào "Xin chào mọi người, mình là ..." (... = name)
// 💡 VD: In nhiều giá trị ra một dòng console.log(a, b, c, ...)

let _name = prompt('Tên bạn là gì?');
console.log(`Xin chào mọi người, mình là ${_name}`);


// Bài 3
// Viết các câu lệnh:

// Khai báo một số biến name, age, hobbies, ... lưu các thông tin về bản thân
// In ra console câu chào với các thông tin trên
// 💡 Xóa nội dung console sử dụng console.clear()

let name = 'Lý Quang Trường';
let age = 19;
let hobbies = 'boxing';
let height = '1m74';

console.log(`Xin chào mọi người, mình là ${name}, ${age} , sở thích là ${hobbies}, cao ${height}`);


// Bài 4
// Viết các câu lệnh:

// Khai báo 2 biến a và b có giá trị là số bất kỳ
// In ra console kết quả của các phép tính cơ bản + - * / với 2 biến đó
let a = randomNumber(10, 40);
let b = randomNumber(1, 20);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Bài 5
// Viết các câu lệnh

// Khai báo biến variable có giá trị bất kỳ (primitive)
// In ra console giá trị và kiểu dữ liệu tương ứng của variable
// Gán lại giá trị cho variable thành một giá trị khác (primitive)
// Lặp lại in ra console và gán giá trị mới với các giá trị (primitive) khác

let variable = 1;
console.log(typeof variable);
variable = [123];
console.log(variable);

// Bài 6
// Viết các câu lệnh

// Khai báo một đối tượng self với một số key: name, age, hobbies, ... tương tự bài 4
// In ra console giá trị và kiểu dữ liệu của đối tượng self
// In ra console câu chào với các thông tin trong đối tượng self
// 💡 Sử dụng cả 2 cú pháp object.key và object["key"]

let self = {
    name: 'Trường',
    age: 19,
    hobbies: 'boxing',
    height: '1m74'
};
console.log(self['hobbies'] + ',' + self['age'] + ',' + self['height']);
console.log(`Xin chào mọi người, mình là ${self.name}, ${self.age} tuổi, thích ${self.hobbies}, cao ${self.height}`);

// Bài 7
// Viết các câu lệnh

// Khai báo một mảng numbers chứa 2 giá trị số bất kỳ
// In ra console giá trị và kiểu dữ liệu của mảng numbers
// In ra console kết quả các phép tính cơ bản với 2 giá trị trong mảng numbers
let numbers = [194, 12];
console.log(typeof numbers);
let num = 0;
for (let i = 0; i < numbers.length; i++) {
    num += numbers[i];
    console.log(num);
};

// Bài 8
// Viết các câu lệnh

// Khai báo hàm hello có nhiệm vụ in ra console câu chào (VD: Hi, I'm Ba)
// Gọi hàm hello và xem kết quả

let hello ="Hi, I'm Ba";
console.log(hello);

// Bài 9
// Khai báo các hàm add, sub, mul, div có nhiệm vụ tính toán và in ra console giá trị các phép tính tương ứng với 2 giá trị trong mảng numbers của bài 8
// Gọi hàm và xem kết quả
console.log('===================================================================')

//phép nhân
function mul() {
    let num0 = 0;
    for(i = 0; i < numbers.length; i++) {
        // numbers[i] += num0;
        num0 += numbers[i];

    }
    console.log(num0)
}
mul();
//phép chia 
function div() {
    let num0 = 0;
    for(i = 0; i < numbers.length; i++) {
        num0 == numbers[i];
        numbers[i] / num0;
    }
    console.log(num0)
}
div();
// // phép trừ
// function sub() {

// }

// Bài 10
// Sửa đổi câu lệnh khai báo hàm hello, thêm một tham số name
// Sửa đổi câu lệnh in ra console sử dụng giá trị name
// Gọi hàm hello, truyền vào đối số (giá trị cho tham số name) là key name trong đối tượng self ở bài 7
let name1 = hello;
console.log(name1);
self.name = hello;
console.log(self.name);

// Bài 11
// Sửa đổi các hàm add(), sub(), mul(), div() đã khai báo ở bài 10, thêm 2 tham số a, b
// Tính toán và trả về kết quả tương ứng với giá trị của a và b
// Lần lượt gọi các hàm và in kết quả ra console, truyền vào 2 đối số (giá trị cho tham số a và b) là 2 giá trị từ mảng numbers ở bài 8
// 💡 VD kết quả in ra: 1 + 2 = 3


