/**
 * Bu fonksiyon ürünleri vitrine dolduruyor
 */
function showcaseFill() {

    let container = document.querySelector("#showcase");
    let products = shop.showcase.map(item => {
        return `<li id="${item.id}">${item.name}<span class="price">${item.price} chf<span></li>`;
    }).join('');
    container.innerHTML = products;
};


/**
 * Bu fonksiyon üzerine tiklanan ürünü getirip sepete dolduruyor
 */
function getClickedProduct() {

    let container = document.querySelector("#showcase");
    container.addEventListener("click", function(e) {
        let liId = e.target.id;
        let clickedLi;
        shop.showcase.forEach(item => {
            if (item.id == liId) {
                clickedLi = item;
            }
        });

        if (shop.cart.indexOf(clickedLi) == -1) {
            shop.cart.push(clickedLi);
        } else {
            clickedLi.amount++;
            clickedLi.total = clickedLi.amount * clickedLi.price;
        }

        cartFill();
    });
}

/**
 * Bu fonksiyon sepete doldurma fonksiyonu
 */
function cartFill() {

    let container = document.querySelector("#cart tbody");
    let products = shop.cart.map(item => {
        return `<tr><td>${item.name}</td><td>${item.amount}</td><td>${item.price} chf</td><td>${item.total} chf</td><td><span id="${item.id}" class="delete-cart">Sil<span></td></tr>`;
    }).join('');

    container.innerHTML = products;

    totalPrice();
};

/**
 * Bu fonksiyon toplam tutari hesaplayip yazdiriyor
 */
function totalPrice() {
    toplam = 0;
    shop.cart.forEach(item => {
        toplam = toplam + item.total;
    });

    document.querySelector("#total-price").innerHTML = toplam + " chf";
}

/**
 * Bu fonksiyon istenmeyen ürünü sepetten cikariyor.
 */
function deleteProduct() {

    let container = document.querySelector("#cart tbody");

    container.addEventListener("click", function(e) {

        if (e.target.className == "delete-cart") {

            let spanId = e.target.id;
            let productToDelete;
            shop.cart.forEach(item => {
                if (item.id == spanId) {
                    productToDelete = item;
                }
            });

            let index = shop.cart.indexOf(productToDelete);

            if (productToDelete.amount === 1) {
                shop.cart.splice(index, 1);
            } else {
                productToDelete.amount--;
                productToDelete.total = productToDelete.amount * productToDelete.price;
            }

            cartFill();
        }
    });
}