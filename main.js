const price1 = 120
const price2 = 120
const price3 = 120

function sum(a, b, c){
    return a + b + c;
};

const tot = sum(price1, price2, price3)
document.getElementById('price1').innerHTML = price1 + '€'
document.getElementById('price2').innerHTML = price1 + '€'
document.getElementById('price3').innerHTML = price1+ '€'
document.getElementById('tot').innerHTML = tot + '€'