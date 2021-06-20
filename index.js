const reviews = [
    {
        id : 1 ,
        author : "Tanya Sinclair",
        img : "images/image-tanya.jpg",
        text: "“ I’ve been interested in coding for a while but never taken the jump, until now.  I couldn’t recommend this course enough.I’m now in the job of my dreams and so  excited about the future.”",
        job: "UX Engineer",
    },
    {
        id: 2,
        author: "John Tarkpor",
        img : "images/image-john.jpg",
        text : "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible.I now feel so confident about starting up as a professional developer.”",
        job : "Junior Front-end Developer",
    }
];


const author = document.getElementById("author");
const img = document.getElementById("pic");
const text = document.getElementById("text");
const job =  document.getElementById("job");


const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");


// setting starting Index of Array

let currentIndex = 0;

// loading initial item

window.addEventListener("DOMContentLoaded" , function() {

    changePerson();
});


//callback function

function changePerson() {
    const item = reviews[currentIndex];

    author.textContent = item.author;
    img.src = item.img;
    text.textContent = item.text;
    job.textContent = item.job;
}




//next button 

nextBtn.addEventListener("click", function() {
    currentIndex++;

    if ( currentIndex > reviews.length -1 ) {
        currentIndex = 0;
    }

    return changePerson();
})


// previous button

prevBtn.addEventListener("click", function() {
    currentIndex--;

    if (currentIndex < 0 ) {
        currentIndex = reviews.length -1;
    }

    return changePerson();
})

