const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const article = urlParams.get('a')


if (String(article) != ''){
    const mdUrl = `https://raw.githubusercontent.com/engrafa/markdown/main/${article}`
    viewArticle(mdUrl, 'content')
}

function viewArticle(url, element = 'content'){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function() {
        const data = this.response
        document.getElementById(element).innerHTML = marked.marked(data);
    }

    xhr.send();
}
