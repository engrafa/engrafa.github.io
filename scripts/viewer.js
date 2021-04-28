const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const article = urlParams.get('article')

if (String(article) != ''){
    const mdUrl = `https://raw.githubusercontent.com/engrafa/markdown/main/${article}`
    viewArticle(mdUrl)
}

function viewArticle(url){
    // If you use require (Node etc), require as first the module and then create the instance
    var Remarkable = require('remarkable');
    // If you're in the browser, the Remarkable class is already available in the window
    var md = new Remarkable();

    // Outputs: <h1>Remarkable rulezz!</h1>
    console.log(md.render('# Remarkable rulezz!'));
}
