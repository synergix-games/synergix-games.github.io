
function searchGames() {
  let input = document.getElementById('game-search').value.toLowerCase();
  let gameCards = document.querySelectorAll('.game-card');

  gameCards.forEach(card => {
    let gameName = card.getAttribute('data-name').toLowerCase();
    if (gameName.includes(input)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function filterByBadge() {
  let selectedBadge = document.getElementById('badge-filter').value;
  let gameCards = document.querySelectorAll('.game-card');

  gameCards.forEach(card => {
    let badges = card.getAttribute('data-badges').split(' ');
    if (selectedBadge === 'all' || badges.includes(selectedBadge)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function playGame(gameName) {
    window.location.href = `/${gameName}`;
}
