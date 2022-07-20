function Translate(word,language){
    this.apikey = "YOUR_API_KEY";
    this.word = word;
    this.language = language;
    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    this.xhr.open("GET",endpoint);
    this.xhr.onload = () =>{
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null,text);
        }
        else{
            callback("An Error Occur",null);
        }
    }
    this.xhr.send();
}
Translate.prototype.changeParameters = function(newWord,newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}