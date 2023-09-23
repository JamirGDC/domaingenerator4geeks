const parrafo = document.getElementById("domain");
const onload = document.getElementById("onload");

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

// let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
// let action = ['ate', 'peed', 'crushed', 'broke'];
// let what = ['my homework', 'the keys', 'the car'];
// let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function generatedomain() {
    parrafo.innerHTML = pronoun[Math.floor(Math.random() * pronoun.length)] + adj[Math.floor(Math.random() * adj.length)] + noun[Math.floor(Math.random() * noun.length)] + ".com";
}

addEventListener("load", generatedomain);
onload.addEventListener("click", generatedomain);
