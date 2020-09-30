const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

var i = 1;
// initialize players with image and strength
const initPlayers = (PLAYERS) => {
    let playerDetails = '';

    // Instead of forloop use Map method
    // Code here
    playerDetails = PLAYERS.map((player,i) => {
        console.log(i);
        return {
            name: player,
            image: "images/super-" + (i) + ".png",
            strength: getRandomStrength(),
            type: (i%2 == 0)?"hero":"villain"
        }
    });

    return playerDetails;
}

// getting random strength
const getRandomStrength = () => {
    return Math.floor(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let temp = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    

    temp = players.filter(player => player.type == type).map(player =>
    `<div class="player">
    <img src="${player.image}" alt=" ">
    <div class="name">${player.name}</div>
    <div class="strength">${player.strength}</div>
    </div>`).join();
    return temp;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}