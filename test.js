describe("Kiểm tra hàm isPrime() với các số dương", function () {
    it("isPrime(0)", function () {
        assert.equal(isPrime(0), false);
    });

    it("isPrime(1)", function () {
        assert.equal(isPrime(1), false);
    });

    it("isPrime(2)", function () {
        assert.equal(isPrime(2), true);
    });

    it("isPrime(3)", function () {
        assert.equal(isPrime(3), true);
    });

    it("isPrime(13)", function () {
        assert.equal(isPrime(13), true);
    });

    it("isPrime(17)", function () {
        assert.equal(isPrime(17), true);
    });

    it("isPrime(100)", function () {
        assert.equal(isPrime(100), false);
    });

    it("isPrime(101)", function () {
        assert.equal(isPrime(101), true);
    });
});

describe("Kiểm tra hàm isPrime() với các số âm", function () {
    it("isPrime(-1)", function () {
        assert.equal(isPrime(-1), false);
    });

    it("isPrime(-2)", function () {
        assert.equal(isPrime(-2), false);
    });
});


describe("Kiểm tra hàm sumOddNumber(a, b)", function () {
    it("sumOddNumber(1, 10)", function () {
        assert.equal(sumOddNumber(1, 10), 25);
    });

    it("sumOddNumber(4, 5)", function () {
        assert.equal(sumOddNumber(4, 5), 5);
    });

    it("sumOddNumber(10, 10)", function () {
        assert.equal(sumOddNumber(10, 10), 0);
    });

    it("sumOddNumber(10, 5)", function () {
        assert.equal(sumOddNumber(10, 5), 21);
    });

});
 // 1 3 5 7 9

 describe("viết hàm sumDivisor(n)", function () {
    it("sumDivison(6)", function () {
        assert.equal(sumDivisor(6), 6);
    });
    
    it("sumDivison(10)", function () {
        assert.equal(sumDivisor(10), 8);
    });

    it("sumDivison(15)", function () {
        assert.equal(sumDivisor(15), 9);
    });

    it("sumDivison(-1)", function () {
        assert.equal(sumDivisor(-1), 0);
    });

    it("sumDivison(20)", function () {
        assert.equal(sumDivisor(20), 22);
    });

});


describe("viết hàm isLeasYear(year)", function () {
    it("viết hàm isLeasYear(2000)", function () {
        assert.equal(isLeasYear(2000), true);
    });
    it("viết hàm isLeasYear(2100)", function () {
        assert.equal(isLeasYear(2100), false);
    });

    it("viết hàm isLeasYear(2008)", function () {
        assert.equal(isLeasYear(2008), true);
    });

    it("viết hàm isLeasYear(2400)", function () {
        assert.equal(isLeasYear(2400), true);
    });

    it("viết hàm isLeasYear(2001)", function () {
        assert.equal(isLeasYear(2001), false);
    });
    it("viết hàm isLeasYear(2012)", function () {
        assert.equal(isLeasYear(2012), true);
    });
    it("viết hàm isLeasYear(2440)", function () {
        assert.equal(isLeasYear(2440), true);
    });
});