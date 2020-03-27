const shop = {
    showcase: [
        { id: 0, name: "Portakal", price: 4, amount: 1, total: 4 },
        { id: 1, name: "Elma", price: 3, amount: 1, total: 3 },
        { id: 2, name: "Havuc", price: 3, amount: 1, total: 3 },
        { id: 3, name: "Limon", price: 4, amount: 1, total: 4 },
        { id: 4, name: "Brokoli", price: 5, amount: 1, total: 5 },
        { id: 5, name: "Kiraz", price: 6, amount: 1, total: 6 },
        { id: 6, name: "Sogan", price: 3, amount: 1, total: 3 }
    ],
    cart: []
}

showcaseFill();

getClickedProduct();

deleteProduct();