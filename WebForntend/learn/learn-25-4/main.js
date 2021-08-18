let n = 5;
function run(n) {
	var factorial = 1;
	if (n >= 1 && n <= 20) {
		for (i = 1; i <= n; i++) {
			  i *= factorial;
		}
	}
	console.log(factorial);
}
function run(){
	var person = {
		name: "Tuan Phong",
		age: 1,
		addr: "Ha Noi",
		is_boy: true
	};
	for (let k in person) {
		sonsole.log(preson[k])
	}
}

