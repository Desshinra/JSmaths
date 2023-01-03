const PlatziMath = {}

PlatziMath.Pair = function isPair(number) {
    if(number % 2 == 0 && number != 0) {
        return 'Is pair'
    }
}

PlatziMath.Odd = function isOdd(number) {
    if(number % 2 > 0 && number != 0) {
        return 'Is odd'
    }
}

PlatziMath.average = function calculteAverage(list) {
    const plusAllElementsReduced = list.reduce((accumulatedValue, newValue) => accumulatedValue + newValue);
    const average = plusAllElementsReduced / list.length;
    
    console.log(average);
    return average;
}

PlatziMath.median = function calculateMedian(unorderedList) {
    const lista = PlatziMath.ordered(unorderedList);
    const listaEsPar = PlatziMath.Pair(lista);
  
    if (listaEsPar) {
      const indexMitad1ListaPar = (lista.length / 2) - 1;
      const indexMitad2ListaPar = lista.length / 2;
      const listaMitades = [];
      listaMitades.push(lista[indexMitad1ListaPar]);
      listaMitades.push(lista[indexMitad2ListaPar]);
  
      const medianaListaPar = PlatziMath.average(listaMitades);
      return medianaListaPar;
    } else {
      const indexMitadListaImpar = Math.floor(lista.length / 2);
      const medianaListaImpar = lista[indexMitadListaImpar];
      console.log(indexMitadListaImpar);
      console.log(medianaListaImpar);
      return medianaListaImpar;
    }
  }

PlatziMath.mode = function calculateMode(list){
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

PlatziMath.ordered = function orderedList(unorderedList){
    const list = unorderedList.sort((accumulatedValue, newValue) => accumulatedValue - newValue);
    return list;
}

PlatziMath.bidimensional = function orderedBidimensionalList(unorderedBidimensionalList, i){
    const list = unorderedBidimensionalList.sort((accumulatedValue, newValue) => accumulatedValue[i] - newValue[i]);
    return list;
}