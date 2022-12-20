console.group('CUADRADO') 

const ladoCuadrado = 5;
const areaCuadrado = ladoCuadrado * ladoCuadrado;
const perimetroCuadrado = ladoCuadrado * 4;
console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

//FUNCTIOOOOOOOOOOOOOONS
function calcularCuadrado(side) {
    return {    
        perimetro: side * 4,
        area: side * side
    };
}

console.groupEnd('CUADRADO')
console.group('TRIANGULO') 

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 6;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;
console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
});

function calcularTriangulo(side1, side2, base, height) {
    return {    
        perimetro: side1 + side2 + base,
        area: (base * height) / 2
    };
}

console.groupEnd('TRIANGULO')
console.group('CIRCULO')

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1416;
const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
});

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI
    }
}

console.groupEnd('CIRCULO')

console.group('CHALLENGE')

function calcularAlturaTrianguloISO(lado1, base) {
    if (lado1 == base) {
        console.warn('Este no es un triangulo isósceles')
    } else {
        // h == raizCuandrada de ((lado1**2) - (b**2)/4)
        return altura = Math.sqrt(Math.pow(lado1, 2) - Math.pow(base, 2)/4)
    }
}

console.groupEnd('CHALLENGE')

//Challenge
// 16, 8, 10
function alturaEscaleno(base, b, c) {
    const semiPerimetro = (base + b + c) / 2;
    const area = Math.sqrt(semiPerimetro * (semiPerimetro - base) * (semiPerimetro - b) * (semiPerimetro - c));

    if (base != b && base != c && b != c) {
        return Math.round((2 * area) / base);

    } else {
        return false;
    }
}

let inputPrice = document.querySelector('.amount')
let inputDiscount = document.querySelector('.discount')
const calculate = document.querySelector('.calculatorBtn')
const total = document.querySelector('.total')


const discountCalculator = (event) => {
    console.log({event});
    event.preventDefault();
    
    const price = inputPrice.value;
    const discount = inputDiscount.value;
    const amountWithDiscount = price * (discount/100)
    
    
    total.innerHTML = `Your discount is: $${amountWithDiscount}`;
    
    
    return amountWithDiscount;
}

function togglePrice() {
    const isPriceDisble = total.classList.contains('inactive')
    if (isPriceDisble) {
            total.classList.remove('inactive')
        }
    }

calculate.addEventListener('click', discountCalculator);
calculate.addEventListener('click', togglePrice);

