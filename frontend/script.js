const API_URL = "http://localhost:8080/games";

  const response = await fetch(API_URL);
  const games = await response.json();

  const list = document.getElementById("gameList");
  list.innerHTML = "";

  games.forEach(game => {
    const li = document.createElement("li");
    li.textContent = `${game.title} - ${game.rating} ⭐ - ${game.status}`;
    list.appendChild(li);
  });
}

async function addGame() {
  const title = document.getElementById("title").value;
  const rating = parseInt(document.getElementById("rating").value);
  const status = document.getElementById("status").value;

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, rating, status })
  });

  loadGames();
}

// carrega automaticamente ao abrir
loadGames();