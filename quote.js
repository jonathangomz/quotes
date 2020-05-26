const FONT_COLORS = ['#CEFF1A', '#CC5A71', '#8CFF98', '#B7FDFE', '#A80874', '#EF7674', '#43B929'];
const BACKGROUND_COLORS = ['#34344A', '#80475E', '#101028', '#5C0029', '#61304B', '#0A2342', '#403F4C', '#151E3F', '#090809'];

document.addEventListener('DOMContentLoaded', function() {
    const quote_body = document.getElementById('quote-body');
    const quote_author = document.getElementById('quote-author');

    getQuoteAndAuthor()
    .then(([quote, author]) => {
        quote_body.innerText = quote;
        quote_author.innerText = author;
    });


    setRandomBackgroundColorToElement(document.body, BACKGROUND_COLORS);
    setRandomColorToElement(document.getElementById('quote-container'), FONT_COLORS);
});

const getQuoteAndAuthor = async () => {
    try {
        let response = await fetch('https://quotes.rest/qod?language=en', { method: 'GET'});
        if(response.ok){
            let json = await response.json();
            return [json.contents.quotes[0].quote, json.contents.quotes[0].author];
        }else {
            throw "Couldn't retrive";
        }
    }catch(err){
        return ['We cannot retrive the phrase for today. But let me tell you that you are amazing and do not let anybody to tell you that you are not.', 'JonathanGomz'];
    }
}

    

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getRandIndex = (arr) => getRandomArbitrary(0, arr.length);
const getRandColor = (colors) => colors[getRandIndex(colors)];

const setRandomBackgroundColorToElement = (element, colors) => element.style.setProperty('--bg-color', getRandColor(colors));
const setRandomColorToElement = (element, colors) => element.style.setProperty('--color', getRandColor(colors));