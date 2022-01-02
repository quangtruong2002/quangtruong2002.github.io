// Bài 1
// Viết hàm countVowel(str) đếm số ký tự là nguyên âm (aeiou) trong chuỗi tham số str và trả về kết quả

// 💡 VD: counVowel('Hello world') => 3

// INCLUDE() 
// Phương thức include () xác định xem một mảng có bao gồm một giá trị nhất định 
// trong số các mục nhập của nó hay không, trả về true hoặc false nếu thích hợp.

// 1. viết hàm countVowel(str) 
// 2. khai báo và gán một mảng vowel ['a', 'e', 'i', 'o', 'u'];
// 3. khai báo và gán giá trị count = 0;
// 4. lặp từ countVowels đến str
//     4.1 nếu trong mảng vowel có value bằng với str 
//     4.2 count++
// 5. in count ra console

function countVowel(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let countVowels of str) {
        if (vowel.includes(countVowels)) count++;
    }
    return str + " => " + count;
}
console.log(countVowel('Hello World'));

// Bài 2
// Viết hàm title(str) chuyển đổi chuỗi str thành dạng title (viết hoa ký tự đầu tiên, những ký tự sau viết thường) và trả về kết quả là chuỗi đã chuyển đổi

// 💡 VD: title('hello World!') => 'Hello world!'

function title(str) {
    let cuts = str.charAt(0).toUpperCase('');
    let cuts2 = str.slice(1).toLowerCase('');
    let concats = cuts.concat(cuts2);
    return concats;
}
console.log(title('hello Word'));

// Bài 3
// Viết hàm swapCase(str) chuyển đổi ký tự in hoa thành in thường và ngược lại, trả về kết quả là chuỗi đã chuyển đổi

// 💡 VD: swapCase('heLLo') => 'HEllO'

// function swapCase(str) {
//     let newArr = [];
//     let arr = str.trim('').split('');
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i]) != arr[i]) newArr.push(arr[i]);
//     }

//     let findRepeatedWords = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(newArr.indexOf(arr[i] == -1)) findRepeatedWords.push(arr[i]);
//     }
//     return findRepeatedWords;
// }
// console.log(swapCase('HEllO'));


// Bài 4
// Viết hàm capitalize(str) chuyển đổi chuỗi thành dạng viết hoa chữ cái đầu tiên của mỗi từ

// 💡 VD: capitalize('heLLo worlD!') => 'Hello World!'




// Bài 5
// Viết hàm hidden(str) chuyển đổi chuỗi str có dạng email thành chuỗi ẩn bớt ký tự (phần tên email trước @ có ít nhất 8 ký tự)

// 💡 VD: hidden('banguyen1234@techmaster.vn') => 'ba...34@techmaster.vn'




// Bài 6
// Viết hàm removePunctuations(str) loại bỏ các dấu câu (!,:;.-?) khỏi str (thay thế thành ký tự space) và trả về kết quả là chuỗi không bao gồm dấu câu

// 💡 Ví dụ removePunctuations("Hi!") => 'Hi '




// Bài 7
// Viết hàm removeVietnamese(str) thay thế các ký tự tiếng Việt, có dấu thành không dấu và trả về kết quả là chuỗi chỉ bao gồm các ký tự a-zA-Z0-9

// 💡 VD: removeVietnamese("Chơi đồ") -> 'Choi do'

// 💡 Sử dụng chuỗi Regex (VD /[áàạãăắằặẵâấầậẫ]/gi)



// Bài 8
// Viết hàm removeSpecial(str) loại bỏ các ký tự đặc biệt (không thuộc bảng chữ cái a-zA-Z0-9) khỏi chuỗi và trả về kết quả là chuỗi chỉ bao gồm chữ cái và số

// 💡 VD: removeSpecial('ab#cd&') -> 'ab cd '




// Bài 9
// Viết hàm parameterize(str) chuyển đổi str thành chuỗi URL

// 💡 Ví dụ: "Chương trình JavaScript đầu tiên!!!" -> chuong-trinh-javascript-dau-tien

// 💡 Sử dụng các hàm removeVietnamese và removeSpecial ở bài 5 và bài 6




// Bài 10
// Viết hàm maxSequense(str) đếm và trả về kết quả ký tự xuất hiện nhiều lần nhất trong str (không tính khoảng trắng), kết quả trả về là object, key là ký tự, value là số lần xuất hiện

// 💡 VD: maxSequense('aaab') => {a: 3}



// Bài 11
// Viết hàm validate(str) kiểm tra chuỗi str có phải hợp lệ hay không, kết quả trả về true hoặc false

// Có độ dài từ 8 - 16 ký tự
// Chỉ bao gồm các ký tự a-zA-Z0-9
// Phải bắt đầu bằng một ký tự



// Bài 12 - Advance
// Cho chuỗi str = 'One two THREE, four five! Six, sEvEn Eight nine, "ten"? ONE-three fourteen. Nine'

// Viết chương trình:

// Khai báo một biến key và nhập giá trị là một từ (VD: 'one')
// Kiểm tra từ đó có xuất hiện trong str hay không, nếu có thì highlight các từ đó (in hoa key, các từ khác in thường)
// Tìm và in ra câu đầu tiên trong str xuất hiện key, đồng thời highlight key
// 💡 VD: key = 'one'

// Highlight: 'ONE two three, four five! six, seven eight nine, "ten"? ONE-three'
// First sentense: 'ONE two three, four five!'
// 💡 Lưu ý phải đảm bảo từ cần tìm là từ riêng biệt, ví dụ 'four' chỉ khớp với 'four', chứ không khớp với 'fourteen', và không phân biệt chữ hoa, chữ thường

// 💡 Gợi ý:

// Chuyển đổi thành in thường
// Loại bỏ dấu câu, ký tự đặc biệt (thay bằng space) để so khớp từ đứng riêng
// Thêm ký tự khoảng trắng ở đâu và cuỗi chuỗi, tương tự với key để so khớp từ riêng ở đầu và cuối chuỗi
// Tìm chỉ mục trong chuỗi đã biến đổi, nếu có thì cắt trong chuỗi gốc
// Tìm câu đầu tiên bằng cách tìm dấu kết thúc câu trước và sau