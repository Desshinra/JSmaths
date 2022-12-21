const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calculate');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calculatePriceWithDiscount);

const couponsList = [];

couponsList.push({
    name: 'desshinraImprovesAllOfDaysOfHistory',
    discount: 6793204.01,
});
couponsList.push({
    name: '*fiufifufiu*',
    discount: 25,
});
couponsList.push({
    name: 'taltraGTQ',
    discount: 50,
});
couponsList.push({
    name: 'Kiwi_blanco',
    discount: 45,
});

function calculatePriceWithDiscount() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price && !coupon) {
        pResult.textContent = 'You have to fill the price and discount'
        return;
    }

    let discount = 0;

    function isCouponInArray(couponElement) {//name, discount
        return couponElement.name == coupon;
    }

    const couponInArray = couponsList.find(isCouponInArray); // [{}] With .filter search in array form but if you use .find will be in the form of an object

     if(couponInArray) { //If i use .filter needs something like this 'couponInArray.length > 0.'
         discount = couponInArray.discount //If i use .filter i needs use a index like this 'couponInArray[0]'
     } else {
         pResult.textContent = 'Your coupon is invalid'
         return;
     }

    const newPrice = (price * (100 - discount)) / 100

    pResult.textContent = 'The new price with discount is: $' + newPrice;
}
