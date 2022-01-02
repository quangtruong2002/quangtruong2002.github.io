// Cho một đối tượng person

const score = {
    maths: 90,
    science: 80,
};


// Bài 1
// Viết hàm add(obj, key, value)

// Kiểm tra obj có key hay không
// Nếu có thì bỏ qua, trả về false
// Nếu chưa có thì thêm key vào obj với giá trị tương ứng là value và trả về true
// Gọi hàm add thêm một số key (tên môn học) và value (điểm) vào score
// In score ra console

function add(score, key, value) {

}

// Bài 2
// Viết hàm remove(obj, key)

// Kiểm tra obj có key hay không
// Nếu có thì lấy giá trị, xóa key khỏi obj và trả về giá trị đó
// Nếu không có thì return false
// Gọi hàm remove, xóa một số key (tên môn học) trong score đã thêm ở bài 1
// In score ra console



// Bài 3
// Viết hàm avg(obj)

// Tính và trả về trung bình cộng các giá trị trong obj
// Gọi hàm avg để tính trung bình các giá trị trong score
// In kết quả ra console



// Bài 4
// Cho object other

// const other = {
//     physics: 60,
//     geology: 75,
// };
// Viết hàm merge(obj1, obj2)

// Kết hợp thuộc tính trong 2 object
// Nếu thuộc tính trong obj2 đã tồn tại trong obj1 thì ghi đè giá trị
// Gọi hàm merge để kết hợp giá trị 2 object score và other
// 💡 Hàm có chứng năng tương tự Object.assign()




// Bài 5
// Viết hàm clone(obj)

// Sao chép các giá trị trong obj và lưu vào một object mới
// Kết quả trả về là object mới
// Gọi hàm với clone để sao chép object score, lưu vào biến copy
// Thay đổi một số giá trị trong copy
// In 2 object ra console
// 💡 Ghi nhớ về tham chiếu - reference




// Bài 6
// Viết chương trình:

// Khi báo một object calc
// Thêm method get, nhập 2 giá trị số (prompt) và gán giá trị cho 2 key a, b
// Thêm các method add, sub, mul, div tính toán và trả về kết quả phép tính tương ứng của a và b
// 💡 Sử dụng this để truy cập đến giá trị a, b




// Bài 7
// Viết chương trình:

// Khai báo một hàm khởi tạo Counter()
// Khai báo key x có giá trị mặc định bằng 0
// Thêm 2 method up, down có chức năng tăng / giảm giá trị của x đi 1 đơn vị
// Thêm method get in giá trị của x ra console
// Khởi tạo một object counter từ Counter(), gọi các method trên
// 💡 Làm thế nào để cho phép gọi một chuỗi (chain) method. VD: counter.up().down().get().up()...???? Sử dụng return this 😉





 