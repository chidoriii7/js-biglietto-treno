// viaggio in km

const lunghezzaviaggio = parseFloat(prompt('Quanti km devi viaggiare?'))
console.log(lunghezzaviaggio)

// età 

const eta = parseInt(prompt('Quanti anni hai?'))
console.log(eta)

//prezzo base

const prezzobase = lunghezzaviaggio * 0.21
console.log(prezzobase)

//sconto
let sconto = 0
// <18 anni

if(eta < 18) {
    sconto = prezzobase * 0.2
} else if (eta > 65) {
    // 65 anni > 
    sconto = prezzobase * 0.4
}

const prezzototale = prezzobase - sconto
console.log (prezzototale.toFixed(2))
console.log (prezzototale)

 