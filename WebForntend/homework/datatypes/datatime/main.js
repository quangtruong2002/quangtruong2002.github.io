// JavaScript Datetime Exercises
// Bài 1
// Viết hàm printDateTime(year, month, day, hour, min, sec) in ra console ngày tháng và thời gian tương ứng

// 💡 VD: printDateTime(2021, 7, 15, 9, 25, 30)

// Date: Sun Aug 15 2021
// Time: 9:25:30 AM
// 💡 Lưu ý month có giá trị 0 - 11


function printDateTime(year, month, day, hour, min, sec) {
    let event = new Date(year, month, day);
    console.log(`Date: ${event.toDateString()}`);

    for (let i = 0; i <= 24; i++) {

        if (i < 12 && i == hour) {
            if (hour < 10) hour = '0' + hour;
            if (min < 10) min = '0' + min;
            if (sec < 10) sec = '0' + sec;
            console.log(`Time: ${hour}:${min}:${sec} AM`);
            return;
        }

        else if (i > 12 && i == hour) {
            if (hour < 10) hour = '0' + hour;
            if (min < 10) min = '0' + min;
            if (sec < 10) sec = '0' + sec;
            console.log(`Time: ${hour}:${min}:${sec} PM`);
        }
    }
}
printDateTime(2021, 1, 1, 9, 25, 30);

// Bài 2
// Viết hàm formatDate() in ra ngày tháng hiện tại theo định dạng Thứ ..., ngày/tháng/năm (format 2 chữ số)

// 💡 VD: formatDate() => Chủ Nhật, 15/08/2021

// 💡 Có thể sử dụng date.toLocaleString hoặc date.toLocaleDateString

function formatDate(year, month, day) {
    let event = new Date(year, month, day);
    console.log(new Date + "," + " " + event.toLocaleDateString());
    console.log(event.toLocaleString());

};
formatDate(2021, 8, 15);

// Bài 3
// Viết hàm diff(date1, date2) tính và trả về khoảng thời gian chênh lệnh (tính theo giờ) giữa 2 giá trị datetime

// 💡 VD

// const date1 = new Date(2021, 7, 16, 10, 0, 0); // 16/08/2021 10:00:00
// const date2 = new Date(2021, 7, 15, 23, 0, 0); // 15/08/2021 23:00:00

// diff(date1, date2) => 11

function diff(date1, date2) {
    let sub;
    if (date1 > date2) sub = date1 - date2; // 39.600.000 milliseconds
    else if (date1 < date2) sub = date2 - date1; // 39.600.000 milliseconds
    else return false;

    let hour = sub / 3600 / 1000;
    console.log(hour);
}
diff(new Date(2021, 7, 16, 10, 0, 0), new Date(2021, 7, 15, 23, 0, 0)); // => 11 hour 

// Bài 4
// Viết hàm countdown() tính và trả về số ngày tính đến tết dương lịch năm sau

// phương thức GetTime() được xác định theo universal time. là số mili giây

function countdown() {

    let nextYear = new Date('Jan, 1, 2022').getTime();
    let now = new Date().getTime();

    let countDown = nextYear - now;
    let day = Math.floor(countDown / (1000 * 3600 * 24)); // lấy time / (1000 * 1 tiếng * 1 ngày '24');
    return day;
};
console.log('từ giờ đến tết dương lịch còn ' + countdown() + ' ngày');



// Bài 5
// Viết hàm calcAge(birthday):

// Chuyển đổi chuỗi birthday thành giá trị datetime
// Tính tuổi theo birthday (chú ý tính chính xác theo ngày) và trả về kết quả

// gợi ý sử dụng hàm getFullYear để trả về số năm 

function calcAge(birthday) {
    let today = new Date();
    let birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
}
console.log(`age: ${calcAge("9/8/2002")}`);

// Bài 6
// Viết hàm nextBirthday(birthday):

// Chuyển đổi birthday thành giá trị datetime
// Tính và trả về số ngày tính đến ngày sinh nhật sang năm
// 💡 Chú ý ngày đặc biệt như 29-2 thì cho sinh nhật là 28-2 nếu không phải năm nhuận

// function nextBirthday(birthday) {
//     let today = new Date();

//     let nextYear = today.getFullYear() + 1;
//     let year = today.getFullYear();
//     let birthDate = new Date(`9/8/ ${year}`).getTime();
//     let nextBirthDate = new Date(`9/8/${nextYear}`).getTime();
//     let sub = nextBirthDate - birthDate; 
//     let day = Math.floor(sub / (1000 * 3600 * 24));
//     return day;
// }
// console.log(`age: ${nextBirthday()}`);
