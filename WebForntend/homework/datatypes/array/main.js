function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// Bài 1
// Viết hàm randArr(n)

// Nhận tham số n là một số nguyên dương (< 10)
// Tạo một mảng gồm n phần tử có giá trị ngẫu nhiên trong khoảng -10 đến 10
// Kết quả trả về mảng đó
// Gọi hàm randArr và đặt giá trị cho biến numbers

// PESUDO CODE 
// 1. viết hàm randArr(n) n là 1 số nguyên dương bé hơn 10
// 2. khai báo và gán giá trị cho string rỗng;
// 3. lặp i từ 1 đến n
//     khai báo rand và gán giá trị random từ -10 đến 10
//     nối rand vào string 
// 4. trả về string 
// 5. in hàm randArr ra console


function randArr(n) {
  let string = '';
  for (i = 1; i <= n; i++) {
    let rand = randomNumber(-10, 10);
    string += rand + ' ';
  }
  return string;
}
console.log(randArr(randomNumber(1, 9)));

// Bài 2
// Viết hàm sumArr(arr)

// Nhận tham số arr là một array
// Tính trung bình cộng phần tử có kiểu number trong arr và trả về kết quả
// Gọi hàm sumArr với array numbers, in kết quả ra console

// 1. viết hàm sumArr(arr) 
// 2. khai báo và gán giá trị 0 cho num để lưu trữ giá trị cộng dồn
// 3. khai báo biến count = 1 để lưu trữ số giá trị đã cộng dồn
// 4. lặp i từ 1 đến arr
//     4.2 cộng cộng dổn arr vào num
//     4.3 count + 1
// 5. in num / count 
// 6. gọi sumArr() và một array với giá trị bất kì 

function sumArr(arr) {
  let num = 0;
  let count = 1;
  for (i = 1; i < arr.length; i++) {
    num += arr[i];
    count++;
  }
  console.log(`trung bình cộng của ${num} / ${count} = ${num / count}`);
}
sumArr([14, 43, 41, 32]);

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
  console.log(`số lớn nhất trong mảng là ${max}`);
}
findMax([15, 52, 21, 45]);

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
    if (arr[i] !== value) {
      arr.push(value);
    }
    else if (arr[i] == value) {
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

// 1. viết hàm remove(arr, value);
// 3. lặp i từ 1 đến arr.length;
//    3.1 count+1
//    3.2 nếu arr[i] == value flag = true
// 5. else return false

function remove(arr, value) {
  let flag = true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {
      console.log(arr.shift(value));
    }
  }
  return false;
}
console.log(remove([1, 3, 4, 1], 1));





// Bài 6
// Viết hàm reverse(arr)

// Nhận tham số arr là một array và value là một giá trị bất kỳ
// Sao chép arr ra một array mới, và đảo ngược thứ tự các phần tử
// Kết quả trả về array mới
// Gọi hàm reverse với array numbers và in kết quả ra console

// 1. viết hàm raverse(arr) với arr là một array và value là một giá trị bất kỳ
// 2. khai báo một mảng rỗng newArr bằng với arr
// 3. sử dụng reverse để đảo ngược mảng
// 4. trả về newArr
// 5. gọi và in hàm ra console

function raverse(arr) {

  let newArr = arr;
  newArr.reverse(" ");
  return newArr;
}
console.log(raverse([1, 2, 3, 4]));



// Bài 7
// Viết hàm filter(arr)

// Nhận tham số arr là một array
// Lọc ra các phần tử kiểu number có giá trị > 0 trong arr và lưu vào một array mới
// Trả về kết quả là array mới
// Gọi hàm filter với array numbers và in kết quả ra console

// 1. viết hàm filter(arr)
// 2. khai báo một mảng rỗng
// 3. lặp i từ 1 đến arr.length
// 4. nếu typeof arr == number và arr > 0
//     4.2 gán arr vào newArr
// 5. trả về hàm arr
// 6. gọi hàm filter

function filter(arr) {

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number' && arr[i] > 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filter([1, 2, 3, '1', 0, -1, NaN]));


// Bài 8
// Viết hàm map(arr)

// Nhận tham số arr là một array
// Chuyển đổi các phần tử có kiểu number thành bình phương của chính nó và lưu vào một array mới
// Kết quả trả về là array mới
// Gọi hàm map với array numbers và in kết quả ra console

// 1. viết hàm map(arr)
// 2. khai báo mảng rỗng

// 3. lặp i từ 1 đến arr.length
//  3.1. đẩy giá trị arr[i] ** 2 vào mảng rỗng;
// 5. trả về newArr
// 6. gọi hàm map và in ra console

function map(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] ** 2);
  }
  return newArr;
}
console.log(map([2, 5, 10, 20]));

// Bài 9
// Viết hàm some(arr)

// Kiểm tra arr là một array
// Kiểm tra xem trong arr có phần tử nào kiểu number và chia hết cho cả 3 và 5 hay không
// Kết quả trả về true nếu có ít nhất 1 phần tử chia hết, false nếu toàn bộ không chia hết
// Gọi hàm some với array numbers và in kết quả ra console

// 1. viết hàm some(arr)
// 2. nếu typeof arr khác Array  thì false và return dừng hàm
// 3. nếu arr chia hết cho cả 3 và 5 hoặc chia hết chia hết cho 1 phần tử ;
//     3.1 trả về true
// gọi hàm some ra console

function some(arr) {

  if (isFinite(arr)) return;
  else {

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 == 0 && arr[i] % 5 == 0 || arr[i] % 3 == 0 || arr[i] % 5 == 0) return true;
    }
    return false;
  }
}
console.log(some([1, 5, 42]));
// Bài 10
// Sắp xếp array numbers theo giá trị tăng dần

// 💡 Tham khảo và sử dụng method sort 💡 sort nhận một hàm làm tham số để so sánh giá trị

let arr = [7, 2, 6, 5, 1, 3];
console.log(arr.sort());
console.log(arr.sort().reverse());

