function calculate() {
  let baseDropChance = document.getElementById("dropChance").value;
  let runs = document.getElementById("runs").value;

  let chanceToNotHaveItem = 100;
  let dropChance = baseDropChance;

  for (var i = 0; i < runs; i++) {
    chanceToNotHaveItem = chanceToNotHaveItem - dropChance;
    dropChance = (baseDropChance / 100) * chanceToNotHaveItem;
  }

  let message = `Chance to have item ${(100 - chanceToNotHaveItem).toFixed(
    2
  )}%`;

  let para = document.getElementsByTagName("p")[0];
  para.innerHTML = message;
}
