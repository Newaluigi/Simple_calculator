// const name = prompt("What's your name Player 1?")
// const random = Math.floor(Math.random() * 100) + 1
// for (let i = 0; i < 100; i++) {
//     const playerNumber = random(parseInt(prompt("Let's play ! Choose a number between 1 to 100!")))

//     if (random === playerNumber) {
//         console.log("Well done (name), you win !");
//         break;
//     } else if (random > playerNumber) {
//         console.log("It's less !");
//     } else if (random < playerNumber) {
//         console.log("It's more !");
//     }
//     else {
//         console.log("Undifined value ! Choose another number between 1 to 100!");
//         break;
//     }

// Etape 1 - Sélectionner nos éléments
const form = document.querySelector("#formulaire");
const input = document.querySelector("#prix");
const error = document.querySelector("small");
const instructions = document.querySelector("#instructions");
let trials = 0;
let choosedNumber;

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomNumber = getRandomInt(1000);

// Etape 6 - Créer la fonction vérifier
function check(number) {
  let instruction = document.createElement("div");
  instruction.className = "instruction";

  if (number < randomNumber) {
    instruction.classList.add("plus");
    instruction.innerHTML = `#${trials} (${choosedNumber}) c'est plus`;
  } else if (number > randomNumber) {
    instruction.classList.add("moins");
    instruction.innerHTML = `#${trials} (${choosedNumber}) c'est moins`;
  } else {
    instruction.classList.add("fini");
    instruction.innerHTML = `#${trials} (${choosedNumber}) c'est fini, vous avez gagné en ${trials} coups`;
    input.disabled = true;
  }
  instructions.prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", (e) => {
  if (isNaN(input.value)) {
    error.style.display = "inline-block";
    input.style.borderColor = "red";
  } else {
    error.style.display = "none";
    input.style.borderColor = "black";
  }
});

// Etape 5 - Agir à l'envoi du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(input.value) || !input.value) {
    error.style.display = "inline-block";
    input.style.borderColor = "red";
  } else {
    trials++;
    choosedNumber = input.value;
    check(Number(choosedNumber));
    input.value = "";
  }
});
