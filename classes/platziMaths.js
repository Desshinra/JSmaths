function isPair(list) {

}

// for(let i = 1; i <= 100; i++) {
//     if(i % 2 == 0) {
//         console.log(`${i} is pair`);
//     } else {
//         console.log(`${i} is odd`);
//     }
// }
function calculteAverage(list) {
    const plusAllElementsReduced = list.reduce((accumulatedValue, newValue) => accumulatedValue + newValue);
    const average = plusAllElementsReduced / list.length;
    
    console.log(average);
    return average;
}


const calculateMode = list => {
    const countList = {};

    for (let i = 0; i < list.length; i++) {
        const element = list[i];

        if(countList[element]) {
            countList[element] += 1;
        } else {
            countList[element] = 1;
        }
        
    }
    
    const arrayList = Object.entries(countList);
    const orderList = orderedBidimensionalList(arrayList, 1);
    const orderListMaxNumber = orderList[orderList.length - 1]
    // console.log({countList, arrayList, orderList, orderListMaxNumber});
    const mode = orderListMaxNumber[0];
    return mode;
}


const orderedList = unorderedList => {
    const list = unorderedList.sort((accumulatedValue, newValue) => accumulatedValue - newValue);
    return list;
}


const orderedBidimensionalList = (unorderedBidimensionalList, i) => {
    const list = unorderedBidimensionalList.sort((accumulatedValue, newValue) => accumulatedValue[i] - newValue[i]);
    return list;
}