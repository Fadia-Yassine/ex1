//ex1
function addition(nombre) {
    console.log(nombre+nombre);
}
//ex2
function soustraction(nombre) {
    console.log(nombre-nombre);
}
//ex3
function multiplication(nombre) {
    console.log(nombre*nombre);
}
//ex4
function division(nombre) {
    console.log(nombre/nombre);
}
//ex5
function modulo(nombre) {
    let reste=nombre%nombre;
    console.log(reste);
}
//ex6
function racine(nombre) {
    console.log(math.sqrt(nombre));
}
//ex7
function exposant(nombre) {
    console.log(nombre+Math.pow(nombre));
}
//ex8
function capitalize(mot) {
    return mot.ChartAt(0).toUpperCase()+ mot.substring(1).toLowerCase();
}
console.log(capitalize('BonJoour'));
//ex9
function calcul(nombre1, operation, nombre2) {
    switch(true){
        case operation === "+":
            return nombre1+nombre2;
            break;
        case operation === "-":
            return nombre1-nombre2;
            break;
        case operation === "*":
            return nombre1*nombre2;
            break;
        case operation === "/":
            return nombre1/nombre2;
            break;
        default:
            alert("Faux");
            break;
    }
}