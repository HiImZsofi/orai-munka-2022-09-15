

const list = [];

export function hozzaad(x){
    if(x < 0){
        console.log("Hibás adat")
    }
    else{
        list.push(x)
    }
}

export function atlag(){
    const average = list => list.reduce((a,b) => a + b, 0) / list.length
    return average
}