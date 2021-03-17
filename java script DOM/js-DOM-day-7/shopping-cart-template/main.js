function randomId() {
    return Math.floor(Math.random() * 100000)
}

//Mokup danh sách sản phẩm 
let products = [
    {
        id :  randomId(),
        name: 'BASIC TEE - ANANAS CROPPED SYMBOL - BUNGEE CORD',
        description: 'Áo thun trơn, ngắn tay, cổ tròn cùng họa tiết Ananas Cropped Symbol in trên ngực áo. Phom dáng cổ điển và linh hoạt, thích hợp cho cả Nam và Nữ.',
        price: '269000',
        count: 2,
        image: 'https://ananas.vn/wp-content/uploads/pro_basictee_ABT00011_1-1.jpg',
    },
    {
        id:  randomId(),
        name:'GRAPHIC TEE - LUCKY LUKE TYPO - CHILI PEPPER',
        description: 'Những chiếc áo Ananas Graphic Tee có phom dáng thoải mái, rộng linh hoạt được kết hợp cùng hoạ tiết lấy cảm hứng từ bộ truyện tuổi thơ Lucky Luke. Đây sẽ là một mảnh ghép cho những outfit thú vị, dù đủ bộ hay mặc riêng lẻ vẫn khẳng định cá tính riêng biệt, ghi dấu ấn cho lần hợp tác quốc tế đầu tiên của Ananas.',
        price: '350000',
        count: 1,
        image: 'https://ananas.vn/wp-content/uploads/AGT0018_1.jpg',
    },
    {
        id:  randomId(),
        name: 'BASIC TEE - ANANAS TYPO - WHITE ASPARAGUS',
        description: 'Áo thun trơn, ngắn tay, cổ tròn cùng họa tiết Ananas Typo in ở gấu áo. Phom dáng cổ điển và linh hoạt, thích hợp cho cả Nam và Nữ.',
        price: '249000',
        count: 1,
        image: 'https://ananas.vn/wp-content/uploads/pro_basictee_ABT00003_1.jpg',
    }
]

// danh sách mã giảm giá
let promotionCode = {
    A: 10,
    B: 20,
    C: 30,
    D: 40, 
}
// truy cập vào các thành phần 

let productEl = document.querySelector('.products')
let countEl = document.querySelector('.count')

let subtotalEl = document.querySelector('.subtotal span')
let vatEl = document.querySelector('.vat span')
let totalEl = document.querySelector('.total span')

let inputPromoCode = document. querySelector('#promo-code')
let discount = document.querySelector('.discount')
let discountEl = document.querySelector('.discount span')


// Hiển thị ra ngoài giao diện
function renderProduct(arr) {
    productEl.innerHTML = '';

 // cập nhật số lượng sản phẩm
 countEl.innerText = `${updadeTotalProduct(arr)} item in the bag`

 // cập nhật số tiền
 updateTotalMoney(arr)

 // kiểm tra số lượng sản phẩm có hay không ?
 if(arr.length == 0) {
     document.querySelector('.option-container').classList.add('hide')
     productEl.insertAdjacentHTML('afterbegin', '<li>không có sản phẩm nào trong giỏ hàng</li>')
 }



 // hiển thị ra ngoài giao diện
    for (let i = 0; i < arr.length; i++ ) {
        let p = arr[i];
        productEl.innerHTML += `
        <ul class="products">
				<li class="row">
					<div class="col left">
						<div class="thumbnail">
							<a href="#">
								<img src="${p.image}" alt="${p.name}" />
							</a>
						</div>
						<div class="detail">
							<div class="name"><a href="#">${p.name}</a></div>
							<div class="description">
								${p.description}
							</div>
							<div class="price">${convertMoney(p.price)}</div>
						</div>
					</div>

					<div class="col right">
						<div class="quantity">

							<input type="number"
                            class="quantity"
                            step="1"
                            value="${p.count}"
                            onchange="updateCountProduct(${p.id}, event)" />
						</div>

						<div class="remove" onclick="deleteProduct(${p.id})">
							<span class="close"><i class="fa fa-times" aria-hidden="true"></i></span>
						</div>
					</div>
				</li>
			</ul>`
    }
}
function updadeTotalProduct(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].count;

    }
    return sum;
}

//cập nhật tổng số tiền
function updateTotalMoney(arr) {
    let subtotal = 0
    let discountMoney = 0
    // tổng tiền dơn hàng 
    for (let i = 0; i < arr.length; i++) {
        
        subtotal += (arr[i].count * arr[i].price)
    }

    let data = checkPromotionCode()
    if(data.status) {
        discountMoney = subtotal * data.value / 100;
        discount.classList.remove('hide')

    }
    else {
        discount.classList.add('hide')
    }
    // hiển thị giao diện 
    subtotalEl.innerHTML = convertMoney(subtotal)
    vatEl.innerHTML = convertMoney(subtotal * 0.1)
    totalEl.innerHTML = convertMoney(subtotal * 1.1 - discountMoney)
    discountEl.innerText = convertMoney(discountMoney);
}
function convertMoney(num) {
    return num.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

//xóa sản phẩm 
function deleteProduct(id) {
    for(i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i,1)
        }
    }
    renderProduct(products)
}

// cập nhật số lượng sản phẩm
function updateCountProduct(id, e) {
    console.log(id, Number(e.target.value))
    for(i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].count =  Number(e.target.value)
        }
    }
    renderProduct(products)
} 
//kiểm tra mã giảm giá hợp lệ hay không
function checkPromotionCode() {
    let code = inputPromoCode.value;
    if(promotionCode[code]) {
        return { status: true, value: promotionCode[code] }
    }
    else {
        return { status: false, value: 0}
    }
}

document
.querySelector('.promotion button')
.addEventListener('click', function() {
    checkPromotionCode()
    updateTotalMoney(products)
})
window.onload = renderProduct(products)