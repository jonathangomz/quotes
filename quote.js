const FONT_COLORS = ['#CEFF1A', '#CC5A71', '#8CFF98', '#B7FDFE', '#A80874', '#EF7674', '#43B929'];
const BACKGROUND_COLORS = ['#34344A', '#80475E', '#101028', '#5C0029', '#61304B', '#0A2342', '#403F4C', '#151E3F', '#090809'];

document.addEventListener('DOMContentLoaded', function() {
    const quote_body = document.getElementById('quote-body');
    const quote_author = document.getElementById('quote-author');

    fetch('https://quotes.rest/qod?language=en', { method: 'GET'})
    .then(response => response.json())
    .then(json => {
        quote_body.innerText = json.contents.quotes[0].quote;
        quote_author.innerText = json.contents.quotes[0].author;
    })
    .catch((err) => {
        console.error(err);
        quote_body.innerText = "We cannot retrive the phrase for today. But let us tell you that you are amazing and do not let anybody to tell you that you are not.";
    });

    fetch('http://thecolorapi.com/scheme?hex=8CFF98&count=6', { method: 'GET'})
    .then(response => response.json())
    .then(colors => {
        console.log(colors);

    })
    .catch((err) => {
        console.error(err);
    });

    setRandomBackgroundColorToElement(document.body, BACKGROUND_COLORS);
    setRandomColorToElement(document.getElementById("quote-container"), FONT_COLORS);
});

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);

function setRandomBackgroundColorToElement(element, colors){
    let randomIndex = getRandomArbitrary(0, colors.length); 
    element.style.setProperty('--bg-color', '#0047AB');
}

function setRandomColorToElement(element, colors){
    let randomIndex = getRandomArbitrary(0, colors.length);
    element.style.setProperty('--color', '#ffffff');
}

function sortHexColors(hexColors) {
    let intColors = hexColors.map(hexColor => parseInt(hexColor.split('#')[1], 16));

    let sortedHexColors = intColors.map(intColor => '#' + intColor.toString(16));

    return sortHexColors;
}