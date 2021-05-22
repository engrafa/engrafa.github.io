let temp = null;

let articleJson = null;

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const c = urlParams.get('c')

function requestMarkdownArticles(username, repo, folder, branch="main"){

    const xhr = new XMLHttpRequest();
    
    const url = `https://api.github.com/repos/${username}/${repo}/contents/${folder}?ref=${branch}`

    xhr.open('GET', url, true);

    xhr.onload = function() {
    
        // Parse API data into JSON
        const data = JSON.parse(this.response)
        
        // Log the response
        console.log(data)

        for (let i in data){
            console.log("name:", data[i].name)
            console.log("url:", data[i].download_url)
            let articleGrid = document.getElementById("articleGrid")
            articleGrid.innerHTML = articleGrid.innerHTML + `<div onclick='window.open("../a/index.html?a=${folder}/${data[i].name}", "_blank")'><h4>${data[i].name}</h4></div1>`;
        }
    }

    xhr.send();

}

requestMarkdownArticles("engrafa", "markdown", String(c), "main");
