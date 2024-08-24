/*C-TASK
Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin,
hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. 
Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); 
shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
 shop.sotish('non', 3) & shop.qabul('cola', 4) & 
 shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud*/

//Answer
 const moment = require ('moment');
let now = moment().format('h:mm');
 class Shop {
    non;
    lagmon;
    cola;



    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon =lagmon;
        this.cola = cola;
    }
    qoldiq() {
        console.log(`hozir ${now}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud`)
    }

    sotish(product, miqdor) {
        if(this[product] !== undefined && this[product]>= miqdor) {
            this[product] -= miqdor;
            console.log(`hozir ${now}da ${miqdor}ta ${product} sotildi va dokonda ${this[product]}ta qoldi`)
        }else{
            console.log(`hozir ${now} zahirada sotib olish uchun  ${product} yetarli emas.`)
        }
    }

    qabul(product, miqdor) {
        this[product]+= miqdor;
        console.log(`Hozir ${now}da ${miqdor}ta ${product} sotib olindi va dokonda ${this[product]}ta boldi`)
    }
}

const Shop1 = new Shop(4, 5, 2);
Shop1.qoldiq();
Shop1.sotish("non", 3);
Shop1.qabul('cola', 4)
Shop1.qoldiq();
/*B-TASK*/

//Answer
// const countNumber = (anyword) => {
//     let count = 0;
//     const number = []
//     for(let i = 0; i < anyword.length; i++){
//         if( Number(anyword[i]) || parseInt(anyword[i]) === 0) {
//             count++;
//             number.push(anyword[i])
//         }
//     }
//     console.log(`Count of numbers in ${anyword}  equals to =>  ${count}`);
//     console.log('Numbers inside given string are:', number);
// }

// countNumber( "ad2a54y79wet0sfgb9");


//MITASK

/*A-TASK
Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.*/

//Answer:
// const countLetter = (letter, word) => {
//     let count = 0;
//     for(let i = 0; i < word.length; i++){
//         if(letter === word[i]) {
//             count++;
//         }
//     }
//     console.log(`Count of ${word} inside ${letter}  equals to =>  ${count}`)
// }

// countLetter("e", "engineer");







// console.log(" Jaack Maa maaslahatlari");
// const list = [
//     "yaxshi talaba boling", //8~20    
//     "togri boshliq tanlang va koproq hato qiling", //20~30
//     "ozingizga ishlashni boshlang", //3-~40
//     "siz kuchli bolgan ishlarni qiling", //40~50
//     "yoshlarga investitsiya qiling", // 50~60
//     "endi dam oling", // 60~
// ];

// Callback function
// function maslahatBering (a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);    
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(() => {
//             callback(null, list[5])    
//         }, 5000);
//         };
// }


// console.log('passes here 0');
// maslahatBering(65, (err, data) => {
//     if (err) console.log('ERROR', error);    
//     console.log('javob:', data)
// });
// console.log('passes here 1');


//Asynchronous functions
// async function maslahatBering (a) {
//     if(typeof a !== 'number') throw new Error("insert a number");    
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {return list[6];
//         // setTimeout(() => {
//         //     return list[6];    
//         // }, 5000);
//         };

// }

//then/catch
// console.log('passes here 0');
// maslahatBering(25).then(data => {
//     console.log("javob:", data);    
// }).catch (err => {
//     console.log("ERROR:", err);    
// });
// console.log('passes here 1');


// //async/await
// async function run() {
//     let javob = await maslahatBering(20);    
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

//Promise function(briefly)
// async function maslahatBering (a) {
//     if(typeof a !== 'number') throw new Error("insert a number");    
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             // setInterval(() => {
//             //     resolve(list[5]);    
//             // }, 1000);
//             // setTimeout(() => {
//             //     resolve(list[5]);    
//             // }, 5000);
//         })
//         };

// }

// async/await
// async function run() {
//     let javob = await maslahatBering(20);    
//     console.log(javob);
//     javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

//example for setInterval
// async function run() {
//     let javob = await maslahatBering(66);    
//     console.log(javob);
// }
// run();


