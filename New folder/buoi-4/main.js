/

    // Bước 3 : Tìm max trong newArr
    let max2Number = findMax(newArr);
    return max2Number
}
console.log("Bài 2");
console.log(max2Numbers([2, 4, 1, 3, 4]));


// Bài 3. Viết function để lấy một phần tử ngẫu nhiên từ một mảng
// Ví dụ: randomElement([3, 7, 9, 11]) => 3
// Ví dụ: randomElement([3, 7, 9, 11]) => 9
function randomElement(arr) {
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}
console.log("Bài 3");
console.log(randomElement([3, 7, 9, 11]));


// Bài 4. Cho 1 mảng các chuỗi. Viết function lọc ra các phần tử có độ dài lớn nhất. 
// Ví dụ: findMaxLengthElement["aba", "aa", "ad", "c", "vcd"] => ["aba", "vcd"]
function findMaxLengthElement(arr) {
    // Bước 1. Tìm độ dài lớn nhất
    let max = arr[0].length;
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }

    // Bước 2 : So sánh => thêm vào mảng mới
    let newArr = [];
    for (let i = 0; i < arr.length; i = i + 1) {
        if(arr[i].length == max) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log("Bài 4");
console.log(findMaxLengthElement(["aba", "aa", "ad", "c", "vcd"]));


// Bài 5. Viết function để lấy một mảng bao gồm các phần tử xuất hiện trong cả hai mảng
// Ví dụ: similarity([1, 2, 3], [1, 2, 4]) => [1,2]
function similarity(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        // if(arr2.indexOf(arr1[i]) != -1) {
        //     newArr.push(arr1[i])
        // }

        if(arr2.includes(arr1[i])) {
            newArr.push(arr1[i])
        }
    }
    return newArr
}
console.log("Bài 5");
console.log(similarity([1, 2, 3], [1, 2, 4]));

// Bài 6. Viết function remove những phần tử bị trùng nhau trong mảng
// Ví dụ: removeDuplicates([1,2,5,2,6,2,5]) => [1,2,5,6]
function removeDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// Cách 2 :set - map
function removeDuplicates_2(arr) {
    // return Array.from(new Set(arr))
    return [...new Set(arr)]
}
// Cách 3
function removeDuplicates_1(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) == i) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log("Bài 6");
console.log(removeDuplicates([1,2,5,2,6,2,5]));
console.log(removeDuplicates_1([1,2,5,2,6,2,5]));
console.log(removeDuplicates_2([1,2,5,2,6,2,5]));

// Bài 7. Viết function để tạo mã màu HEX ngẫu nhiên.
// Ví dụ: randomHexCode() => #2ecc71
// Ví dụ: randomHexCode() => #8e44ad
function randomHexCode() {
    let letters = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    let hexCode = "#";
    for(let i = 0; i < 6; i++) {
        hexCode += letters[Math.floor(Math.random() * letters.length)]
    }
    return hexCode
}
console.log("Bài 7");
console.log(randomHexCode());

// Bài 8. Viết function để tạo mã màu RGB ngẫu nhiên.
// Ví dụ: randomRgbCode() => rgb(46, 204, 113)
// Ví dụ: randomRgbCode() => rgb(142, 68, 173)
function randomRgbCode() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}
console.log("Bài 8");
console.log(randomRgbCode());