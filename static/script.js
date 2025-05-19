// SIGNUP form handler
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("signup_name").value;
    const email = document.getElementById("signup_email").value;
    const password = document.getElementById("signup_password").value;

    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === "signup_successful") {
        alert("Signup successful! Please log in.");
        signupForm.reset();
      } else if (data.status === "user_exists") {
        alert("Username already exists. Please choose another.");
      } else {
        alert("Signup failed: " + data.status);
      }
    });
  });
}

// LOGIN form handler
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("login_name").value;
    const password = document.getElementById("login_password").value;

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === "login_successful") {
        localStorage.setItem("username", username);
        window.location.href = "/index";
      } else if (data.status === "wrong_password") {
        alert("Wrong password.");
      } else if (data.status === "user_not_found") {
        alert("User not found. Please sign up first.");
      } else {
        alert("Login failed: " + data.status);
      }
    });
  });
}

// === GAME SCRIPT BELOW ===

// DOM Elements
const ronaldoImage = document.getElementById('ronaldo-image'); 
const totalClicksElement = document.getElementById('total-clicks'); 
const cpsElement = document.querySelector('.stats__number--cps'); 
const shopContainer = document.getElementById('shop-items'); 
const chatMessages = document.getElementById('chat-messages'); 
const resetButton = document.getElementById('reset-button'); 

let gameState = JSON.parse(localStorage.getItem('gameState')) || {
  totalClicks: 0,
  cps: 0,
  clickValue: 1,
  ownedItems: {},
  shopItems: [
    { name: 'Spammer', cost: 10, production: 1 },
    { name: 'Spam Bot', cost: 50, production: 5 },
    { name: 'Auto Clicker', cost: 100, production: 10 },
  ],
};

function saveGameState() {
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

function initializeShop() {
  if (!shopContainer) return; 
  shopContainer.innerHTML = ''; 
  gameState.shopItems.forEach((item, index) => {
    const shopItemDiv = document.createElement('div');
    shopItemDiv.classList.add('shopitem');
    shopItemDiv.innerHTML = `
      <div class="shopitem__title">${item.name}</div>
      <div class="shopitem__infocontainer">
        <div class="shopitem__info shopitem__info--cost">Cost: ${item.cost} Clicks</div>
        <div class="shopitem__info">+${item.production} CPS</div>
      </div>
      <button class="shopitem__buy" onclick="buyItem(${index})">Buy</button>
    `;
    shopContainer.appendChild(shopItemDiv);
    gameState.ownedItems[index] = gameState.ownedItems[index] || 0; 
  });
}

function buyItem(index) {
  const item = gameState.shopItems[index];
  if (gameState.totalClicks >= item.cost) {
    gameState.totalClicks -= item.cost;
    gameState.cps += item.production;
    item.cost = Math.ceil(item.cost * 1.2);
    gameState.ownedItems[index]++;
    updateStats();
    saveGameState();

    addChatMessage(`You purchased a ${item.name}!`);

    if (item.name === 'Spammer') {
      activateToolEffect();
    }
  } else {
    alert('Not enough Clicks!');
  }
}

function activateToolEffect() {
  ronaldoImage.classList.add('active');
  addChatMessage('Spammer is now active! Ronaldo is clicking for you.');
}

if (ronaldoImage) {
  ronaldoImage.addEventListener('click', () => {
    if (gameState.totalClicks >= 2000) return;
    gameState.totalClicks += gameState.clickValue;
    updateStats();
    showClickNotification();
    saveGameState();
  });
}

setInterval(() => {
  if (gameState.totalClicks >= 2000) return;
  gameState.totalClicks += gameState.cps;
  updateStats();
  saveGameState();
}, 1000);

function updateStats() {
  if (totalClicksElement) totalClicksElement.textContent = Math.floor(gameState.totalClicks);
  if (cpsElement) cpsElement.textContent = `CPS: ${gameState.cps}`;

  if (gameState.totalClicks >= 2000) {
    endGame();
  }
}

function buyItem(index) {
  const item = gameState.shopItems[index];
  if (gameState.totalClicks >= item.cost) {
    gameState.totalClicks -= item.cost;
    gameState.cps += item.production;
    item.cost = Math.ceil(item.cost * 1.2);
    gameState.ownedItems[index]++;
    updateStats();
    saveGameState();

    addChatMessage(`You purchased a ${item.name}!`);
    alert(`You bought: ${item.name}`); // <-- This line pops up a message

    if (item.name === 'Spammer') {
      activateToolEffect();
    }
  } else {
    alert('Not enough Clicks!');
  }
}

function endGame() {
  addChatMessage('Game Over! You have reached 2000 clicks.');

  // Send highscore to backend
  const username = localStorage.getItem("username");
  if (username) {
    fetch("/highscore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, score: gameState.totalClicks })
    })
    .then(res => res.json())
    .then(data => {
      console.log("Highscore update response:", data);
    });
  }

  setTimeout(() => {
    resetGame();
  }, 3000);
}

function resetGame() {
  gameState = {
    totalClicks: 0,
    cps: 0,
    clickValue: 1,
    ownedItems: {},
    shopItems: [
      { name: 'Spammer', cost: 10, production: 1 },
      { name: 'Spam Bot', cost: 50, production: 5 },
      { name: 'Auto Clicker', cost: 100, production: 10 },
    ],
  };
  saveGameState();
  updateStats();
  addChatMessage('Game has been reset!');
  ronaldoImage.classList.remove('active');
}

function showClickNotification() {
  if (!chatMessages) return;
  const notification = document.createElement('div');
  notification.classList.add('click-notification');
  notification.textContent = '+1 Click - Suiii';
  chatMessages.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function addChatMessage(message) {
  if (!chatMessages) return;
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

if (resetButton) {
  resetButton.addEventListener('click', () => {
    resetGame();
  });
}

initializeShop();
updateStats();