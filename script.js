let lastName = "Tewogbola";

let ourArray = ['john', 1, 'tewogbola', true];

let func = (num) => 8 + num;

console.log(func(12)); 

let ourDog = {
    56: "camper",
    "le gs": 4, 
    "tails" : 1,
    "ok": true,
    "friends": ["everything"]
}

// let i = 0;

// while (i < 5){
//     ourArray.push(i);
//     i++;
// }
 
//  for (i = 0; i < 5; i++){
//     ourArray.push(i);
//  }

// do {
//     ourArray.push(i);
//     i++;
// } while( i < 5);

//


// let { 56 : babe, 'le gs': leg } = ourDog;

// console.log(babe);

let localForcast = {
    today :{ min : 72, max: 83},
    tomorrow: {min : 73.3, max : 84.5}
}

function getMaxOfTmrw(forecast) {
    let {tomorrow : {max : tomorowmax}, today : {min : todayMin}} = forecast;
    return [tomorowmax, todayMin];
}

let [max, min] = getMaxOfTmrw(localForcast);

//i add it myself   


console.log(min);
 

//aunthenticationPassword = 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z