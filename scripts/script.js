'use strict';

const Input = document.getElementById('input');

const btnTranslate = document.getElementById('btn-translate');

const output = document.getElementById('output');

const url = 'https://api.funtranslations.com/translate/shakespeare.json';


const translatedUrl=function(text){
    return `${url}?text=${text}`;


}
const translate=async function(text){
    const data = await fetch(translatedUrl(text)); 
    const result = await data.json();
    output.innerText=result.contents.translated;

}
btnTranslate.addEventListener('click',()=>{
    let UserText=input.value;
    translate(UserText);
});
