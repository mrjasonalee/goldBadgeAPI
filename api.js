const baseURL = 'https://api.edamam.com/search';
const key = '8d97036dc3618b44716aad6e7f19b5ef';
let url;

fetchResults (https://api.edamam.com/search?q=chicken&app_id=810f4181&app_key=8d97036dc3618b44716aad6e7f19b5ef');

fetch(url)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        displayResults(json);
    });

}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    let articles = json.response.docs;

    if (articles.length === 0) {
    console.log("No results");
    } else {
        for(let i=0; i < articles.length; i++) { 
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i];
            console.log("Current:", current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            para.textContent = "Keywords: ";

            for(let j = 0; j < current.keywords.length; j++) {
                let span = document.createElement('span');

                span.textContent += current.keywords[j].value + ' ';

                para.appendChild(span);
            }

            clearfix.setAttribute('class' , 'clearfix');


            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
