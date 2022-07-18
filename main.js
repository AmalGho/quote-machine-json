let body =document.getElementById('body');
let btn = document.getElementById('new-quote');
let linktweet = document.getElementById('tweet-quote');
let linktumbler = document.getElementById('tumbler-quote');
let text = document.getElementById('quote-text');
let author = document.getElementById('quote-author');
let textQ = document.getElementById('text');
let authorQ = document.getElementById('author');




function randomColor(num){
    return Math.floor(Math.random() * (num));
}

$(function() {
    $('#new-quote').click(function(){
        $.getJSON('data.json', function(data) {

            let index = data[Math.floor(Math.random()*data.length)];
            
            textQ.innerText=index.text;
            authorQ.innerText=index.author;

        });
    });
});

// function newQuote(){
//     const color = 'rgb(' + randomColor(255) + ',' + randomColor(255) + ',' + randomColor(255) + ')';
//     body.style.backgroundColor=color;
//     btn.style.backgroundColor= color;
//     linktweet.style.backgroundColor=color;
//     linktumbler.style.backgroundColor=color;
//     text.style.color=color;
//     author.style.color=color;

//     let index = qoutArray[Math.floor(Math.random()*qoutArray.length)];

//     textQ.innerText=index.text;
//     authorQ.innerText=index.author;

//     return false;
// }
