var button = document.querySelector("#btn");
var textArea = document.querySelector("#textArea");
var outputText = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/yoda.json";

function callApi(text) {
    return url + "?" + "text=" + text
}
function errorHandler(error)
{
    console.log("Error occured", error);
    alert("Sorry, an error occured please try again later");
}


function clickEventHandler() {
    var text1 = textArea.value;

    fetch(callApi(text1))
        .then(res1 => res1.json())
        .then(res2 => {

            outputText.innerText = res2.contents.translated;
            console.log('Click is gettining listened');
            })
        .catch(errorHandler)
}

button.addEventListener("click", clickEventHandler);