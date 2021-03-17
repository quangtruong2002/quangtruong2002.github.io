let monthEle = document.querySelector('.month')
let yearEle = document.querySelector('.year')
let btnNext = document.querySelector('.btn-next')
let btnPrev = document.querySelector('.btn-prev')
let dateContainer = document.querySelector('.date-container')

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();



console.log(currentMonth, currentYear)

function displayInfo() {
    //hiển thị tên tháng
    let currentMonthName = new Date( currentYear, currentMonth).toLocaleString("en-us", { month: "long" });
    monthEle.innerText = currentMonthName
    //hiển thị năm 
    yearEle.innerText = currentYear

    //hiển thị ngày
    renderDate();

    //hiển thị ngày bắt đầu của tháng

    //Active ngày hiện tại

}

//active current Days
function activeCurrentDay(day) {
    let day1 = new Date().toDateString
    let day2 = new Date(currentYear, currentMonth, day).toDateString();
    return day1  == day2 ? "active" : ""
}

//lấy só ngày của một tháng
function getDaysInMonth() {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
}

//lấy ngày bắt đầu của 1 tháng
function getStartDaysInMonth() {
    return new Date(currentYear, currentMonth, 1).getDay();
}

//render ngày lên UI
function renderDate() {
    let daysInMonth = getDaysInMonth()
    let startDay = getStartDaysInMonth();

    dateContainer.innerHTML = '';

    for(let i = 0; i < startDay; i++) {
        dateContainer.innerHTML += `
        <div class = "day"></div>
        `;
    }


    for(let i = 0; i < daysInMonth; i++) {
        dateContainer.innerHTML += `
        <div class = "day ${activeCurrentDay(i + 1)}">${i + 1}</div>
        `;
    }
}

btnNext.addEventListener('click', function() {
    if(currentMonth == 11) {
      currentYear++
      currentMonth = 0
    }
    else {
        currentMonth++
    }
    displayInfo()
})

btnPrev.addEventListener('click', function() {
    if(currentMonth == 0) {
        currentYear--
        currentMonth = 11
    }
    else {
        currentMonth--
    }
    displayInfo()
})
window.onload = displayInfo