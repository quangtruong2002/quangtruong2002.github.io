// Bài 1
// Viết hàm calc(op, a, b):

// Nhận 3 tham số op là toán tử + - * /, a, b là 2 số bất kỳ
// Tính và trả về kết quả phép tính tương ứng

function calc(op, a, b) {
    if (op === '+') console.log(a + b);
    else if (op === '-') console.log(a - b);
    else if (op === '/') console.log(a / b);
    else if (op === '*') console.log(a * b);
}
calc('/', 10, 2)

// Bài 2
// Viết hàm isPrime(n):

// Nhận 1 tham số n là một số nguyên dương
// Kiểm tra n có phải số nguyên tố hay không, trả về kết quả là true hoặc false

// 1. viết hàm isPrime(n)
// 2. nếu n < 2 thì return false  
// 3. lặp i từ 2 đến n - 1
//     - nếu n chia hết cho i thì n không phải số nguyên tố return false
// 4. return true

function isPrime(n) {
    if(n < 2) return false;
    else {
        for (let i = 2; i < n - 1; i++) {
            if(n % i == 0) return false
        }
        return true
    }
}
console.log(isPrime(5));

// Bài 3
// Viết hàm sum(a, b):

// Nhận 2 tham số a, b là 2 số bất kỳ
// Sử dụng toán tử logic để gán giá trị mặc định cho a và b là 0
// Tính tổng và trả về kết quả

function sum (a, b) {
    a = a || 0;
    b = b || 0;

    return a + b;
}
console.log(sum(123, 1323));

// Bài 4
// Viết hàm sumPrime(a, b):

// Nhận 2 tham số a, b là 2 số nguyên bất kỳ (và a < b)
// Tính tổng các số nguyên tố trong khoảng từ a đến b và trả về kết quả
// 💡 Sử dụng hàm isPrime ở bài 2

// 1. nếu a > b return false;
// 2. khai báo biến number là 0 để cộng dồn giá trị

// 3. lặp i từ a đến b
//     3.1  Kiểm tra nếu i là số nguyên tố thì cộng dồn vào number
// 4. trả về number

function sumPrime(a, b) {
    if (a > b) return false;
    else {
        let number = 0;
        for (let i = a; i <= b; i++) {
            if (isPrime(i)) number += i;
        }
        return number;
    }
}
console.log(sumPrime(10, 111));

// Bài 5
// Viết hàm sumStrong(n):

// Nhận tham số n là một số nguyên dương bất kỳ
// Kiểm tra trong dãy số từ 1 đến n có bao nhiêu số là số Strong
// In kết quả ra console (trên một hàng)
// 💡 Viết thêm 2 hàm để sử dụng trong sumStrong

// factorial(n) để tính giai thừa
// isStrong(n) để kiểm tra số Strong

// 1. viết hàm factorial đển tính giai thừa
// 2. khai báo biến sum = n để lưu trữ kết quả
// 3. lặp i từ 1 đến n 
// 4. nhân dồn sum với i
// 5. trả về sum 

function factorial(n) {
    let sum = n;
    for (let i = 1; i < n; i++) sum *= i;
    return sum;
}

// 1.2 viết hàm isStrong(n) để kiểm tra số strong
// 2.2 khai báo nCopy = n để chứa giá trị gốc của n
// 3.2 khai báo total = 0 để chứa kết quả cuối cùng đc trả về
// 4.2 lặp từ nCopy đến 0
//     4.3 khai báo hàm temp = nCopy % 10 để lấy giá trị cuối cùng
//     4.4 nCopy =  (nCopy - temp) % 10  để lấy các giá trị còn lại cho đến khi nCopy = 0
//     4.5 khai báo factorial1 = 1; để chứa giá trị giai thừa
//     4.6 lặp i từ 2 đến nCopy
//     4.7 factorial1 *= i
//     4.8 total += factorial1
// 5.2 nếu total == n thì trả về true (return true)
// 6.  khác thì trả về false (return false)

function isStrong(n) {
    let nCopy = n;
    let total = 0;
    while (nCopy > 0) {
        let temp = nCopy % 10;
        nCopy = (nCopy - temp) / 10;
        total += factorial(temp);
    }
    if(total == n) return true;
    else return false;
}
console.log(isStrong(145))

// Nhận tham số n là một số nguyên dương bất kỳ
// Kiểm tra trong dãy số từ 1 đến n có bao nhiêu số là số Strong
// In kết quả ra console (trên một hàng)
// 💡 Viết thêm 2 hàm để sử dụng trong sumStrong

