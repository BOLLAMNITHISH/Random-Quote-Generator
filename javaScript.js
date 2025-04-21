const quote=document.getElementById("quote");
const author=document.getElementById("author");


const api_url="https://api.quotable.io/random";

async function getquote(url){
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    quote.innerHTML=data.content;
    author.innerHTML=data.content;
}
getquote(api_url);


function tweet(){
    window.open("https://x.com/i/flow/single_sign_on="+quote.innerHTML+"---by"+author.innerHTML ,"Tweet Window","width=600,height=300");
}
