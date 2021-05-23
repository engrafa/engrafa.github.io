// Grab MD info Json from => https://api.github.com/repos/engrafa/markdown/contents/
// console.log("built by ACuteWoof lol 🤣");

let temp = null;

let articleJson = null;

/*
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const article = urlParams.get('article')

if (String(article) != ''){
    const mdUrl = `https://raw.githubusercontent.com/engrafa/markdown/main/${article}`

}

function viewArticle(){
    
}
*/

function getHtml(desc="Lorem ipsum dolor sit amet, consectetur a dipiscing elit. In at lacus ipsum.", author="unknown", title="Lorem Ipsum", onClickUrl=""){

  let html = `
            <div class="card-item" onclick='window.open("${onClickUrl}")'>
             <div class="card" >
                <div class="cardc">
                  <h1 class="card-txt">${title}</h1>
                  <p class="card-details">${desc}</p>
                  <div class="author-div">
                    <p class="card-author">${author}</p>
                  </div>
                </div>
              </div>
            </div>
  `
  return html

}

function requestMarkdownArticles(username = "", repo = "", folder=""){

  const xhr = new XMLHttpRequest();
  
  const url = `https://api.github.com/repos/${username}/${repo}/contents/${folder}/`

  xhr.open('GET', url, true);

  xhr.onload = function() {

      // Parse API data into JSON
      const data = JSON.parse(this.response)

      // Log the response
      console.log(data)

      for (let i in data){
          let name = data[i].name
          console.log("name:", name)
          console.log("url:", data[i].download_url)
          let articleGrid = document.getElementById("card-deck")
          articleGrid.innerHTML = articleGrid.innerHTML + getHtml(desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at lacus ipsum.",
                                                                  "unknown",
                                                                  name,
	  							`./a/index.html?a=${folder}/${data[i].name}`);
      }
  }

  xhr.send();

}

function requestMarkdownCategories(username = "", repo = ""){

  const xhr = new XMLHttpRequest();
  
  const url = `https://api.github.com/repos/${username}/${repo}/contents/`

  xhr.open('GET', url, true);

  xhr.onload = function() {

      // Parse API data into JSON
      const data = JSON.parse(this.response)

      // Log the response
      console.log(data)

      for (let i in data){
          let name = data[i].name
          console.log("name:", name)
          requestMarkdownArticles("engrafa", "markdown", name);
      }
  }

  xhr.send();

}

requestMarkdownCategories("engrafa", "markdown")

// fetch("https://api.github.com/repos/engrafa/markdown/contents/").then(jsonRaw=>{
//     // articleJson = JSON.parse(JSON.stringify(jsonRaw.json()));
//     console.log(JSON.stringify(jsonRaw.json()))
// })

// articleGrid = document.getElementById("articleGrid");
// articleGrid.innerHTML = '<div class="article_box"><h4>' + '</h4></div>';
