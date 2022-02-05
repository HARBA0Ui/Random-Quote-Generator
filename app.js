const quotes = [
    {
        id : 1,
        text : "Happiness is too many things these days for anyone to wish it on anyone lightly. So let's just wish each other a bileless New Year and leave it at that.",
        author : "Judith Crist"
    },
    {
        id : 2,
        text : "Cinema should make you forget you are sitting in a theater.",
        author : "Roman Polanski"
    },
    {
        id : 3,
        text : "You have the freedom to be yourself, your true self, here and now, and nothing can stand in your way.",
        author : "Richard David Bach"
    },
    {
        id : 4,
        text : "If confusion is the first step to knowledge, I must be a genius.",
        author : "Larry Leissner"
    },
    {
        id : 4,
        text : "HOMILETICS, n. The science of adapting sermons to the spiritual needs, capacities and conditions of the congregation.",
        author : "Ambrose Gwinett Bierce"
    },
]


const btn = document.querySelector('.btn')

const author = document.querySelector('.author')
const quote = document.querySelector('.content')

let item = 0

window.addEventListener('DOMContentLoaded', function(){
    let element = quotes[item]
    quote.innerHTML = element.text
    author.innerHTML = element.author
})

btn.addEventListener('click',function(){
    item++
    let element = quotes[item]
    quote.innerHTML = element.text
    author.innerHTML = element.author
    console.log(quotes.length)
    console.log(item)
    if(item == quotes.length - 1){
        item = 0;
    }
})