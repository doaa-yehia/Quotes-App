var quoteList=[
    {
        content:"Be yourself; everyone else is already taken.",
        auther:"― Oscar Wilde",
    },
    {
        content:"A room without books is like a body without a soul.",
        auther:"― Marcus Tullius Cicero",
    },
    {
        content:"Be the change that you wish to see in the world.",
        auther:"― Mahatma Gandhi",
    },
    {
        content:"A friend is someone who knows all about you and still loves you.",
        auther:"― Elbert Hubbard",
    },
    {
        content:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        auther:"― Albert Einstein",
    },
    {
        content:"Good friends, good books, and a sleepy conscience: this is the ideal life.",
        auther:"― Mark Twain",
    },
];

// console.log(quoteList[0]);
var lastIndex=-1;
function quoteOutput() {
var index;
do {
    index=Math.floor(Math.random()*quoteList.length);
} while (lastIndex===index);

lastIndex=index;
console.log(index);

document.getElementById("quoteContent").innerHTML=quoteList[index].content;
document.getElementById("quoteAuther").innerHTML=quoteList[index].auther;

}


  
