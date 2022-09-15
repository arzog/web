let tickets = [5.5,6,8.5,12,25]

function somme(){
    let result = 0

    tickets.forEach(ticket => {
        result += ticket
    })

    console.log("resutlat somme : " + result)
}

function addVal(){
    let tmp = Number(prompt("Enter number to add :"))
    tickets.push(tmp)
}

function boucle(){
    // add 10 val
    for(nbreBoucle = 1;nbreBoucle <=10; nbreBoucle++){
        addVal()
    }

    somme()
}

console.log("somme")
somme()

console.log("add value")
addVal()

console.log("boucle")
boucle()