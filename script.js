document.getElementById("yes-btn").addEventListener('click', function() {
window.location.href = "yes.html";
})

let messages = [
    "I think you meant yes",
    "I THINK YOU MEANT YES",
    "ha actually???",
    "heban",
    "you cant be so fr right now",
    "ARE YOU SO FR????",
    "maybe youre a bit dizzy",
    "ask your mom if she has medicine",
    "HAIBO TEHILLAH????",
    "mxm."
];

let index = 0;

function changeButtonMessage() {
    document.getElementById("no-btn").innerText = messages[index];
   index = (index + 1) % messages.length; // Loop back to the first message when reaching the end



   if ( document.getElementById("no-btn").innerText === "mxm."){
    document.getElementById("no-btn").addEventListener('click', function() {
        window.location.href = "nope.html";
        })
   } 
   
};





