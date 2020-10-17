
function printNextWordAndReturnTheRest(text) {
    if(text.length === 0) {
        return null;
    }

    if(!text.includes(' ')) {
        process.stdout.write(text);
        return null;
    }

    let reci = text.split(/ /);

    let prvaRec = reci.shift();

    process.stdout.write(prvaRec + ' ');

    return reci.join(' ');

}


function printText(text) {
    let ostatak = printNextWordAndReturnTheRest(text);

    if(ostatak) {
        setTimeout(printText,150,ostatak);

    }
}


printText('It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).');
