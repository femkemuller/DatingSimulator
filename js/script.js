console.log("hoi");

// Plaatjes voor Henk, Hans en Herman
let HenkPlaatjes = ["../img/henk1.png", "../img/henk1_boos.png", "../img/henk1_verliefd.png"];
let henkImage = document.querySelector("img[alt='henk']");

let HansPlaatjes = ["../img/hans2.png", "../img/hans2_boos.png", "../img/hans2_verliefd.png"];
let hansImage = document.querySelector("img[alt='hans']");

let HermanPlaatjes = ["../img/herman3.png", "../img/herman3_boos.png", "../img/herman3_verliefd.png"];
let hermanImage = document.querySelector("img[alt='herman']");

// level voor de progressbars
let hungerLevel = 50;
let kissLevel = 50;
let complimentLevel = 50;

// selecteren van de knoppen in de html
let voedselbtn = document.querySelector("#feed-button");
let kusbtn = document.querySelector("#kiss-button");
let complimentbtn = document.querySelector("#compliment-button");

let AudioEten = document.querySelector('#audio1')
let AudioWow = document.querySelector('#audio2')
let AudioLach = document.querySelector('#audio3')


// gebruik gemaakt van Chatgpt
// https://chatgpt.com/share/2fc35daf-c655-46d3-b042-d724922bbacf

// Functie die de progressbar bijwerkt
function updateProgressBar(barId, level) {
    let bar = document.querySelector(barId);
    bar.style.width = level + '%';
    bar.innerHTML = level + '%';

    if (hungerLevel >= 100 || kissLevel >= 100 || complimentLevel >= 100) {
        henkImage.src = HenkPlaatjes[2]; // Verandert afbeelding naar verliefd
    } else if (hungerLevel <= 0 || kissLevel <= 0 || complimentLevel <= 0) {
        henkImage.src = HenkPlaatjes[1]; // Verandert afbeelding naar boos
    } else {
        henkImage.src = HenkPlaatjes[0]; // Verandert afbeelding naar normaal
    }

}

// Functie om de droomman te voeden
function feedHenk() {
    hungerLevel += 10; // Voegt 10% toe aan de hongerbar
    if (hungerLevel > 100) hungerLevel = 100; // Maximaal 100%
    updateProgressBar("#liefdes-bar", hungerLevel); // updates de progressbar
    AudioEten.play();
}

// Functie om de droomman een kus te geven
function kissHenk() {
    kissLevel += 10; // Voegt 10% toe aan de kusbar
    if (kissLevel > 100) kissLevel = 100; // Maximaal 100%
    updateProgressBar("#kus-bar", kissLevel); // updates de progressbar
    AudioWow.play();
}

// Functie om de Droomman een compliment te geven
function complimentHenk() {
    complimentLevel += 10; // Voegt 10% toe aan de complimentenbar
    if (complimentLevel > 100) complimentLevel = 100; // Maximaal 100%
    updateProgressBar("#compliment-bar", complimentLevel); // updates de progressbar
    AudioLach.play();
}

// Voeg event listeners toe aan de knoppen
voedselbtn.addEventListener("click", feedHenk);
kusbtn.addEventListener("click", kissHenk);
complimentbtn.addEventListener("click", complimentHenk);

// verlaagt alle progressbars met 5% per 0,7 seconde
setInterval(() => {
    hungerLevel -= 5; // Verlaagt honger level met 5% per 0,7 seconde
    if (hungerLevel < 0) hungerLevel = 0; // Minimaal 0%
    updateProgressBar("#liefdes-bar", hungerLevel); // updates de progressbar

    kissLevel -= 5; // Verlaagt kus level met 5% per 0,7 seconde
    if (kissLevel < 0) kissLevel = 0; // Minimaal 0%
    updateProgressBar("#kus-bar", kissLevel); // updates de progressbar

    complimentLevel -= 5; // Verlaagt compliment level met 5% per 0,7 seconde
    if (complimentLevel < 0) complimentLevel = 0; // Minimaal 0%
    updateProgressBar("#compliment-bar", complimentLevel); // updates de progressbar
}, 700);

// Initialiseer de progressbars bij het laden van de pagina
document.addEventListener("DOMContentLoaded", () => {
    updateProgressBar("#liefdes-bar", hungerLevel);
    updateProgressBar("#kus-bar", kissLevel);
    updateProgressBar("#compliment-bar", complimentLevel);
});