var btnClick = document.querySelector("#btn-click");
var inputText = document.querySelector("#txt-area");
var outputText = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/yoda.json"

function getTranslationalURL(text){
    return url + "?" + "text=" + text
}

function errorHandler(error){
    console.log("Error occured!!", error)
    alert("Something went wrong!! Please try again after some time.")
}

function clickEventHandler(){
    var input = inputText.value;
    console.log(input)
    fetch(getTranslationalURL(input))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnClick.addEventListener("click", clickEventHandler);