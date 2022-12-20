const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calculate');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calculatePriceWithDiscount);

function calculatePriceWithDiscount() {
    //(price * (100 - discount)) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);   
    const newPrice = (price * (100 - discount)) / 100

    if(!price && !discount) {
        pResult.textContent = 'You have to fill the price and discount'
    }

    pResult.textContent = 'The new price with discount is: $' + newPrice;  
} 