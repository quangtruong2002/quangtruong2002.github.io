
let p = document.querySelector(".abc");
let b = document.createElement("b");
b.textContent = "Ba"; // <b>Ba</b>

let firstText = document.createTextNode("Xin chào các bạn, mình là ");

p.append(firstText, b);

// Tạo 1 textnode và 1 elementnode
// Giới thiệu quê quán
let text1 = document.createTextNode("hi mình đến từ");
let text2 = document.createElement("i");
text2.textContent = "Hải Phòng";
p.append(text1, text2);
text1.textContent = "hí anh em";


// Tạo ra 1 element div
let div = document.createElement("div");

// Thêm style cho div width = 200px
 div.classList.add("style");
p.after(div);

// height = 200px

// background tùy ý







// Tạo 1 image element

// Thêm đường dẫn đến ảnh bất kỳ, thêm alt

// Rồi thêm vào trang


