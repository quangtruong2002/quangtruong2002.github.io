// let today = new Date();
// let day = today.getDay();
// let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Satuday" ];
// console.log("Today is :" + dayList[day] + ".");
// let hours = today.getHours();
// let minute = today.getMinutes();
// let second = today.getSeconds();
// let perpand = (hours >= 12) ? hours = "PM" : "AM";
// hours =  (hours >= 12) ? hours - 12 : hours ;
// if(perpand === "PM" && hours === 0) {
    
// }

// let a = 1,
//  b = !a;
//  let c = (!a && !!b) || 0
//  console.log (b)
//  console.log(c)
//  console.log(a && b && c)
//  console.log(a || b || c);
//  console.log((a && !b) || !! c );
//  console.log(! (a || !b) && c);
//  console.log(!!(a && !!b) || !c);
 
// let a = 0, 
//     b = !!a
// let c = a || (!b && 0);
// console.log()

// for (let k in iPhone7) {
//     // brand: Apple, k = "brand", iPhone7[k]
//     console.log(k, iPhone7[k]);
// }

let salaries = {
    anna: 100,
    phoebe: 420,
    ba: 15,
    beo: 50,
    bob: 150,
    harry: 250,
};

// Bài 1. Tính tổng giá trị 
let i = 0;
for(let k in salaries) {
    i += salaries[k];
    
}
console.log(i)


// Bài 2. Tìm ng có lương cao nhất
let max = -Infinity; 
for(let k in salaries) {
    if (salaries[k] > max){
        max = salaries[k]
    }
}
console.log(max)


// Bài 3. Tính trung bình cộng lương
let a = 0;
let b = 0;
for(let k in salaries) {
    a += salaries[k]
    b++
}
console.log(a/b)


// Bài 4. Biến đổi các số trong đối tượng thành tiền Việt Nam (số * 23000)
// let c = 0;
// for(let k in salaries) {
//     c = salaries[k] * 23000;
//     salaries[k] = c
//     salaries[k] *= 23000
// }

// Bài 5. Thêm một giá trị mới tương ứng với số lượng ng trong đối tượng
// let leng = 0;
// for(let k in salaries) {
//     salaries.length = leng ++
// }
let count = 0;
for (let k in salaries) count++;
salaries.length = count;
function greatting() {
    console.log("hello word");
    console.log('well come to Programing');
}

function isPrime(number) {
    if(number == 2) {
        true
    }
    else if(number < 2) {
        false
    }
    for(i = 0; i < number.length; i++) {
        if(number%i === 0 ){
            return false
        }
        
    }
      return  true
    
}

// function run(datas){
// 	let num = 0;
// 	for (val of datas) {
// 		   num += val
// 	} 
// 	console.log(num);
// }
// run([1,2,3,4])

// function runt(dataa){
//     num = [];
// 	for (i = 0; i <= dataa.length; i++) {
// 		if (dataa[i] % 4 != 0 ) {
// 			num.push(dataa[i]);
// 		}
// 		if (dataa[i] % 4 == 0 && dataa[i] % 3 == 0) {
// 			break
// 		}
// 	} 
// 		console.log(num);
// }
// runt([1,4,6,12,9,8,5,3])


// function run(str_input ) {
// 	return str_input.split("").reverse("").join("");  
// }
// let t = run("method");
// console.log(t)
let profile = {
        age: 100
	};
function run(name, year_of_birth) {
	var d = new Date();
	var current_year = d.getFullYear();
	// define a object 

	// Calculate age
	let years_old = current_year - year_of_birth;
    console.log(years_old)
	
	// console.log(); // print object
	// console.log(... + " is " + ... + " years old");
}
run("linh", 2020)


// const object1 = {
//   a: 'somestring',
//   b: 42
// };

// for (let [key, value] of Object.entries(object1)) {
//   console.log(key + value);
// }


// function run() {
// 	var data = { a: 'x', b: 'y'};
// 	 let x = object.entries(data);
// 	 for( let k in x) {
// 		 console.log(k, x)
// 	 }
// }

// function run() {
// 	var person  = {
// 		firstName:"Trung",
// 		lastName:"Vuong",
// 		age:50,
// 		eyeColor:"blue"
// 	};
// 	console.log(Object.keys(person)) ;
// }
function run(data) {
    for (i = 0; i <= data.length; i++){
	var s = data.some((data) => data[i] + 1 ==  ? true:false);
    }
	if (s) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}
run([1,2,3])