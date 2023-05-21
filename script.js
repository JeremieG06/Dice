// Sélectionner l'élément avec la classe "dice"
const dice = document.querySelector('.dice');

// Sélectionner l'élément avec la classe "roll"
const rollBtn = document.querySelector('.roll');

// Fonction pour générer un nombre aléatoire et faire rouler le dé
const randomDice = () => {
  // Générer un nombre aléatoire entre 0 et 9
  const random = Math.floor(Math.random() * 10);

  // Vérifier si le nombre est entre 1 et 6 (inclus)
  if (random >= 1 && random <= 6) {
    // Appeler la fonction pour faire rouler le dé avec le nombre aléatoire
    rollDice(random);
  } else {
    // Si le nombre n'est pas entre 1 et 6, rappeler la fonction pour générer un autre nombre aléatoire
    randomDice();
  }
};

// Fonction pour faire rouler le dé avec une animation
const rollDice = (random) => {
  // Ajouter l'animation "rolling" au dé pendant 4 secondes
  dice.style.animation = "rolling 4s";

  // Après 4 secondes (4050 millisecondes), effectuer les transformations appropriées en fonction du nombre aléatoire
  setTimeout(() => {
    switch (random) {
      case 1:
        dice.style.transform = "rotateX(0deg) rotateY(0deg)";
        break;

      case 6:
        dice.style.transform = "rotateX(180deg) rotateY(0deg)";
        break;

      case 2:
        dice.style.transform = "rotateX(-90deg) rotateY(0deg)";
        break;

      case 5:
        dice.style.transform = "rotateX(90deg) rotateY(0deg)";
        break;

      case 3:
        dice.style.transform = "rotateX(0deg) rotateY(90deg)";
        break;

      case 4:
        dice.style.transform = "rotateX(0deg) rotateY(-90deg)";
        break;

      default:
        break;
    }

    // Retirer l'animation du dé
    dice.style.animation = 'none';

  }, 4050);
};

// Ajouter un écouteur d'événement au bouton "roll" pour déclencher la fonction randomDice lorsqu'il est cliqué
rollBtn.addEventListener("click", randomDice);
