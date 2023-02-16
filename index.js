console.log("Welcome to News APP");

// news parameter
let source = 'the-hindu';
let apikey = 'db9c6831b7704196a3589333736bd553';
// Grab the news container
let Newsmain = document.getElementById('Newsmain')
console.log(Newsmain);
let news = `<div class="card">
<div class="card-header" id="headingOne">
    <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
            data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Collapsible Group Item #1
        </button>
    </h2>
</div>

<div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
    data-parent="#accordionExample">
    <div class="card-body">
        Some placeholder content for the first accordion panel. This panel is shown by default, thanks
        to the <code>.show</code> class.
    </div>
</div>
</div>`



// initialising the xhr object
const xhr = new XMLHttpRequest();



// opening the xhr object
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);


// What To do When The response is Ready
xhr.onload = function () {
    if (this.status == 200) {
        let jason = JSON.parse(this.responseText);
        let article = jason.articles;
        console.log(article);
        let newsitem = "";
        article.forEach(function (item, index) {
            console.log(item, index);
            newsitem += `<div class="card">
            <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                     <b>Breaking News ${index + 1}: </b>${item["title"]}
                    </button>
                </h2>
            </div>
            
            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                data-parent="#Newsmain">
                <div class="card-body">
                  ${item["content"]}.<a href="${item['url']}"target="_blank">Read More</a> </div> 
            </div>
            </div>`
        });

        Newsmain.innerHTML = newsitem;
    }

    else {
        console.log("Some Error Has Ocurred");
    }
}
// sending the request to the server to fetch the news
xhr.send();