const quotes = [
  "Pour finir, une citation de Jankélévitch : 'La mort, c’est ce qui met fin à tout, même à la possibilité de la parole.' La dernière chambre du barillet contient la balle. Pose ce revolver et reviens avec tes amis pour la V2.",
  "Montaigne n'a-t-il pas écrit : 'La mort, c’est l’oubli où l’on est plongé dans le néant, sans espoir de retour.' Plus tu avances dans le jeu et plus l'espoir de retour se fait mince... Veux-tu vraiment continuer\u00A0?",
  "'La mort est notre plus grande ennemie. Mais il faut la regarder en face, car c’est dans le regard de la mort que l’homme apprend à vivre.' Cette citation provient de Nietzsche, dans Ainsi parlait Zarathoustra. Nietzsche aurait-il aimé joué à ce jeu\u00A0? Clique sur le bouton pour lui demander...",
  "Épicure dans la lettre à Ménécée : 'La mort n’est rien pour nous, puisque, tant que nous existons, la mort n’est pas, et quand la mort est là, nous ne sommes plus.' Clique sur le bouton pour vivre pleinement la phrase d'Épicure...",
  "Sartre écrit dans l’Être et le Néant : 'La mort est mon absolu : elle ne peut être dépassée et elle m'appartient en propre. Elle est donc mon ultime possibilité.' Il t'appartient de cliquer une deuxième - ou dernière - fois sur le bouton...",
];

let counter = 6;
let bulletIndex = Math.floor(Math.random() * counter);
const button = document.querySelector("#button");
const text = document.querySelector("#text");
const barrel = document.getElementsByClassName("dot");

const pullTheTrigger = () => {
  counter--;
  const clic = counter === bulletIndex;
  if (clic) {
    console.log("💥");
    console.log("TU ÊTES MORT");
    barrel[counter].classList.add("loaded");
    button.disabled = true;
    text.textContent = "💀💀💀💀💀💀💀💀💀";
  } else if (counter === 5) {
    console.log(counter);
    console.log(quotes[4]);
    barrel[5].classList.add("empty");
    text.textContent = quotes[4];
  } else if (counter === 4) {
    console.log(counter);
    console.log(quotes[3]);
    barrel[4].classList.add("empty");
    text.textContent = quotes[3];
  } else if (counter === 3) {
    console.log(counter);
    console.log(quotes[2]);
    barrel[3].classList.add("empty");
    text.textContent = quotes[2];
  } else if (counter === 2) {
    console.log(counter);
    console.log(quotes[1]);
    barrel[2].classList.add("empty");
    text.textContent = quotes[1];
  } else if (counter === 1) {
    console.log(counter);
    console.log(quotes[0]);
    barrel[1].classList.add("empty");
    text.textContent = quotes[0];
  }
};

button.addEventListener("click", pullTheTrigger);