// 1.3 viết hàm sumStrong(n)
// 2.3 khai báo string để chứa giá trị strong
// 3.3 lặp i từ 1 đến n 
//     3.4 if(isStrong(i))  string += i
// 4.3 return string

function sumStrong(n) {
    let string = '';
    for (let i = 1 ; i <= n; i++) {
        if(isStrong(i)) string += i + " ";
    }
    return string
}
console.log(sumStrong(145))
// Bài 6
// Viết hàm overload(n):

// Nhận tham số n có giá trị bất kỳ
// Kiểm tra nếu n là một trong các trường hợp dưới đây:
// n không phải là một số
// n không phải số nguyên dương > 2
// n lớn hơn 30
// Thì in ra console thông báo "Chương trình in dãy Fibonacci,
// yêu cầu tham số 'n' phải là một số nguyên dương > 2 và nhỏ hơn 50" và dừng hàm
// Nếu không phải các trường hợp phía trên thì in ra console dãy n số Fibonacci

// 1. viết hàm fibonacci(n) để in ra số 
// 2. khai báo biến a = 1
// 3. khai báo biến b = 1
// 4. khai báo string để chứa giá trị
// 4. lặp i từ 1 đến n - 2 
//     4.1 c = a + b;
//     4.1 a = b; 
//     4.3 b = c;
//     4.4 string += c;
// 5. trả về string 

function fibonacci(n) {
    let a = 1;
    let b = 1;
    let string = a + " " + b + " ";
    let c;
    for (let i = 1; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;

        string += c + " ";
    } 
    return string;
}


// Kiểm tra nếu n là một trong các trường hợp dưới đây:
// n không phải là một số
// n không phải số nguyên dương > 2
// n lớn hơn 30
// Thì in ra console thông báo "Chương trình in dãy Fibonacci,
// yêu cầu tham số 'n' phải là một số nguyên dương > 2 và nhỏ hơn 50" và dừng hàm
// Nếu không phải các trường hợp phía trên thì in ra console dãy n số Fibonacci

function overLoad(n) {
    if (typeof n != 'number'|| !isFinite(n) || n < 2 || n > 30)  {
        console.log('chương trình in dãy Fibonacci');
        return;
    }
    console.log(fibonacci(n))
}
overLoad(12);
overLoad(151);
overLoad(1);
overLoad(NaN);
overLoad(Infinity);
overLoad(31);
overLoad('12');



// Bài 7
// Viết hàm randInt(a, b):

// Nhận 2 tham số a, b bất kỳ
// Kiểm tra nếu a và b là một trong các trường hợp dưới đây:
// a hoặc b không phải là một số
// a hoặc b không phải số nguyên
// Thì in ra console thông báo "Chương trình tạo số nguyên ngẫu nhiên trong khoảng từ a -> b, yêu cầu a, b là 2 số nguyên"
// Nếu không phải các trường hợp trên, tạo một số ngẫu nhiên trong khoảng từ a đến b (bao gồm cả b) và trả về kết quả (lưu ý a có thể lớn hơn b, trong trường hợp đó phải đổi giá trị)

// 1. viết hàm randInt(a, b)
// 2. khởi tạo max = a;
// 3. khởi tạo min = b;
// 4. nếu a < b thì max = b min = a;
// 5. random min đến max
// 6. in random ra console

function randInt(a, b) {
    let min = a;
    let max = b;
    if (a < b) {
        max = b;
        min = a;
    }
    if(typeof a != 'number' ||typeof b != 'number' || !isFinite(a) ||  !isFinite(b) || (a > 0 && a % 1 == 0)) {
        console.log("Chương trình tạo số nguyên ngẫu nhiên trong khoảng từ a -> b, yêu cầu a, b là 2 số nguyên");
        return;
    }
        let rand = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(rand);
}
// randInt(1, 15);
// console.log(randInt(1.5, 4));
// console.log(randInt(1, "5"));
// console.log(randInt(1, -5));
// console.log(randInt(1, NaN));



// Bài 8
// Viết chương trình:

// Khai báo biến square có giá trị là một hàm (biểu thức hàm), nhận 1 tham số n là một số bất kỳ. Kết quả trả về bình phương của n
// Khai báo hàm calc(func) nhận tham số func có giá trị là 1 function
// Hàm calc cho phép nhận một giá trị và lưu vào biến bất kỳ
// Sau khi nhập giá trị, gọi hàm func để tính và in ra kết quả
// Gọi hàm calc với đối số là square
// 💡 Ví dụ

// calc(square); // func = square => func() = square()


