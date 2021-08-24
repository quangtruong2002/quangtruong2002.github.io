function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Bài 1
// Viết hàm randArr(n)

// Nhận tham số n là một số nguyên dương (< 10)
// Tạo một mảng gồm n phần tử có giá trị ngẫu nhiên trong khoảng -10 đến 10
// Kết quả trả về mảng đó
// Gọi hàm randArr và đặt giá trị cho biến numbers
function randArr(n) {
  let array = [];
  console.log(n)
  for (i = 0; i < n; i++) {
    let rand = randomNumber(-10, 10);
    array += rand + ',';
  }
  return array;
}
let numbers = randArr(randomNumber(1, 9));
console.log(numbers);
// Bài 2
// Viết hàm sumArr(arr)

// Nhận tham số arr là một array
// Tính trung bình cộng phần tử có kiểu number trong arr và trả về kết quả
// Gọi hàm sumArr với array numbers, in kết quả ra console

function sumArr(arr) {
  let num = 0;
  
  for (i = 1; i < arr.length; i++) {
    if()
    num += arr[i];
    count++
  }
  console.log(num / 2);
}
sumArr([14, 43, 41, 32])


// Bài 3
// Viết hàm findMax(arr)

// Nhận tham số arr là một array
// Tìm và trả về giá trị number lớn nhất trong arr
// Gọi hàm findMax với array numbers, in kết quả ra console

function findMax(arr) {
  let max = 0;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  console.log(max);
}
findMax([15, 52, 21, 45])

// Bài 4
// Viết hàm add(arr, value)

// Nhận tham số arr là một array và value là một giá trị bất kỳ
// Kiểm tra value có trong arr hay không
// Nếu không có thì thêm giá trị vào cuối arr và return index của value sau khi thêm
// Nếu có rồi thì bỏ qua, return false
// Gọi hàm add với array numbers và thêm một số giá trị tùy ý
// In array numbers ra console

function add(arr, value) {
  for (i = 0; i < arr.length; i++) {
    if ( arr[i] !== value ) {
     arr.push(value)
    }
    else if(arr[i] == value){
      return false;
    }
  }
  console.log(arr);  
}
add([12, 344, 23], 22);

// Bài 5
// Viết hàm remove(arr, value)

// Nhận tham số arr là một array và value là một giá trị bất kỳ
// Kiểm tra value có trong arr hay không
// Nếu không có thì XÓA TOÀN BỘ giá trị value trong arr và return true
// Nếu không có thì bỏ qua, return false
// Gọi hàm remove với array numbers và xóa một số giá trị tùy ý
// In array numbers ra console

// function remove(arr, value){
//   if()
// }
// remove([12,3,31,53], 53)
// Bài 6
// Viết hàm reverse(arr)

// Nhận tham số arr là một array và value là một giá trị bất kỳ
// Sao chép arr ra một array mới, và đảo ngược thứ tự các phần tử
// Kết quả trả về array mới
// Gọi hàm reverse với array numbers và in kết quả ra console
// Bài 7
// Viết hàm filter(arr)

// Nhận tham số arr là một array
// Lọc ra các phần tử kiểu number có giá trị > 0 trong arr và lưu vào một array mới
// Trả về kết quả là array mới
// Gọi hàm filter với array numbers và in kết quả ra console
// Bài 8
// Viết hàm map(arr)

// Nhận tham số arr là một array
// Chuyển đổi các phần tử có kiểu number thành bình phương của chính nó và lưu vào một array mới
// Kết quả trả về là array mới
// Gọi hàm map với array numbers và in kết quả ra console
// Bài 9
// Viết hàm some(arr)

// Kiểm tra arr là một array
// Kiểm tra xem trong arr có phần tử nào kiểu number và chia hết cho cả 3 và 5 hay không
// Kết quả trả về true nếu có ít nhất 1 phần tử chia hết, false nếu toàn bộ không chia hết
// Gọi hàm some với array numbers và in kết quả ra console
// Bài 10
// Sắp xếp array numbers theo giá trị tăng dần

// 💡 Tham khảo và sử dụng method sort 💡 sort nhận một hàm làm tham số để so sánh giá trị