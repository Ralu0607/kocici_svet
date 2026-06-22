const fortunes = [
  "Mňau, dnes je den na nové začátky. Nech se vést svou zvědavostí.",
  "Tvoje tlapky cítí změnu. Přijmi ji s obratností kočky.",
  "Když se měsíc zrcadlí ve vodě, rozsvítí se ti nové myšlenky.",
  "Usni s klidem a ráno najdeš odpověď v tichu.",
  "Větrné šelesty ti šeptají: posluš intuici a nevzdávej to.",
  "Kočka ti radí: pozoruj svět z výšky a potom udeř s jistotou.",
  "Mňoukej tiše, ať slyší jen tělo i srdce.",
  "Dneska je dobrý den na maličká dobrodružství a velké snění.",
  "Sledu svou stínu, ale nechte se vést paprskem slunce.",
  "Daruj laskavost. Kočka odmění tvou dobrotu neviditelným purr.",
];

const fortuneBox = document.getElementById("fortuneBox");
const fortuneButton = document.getElementById("fortuneButton");

function getRandomFortune() {
  const index = Math.floor(Math.random() * fortunes.length);
  return fortunes[index];
}

function showFortune() {
  const text = getRandomFortune();
  fortuneBox.innerHTML = `<p class="fortune-text">${text}</p>`;
}

fortuneButton.addEventListener("click", showFortune);
