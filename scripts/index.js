// Grab MD info Json from => https://api.github.com/repos/engrafa/markdown/contents/

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
  return html;

}

function requestMarkdownArticles(username = "", repo = "", folder=""){

  const xhr = new XMLHttpRequest();
  
  const url = `https://raw.githubusercontent.com/engrafa/markdown/main/${folder}/articles.json`

  xhr.open('GET', url, true);

  xhr.onload = function() {

      // Parse API data into JSON
      const data = JSON.parse(this.response);

      // Log the response
      console.log(data);
      let mainGrid = document.getElementById("main-deck");

      mainGrid.innerHTML = mainGrid.innerHTML + `<br><h1 class='cat_name'>${folder}</h1><br><section class='card-deck' id='card-deck${folder}'></section>`

      let articleGrid = document.getElementById(`card-deck${folder}`)

      for (let i in data){
          let name = data[i].name;
	  let desc = data[i].desc;
	  let author = data[i].author;
          console.log("name:", name);
          console.log("name:", desc);
	  console.log("name:", author);
          articleGrid.innerHTML = articleGrid.innerHTML + getHtml(desc=desc,
                                                                  author,
                                                                   name,
		  						  `./a/index.html?a=${folder}/${data[i].file}`);
      }
  }

  xhr.send();

}

function requestMarkdownCategories(username = "", repo = ""){

  const xhr = new XMLHttpRequest();
  
  const url = `https://raw.githubusercontent.com/engrafa/markdown/main/files.json`

  xhr.open('GET', url, true);

  xhr.onload = function() {

      // Parse API data into JSON
      let data = JSON.parse(this.response);

      // Log the response
      console.log(data);

      data = data["folders"]

      for (let i in data){
          let name = data[i];
          console.log("name:", name);
          requestMarkdownArticles("engrafa", "markdown", name);
      }
  }

  xhr.send();

}

requestMarkdownCategories("engrafa", "markdown");

// fetch("https://api.github.com/repos/engrafa/markdown/contents/").then(jsonRaw=>{
//     // articleJson = JSON.parse(JSON.stringify(jsonRaw.json()));
//     console.log(JSON.stringify(jsonRaw.json()))
// })

// articleGrid = document.getElementById("articleGrid");
// articleGrid.innerHTML = '<div class="article_box"><h4>' + '</h4></div>';
