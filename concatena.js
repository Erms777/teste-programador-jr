//numeros A e B
const a = 25;
const b = 125;

aString = a.toString();
bString = b.toString();

//Verifica o length
let aMaior = aString.length > bString.length;
let bMaior = aString.length < bString.length;
let iguais = aString.length === bString.length;



if (aMaior) {
    controle = bString.length;
    corteString = aString.slice(bString.length, aString.length);

} else if (bMaior) {
    controle = aString.length;
    corteString = bString.slice(aString.length, bString.length);

} else {
    controle = aString.length;
}

// Loop para montar.
let o = 0
let c = ""


for (i = 0; i <= controle; i++) {
    c = c + aString.slice(o, o + 1);
    c = c + bString.slice(o, o + 1);
    o = o + 1;
}


c = parseInt(c)

if (c > 1000000) {
    c = -1;
}
console.log(c)