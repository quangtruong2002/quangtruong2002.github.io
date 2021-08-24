// Bài 1
// Viết hàm calc(op, a, b):

// Nhận 3 tham số op là toán tử + - * /, a, b là 2 số bất kỳ
// Tính và trả về kết quả phép tính tương ứng



// Bài 2
// Viết hàm isPrime(n):

// Nhận 1 tham số n là một số nguyên dương
// Kiểm tra n có phải số nguyên tố hay không, trả về kết quả là true hoặc false
// Bài 3
// Viết hàm sum(a, b):

// Nhận 2 tham số a, b là 2 số bất kỳ
// Sử dụng toán tử logic để gán giá trị mặc định cho a và b là 0
// Tính tổng và trả về kết quả
// Bài 4
// Viết hàm sumPrime(a, b):

// Nhận 2 tham số a, b là 2 số nguyên bất kỳ (và a < b)
// Tính tổng các số nguyên tố trong khoảng từ a đến b và trả về kết quả
// 💡 Sử dụng hàm isPrime ở bài 2

// Bài 5
// Viết hàm sumStrong(n):

// Nhận tham số n là một số nguyên dương bất kỳ
// Kiểm tra trong dãy số từ 1 đến n có bao nhiêu số là số Strong
// In kết quả ra console (trên một hàng)
// 💡 Viết thêm 2 hàm để sử dụng trong sumStrong

// factorial(n) để tính giai thừa
// isStrong(n) để kiểm tra số Strong
// Bài 6
// Viết hàm overload(n):

// Nhận tham số n có giá trị bất kỳ
// Kiểm tra nếu n là một trong các trường hợp dưới đây:
// n không phải là một số
// n không phải số nguyên dương > 2
// n lớn hơn 30
// Thì in ra console thông báo "Chương trình in dãy Fibonacci, yêu cầu tham số 'n' phải là một số nguyên dương > 2 và nhỏ hơn 50" và dừng hàm
// Nếu không phải các trường hợp phía trên thì in ra console dãy n số Fibonacci
// Bài 7
// Viết hàm randInt(a, b):

// Nhận 2 tham số a, b bất kỳ
// Kiểm tra nếu a và b là một trong các trường hợp dưới đây:
// a hoặc b không phải là một số
// a hoặc b không phải số nguyên
// Thì in ra console thông báo "Chương trình tạo số nguyên ngẫu nhiên trong khoảng từ a -> b, yêu cầu a, b là 2 số nguyên"
// Nếu không phải các trường hợp trên, tạo một số ngẫu nhiên trong khoảng từ a đến b (bao gồm cả b) và trả về kết quả (lưu ý a có thể lớn hơn b, trong trường hợp đó phải đổi giá trị)
// Bài 8
// Viết chương trình:

// Khai báo biến square có giá trị là một hàm (biểu thức hàm), nhận 1 tham số n là một số bất kỳ. Kết quả trả về bình phương của n
// Khai báo hàm calc(func) nhận tham số func có giá trị là 1 function
// Hàm calc cho phép nhận một giá trị và lưu vào biến bất kỳ
// Sau khi nhập giá trị, gọi hàm func để tính và in ra kết quả
// Gọi hàm calc với đối số là square
// 💡 Ví dụ

// calc(square); // func = square => func() = square()