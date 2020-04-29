const fontColors = ['#CEFF1A', '#CC5A71', '#8CFF98', '#B7FDFE', '#A80874', '#EF7674', '#43B929'];
const backgroundColors = ['#34344A', '#80475E', '#101028', '#5C0029', '#61304B', '#0A2342', '#403F4C', '#151E3F', '#090809'];

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function setRandomBackgroundColorToElement(element, colors){
    let randomIndex = getRandomArbitrary(0, colors.length);
    element.style.background = colors[randomIndex];
}

function setRandomColorToElement(element, colors){
    let randomIndex = getRandomArbitrary(0, colors.length);
    element.style.color = colors[randomIndex];
}

function setRandomBorderColorToElement(element, colors){
    let randomIndex = getRandomArbitrary(0, colors.length);
    element.style.borderColor = colors[randomIndex];
}


document.addEventListener('DOMContentLoaded', function(){
    setRandomBackgroundColorToElement(document.body, backgroundColors);
    setRandomColorToElement(document.getElementById("quote-container"), fontColors);
    setRandomBorderColorToElement(document.getElementById("quote-container"), fontColors);
    
    const quote_body = document.getElementById('quote-body');
    const quote_author = document.getElementById('quote-author');

    fetch('https://quotes.rest/qod?language=en', { method: 'GET'})
    .then(response => response.json())
    .then(json => {
        quote_body.innerText = json.contents.quotes[0].quote;
        quote_author.innerText = '(' + json.contents.quotes[0].author + ')';
    })
    .catch((err) => {
        console.error(err);
        quote_body.innerText = "We cannot retrive the phrase for today. But let us tell you that you are amazing and do not let anybody to tell you that you are not.";
    });
});