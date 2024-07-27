// javascript concepts are used in this quote project

// document.queryselector()
// addEventListener()
// Math Object()
// innerText


// variables



let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".qoute")
let person = document.querySelector(".person")

let quotes = [
    {
        quote : `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum totam natus ducimus beatae amet veritatis inventore alias minima! Ad."`,
        person : `"natus ducimus"`
    },
    {
        quote : `"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam maxime nisi, eveniet sint voluptatem reiciendis."`,
        person : `"consectetur"`
    },
    {
        quote : `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias cupiditate rerum, aliquid reprehenderit expedita exercitationem odit deserunt illo id! Porro dolorem soluta rem quaerat."`,
        person : `"adipisicing"`
    },
    {
        quote : `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum totam natus ducimus beatae amet veritatis inventore alias minima! Ad."`,
        person : `"natus ducimus"`
    },
    {
        quote : `"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam maxime nisi, eveniet sint voluptatem reiciendis."`,
        person : `"consectetur"`
    },
    {
        quote : `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias cupiditate rerum, aliquid reprehenderit expedita exercitationem odit deserunt illo id! Porro dolorem soluta rem quaerat."`,
        person : `"adipisicing"`
    },

];

btn.addEventListener("click", function () {

    let random = Math.floor(Math.random() * quotes.length);

    console.log(random);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

    // quote.innerText = quotes[random].quote;
    // person.innerText = quotes[random].person;
})