const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(n){
    let x = document.createElement("div");
    let texto = document.createTextNode(n);
    x.appendChild(texto)

    document.body.appendChild(x)
}


function kata1() {
    // implemente o código do kata 1 aqui
    let x = [];
    for(let i = 1; i <= 25; i++){
        x.push(i)
        
    }
    return x;
}
showResults(kata1());


function kata2() {
    // implemente o código do kata 2 aqui
    let x = [];
    for(let i = 25; i >= 1; i--){
        x.push(i)
    }
    return x;
}
showResults(kata2())


function kata3() {
    // implemente o código do kata 3 aqui
    let x = [];
    for(let i = 1; i <= 25; i++){
        x.push(i * -1);
    }
    return x
}
showResults(kata3())

function kata4() {
    // implemente o código do kata 4 aqui
    let x = [];
    for(let i = 25; i >= 1; i--){
        x.push(i * -1)
    }
    return x
}
showResults(kata4());


function kata5() {
    // implemente o código do kata 5 aqui
    let x = [];
    for(let t = 1; t <= 2; t++){
        if(t == 1){
            for(let i = 25; i >= 1; i--){
                x.push(i)
            }
        }else{
            for(let i= 1; i <= 25; i++){
                x.push(i * -1)
            }
        }
    }
    
    return x
}
showResults(kata5())


function kata6() {
    // implemente o código do kata 6 aqui,
    let x = [];
    for(let i = 1; i < 100; i++){
        if(i % 3 == 0){
            if(i == 99){
                x.push(i);
            }else{
                x.push(i);
            }
        }
    }
    return x
}
showResults(kata6())


function kata7() {
    // implemente o código do kata 7 aqui
    let x = [];
    for(let i = 1; i < 100; i++){
        if(i % 7 == 0){
            if(i == 98){
                x.push(i)
            }else{
                x.push(i)
            }
        }
    }
    return x
}
showResults(kata7())


function kata8() {
    // implemente o código do kata 8 aqui
    let x = [];
    for(let i = 100; i >= 1; i--){
        if(i % 7 == 0 || i % 3 == 0){
            if(i == 3){
                x.push(i)
            }else{
                x.push(i)
            }
        }
    } 
   return x
}
showResults(kata8())




function kata9() {
    // implemente o código do kata 9 aqui
    x = [];
    for(let i = 1; i < 100; i++){
        if(i % 5 == 0){
            if(i == 95){
                x.push(i)
            }else{
                x.push(i)
            }
        }
    }
    return x
    
}
showResults(kata9())


function kata10() {
    // implemente o código do kata 10 aqui
    let x = [];
    for(let i = 0; i < 20; i++){
        if(i == 19){
            x.push(sampleArray[i]);
        }else{
            x.push(sampleArray[i]);
        }
    }
    return x
}
showResults(kata10())


function kata11() {
    // implemente o código do kata 11 aqui
    let x = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] == 472){
            if(sampleArray[i]%2 == 0){
                x.push(sampleArray[i])
            }
        }else{
            if(sampleArray[i]%2 == 0){
                x.push(sampleArray[i])
            }
        }
    }
    return x
}
showResults(kata11())




function kata12() {
    // implemente o código do kata 12 aqui
    let x = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] == 535){
            if(sampleArray[i]%2 == 1){
                x.push(sampleArray[i])
            }
        }else{
            if(sampleArray[i]%2 == 1){
                x.push(sampleArray[i])
            }
        }
    }
    return x
}
showResults(kata12())


function kata13() {
    // implemente o código do kata 13 aqui
    let x = [];

    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] % 8 == 0){
            if(sampleArray[i] == 472){
                x += sampleArray[i]
            }
            else{
                x.push(sampleArray[i])
            }
        }
    }
    return x
}
showResults(kata13())



function kata14() {
    // implemente o código do kata 14 aqui
    let x = [];
    for(let i = 0; i < sampleArray.length; i++){
        if( sampleArray[i] * sampleArray[i] == 222784){
            x.push(sampleArray[i] * sampleArray[i]);
        }else{
            x.push(sampleArray[i] * sampleArray[i]);
        }
        
    }
    return x;
}
showResults(kata14())


function kata15() {
    // implemente o código do kata 15 aqui
    let x = []
    for(let i = 1; i < 20; i++){
        x.push(i)
    }
    return x
}
showResults(kata15())


function kata16() {
    // implemente o código do kata 16 aqui
    let x = 0
    for(let i = 0; i < sampleArray.length; i++){
        x += sampleArray[i]
    }
    return x
}
showResults(kata16())


function kata17() {
    // implemente o código do kata 17 aqui
    let x = sampleArray[0];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] < x){
            x = sampleArray[i];
        }
    }
   return x;
}
showResults(kata17())


function kata18() {
    // implemente o código do kata 18 aqui
    let x = sampleArray[0];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i] > x){
            x = sampleArray[i]
        }
    }
    return x
}
showResults(kata18());


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
    for(let i = 0; i < 20; i++){
        let retangulo = document.createElement('div')
        retangulo.setAttribute('style', 'width: 100px; height: 20px; background-color:gray; margin: 5px;')
        document.body.appendChild(retangulo);
    }
    

}
kataBonus1()

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
    for(let i = 0; i < sampleArray.length; i++){
        let retangulo = document.createElement('div')
        retangulo.setAttribute('style', 'height: 20px; background-color:gray; margin: 5px;');
        retangulo.style.width = sampleArray[i] + 'px'
        document.body.appendChild(retangulo);
    }
}kataBonus3();


function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
    for(let i = 0; i < sampleArray.length; i++){
        let retangulo = document.createElement('div')
        retangulo.setAttribute('style', 'height: 20px;margin: 5px;');
        retangulo.style.width = sampleArray[i] + 'px'
        document.body.appendChild(retangulo);
        if(i % 2 == 0){
            retangulo.style.backgroundColor = 'gray';
        }else{
            retangulo.style.backgroundColor = 'red'
        }
    }
}kataBonus4()


function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
    for(let i = 0; i < sampleArray.length; i++){
        let retangulo = document.createElement('div')
        retangulo.setAttribute('style', 'height: 20px; background-color:red; margin: 5px;');
        retangulo.style.width = sampleArray[i] + 'px';
        document.body.appendChild(retangulo);
    }
}kataBonus5()
