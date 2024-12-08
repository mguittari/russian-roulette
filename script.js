const quotes = [
  "Jankélévitch : <blockquote><p>“La mort, c’est ce qui met fin à tout, même à la possibilité de la parole.”</p></blockquote> La dernière chambre du barillet contient la balle. Pose ce revolver et reviens avec tes amis pour la V2.",
  "Dans ses célèbres <i><b>Essais</b></i>, Montaigne écrit : <blockquote><p>“La mort, c’est l’oubli où l’on est plongé dans le néant, sans espoir de retour.”</p></blockquote> Plus tu avances dans le jeu et plus l'espoir de retour se fait mince... Veux-tu vraiment continuer\u00A0?",
  "Nietzsche dans <i><b>Ainsi parlait Zarathoustra</b></i>\u00A0: <blockquote><p>“La mort est notre plus grande ennemie. Mais il faut la regarder en face, car c’est dans le regard de la mort que l’homme apprend à vivre.”</p></blockquote> Nietzsche aurait-il aimé ce jeu\u00A0? Clique sur le bouton pour lui demander...",
  "Il y a bien longtemps, Épicure a dit : <blockquote><p>“La mort n’est rien pour nous, puisque, tant que nous existons, la mort n’est pas, et quand la mort est là, nous ne sommes plus.”</p></blockquote> Clique pour expérimenter la phrase d'Épicure...",
  "Sartre écrit dans <i><b>l’Être et le Néant</b></i>\u00A0: <blockquote><p>“La mort est mon absolu\u00A0: elle ne peut être dépassée et elle m'appartient en propre. Elle est donc mon ultime possibilité.”</p></blockquote> Je confirme : la possibilité de cliquer t'appartient... Veux-tu connaitre ton absolu\u00A0?",
];

let counter = 6;
let bulletIndex = Math.floor(Math.random() * counter);
const button = document.querySelector("#button");
const text = document.querySelector("#text");
const barrel = document.getElementsByClassName("dot");
const endGame = document.getElementById("game-over");

const pullTheTrigger = () => {
  counter--;
  const clic = counter === bulletIndex;
  if (clic) {
    console.log("💥");
    console.log("TU ÊTES MORT");
    barrel[counter].classList.add("loaded");
    button.disabled = true;
    text.removeAttribute("id");
    text.classList.add("game-over");
    text.innerHTML = "TU ES MORT";
  } else if (counter === 5) {
    console.log(counter);
    console.log(quotes[4]);
    barrel[5].classList.add("empty");
    text.innerHTML = quotes[4];
  } else if (counter === 4) {
    console.log(counter);
    console.log(quotes[3]);
    barrel[4].classList.add("empty");
    text.innerHTML = quotes[3];
  } else if (counter === 3) {
    console.log(counter);
    console.log(quotes[2]);
    barrel[3].classList.add("empty");
    text.innerHTML = quotes[2];
  } else if (counter === 2) {
    console.log(counter);
    console.log(quotes[1]);
    barrel[2].classList.add("empty");
    text.innerHTML = quotes[1];
  } else if (counter === 1) {
    console.log(counter);
    console.log(quotes[0]);
    barrel[1].classList.add("empty");
    text.innerHTML = quotes[0];
  }
};

button.addEventListener("click", pullTheTrigger);
