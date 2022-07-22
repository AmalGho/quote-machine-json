
let text = document.getElementById('text');
let author = document.getElementById('author');


function randomColor(num){
    return Math.floor(Math.random() * (num));
}

$(function() {
    $('#new-quote').click(function(){
        $.getJSON('data.json', function(data) {

            let index = data[ Math.floor(Math.random() * data.length) ];
            
            text.innerText = index.text;
            author.innerText = index.author;

        });
    });
});
