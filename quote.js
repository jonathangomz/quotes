document.addEventListener('DOMContentLoaded', function(){
    const quote_body = document.getElementById('quote-body');
    const quote_author = document.getElementById('quote-author');

    fetch('https://quotes.rest/qod?language=en', { method: 'GET'} )
    .then( response => response.json())
    .then(json => {
        console.log(json);
        quote_body.innerText = json.contents.quotes[0].quote;
        quote_author.innerText = json.contents.quotes[0].author;
    });
});