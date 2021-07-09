console.log("hello yadnik welcome")
// 958e339c609f4ed5bdad2076b420c02b

// https://newsapi.org/v2/top-headlines

let source = 'the-times-of-india';
let apikey = `958e339c609f4ed5bdad2076b420c02b`

let newsaccordian = document.getElementById("newsaccordian");

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`, true);


xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHTML = "";
        articles.forEach(function (element, index) {


            let news = `
            <div class="card">
                <div class="card-header" id="heading${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                            ${element["title"]}
                        </button>
                    </h2>
                </div>
    
                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                    data-parent="#newsaccordian">
                    <div class="card-body">
                        ${element["description"]} .<a href="${element['url']}" target="_blank">read more</a>
                    </div>
                </div>
            </div>                        
            `;
            newsHTML += news;

        });

        newsaccordian.innerHTML = newsHTML;
    }
    else {
        console.log("some error occured")
    }
}

xhr.send()

// reffer project 1 -notes app from code with harry for filtering using searchbar