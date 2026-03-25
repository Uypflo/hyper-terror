// src/App.js

class Game {
    constructor() {
        this.players = [];
        this.gameObjects = [];
        this.lastTime = 0;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    update(deltaTime) {
        for (const player of this.players) {
            player.update(deltaTime);
            this.checkCollisions(player);
        }
    }

    render(ctx) {
        // Call render method for each game object
        for (const object of this.gameObjects) {
            object.render(ctx);
        }

        // Render players
        for (const player of this.players) {
            player.render(ctx);
        }
    }

    checkCollisions(player) {
        for (const other of this.players) {
            if (player !== other && this.detectCollision(player, other)) {
                console.log(`Collision detected between ${player.id} and ${other.id}`);
                // Handle collision response
                this.handleCollision(player, other);
            }
        }
    }

    detectCollision(playerA, playerB) {
        return playerA.x < playerB.x + playerB.width &&
               playerA.x + playerA.width > playerB.x &&
               playerA.y < playerB.y + playerB.height &&
               playerA.y + playerA.height > playerB.y;
    }

    handleCollision(playerA, playerB) {
        // Simple response: push players apart
        const overlapX = Math.min(playerA.x + playerA.width - playerB.x, playerB.x + playerB.width - playerA.x);
        const overlapY = Math.min(playerA.y + playerA.height - playerB.y, playerB.y + playerB.height - playerA.y);
        if (overlapX < overlapY) {
            if (playerA.x < playerB.x) {
                playerA.x -= overlapX;
            } else {
                playerA.x += overlapX;
            }
        } else {
            if (playerA.y < playerB.y) {
                playerA.y -= overlapY;
            } else {
                playerA.y += overlapY;
            }
        }
    }
}

// Example of a player class
class Player {
    constructor(id, x, y, width, height) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    update(deltaTime) {
        // Update player position, etc.
    }

    render(ctx) {
        // Render player on canvas
    }
}

const game = new Game();

// Example usage
const player1 = new Player(1, 50, 50, 30, 30);
const player2 = new Player(2, 70, 70, 30, 30);

game.addPlayer(player1);
game.addPlayer(player2);

export default Game;