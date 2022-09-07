const quotes = [
    {
        quote: "Loneliness does not come from having no people around you, but from being unable to communicate the things that seem important to you.",
        author: "Carl Jung",
    },
    {
        quote: "The object of life is NOT to be on the side of the majority, but to escape finding oneself in the ranks of the insane.",
        author: "Marcus Aurelius",
    },
    {
        quote: "Truth is stranger than fiction, but it is because fiction is obliged to stick to possibilities; Truth isn’t.",
        author: "Mark Twain",
    },
    {
        quote: "You are not obligated to associate with people who are making your life worse.",
        author: "Jordan B. Peterson",
    },
    {
        quote: "When a person can’t find a deep sense of meaning, they distract themselves with pleasure.",
        author: "Viktor Frankl",
    },
    {
        quote: "Don’t give in to your fears. If you do, you won’t be able to talk to your heart.",
        author: "Paulo Coelho",
    },
    {
        quote: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
        author: "Marcus Aurelius",
    },
    {
        quote: "If you don’t have a plan, you become a part of someone else’s plan.",
        author: "Terence McKenna",
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "We cannot solve our problems with the same thinking we used when we created them.",
        author: "Albert Einstein",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;