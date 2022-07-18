
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
