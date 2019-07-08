/*

*/


function start(e) {
    var name = [
        {
            char: '楊',
            big5: 'B7A8',
            cns: '1-644E',
            unicode: '694A'
        },
        {
            char: '品',
            big5: 'AB7E',
            cns: '1-5042',
            unicode: '54C1'
        },
        {
            char: '賢',
            big5: 'BDE5',
            cns: '1-6F30',
            unicode: '8CE2'
        }
    ];
    var ele = document.getElementById('div1');

    for (var i = 0; i < 3; i++) {
        ele.innerHTML += name[i].char;
        ele.innerHTML += ' big5 = ';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += ' cns = ';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += ' unicode = '
        ele.innerHTML += name[i].unicode
        ele.innerHTML += ' <br> ';
    }

}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
