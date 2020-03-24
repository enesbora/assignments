/* Listelere meyve ve sebze dolduran fonksiyon */

function fruitFill(pArray, id) {

    let showcaseList = document.querySelector(id);

    showcaseList.innerHTML = "";

    pArray.forEach(item => {

        let li = document.createElement("li");

        let liText = document.createTextNode(item);

        li.appendChild(liText);

        showcaseList.appendChild(li);
    });
};

/* Vitrinde üzerine tiklanan meyve veya sebzeyi alisveris sepetine gönderen fonksiyon*/
function addToCart(pShowcase, pCart) {

    let showcaseList = document.querySelectorAll("#showcase li");

    console.log(showcaseList.item(2));

    for (let i = 0; i < showcaseList.length; i++) {

        showcaseList[i].addEventListener("click", function() {

            let showcaseListItem = showcaseList[i].innerText;

            let index = pShowcase.indexOf(showcaseListItem);

            pShowcase.splice(index, 1);

            showcaseList[i].remove();

            pCart.push(showcaseListItem);

            pCart.sort();

            fruitFill(pCart, "#cart");
        });
    }
}