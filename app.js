



let pregunta = prompt("Con que dolar queres hacer el calculo? \n1.Dolar Tarjeta (75%) \n2.Dolar Solidario (65%) \n3.Dolar Blue")

const dolarOfi = dolar => dolar * 139;
    
const impTarj = dolOfiT => dolOfiT * 0.75;

const impSol = dolOfiS => dolOfiS * 0.65;
    
const dolarFinal = (oficial,impuesto) => oficial + impuesto;

const dolarBlue = dolOfiB => dolOfiB  * 291;

function precioFinal () {

if ((pregunta == "1") || (pregunta == "Dolar Tarjeta") || (pregunta == "dolar tarjeta") || (pregunta == "Dolar tarjeta")|| (pregunta == "dolar Tarjeta")|| (pregunta == "DOLAR TARJETA")) {
        
let montoDolar= Number(prompt("Ingresa la cantidad de dolares")) ;

let valorFinalPesos = dolarFinal(dolarOfi(montoDolar),impTarj(dolarOfi(montoDolar)))
alert("Precio final $" + valorFinalPesos)

} else if ((pregunta =="2") || (pregunta == "Dolar Solidario") || (pregunta == "dolar solidario") || (pregunta == "Dolar solidario")|| (pregunta == "dolar Solidario")|| (pregunta == "DOLAR SOLIDARIO")) {
    let montoDolar= Number(prompt("Ingresa la cantidad de dolares")) ;

    let valorFinalPesos = dolarFinal (dolarOfi(montoDolar),impSol(dolarOfi(montoDolar)))
    alert("Precio final $" + valorFinalPesos)

} else if ((pregunta == "3") || (pregunta == "Dolar Blue") || (pregunta == "Dolar blue") || (pregunta == "dolar Blue") || (pregunta == "dolar blue") || (pregunta == "DOLAR BLUE")) {
    let montoDolar= Number(prompt("Ingresa la cantidad de dolares")) ;

    let valorFinalPesos = dolarBlue(montoDolar)
    alert("Precio final $" + valorFinalPesos)
}


} 
precioFinal ()




