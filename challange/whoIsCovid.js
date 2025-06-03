/**
 * 
 * Who is covid
 * find who is covid
 * parameters:
 * body temperature is more than 36 = Covid
 * body temperature is equal to 36 = Healthy
 * body temperature is less than 30 = Hiportemia
 * 
 */

let visitors = ['Cakra-38','Angel-36.5','Putri-39','Mama-36.3','Sultan-20'];

let covidPasients = [];
let healthyMan = [];
let hiportemiaPasients = [];

function diseaseChecker (visitors) {

    let visitorName = "";
    let visitorTemp = "";
    let temporaryContainer = "";

    // mengambil tiap data dalam array
    for (let i = 0; i < visitors.length; i++) {
        let visitorData = visitors[i];
    
        // mengambil tiap karakter dari data didalam array
        for (let j = 0; j < visitorData.length; j++) {

            //memisahkan antara nama dan suhu pada data
            if(visitorData[j] === "-") {
                visitorName = temporaryContainer;
                temporaryContainer = "";
            } else if (j === visitorData.length-1) {
                temporaryContainer += visitorData[j];
                visitorTemp = temporaryContainer;
                temporaryContainer = "";

                //pengkondisian untuk menentukan jenis penyakit
                if (Number(visitorTemp) > 37) {
                    covidPasients.push(visitorName);
                    visitorName = "";
                } else if (Number(visitorTemp) > 36 && Number(visitorTemp) <= 37 ) {
                    healthyMan.push(visitorName);
                    visitorName = "";
                } else if (Number(visitorTemp) < 30) {
                    hiportemiaPasients.push(visitorName);
                    visitorName = "";
                }
            } else {
                temporaryContainer += visitorData[j]
            };
        };
    };
};

diseaseChecker(visitors)
console.log(`covidPasients: ${covidPasients}, healthyMan: ${healthyMan}, hiportemiaPasients: ${hiportemiaPasients}`)