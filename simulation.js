
document.querySelectorAll('.number-plays').forEach(el => {
  const gameName = el.closest('.game-card').dataset.name;
  const svValue = localStorage.getItem(`${gameName}-sv`);
  if (svValue) {
    el.textContent = svValue;
  }
});

const simulatePlaysIncrease = function(el) {
  const gameName = el.closest('.game-card').dataset.name;

  let baseValue = parseInt(el.textContent, 10);
  let currentPlays = parseInt(localStorage.getItem(gameName) || 0, 10);

  let randomDelay = Math.floor(Math.random() * 5000) + 100;
  let randomIncrement = Math.floor(baseValue * (Math.random() * 0.1)) + 1;

  setTimeout(() => {
    currentPlays += randomIncrement;
    localStorage.setItem(gameName, currentPlays);

    let newPlaysDisplay = baseValue + Math.round(currentPlays / (Math.PI * (currentPlays / 2)));

    if (newPlaysDisplay > baseValue) {
      el.textContent = newPlaysDisplay;
      localStorage.setItem(`${gameName}-sv`, newPlaysDisplay);
    }

    simulatePlaysIncrease(el);
  }, randomDelay);
};

const simulateOnlinePlayers = function() {
  let storedPlayers = localStorage.getItem('onlinePlayers');
  let currentPlayers = parseInt(storedPlayers || 400, 10);

  let randomDelay = Math.floor(Math.random() * 2000) + 500;
  let randomChange = Math.floor(Math.random() * 3) + 1;
  let changeDirection = Math.random() < 0.5 ? -1 : 1;

  setTimeout(() => {
    currentPlayers += randomChange * changeDirection;

    currentPlayers = Math.max(0, Math.min(currentPlayers, 500)); 
    localStorage.setItem('onlinePlayers', currentPlayers);
    document.getElementById("online-users").textContent = "Online: " + currentPlayers + " players";
    simulateOnlinePlayers();
  }, randomDelay);
};

document.querySelectorAll('.number-plays').forEach(el => {
  simulatePlaysIncrease(el);
});

simulateOnlinePlayers();
