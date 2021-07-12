const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(n){
    let x = document.createElement("div");
    let texto = document.createTextNode(n);
    x.appendChild(texto)

    document.body.appendChild(x)
}


function kata1() {
    // implemente o código do kata 1 aqui
    let x = '';
    for(let i = 1; i <= 25; i++){
        if(i == 25){
            x += i
        }
        else{
            x += i + ', '
        }
    }
    showResults(x)
}

kata1()

function kata2() {
    // implemente o código do kata 2 aqui
    let x = '';
    for(let i = 25; i >= 1; i--){
        if(i == 1){
            x += i
        }
        else{
            x += i + ', '
        }
    }
    showResults(x)
   
}
kata2()

function kata3() {
    // implemente o código do kata 3 aqui
    let x = '';
    for(let i = 1; i <= 25; i++){
        if(i == 25){
            x += (i * -1);
        }
        else{
            x += (i * -1) + ', ';
        }
    }
    showResults(x)
   
}
kata3()

function kata4() {
    // implemente o código do kata 4 aqui
    let x = '';
    for(let i = 25; i >= 1; i--){
        if(i == 1){
            x += (i * -1);
        }
        else{
            x += (i * -1) + ', ';
        }
    }
    showResults(x)
}
kata4()

function kata5() {
    // implemente o código do kata 5 aqui
    x = '';
    for(let m = 1; m <= 2; m++){
        for(let i = 25; i > -25; i--){
            if(m == 2){
                if(i == 1){
                    if(i % 2 == 1){
                        x += (i * -1)
                    }
                }else{
                    if(i % 2 == 1){
                        x += (i * -1) + ', '
                    }
                }
            }else{
                if(i == 1){
                    if(i % 2 == 1){
                        x += i + ', '
                    }
                }else{
                    if(i % 2 == 1){
                        x += i + ', '
                    }
                }
            }
        }
    }
    
    showResults(x)
}
kata5()

function kata6() {
    // implemente o código do kata 6 aqui,
    x = '';
    for(let i = 1; i < 100; i++){
        if(i % 3 == 0){
            if(i == 99){
                x += i
            }else{
                x += i + ', '
            }
        }
    }
    showResults(x)
}
kata6()

function kata7() {
    // implemente o código do kata 7 aqui
    x = '';
    for(let i = 1; i < 100; i++){
        if(i % 7 == 0){
            if(i == 98){
                x += i
            }else{
                x += i + ', '
            }
        }
    }
    showResults(x)
}
kata7()

function kata8() {
    // implemente o código do kata 8 aqui
    x = '';
    for(let i = 100; i >= 1; i--){
        if(i % 7 == 0 || i % 3 == 0){
            if(i == 3){
                x += i
            }else{
                x += i + ', '
            }
        }
    } 
    showResults(x)
}
kata8()



function kata9() {
    // implemente o código do kata 9 aqui
    x = '';
    for(let i = 1; i < 100; i++){
        if(i % 5 == 0){
            if(i == 95){
                x += i
            }else{
                x += i + ', '
            }
        }
    }
    showResults(x)
}
kata9()

function kata10() {
    // implemente o código do kata 10 aqui
    let x = '';
    for(let i = 0; i < 20; i++){
        if(i == 19){
            x += sampleArray[i]
        }else{
            x += sampleArray[i] + ', '
        }
    }
    showResults(x)
}
kata10()

function kata11() {
    // implemente o código do kata 11 aqui
    let x = '';
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] == 472){
            if(sampleArray[i]%2 == 0){
                x += sampleArray[i]
            }
        }else{
            if(sampleArray[i]%2 == 0){
                x += sampleArray[i] + ', ';
            }
        }
    }
    showResults(x)
}
kata11()



function kata12() {
    // implemente o código do kata 12 aqui
    let x = '';
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] == 535){
            if(sampleArray[i]%2 == 1){
                x += sampleArray[i]
            }
        }else{
            if(sampleArray[i]%2 == 1){
                x += sampleArray[i] + ', ';
            }
        }
    }
    showResults(x)
}
kata12();

function kata13() {
    // implemente o código do kata 13 aqui
    let x = '';

    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 == 0){
            if(sampleArray[i] == 472){
                x += sampleArray[i]
            }
            else{
                x += sampleArray[i] + ', '
            }
        }
    }
    showResults(x)
}
kata13()


function kata14() {
    // implemente o código do kata 14 aqui
    let x = '';
    for(let i = 0; i < sampleArray.length; i++){
        if( sampleArray[i] * sampleArray[i] == 222784){
            x += (sampleArray[i] * sampleArray[i]);
        }else{
            x += (sampleArray[i] * sampleArray[i]) + ', ';
        }
        
    }
    showResults(x)
}
kata14()

function kata15() {
    // implemente o código do kata 15 aqui
    x = 0
    for(let i = 1; i < 20; i++){
        x+= i
    }
    showResults(x)
}
kata15()

function kata16() {
    // implemente o código do kata 16 aqui
    x = 0
    for(let i = 0; i < sampleArray.length; i++){
        x += sampleArray[i]
    }
    showResults(x)
}
kata16()

function kata17() {
    // implemente o código do kata 17 aqui
    let x = sampleArray[0];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] < x){
            x = sampleArray[i];
        }
    }
    showResults(x)
}
kata17()

function kata18() {
    // implemente o código do kata 18 aqui
    let x = sampleArray[0];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] > x){
            x = sampleArray[i];
        }
    }
    showResults(x)
}
kata18();

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
