let n = 5;
function run(n) {
	var factorial = 1;
	if (n >= 1 && n <= 20) {
		for (i = 1; i <= n; i++) {
			factorial *= i;
		}
	}
	console.log(factorial);

}