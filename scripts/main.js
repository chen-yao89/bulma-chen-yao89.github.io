// Below are functions for id card

var txt2count = 0;
var txt1count = 0;
var txt2 = 'Find me here...'; /* The text */
var txt1 = "Hi. I'm Chen. Click me.";
var contactToggle = document.getElementById("profile-button");

window.addEventListener("load", typeStart);
contactToggle.addEventListener("click", showCard);
contactToggle.addEventListener("click", typeClear);
contactToggle.addEventListener("click", typeWriter);


function typeWriter() {
    if (document.getElementById("id-card").classList.value === "tile is-child box show") {
        if (txt2count < txt2.length) {
            document.getElementById("find-me").innerHTML += txt2.charAt(txt2count);
            txt2count++;
            setTimeout(typeWriter, 50);
        };    
    } else {
        typeStart();  
    };
};

function typeClear() {
    document.getElementById("find-me").textContent = "";
    txt2count = 0;
    txt1count = 0;
};

function typeStart() {
    if (txt1count < txt1.length) {
        document.getElementById("find-me").innerHTML += txt1.charAt(txt1count);
        txt1count++;
        setTimeout(typeStart, 50);
    };
};

function showCard() {
    document.getElementById("id-card").classList.toggle("show");
    console.log(document.getElementById("id-card").classList.value)
};
