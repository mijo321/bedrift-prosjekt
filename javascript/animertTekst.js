// denne filen er en fil for den animerte teksten på frontpage
let i = 0;
let j = 0;
let pauseEnd = false;
let currentWord =  "";
let isDeleting = false;
let words = ['sunne', 'raske', 'gode'];

function typing() {
    if (isDeleting && j <= 0) {
        isDeleting = false;
        pauseEnd = true;
        i++;
        if (i >= words.length) {
            i = 0;
        }
    }
    if (!isDeleting && j === words[i].length) {
        if (!pauseEnd) {
            isDeleting = true;
        } else {
            pauseEnd = false;
            return setTimeout(typing, 1000);
        }
    }
    currentWord = isDeleting ? words[i].substring(0, j--) : words[i].substring(0, ++j);
    

    document.querySelector('.hero h2 animated').innerText = currentWord;
    setTimeout(typing, isDeleting ? 400 : 100);

}

window.onload = function(){
    typing();
};


